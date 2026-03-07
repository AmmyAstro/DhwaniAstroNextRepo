"use client";
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { decryptData } from "../helper/cryptoHelper";
import SocketContext from "../context/socketContext";
import {
  sendRequestCall,
  callCode_Reset,
} from "../redux/reducer/Calling/callCompletSlice";
import { resetStatusCode } from "../redux/reducer/auth/authSlice";
import { resetCode } from "../redux/reducer/chat/sendRequestSlice";
import { AlertLoading } from "../common";

export default function WebCallComponent() {
  const dispatch = useDispatch();
  const router = useRouter();
  const socket = useContext(SocketContext);
  const searchParams = useSearchParams();

  const containerRef = useRef(null);
  const zpRef = useRef(null);
  const intervalRef = useRef(null);
  const chatParamsRef = useRef({});

  const [timeLeft, setTimeLeft] = useState(0);
  const [lowAlert, setLowAlert] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [chatParams, setChatParams] = useState({});
  const { chatCode } = useSelector((state) => state.call_completed);

  // Decrypt params
  useEffect(() => {
    const encryptedData = searchParams.get("data");
    if (!encryptedData) return;

    const params = decryptData(encryptedData) || {};
    setChatParams(params);
    if (params?.chattime) setTimeLeft(params.chattime);
  }, [searchParams]);

  useEffect(() => {
    chatParamsRef.current = chatParams;
  }, [chatParams]);

  // Complete chat logic
  const completeChat = useCallback(() => {
    const { roomId, astro_id, astro_price, is_promotional } =
      chatParamsRef.current || {};
    if (!roomId) return;

    socket.emit("compltedchat", { room_id: roomId, astro_id });
    setLoadingState(true);

    dispatch(
      sendRequestCall({
        sessionId: roomId,
        astro_amount: astro_price,
        expert_id: astro_id,
        is_promotional,
      })
    );
  }, [dispatch, socket]);

  // Timer setup
  const startTimer = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        if (prev === 20) setLowAlert(true);
        if (prev === 2) completeChat();
        return [prev - 1, clearInterval(timerRef.current)];
      });
    }, 1000);
  }, [completeChat]);

  useEffect(() => {
    if (chatParams.roomId && chatParams.chattime) startTimer();
    return () => clearInterval(intervalRef.current);
  }, [chatParams.roomId, chatParams.chattime, startTimer]);

  // Initialize Zego (lazy-loaded + chunk-named)
  useEffect(() => {
    if (!chatParams.roomId || !chatParams.astroname) return;

    let isMounted = true;
    const loadZego = async () => {
      try {
        const { ZegoUIKitPrebuilt } = await import(
          /* webpackChunkName: "zego-uikit-prebuilt" */
          "@zegocloud/zego-uikit-prebuilt"
        );

        if (!isMounted) return;

        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
        const userID = String(Math.floor(Math.random() * 10000));
        const userName = `${chatParams.astroname}${userID}`;

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          chatParams.roomId,
          userID,
          userName
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zpRef.current = zp;

        zp.joinRoom({
          container: containerRef.current,
          turnOnMicrophoneWhenJoining: true,
          turnOnCameraWhenJoining: false,
          showMyCameraToggleButton: false,
          showMyMicrophoneToggleButton: true,
          showAudioVideoSettingsButton: false,
          showScreenSharingButton: false,
          showTextChat: true,
          showUserList: true,
          showLeaveRoomButton: true,
          maxUsers: 2,
          layout: "Auto",
          showLayoutButton: true,
          showPreJoinView: false,
          scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
          onLeaveRoom: completeChat,
        });
      } catch (error) {
        console.error("Zego failed to load:", error);
      }
    };

    // defer to next frame for smoother load
    const timeout = setTimeout(loadZego, 100);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      if (zpRef.current) zpRef.current.destroy();
    };
  }, [chatParams, completeChat]);

  // Handle chat completion from socket
  useEffect(() => {
    socket.on("compltedchat", completeChat);
    return () => socket.off("compltedchat", completeChat);
  }, [socket, completeChat]);

  // Redux response handling
  useEffect(() => {
    if (chatCode !== 200) return;
    dispatch(callCode_Reset());
    dispatch(resetStatusCode());
    dispatch(resetCode());
    toast.success("Call Ended Successfully!");
    setLoadingState(false);
    if (zpRef.current) zpRef.current.destroy();
    router.push("/talk-to-astrologer");
  }, [chatCode, dispatch, router]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {lowAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold text-red-500">
              Your wallet balance is low.
            </h2>
            <p className="mt-2 text-gray-600">
              Please recharge your wallet to continue chatting with the
              astrologer.
            </p>
            <button aria-label="Close Low Balance Alert"
              className="mt-4 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={() => setLowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "8px",
          fontSize: "16px",
          zIndex: 10,
        }}
      >
        Calling Time: {formatTime(timeLeft)}
      </div>

      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
      <AlertLoading
        show={loadingState}
        title="Please wait, processing WebCall..."
      />
    </div>
  );
}
