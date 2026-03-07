"use client";
import React, { useEffect, useState, useContext } from "react";
import CustomInput from "@/components/Custom/CustomInput";
import CustomSelect from "@/components/Custom/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { CustomerRequest, AlertLoading, LocationSelector } from "@/app/common";
import toast from "react-hot-toast";
import { ChatRequestCard } from "@/app/ChatComponent";
import SocketContext from "@/app/context/socketContext";
import { useParams } from "next/navigation";
import { resetCode, sendChatRequest, } from "../../redux/reducer/chat/sendRequestSlice";
import { resetChatAlertData, setChatAlertLoading } from "../../redux/reducer/chat/ChatAlertSlice";
import { useRouter } from "next/navigation";
import { IntakeFromRequest } from "@/app/redux/reducer/auth/intakeStoreSlice";
import { fetchIntakeRequest } from "@/app/redux/reducer/auth/intakeSlice";
import { getIntakeDataRequest } from "@/app/redux/reducer/intake/getIntakeData";
import { RequestAstrologerDetail } from "@/app/redux/reducer/astrologer/AstrologerDetail";
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";

const CREATE_INTAKE = gql`
  mutation CreateIntake($input: IntakeInput!) {
    createIntake(input: $input) {
      id
    }
  }
`;



export default function RequestForm({ params }) {
  const [createIntake] = useMutation(CREATE_INTAKE);
  const { chatid } = useParams();
  const astro_id = chatid;

  const router = useRouter();

  const socket = useContext(SocketContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [occupation, setOccupation] = useState("Private Job");
  const [disabled, setDisabled] = useState(false);
  const [request, setRequest] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [alert, setAlert] = useState(false);
  const [astrologer, setAstrologer] = useState(null);
  const [place, setPlace] = useState("");

  const [user, setUser] = useState("");
  const [usergender, setGender] = useState("MALE");

  const [isClient, setIsClient] = useState(false);

  const dispatch = useDispatch();

  const [intake_Id, setInatkeId] = useState(null);
  const [chatsend, setChatSend] = useState("");


  const { userData } = useSelector((state) => state.getuserDetail);

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }

  }, [userData, dispatch]);



  const { data = [], loading } = useSelector((state) => state.intake);
  const intake_data = data?.intakedata;
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (!socket) return;
    dispatch(fetchIntakeRequest());
  }, [dispatch, socket]);
  const { astrologerloading, astrologerdata: astro } = useSelector((state) => state.astrologerdetail);
  useEffect(() => {
    if (!astro || astro.length === 0) {

      dispatch(RequestAstrologerDetail({ astro_id: parseInt(astro_id) }));
    }

  }, [dispatch, astro_id, astro]);


  useEffect(() => {
    if (astro) {
      setAstrologer(astro);
    }
  }, [astro]);

  const {
    loading: dataloading,
    chatData = [],
    chatStatusCode,
  } = useSelector((state) => state.send_request_chat);

  useEffect(() => {
    const intakesingledata = data?.intakedata?.[0] || null;


    setName(intakesingledata?.name || userData?.name);
    setPhone(intakesingledata?.mobile || userData?.phonenumber);
    setDob(intakesingledata?.dob || "");
    setTime(intakesingledata?.btime || "");
    setOccupation(intakesingledata?.occupation || "");
    setInatkeId(intakesingledata?.id);
  }, [data, userData]);

  const sendRequest = async () => {
    if (!name || !phone || !dob || !time || !place || !occupation || !usergender) {
      toast.error("Please enter valid inputs");
      return;
    }

    try {
      const response = await createIntake({
        variables: {
          input: {
            astrologerId: astro_id,
            name,
            mobile: phone,
            gender: usergender,
            birthDate: dob,
            birthTime: time,
            occupation,
            birthPlace: place,
            requestType: "chat",
          },
        },
      });

      console.log("Intake Saved:", response.data.createIntake.id);

      // THEN trigger chat request logic
      dispatch(
        sendChatRequest({
          expert_id: parseInt(astro_id),
          user_name: name,
          request_type: "chat",
          astro_charge: astrologer?.disc_chat_charge || 0,
          user_amount: userData?.balance_amount || 0,
          is_promotional: userData?.user_status,
        })
      );

    } catch (err) {
      toast.error(err.message);
    }
  };


  // card request



  const sendRequestcard = (intakeid) => {

    if (
      name == ""


    ) {
      toast.error("Please enter a valid Input");
    } else {

      setInatkeId(intakeid);
      setDisabled(true);
      setAlert(true);
      const expert_id = parseInt(astro_id);
      const user_name = name || "";
      const request_type = "chat";
      const astro_charge = astrologer?.disc_chat_charge || 0;
      const user_amount = userData?.balance_amount || 0;
      const is_promotional = userData?.user_status;
      dispatch(
        sendChatRequest({
          expert_id,
          user_name,
          request_type,
          astro_charge,
          user_amount,
          is_promotional
        })
      );
      dispatch(resetChatAlertData());

    }
  };
  // 


  useEffect(() => {
    if (chatStatusCode === 200) {
      const roomid = chatData.chatId;
      const requesttype = "chat";

      let intakedata;
      const intakeId = intake_data?.find((item) => item.id === intake_Id);
      if (chatsend === 1) {
        intakedata = {
          name,
          gender: usergender.toUpperCase(),
          dob,
          btime: time,
          occupation,
          birth_place: place,
          mobile: phone,
          chatid: roomid,
          request_type: requesttype,
        };
      } else {
        intakedata = {
          name: intakeId?.name || name || "Unknown",
          gender: intakeId?.gender || usergender || "",
          dob: intakeId?.dob || dob || "",
          btime: intakeId?.btime || time || "",
          occupation: intakeId?.occupation || occupation || "",
          birth_place: intakeId?.birth_place || place || "",
          mobile: phone,
          chatid: roomid,
          request_type: requesttype,
        };
      }

      dispatch(IntakeFromRequest({ intakedata }));

      setAlert(true);
      setRoomId(roomid);
      const chattimeInMin = chatData.chatTime;


      let messageData = {
        message: " sent a chat request!",
        phoneNumber: "***********",
        room_id: roomid,
        astro_id: astro_id || "",
        user_id: user?.id || "",
        is_promotional: true,
        astro_name: astrologer?.full_name || "",
        maximum_time: chattimeInMin || 0,
      };



      if (chatsend === 1) {

        dispatch(getIntakeDataRequest(intakedata));
        messageData = {
          ...messageData,
          userName: name || "Unknown",
          gender: usergender || "",
          dateOfBirth: dob || "",
          timeOfBirth: time || "",
          occupation: occupation || "",
          location: place || "",
        };
      } else {
        dispatch(getIntakeDataRequest(intakeId));
        messageData = {
          ...messageData,
          userName: intakeId?.name || name || "Unknown",
          gender: intakeId?.gender || usergender || "",
          dateOfBirth: intakeId?.dob || dob || "",
          timeOfBirth: intakeId?.btime || time || "",
          occupation: intakeId?.occupation || occupation || "",
          location: intakeId?.birth_place || place || "",
        };
      }

      socket.emit("chat_request", messageData);
      const astrlogerdata = {
        astro_id,
        status: 2,
      };

      socket.emit("astrologer_request", astrlogerdata);

      setTimeout(() => {
        dispatch(resetCode());
        dispatch(
          setChatAlertLoading({
            data: {
              astro_id,
              room_Id: roomid,
              user_id: user?.id || "",
              astro_name: astrologer?.full_name || "",
              astro_image: astrologer?.profile_image || "",
              chat_time: chatData.chatTime,
              experts_price: astrologer?.disc_chat_charge,
              intakeId: intake_Id
            },
          })
        );
        router.push("/");
        setAlert(false);
      }, 100);
    }
  }, [
    chatStatusCode,
    chatData,
    dispatch,
    name,
    usergender,
    dob,
    time,
    occupation,
    place,
    phone,
    astro_id,
    astrologer,
    user,
    router,
    socket,
    intake_Id,
    intake_data,
    chatsend
  ]);



  const gender = ["MALE", "FEMALE", "OTHER"];
  const occupation_list = [
    "Private Job",
    "Govt Job",
    "Own Business",
    "College Student",
    "None of the Above",
  ];

  const handleLocationSelect = (locationObj) => {
    setPlace(locationObj?.city || "");


  };

  return (
    <div className="w-full">
      {!request ? (
        <div className="flex items-start justify-center gap-5 px-10 my-10 ">
          <div className="w-full max-w-5xl overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
            <div className="bg-[#2e0854] py-4 px-6 rounded-t-2xl">
              <h2 className="text-xl font-semibold text-center text-white">
                Consultation Form
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3">
              <div className="flex flex-col">
                <CustomInput
                  label="Name"
                  placeholder="Enter Full Name"
                  className="w-full text-black border border-gray-500 focus:border-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center w-full gap-2 overflow-hidden rounded-md">
                  <span className="w-[30%] px-2 py-1 text-black bg-gray-100 border-b rounded-full">
                    🇮🇳 +91
                  </span>
                  <CustomInput
                    
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="w-full text-black border-b border-gray-500 focus:border-none"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </label>

                <CustomSelect
                  variant={"full"}
                  name="Gender"

                  value={"Male"}
                  // value={formData.day}
                  // onChange={handleChange}
                  options={[, ...gender]}
                  required
                  className="w-full text-black border border-gray-500 focus:border-none"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <CustomInput
                  label="Birth Date"
                  type="date"
                  className="w-full text-black border-b border-gray-500 focus:border-none"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <CustomInput
                  label="Birth Time"
                  type="time"
                  className="w-full text-black border-b border-gray-500 focus:border-none"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">
                  Occupation
                </label>

                <CustomSelect
                  variant={"full"}
                  name="Occupation"
                  value={occupation || "hellllo"}
                  // value={formData.day}
                  onChange={(e) => setOccupation(e.target.value)}
                  options={[, ...occupation_list]}
                  required
                  className="w-full text-black border border-gray-500 focus:border-none"
                />
              </div>

              <div className="flex flex-col md:col-span-3">


                <LocationSelector placeholder="Your birth place/location"
                  onSelect={handleLocationSelect} />
              </div>

              <div className="mt-4 text-center md:col-span-3">
                <button aria-label="Send Chat Request"
                  type="submit"
                  className="px-6 py-2 font-semibold text-black transition bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500"
                  onClick={sendRequest}
                  disabled={disabled}
                >
                  Send chat Request to  {astrologer?.full_name || ""}
                </button>


              </div>
            </div>
          </div>

          {isClient && intake_data && (
            <div className="flex flex-col text-black recent-container">
              <h2 className="recent-heading">Continue With Recent Profiles</h2>

              {intake_data.map((item, index) => (
                <CustomerRequest
                  key={item.id}
                  name={item?.name}
                  location={item?.birth_place}
                  dob={item?.dob}
                  time={item?.btime}
                  index={index}
                  onClick={() => sendRequestcard(item.id)}
                  disabled={disabled}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-[70%] place-self-center">
          <ChatRequestCard
            room_Id={roomId}
            astro_Name={astrologer?.full_name || ""}
            user_Id={user?.id}
            astroimage={astrologer?.profile_image || ""}
            astro_id={astrologer?.id || ""}
            chat_time={chatData?.chatTime}
            experts_price={astrologer?.disc_chat_charge}

          />
        </div>
      )}

      <AlertLoading show={dataloading} title="Please Wait..." />
      <AlertLoading show={astrologerloading} title="Fetch Astrologer..." />
    </div>
  );
}
