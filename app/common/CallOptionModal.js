"use client";

import { useState, useEffect, useRef, useContext, useCallback } from "react";
import ChooseMethod from "./ChooseMethod";
import AlertLoading from "./AlertLoading";
import { useRouter } from "next/navigation";
import SocketContext from "../context/socketContext";
import { encryptData } from "../helper/cryptoHelper";
import toast from "react-hot-toast";
import Image from "next/image";

export default function CallOptionModal({
  closeModal,
  onSelect,
  onSelectMethod,
  room_Id,
  time,
  astro_Name,
  astro_id,
  astro_price,
  is_promotional,
}) {



  const router = useRouter();
  const socket = useContext(SocketContext);

  const [selectedMethod, setSelectedMethod] = useState("");
  const [callMethod, setCallMethod] = useState(true);
  const [timeLeft, setTimeLeft] = useState(20);
  const [showCalling, setShowCalling] = useState(true);
  const [alert, setAlert] = useState(false);

  const timerRef = useRef(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);


  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          handlerPhoneCall();
          clearInterval(timerRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);


  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };


  const webcallredirect = useCallback(() => {
    if (!room_Id || !astro_id || !astro_Name || !astro_price || !time) return;

    const callParams = {
      roomId: room_Id,
      chattime: time,
      astroname: astro_Name,
      astro_id,
      astro_price,
      is_promotional,
    };

    try {
      const encrypted = encryptData(callParams);
      router.push(`/webcall?data=${encodeURIComponent(encrypted)}`);
    } catch (error) {
      toast.error("Something went wrong while preparing the call.");
    }
  }, [room_Id, astro_id, astro_Name, astro_price, time, is_promotional, router]);


  useEffect(() => {
    if (!socket) return;

    const handleCallStart = (data) => {
      stopTimer();
      if (data.roomid === room_Id) {
        setAlert(true);
        const leaveTimeout = setTimeout(() => {
          setAlert(false);
          webcallredirect();
        }, 2000);
       
      }
    };

    const handleCallRejected = (data) => {
      stopTimer();
      if (data.roomid === room_Id) {
        toast.error("WebCall Rejected by Astrologer");
        closeModal();
      }
    };

    socket.on("call_start_infomation", handleCallStart);
    socket.on("call_rejected", handleCallRejected);

    return () => {
      socket.off("call_start_infomation", handleCallStart);
      socket.off("call_rejected", handleCallRejected);
    };
  }, [socket, room_Id, stopTimer, webcallredirect, closeModal]);

  const handleSelect = (method) => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      setSelectedMethod(method);
      if (method === "Web Call") {
        onSelectMethod("webcall");
        setCallMethod(false);
      } else {
        onSelectMethod("call");
        setCallMethod(true);
          setShowCalling(false);
      }
    }, 1000);
  };


  const handlerPhoneCall = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      setShowCalling(false);
    }, 1000);
  };


  return (
    <div>
      {showCalling ? (
        <div className="inset-0 z-50 bg-opacity-50 rounded-lg flex justify-center items-center w-full h-[57vh] mt-10">
          <div className="bg-[#ffffff] rounded-2xl shadow-lg w-14/15 max-w-3xl p-6 h-[70%] relative">
            {selectedMethod ? (
              <div>
                <h3
                  className="mb-1 text-xl font-bold text-center text-purple-700"
                
                >
                  Web Call Connected ...
                </h3>
                <p className="text-xs text-center text-black">
                  Note: Astrologer Not Received Web Call Auto Connect Mobile
                  call..
                </p>
                <h6 className="mb-1 font-bold text-center text-purple-400 text-blue-50">
                  Wait Time: {formatTime(timeLeft)}
                </h6>
              </div>
            ) : (
              <h2 className="mb-1 text-xl font-bold text-center text-purple-700">
                Choose Call Method
              </h2>
            )}

            <div
              className={`grid justify-around ${
                selectedMethod ? "grid-cols-1.5" : "grid-cols-2"
              } gap-10 px-5 mt-5`}
            >
              <button aria-label="Select Web Call"
                onClick={() => handleSelect("Web Call")}
                className="flex flex-col items-center p-5 transition shadow-xl cursor-pointer hover:scale-102 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 hover:bg-purple-200 rounded-xl"
              >
                <Image
                  src="/prblm/video-conference.gif"
                  alt="Web Call"
                  className="w-16 h-16 mb-2 rounded-lg"
                  width={64}
                  height={64}
                />
                <span className="text-xl font-semibold text-purple-800">
                  Web Call
                </span>
              </button>

              {callMethod && (
                <button aria-label="Select Mobile Call"
                  onClick={() => handleSelect("Call")}
                  className="flex flex-col items-center p-5 transition shadow-md cursor-pointer hover:scale-102 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 hover:bg-purple-200 rounded-xl"
                >
                  <Image
                    src="/prblm/phone-contact.gif"
                    alt="Mobile Call"
                    className="w-16 h-16 mb-2 rounded-lg"
                    width={64}
                    height={64}
                  />
                  <span className="text-xl font-semibold text-purple-800">
                    Mobile Call
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ChooseMethod
          onSelect={onSelect}
          choose={setShowCalling}
          sessionId={room_Id}
          expert_id={astro_id}
          ispromotional={is_promotional}
          astro_amount={astro_price}
        />
      )}

      <AlertLoading show={alert} title="Please Wait" />
    </div>
  );
}
