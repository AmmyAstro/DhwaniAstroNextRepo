import { useState, useRef, useEffect, useContext } from "react";
import SocketContext from "../context/socketContext";
import toast from "react-hot-toast";
import Router, { useRouter } from "next/navigation";
import UserChat from "./UserChat";
import Image from "next/image";


// testing
const ChatRequestCard = ({
  room_Id,
  astro_Name,
  user_Id,
  astroimage,
  astro_id,
  chat_time,
  experts_price,
}) => {
  const route = useRouter();
  const socket = useContext(SocketContext);
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [showchat, setShowChat] = useState(false);
  const timerRef = useRef(null);
  useEffect(() => {
    if (!socket) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);

          socket.emit("autodisconnect", {
            room_id: room_Id,
            astroid: astro_id,
          });

          return 0; // timer hits 0
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [room_Id, astro_id, socket]);

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!socket) return;
    socket.on("chat_started_user", (data) => {
      if (data.roomid === room_Id) {
        // console.log("Chat started by astrologer");
        setIsChatStarted(true);
        setTimeLeft(60);
      }
    });
    socket.on("chat_rejected_astrologer", (data) => {
      stopTimer();
      if (data.roomid === room_Id) {
        toast.error("Your chat request rejected");
        setTimeout(() => {
          route.push("/homepage/chatAstro");
        }, 1000);
      }
    });
    socket.on("chat_reject_auto", (data) => {
      alert("Chat request rejected by astrologer due to timeout.", data);
      if (data.room_id === room_Id) {
        toast.error(
          "You didn’t accept the chat request in time. Please try again."
        );
        stopTimer();
        route.push("/homepage/chatAstro");
      }
    });

    socket.on("chat_rejected", (data) => {
      if (data.roomid === room_Id) {
        stopTimer();

        toast.error("The astrologer has rejected your chat request.");
        setTimeout(() => {
          route.push("/homepage/chatAstro");
        }, 1000);
      }
    });

    socket.on("user_conformation_chat", (data) => {
      if (data.roomid === room_Id) {
        // console.log("Chat started received:", data);
        stopTimer();

        setTimeout(() => {
          setShowChat(true);
        }, 500);
      }
    });

    return () => {
      stopTimer();
      socket.off("chat_started_user");
      socket.off("chat_rejected_astrologer");
      socket.off("chat_reject_auto");
      socket.off("chat_rejected");
      socket.off("user_conformation_chat");
    };
  }, [socket, room_Id, route]);

  const handleAccept = () => {
    socket.emit("chat_accepted_user", { room_id: room_Id }, (response) => {
      // console.log("Chat accepted response:", response);
    });
  };

  const handleReject = () => {
    socket.emit(
      "chat_rejected_user",
      { room_id: room_Id, astroid: astro_id },
      (res) => console.log("Rejected response:", res)
    );
  };

  const astrologerData = {
    name: astro_Name,
    subtitle: "Chat",
    WaitingTime: "1 min",
    message:
      "  Thank you! Kindly wait for the astrologer to accept the chat request.",
    avatar: astroimage,
  };

  return (
    <div className="flex items-center justify-center w-full px-10">
      {showchat ? (
        <UserChat
          room_Id={room_Id}
          astro_Name={astro_Name}
          astro_Image={astroimage}
          chattime={chat_time}
          user_Id={user_Id}
          astroid={astro_id}
          astro_price={experts_price}
        />
      ) : (
        <div className="h-[60vh] flex items-center justify-center">
          <div className="w-full max-w-[450px] border border-gray-200 bg-white rounded-xl shadow-lg p-6 space-y-6 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="relative">
                {astrologerData.avatar ? (
                  <Image
                    src={`/ds-img/${astroimage}`}
                    alt={astrologerData?.name || "Astrologer Image"}
                    width={64}
                    height={64}
                    className="object-cover rounded-full"
                    onError={(e) => {
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full">
                    <svg width={18} height={18} viewBox="0 0 640 640">
                      <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" />
                    </svg>
                  </div>
                )}
                <div className="absolute w-4 h-4 bg-green-500 border-2 border-white rounded-full -bottom-1 -right-1"></div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {astrologerData.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Type: {astrologerData.subtitle}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  Wait Time: {formatTime(timeLeft)}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600">{astrologerData.message}</p>

            {isChatStarted ? (
              <div className="flex space-x-3">
                <button
                  onClick={handleAccept}
                  aria-label="Accept chat request"
                  className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-medium text-white transition-all duration-200 transform bg-green-700 rounded-lg hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <svg width={18} height={18} viewBox="0 0 640 640">
                    <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                  </svg>
                  <span>Accept</span>
                </button>

                <button
                  onClick={handleReject}
                  aria-label="Reject chat request"
                  className="flex items-center justify-center flex-1 px-4 py-2 space-x-2 font-medium text-white transition-all duration-200 bg-red-400 rounded-lg hover:bg-gray-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                >
                  <svg width={18} height={18} viewBox="0 0 640 640">
                    <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                  </svg>{" "}
                  <span>Decline</span>
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRequestCard;
