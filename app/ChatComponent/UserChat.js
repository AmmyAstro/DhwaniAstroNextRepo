import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";
import SocketContext from "../context/socketContext";
import { AlertLoading } from "../common";
import Script from "next/script";
import { useDispatch, useSelector } from "react-redux";
import "react-medium-image-zoom/dist/styles.css";
import { sendPaymentDetail, resetStatusCode, } from "../redux/reducer/payment/rechargeSlice";

import toast from "react-hot-toast";
import CustomButton from "../../components/Custom/CustomButton";
import Zoom from "react-medium-image-zoom";
import { sendTempChatRequest, StatusCodereset, } from "../redux/reducer/chat/TempSlice";
import { useRouter } from "next/navigation";
import { sendRequestChat, chatCode_Reset, } from "../redux/reducer/chat/chatCompletSlice";
import { resetChatAlertData, resetOpenCode } from "../redux/reducer/chat/ChatAlertSlice";
import { getUserFetch } from "../redux/reducer/auth/userSlice";
import imageCompression from "browser-image-compression";
import { resetCode } from "../redux/reducer/chat/sendRequestSlice";
import { setIdRequest } from "../redux/reducer/chat/idSlice";
import { hideChatButton } from "../redux/reducer/chat/chatButton";
import Image from "next/image";
import { createReviewRequest, resetReviewState } from "../redux/reducer/auth/reviewSlice";
import dynamic from "next/dynamic";




const UserChat = ({
  room_Id,
  astro_Name,
  astro_Image,
  chattime,
  user_Id,
  astroid,
  astro_price,
  userIntakeId
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { statusCode,loading:rechargeloading } = useSelector((state) => state.recharge_payment);

  const { responseData, chatCode, loading: chatloading } = useSelector(
    (state) => state.chat_completed
  );


  const { status_Code, dueTime, loading: tempLoading } = useSelector((state) => state.temp_chat);

  const [openEllipsisIndex, setOpenEllipsisIndex] = useState(null);


  const hasToasted = useRef(false);
  const { userData: userChatData } = useSelector((state) => state.getuserDetail);
  const { data = [] } = useSelector((state) => state.intake);
  const intake_data = data?.intakedata;
  const intakerecord = intake_data.find(item => item.id === userIntakeId);

  const { data: getintake } = useSelector((state) => state.getintakedata);
  const { loading: reviewloading, success, error } = useSelector((state) => state.review);

  useEffect(() => {



  }, [intakerecord])
  useEffect(() => {

  }, [getintake])

  const socket = useContext(SocketContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "Astrologer",
      message:
        "Hey there! Welcome to Dhwani Astro 😊 Our consultant is just taking a moment to check your details. Go ahead and type your question while you wait!",
      image: null,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [replyTo, setReplyTo] = useState(null);

  const [likedMessages, setLikedMessages] = useState({});
  const [deleteMessage, setDeleteMessage] = useState({});

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [leaveMessage, setLeaveMessage] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [typingStatus, setTypingStatus] = useState("");

  const [review, setReview] = useState(false);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [reviewmsg, setReviewmsg] = useState(false);
  const [hide, setHide] = useState(false);

  const [completedChat, setCompletedChat] = useState(false);
  const messageInputRef = useRef(null);

  const messageEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  const [like, setLike] = useState([]);
  const [delete_msg, setDelete_Msg] = useState([]);



  const roomId = room_Id;
  const astroName = astro_Name;
  const astroImage = astro_Image;
  const time = chattime;
  const userId = user_Id;
  const astro_id = astroid;

  const [user, setUserData] = useState("");
  const intervalRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const initialTime = time || 0;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [amount, setAmount] = useState(0);
  const [lowalert, setLowAlert] = useState(false);

  // time

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const chatOpenPopup = useCallback(() => {
    setLowAlert(true);
  }, []);






  //   end


  useEffect(() => {
    if (userChatData) {
      setUserData(userChatData);
    }
  }, [userChatData]);

  useEffect(() => {
    if (!socket) {

      return;
    }

    if (socket.connected) {
      socket.emit("joinChat", {
        username: "customer",
        room_id: roomId,
        joinpersonid: userId,
      });
    } else {
      socket.on("connect", () => {

      });
    }

    socket.on("leave_chat", (data) => {
      if (data.roomId === roomId) {
        setLeaveMessage("This chat has been Left");
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          router.push("/chat-with-astrologer");
        }, 3000);
      }
    });

    socket.on("complted_chat", async (data) => {
      if (data.roomId === roomId) {
        const sessionId = roomId;
        const expert_id = astro_id;
        const astro_amount = astro_price;
        const is_promotional = parseInt(userChatData?.user_status);
        dispatch(sendRequestChat({ sessionId, astro_amount, expert_id, is_promotional }));


      }
    });

    socket.on("receive_message", (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,

        {
          sender: data.sender,
          message: data.message,
          time: data.time,
          image: data.image,
          replyTo: data.replyTo || null,
        },
      ]);
    });


    socket.on('receive_like_message', (data) => {


      setLikedMessages(prev => {
        const id = data?.likemessage;
        if (!id) return prev;
        if (prev[id] === data.isLiked) {

          return prev;
        }


        return {
          ...prev,
          [id]: data.isLiked
        };
      });
    });



    socket.on('receive_delete_message', (data) => {
      console.log("SasaS", data);
      setDeleteMessage(prev => ({
        ...prev,
        [data?.deletemessge]: data?.deletemessge
      }));

    })

    socket.on("typing", (data) => {
      setTypingStatus(data.typing ? `${data.user_name} is typing...` : "");
    });

    return () => {
      socket.off("receive_message");
      socket.off("leave_chat");
      socket.off("typing");
      socket.off("complted_chat");
      socket.off("receive_like_message");
      socket.off("receive_delete_message");
    };
  }, [roomId, astro_price, astro_id, dispatch, router, socket, userChatData, userId]);

  useEffect(() => {
    if (chatCode === 200) {


      setReview(true);
      setHide(true);
      dispatch(chatCode_Reset());

      // dispatch(resetOpenCode());

      dispatch(resetStatusCode());
      dispatch(getUserFetch());
      dispatch(resetChatAlertData());
      dispatch(setIdRequest(astroid));
      dispatch(hideChatButton());

      toast.success("Chat End successfully!");


    }
  }, [chatCode, dispatch, router, astroid]);


  useEffect(() => {
    if (success === true) {
      dispatch(resetOpenCode());
      setReview(false);
      dispatch(resetReviewState());
      toast.success("Your FeedBack Has Been Submitted! Thank you!");
    }
  }, [success, dispatch]);


  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    socket.emit("typing", {
      room_id: roomId,
      typing: e.target.value.length > 0,
      user_name: "User",
    });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("typing", {
        room_id: roomId,
        typing: false,
        user_name: "User",
      });
    }, 2000);
  };

  useEffect(() => {
    if (statusCode === 200) {
      const chat_id = room_Id;
      const astro_id = astroid;
      const chat_time = timeLeft || 0;
      const full_chat_time = parseInt(time, 10) * 60 || 0;
      const payment_amount = amount || 0;

      dispatch(
        sendTempChatRequest({
          chat_id,
          astro_id,
          chat_time,
          astro_price,
          full_chat_time,
          payment_amount,
        })
      );



      setLoading(false);
    }
  }, [statusCode, astro_price, room_Id, astroid, amount, dispatch, time, timeLeft]);

  const endChat = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmEndChat = useCallback(
    (confirm) => {
      if (confirm) {
        socket.emit(
          "complted_chat",
          { room_id: roomId, astroId: astro_id, userId: userId },
          (response) => {

            if (response.status !== "leave") {
              alert("Failed to end the chat. Please try again.");
            }
          }
        );
      }

      setShowConfirmModal(false);
    },
    [socket, roomId, astro_id, userId, setShowConfirmModal]


  );



  const userChatDataRef = useRef(userChatData);
  useEffect(() => {
    userChatDataRef.current = userChatData;
  }, [userChatData]);


  const startTimer = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          socket.emit(
            "complted_chat",
            { room_id: roomId, astroId: astro_id, userId: userId },
            (response) => {
              if (response.status !== "leave") {
                alert("Failed to end the chat. Please try again.");
              }
            }
          );

          return 0;
        }

        const userStatus = userChatDataRef.current?.user_status;

        switch (userStatus) {
          case 0:
            if (prevTime === 10) chatOpenPopup();
            break;
          case 1:
          case 2:
            if (prevTime === 90 || prevTime === 60) chatOpenPopup();
            break;
          default:
            break;
        }

        return prevTime - 1;
      });
    }, 1000);
  }, [chatOpenPopup, roomId, astro_id, userId, socket]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);



  const handleReply = (msg) => {
    // console.log("check", msg);

    setReplyTo({
      sender: msg.sender,
      message: msg?.message,

      image: msg.image || null,
    });
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  };



  const applyHeart = (id) => {
    setOpenEllipsisIndex(false);

    setLikedMessages(prev => {
      const newState = !prev[id];

      socket.emit("like_message", {
        message_id: id,
        isLiked: newState,
        room_id: roomId,
      });

      return {
        ...prev,
        [id]: newState
      };
    });

    messageInputRef.current?.focus();
  };



  const handleDelete = (id) => {
    setOpenEllipsisIndex(false);
    setDeleteMessage(prev => {
      const del_id = !prev[id];
      socket.emit("delete_message", {
        message_id: id,
        room_id: roomId,
      })
      return {
        ...prev,
        [id]: del_id
      };
    })



    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }

  }




  const lowBalance = () => {
    setLowAlert(false);
    startTimer();
  };

  const stopTime = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = null;
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startTimer]);

  const customer_recharge_complted = useCallback(() => {
    socket.emit(
      "customer_recharge_complted",
      { room_id: roomId, due_time: dueTime },
      (response) => { }
    );
  }, [roomId, dueTime, socket]);







  useEffect(() => {

    if (status_Code === 201 && !hasToasted.current) {
      startTimer();
      setLoading(false);
      setTimeLeft(dueTime);

      customer_recharge_complted();

      dispatch(resetStatusCode());
      dispatch(StatusCodereset());
      dispatch(resetCode());

      toast.success("Payment Add successfully! Enjoy Chat ");
      hasToasted.current = true;

    }
  }, [status_Code, customer_recharge_complted, startTimer, dispatch, dueTime]);

  useEffect(() => {
    if (status_Code !== 201) {
      hasToasted.current = false;
    }
  }, [status_Code]);




  const handleSubmitReview = () => {
    const payload = {
      astro_id: parseInt(astro_id),
      type: "chat",
      review_id: String(roomId),
      star: rating || 0,
      comment: reviewText || "",
      user_name: intakerecord?.name || "",
      astro_name: astroName || ""
    }
    dispatch(createReviewRequest(payload));


  }


  const closereview = () => {
    setReview(false);
    dispatch(resetOpenCode());
    dispatch(resetReviewState());
    toast.success("Chat End successfully!");

    router.push("/chat-with-astrologer");
  };

  const sendMessage = () => {
    if (message.trim() !== "" || imageFile) {
      const sender_id = userId;
      const received_id = astro_id;
      const messageToSend = message;
      let imageToSend = null;

      const handleSend = (imageBase64 = null) => {
        socket.emit("send_message", {
          sender_id,
          room_id: roomId,
          received_id: parseInt(received_id),
          message: messageToSend,
          sender: "user",
          image: imageBase64,
          replyTo: replyTo
            ? {
              sender: replyTo.sender,
              message: replyTo.message,
              image: replyTo.image || null,
            }
            : null,


        });

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "user",
            message: messageToSend,
            time: new Date().toLocaleTimeString(),
            image: imageBase64,
            replyTo: replyTo
              ? {
                sender: replyTo.sender,
                message: replyTo.message,
                image: replyTo.image || null,
              }
              : null,
          },
        ]);

        setMessage("");
        setImageFile(null);
        setImagePreview(null);
        setReplyTo(null);

      };

      if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageToSend = reader.result;
          handleSend(imageToSend);
        };
        reader.readAsDataURL(imageFile);
      } else {
        handleSend();
      }
    }
  };




  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select an image only!');
      return;
    }

    const maxAllowedSizeMB = 1;
    const maxAllowedSizeBytes = maxAllowedSizeMB * 1024 * 1024;
    if (file.size > maxAllowedSizeBytes) {
      alert(`Image size exceeds ${maxAllowedSizeMB} MB. Please choose a smaller image.`);
      return;
    }

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1080,
      useWebWorker: true,
    };

    try {
      const resizedImageBlob = await imageCompression(file, options);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        if (messageInputRef.current) {
          messageInputRef.current.focus();
        }
      };
      reader.readAsDataURL(resizedImageBlob);
      setImageFile(resizedImageBlob);
    } catch (error) {
      console.error('Error resizing image:', error);
    }
  };




  // payment user

  const customer_recharge = () => {
    socket.emit("customer_recharge", { room_id: roomId }, (response) => { });
  };






  async function handleCheckout(amount) {
    try {
      setLoading(true);
      stopTime();
      setAmount(amount);
      customer_recharge();
      const res = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount }),
      });

      const order = await res.json();

      if (order.error) {
        alert("Error creating order");
        setLoading(false);

        return;
      }
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Dhwani Astro LLp",
        description: "Recharge Payment",
        order_id: order.id,
        handler: async function (response) {
          setLoading(true);

          const res = await fetch("/api/verifypayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          const order = await res.json();

          if (order.success) {
            const userId = user?.id;
            const paymentId = order.payment_id;
            const totalamount = amount;
            const method = order.paymentmethod;
                  setLoading(false);

            dispatch(
              sendPaymentDetail({ userId, paymentId, totalamount, method })
            );
          } else {
            alert(order);
          }
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#fff49e",
        },
      };



      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      alert("Error processing payment: " + error.message);
    } finally {
    }
  }

  const isLoading = chatloading || tempLoading || reviewloading || loading || rechargeloading;

let loadingMessage = "";
if (chatloading) loadingMessage = "Loading chat...";
else if (tempLoading) loadingMessage = "Please Wait...";
else if (reviewloading) loadingMessage = "Loading review...";
else if (loading) loadingMessage = "Loading...";
else if (rechargeloading) loadingMessage = "Processing payment...";





  return (
    <div className="flex items-center justify-center h-full w-full ">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive" />

      <div className=" w-full bg-white shadow-lg rounded-lg md:p-4 flex flex-col  h-full">

        <div className="flex flex-col">
          <div className="flex justify-between items-center p-2 md:px-4 px-2 bg-[#2f1254] rounded-lg">
            <div className="flex items-center gap-2 md:gap-4">
              <Image
                src={`/ds-img/${astroImage}`}
                alt="Logo"
                className="h-auto md:w-10 w-7"
                width={50}
                height={50} />
              <div className="flex flex-col text-sm text-white">
                <span className="md:text-[14px] text-[12px] font-semibold">
                  {astroName}
                </span>

                <span className="text-yellow-400 text-[10px]">
                  {typingStatus || "Online"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 time-end">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 font-semibold text-[10px]">
                  Time :
                </span>

                {hide ? (
                  <span className="border border-yellow-400 text-yellow-400 rounded-md px-2 py-1 text-[10px]">
                    Stop
                  </span>
                ) : (
                  <span className="border border-yellow-400 text-yellow-400 rounded-md px-2 py-1 text-[10px]">
                    {formatTime(timeLeft)} Sec
                  </span>
                )}
              </div>
              <button aria-label="End Chat"
                className="px-3 py-1 text-xs font-semibold text-black bg-yellow-400 border border-red-500 rounded-lg"
                onClick={endChat}>
                End
              </button>
            </div>
          </div>

          {(userChatData?.user_status === 1 || userChatData?.user_status === 2) && (
            <div className="flex items-center text-black justify-between w-full bg-linear-to-r from-yellow-100 to-yellow-200 rounded-b-lg px-10 py-2">
              <div className="flex flex-col gap">
                <span className="text-[12px] text-red-500 font-semibold">
                  Your balance is running low (under 5 mins). Recharge quickly?
                </span>
                <span className="text-[11px] text-black font-light">
                  <b>Note:</b> Majority of users recharge with at least 10 minutes.
                </span>
              </div>
              <div className="flex justify-center gap-3 items-center">
                <CustomButton aria-label="Recharge ₹50" variant="redc" onClick={() => handleCheckout(50)}>₹ 50</CustomButton>
                <CustomButton aria-label="Recharge ₹100" variant="redc" onClick={() => handleCheckout(100)}>₹ 100</CustomButton>
                <CustomButton aria-label="Recharge ₹200" variant="redc" onClick={() => handleCheckout(200)}>₹ 200</CustomButton>
                <CustomButton aria-label="Recharge ₹500" variant="redc" onClick={() => handleCheckout(500)}>₹ 500</CustomButton>
              </div>
            </div>
          )}

        </div>

        {/* Header */}

        {/* Chat Messages */}
        <div className="relative grow">
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full h-full bg-center bg-cover opacity-50"
              style={{ backgroundImage: "url('../bg-dsw.webp')" }}
            ></div>
          </div>

          <div className="relative p-2 space-y-2 overflow-y-scroll h-[60vh]">
            <div className="flex flex-col gap-2 msgs-boxs">

              {getintake && Object.keys(getintake).length > 0 && (
                <div className="flex flex-col self-end bg-purple-200 rounded-lg px-3 py-2 text-black md:text-xs text-[10px] w-fit gap-1">
                  <div className="flex flex-col gap-1 msgs-det">
                    <span className="flex items-center gap-2">
                      <span>Name :</span>
                      <span>{getintake?.name || ""}</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <span>Gender :</span>
                      <span>{getintake?.gender || ""}</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <span>B-time :</span>
                      <span>{getintake?.btime || ""}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span>Place :</span>
                      <span>{getintake?.birth_place || ""}</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <span>Dob :</span>
                      <span>{getintake?.dob || ""}</span>
                    </span>

                    <span className="flex items-center gap-2">
                      <span>Occupation :</span>
                      <span>{getintake?.occupation || ""}</span>
                    </span>
                  </div>
                </div>
              )}




              {messages?.map((msg, index) => (


                <div
                  key={index}
                  className={`group relative msg-reply ms-7 flex flex-col w-[55%] max-w-fit 
                  ${msg.sender === "user"
                      ? "self-end bg-purple-200"
                      : "self-start bg-yellow-100"
                    } 
                  rounded-lg px-3 py-2 text-black md:text-xs text-[10px]  gap-0`}
                  onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} >

                  {msg?.replyTo && (
                    <div className="reply-context text-xs text-gray-500  flex items-center gap-2">
                      <span>Reply to {msg?.replyTo?.sender}: </span>
                      {msg?.replyTo?.image && (
                        <Image
                          width={30}
                          height={30}
                          unoptimized
                          src={msg?.replyTo?.image || ""}
                          alt="uploaded"
                          className="object-cover w-10 h-10 rounded-lg cursor-zoom-in" />
                      )}
                      {msg?.replyTo?.message && (
                        <span className="font-semibold">
                          {msg?.replyTo?.message?.length > 30
                            ? msg?.replyTo?.message.slice(0, 30) + "..."
                            : msg?.replyTo?.message}
                        </span>
                      )}
                    </div>
                  )}


                  <div className="relative">

                    {hoveredIndex === index && index > 1 && (
                      <button
                        onClick={() =>
                          setOpenEllipsisIndex(openEllipsisIndex === index ? null : index)
                        }
                        className="absolute -top-2 -right-1 cursor-pointer">
                        <span className="relative text-black text-base font-bold">
                       <svg width={18} height={18} viewBox="0 0 640 640"><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>
                        </span>
                      </button>
                    )}

                    {openEllipsisIndex === index && (
                      <div className="absolute -top-10 right-0 bg-white shadow-lg rounded-lg p-2 flex gap-3 z-50 elip-opt">
                        <button onClick={() => applyHeart(index)} className="cursor-pointer">
                         <svg width={18} height={18} viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
                        </button>
                        <button onClick={() => handleReply(msg)} className="cursor-pointer">
                        <svg width={18} height={18} viewBox="0 0 640 640"><path d="M364.2 82.4C376.2 87.4 384 99 384 112L384 192L432 192C529.2 192 608 270.8 608 368C608 481.3 526.5 531.9 507.8 542.1C505.3 543.5 502.5 544 499.7 544C488.8 544 480 535.1 480 524.3C480 516.8 484.3 509.9 489.8 504.8C499.2 496 512 478.4 512 448.1C512 395.1 469 352.1 416 352.1L384 352.1L384 432.1C384 445 376.2 456.7 364.2 461.7C352.2 466.7 338.5 463.9 329.3 454.8L169.3 294.8C156.8 282.3 156.8 262 169.3 249.5L329.3 89.5C338.5 80.3 352.2 77.6 364.2 82.6zM237.6 87.1C247 96.5 247 111.7 237.6 121L86.6 272L237.6 422.9C247 432.3 247 447.5 237.6 456.8C228.2 466.1 213 466.2 203.7 456.8L42 295.2C35.6 289.2 32 280.8 32 272C32 263.2 35.6 254.8 42 248.8L203.6 87.1C213 77.7 228.2 77.7 237.5 87.1z"/></svg>
                        </button>
                        {
                          deleteMessage[index] ?
                            <></>
                            :
                            <button onClick={() => handleDelete(index)} className="cursor-pointer">
                        <svg width={18} height={18} viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                            </button>

                        }

                      </div>
                    )}

                  </div>





                  {
                    deleteMessage[index] ?


                      deleteMessage[index] &&

                      <div className="flex flex-col gap-1 text-gray-400 msgs-det">
                        <span>This message was deleted!.. </span>

                      </div>

                      :

                      <div className="flex flex-col gap-1 msgs-det">
                        <span>{msg?.message} </span>
                        <div className="flex flex-col gap-1 msgs-det">
                          {msg?.image && (
                            <Zoom>
                              <Image
                                width={100}
                                height={100}
                                unoptimized
                                src={msg?.image}
                                alt="uploaded"
                                className="object-cover w-32 h-32 rounded-lg cursor-zoom-in" />
                            </Zoom>
                          )}
                        </div>

                        {likedMessages[index] && (
                          <span className="absolute -bottom-1 right-1 text-[10px] text-red-500">
                         <svg width={18} height={18} viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
                          </span>
                        )}

                      </div>

                  }










                  <div className="flex items-center self-end gap-1 time-check">
                    <span className="text-gray-500 text-[10px]">
                      {msg.time}
                    </span>
                    <span className="text-gray-500 text-[10px]">
                    <svg width={18} height={18} viewBox="0 0 640 640"><path d="M377.9 130.8C388.3 116.5 385.1 96.5 370.8 86.1C356.5 75.7 336.5 78.9 326.1 93.2L220.1 238.9L182.6 201.4C170.1 188.9 149.8 188.9 137.3 201.4C124.8 213.9 124.8 234.2 137.3 246.7L201.3 310.7C207.9 317.3 217.1 320.7 226.4 320C235.7 319.3 244.3 314.5 249.8 306.9L377.8 130.9zM505.9 266.8C516.3 252.5 513.1 232.5 498.8 222.1C484.5 211.7 464.5 214.9 454.1 229.2L284.1 462.9L214.6 393.4C202.1 380.9 181.8 380.9 169.3 393.4C156.8 405.9 156.8 426.2 169.3 438.7L265.3 534.7C271.9 541.3 281.1 544.7 290.4 544C299.7 543.3 308.3 538.5 313.8 530.9L505.8 266.9z"/></svg>
                    </span>
                  </div>



                </div>
              ))}
              <div ref={messageEndRef} />
            </div>
          </div>
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="image-preview-container  ">
            <Image
              width={100}
              height={100}
              unoptimized
              src={imagePreview}
              alt="Image preview"
              className="image-preview" />

            <button aria-label="Remove Image Preview"
              onClick={() => { setImagePreview(null); setImageFile(null); }} className="remove-image-preview" >
              ✖
            </button>
          </div>
        )}

        {/* Message Input */}
        <div className="flex gap-2 p-2 items-center ">
          <div className="flex items-center w-full gap-2 border justify-between rounded-2xl inp-attach ps-2 pe-3">
            <div className="flex flex-col py-1 w-full">
              {replyTo && (
                <div className="flex flex-col p-1 bg-blue-100 border-l-4 w-fit border-blue-500 text-sm rounded">
                  <div className="flex justify-between items-center w-fit">
                    <span className="text-gray-800 text-[11px] flex items-center">
                      <strong>
                        Reply to {replyTo?.sender}:&nbsp;&nbsp;
                        {replyTo?.message && replyTo?.message.length > 30
                          ? replyTo?.message.slice(0, 30) + "..."
                          : replyTo?.message}
                      </strong>
                      {replyTo?.image && (
                        <span className="ml-2">
                          <Zoom>
                            <Image
                              width={30}
                              height={30}
                              unoptimized
                              src={replyTo?.image}
                              alt="reply-img"
                              className="inline-block object-cover w-8 h-8 rounded-md border border-gray-300 align-middle"
                            />
                          </Zoom>
                        </span>
                      )}
                    </span>
                    <button
                      onClick={() => setReplyTo(null)}
                      className="text-red-500 text-xs ml-2"
                    >
                      ✖
                    </button>
                  </div>
                </div>
              )}


              <input
                type="text"
                ref={messageInputRef}
                value={message}
                onChange={handleMessageChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
                className="grow text-sm break-all px-2 py-1 text-black bg-white border-0 rounded-full outline-none focus:outline-none focus:ring-0 placeholder:text-gray-400 md:py-1 " />
            </div>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              id="image-upload" />
            <label htmlFor="image-upload" className="cursor-pointer">
              {/* <FaUpload /> */}
            <svg width={18} height={18} viewBox="0 0 640 640"><path d="M288.6 76.8C344.8 20.6 436 20.6 492.2 76.8C548.4 133 548.4 224.2 492.2 280.4L328.2 444.4C293.8 478.8 238.1 478.8 203.7 444.4C169.3 410 169.3 354.3 203.7 319.9L356.5 167.3C369 154.8 389.3 154.8 401.8 167.3C414.3 179.8 414.3 200.1 401.8 212.6L249 365.3C239.6 374.7 239.6 389.9 249 399.2C258.4 408.5 273.6 408.6 282.9 399.2L446.9 235.2C478.1 204 478.1 153.3 446.9 122.1C415.7 90.9 365 90.9 333.8 122.1L169.8 286.1C116.7 339.2 116.7 425.3 169.8 478.4C222.9 531.5 309 531.5 362.1 478.4L492.3 348.3C504.8 335.8 525.1 335.8 537.6 348.3C550.1 360.8 550.1 381.1 537.6 393.6L407.4 523.6C329.3 601.7 202.7 601.7 124.6 523.6C46.5 445.5 46.5 318.9 124.6 240.8L288.6 76.8z"/></svg>
            </label>
          </div>
          <button aria-label="Send Message"
            onClick={sendMessage}
            className="px-6 py-2 text-xs text-white bg-pink-500 rounded-full bold-full">
            Send
          </button>
        </div>

        {lowalert && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-red-500">
                Your wallet balance is low.
              </h2>
              <p className="mt-2 text-gray-600">
                Please recharge your wallet to continue chatting with the
                astrologer.
              </p>

              {
                userChatData?.user_status === 0 &&
                <div className="flex justify-center gap-3 items-center mt-4">
                  <button aria-label="Acknowledge Low Balance" className="px-4 py-2 text-white bg-green-500 rounded-md" onClick={lowBalance}>
                    Ok
                  </button>
                </div>
              }

              {
                (userChatData?.user_status === 1 || userChatData?.user_status === 2) &&
                <div className="flex justify-center gap-4 mt-4">
                  <button aria-label="Acknowledge Low Balance"
                    className="px-4 py-2 text-white bg-green-500 rounded-md"
                    onClick={lowBalance}
                  >
                    Ok
                  </button>
                </div>
              }
            </div>
          </div>
        )}

        {/* End Chat Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#00000060] bg-opacity-50">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-sm text-center text-black">
                Are you sure you want to end the chat?
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button aria-label="Confirm End Chat"
                  className="px-4 py-2 text-white bg-green-500 rounded-md"
                  onClick={() => handleConfirmEndChat(true)}
                >
                  Yes
                </button>
                <button aria-label="Cancel End Chat"
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                  onClick={() => handleConfirmEndChat(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Popup for leave_chat */}

        {completedChat && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-red-500">
                Chat Completed!{" "}
              </h2>
              <p className="mt-2 text-gray-600">
                Your session ended. Please recharge your wallet to reconnect,
                Thank you!
              </p>
            </div>
          </div>
        )}

        {reviewmsg && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 text-center bg-white rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-red-500">
                Chat Review!{" "}
              </h2>
              <p className="mt-2 text-gray-600">
                Your FeedBack Has Been Submitted! Thank you!
              </p>
            </div>
          </div>
        )}

        {review && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000a3] backdrop-blur-sm bg-opacity-50">
            <div className="relative w-full max-w-md p-6 text-center bg-white rounded-lg shadow-lg">

              <button aria-label="Close Review"
                onClick={closereview}
                className="absolute text-xl font-bold text-gray-500 top-2 right-2 hover:text-red-500"
              >
                &times;
              </button>

              <h2 className="mb-4 text-2xl font-bold text-red-500">
                {astroName} Review
              </h2>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-2xl cursor-pointer ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <textarea
                className="w-full p-2 mb-4 text-gray-800 border border-gray-300 rounded-md resize-none placeholder:text-gray-600 focus:outline-none focus:ring-2 "
                rows="3"
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)} />

              <div className="flex flex-col gap-3 mt-4" onClick={handleSubmitReview}>
                <button aria-label="Submit Review" className="px-4 py-2 font-semibold text-white bg-pink-500 rounded hover:bg-pink-500">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}
      </div>



      <AlertLoading show={isLoading} title={loadingMessage} />


    </div>
  );
};

export default UserChat;
