"use client";
import React, { useEffect, useState, useContext } from "react";
import CustomInput from "@/components/Custom/CustomInput";
import CustomSelect from "@/components/Custom/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { fetchIntakeRequest } from "@/app/redux/reducer/auth/intakeSlice";
import { CustomerRequest, AlertLoading, LocationSelector } from "@/app/common";
import toast from "react-hot-toast";

import SocketContext from "@/app/context/socketContext";
import { fetchAstrologers } from "@/app/redux/reducer/astrologer/astrlogerSlice";
import { useParams, useRouter } from "next/navigation";

import CallRequestCard from "../../CallComponent/CallRequestCard";

import { CallOptionModal } from "../../common";
import { IntakeFromRequest } from "@/app/redux/reducer/auth/intakeStoreSlice";
import { RequestAstrologerDetail } from "@/app/redux/reducer/astrologer/AstrologerDetail";
import { sendCallRequest, resetCallCode } from "@/app/redux/reducer/call/sendCallRequestSlice";




export default function RequestForm({ params }) {
  const { callid } = useParams();
  const astro_id = callid;

  const router = useRouter();
  const socket = useContext(SocketContext);

  const dispatch = useDispatch();

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [occupation, setOccupation] = useState("");
  const [place, setPlace] = useState("");
  const [usergender, setGender] = useState("Male");

  // UI State
  const [disabled, setDisabled] = useState(false);
  const [request, setRequest] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [alert, setAlert] = useState(false);
  const [astrologer, setAstrologer] = useState(null);
  const [user, setUser] = useState("");
  const [callPopUp, setCallPopUp] = useState(false);

  const { userData } = useSelector((state) => state.getuserDetail);
  const [isClient, setIsClient] = useState(false);


  const [intake_Id, setInatkeId] = useState(null);
  const [send, setSend] = useState("");
    const [calltime, setcalltime] = useState("");
    const [type,setType] = useState("");


  const { data = [], loading } = useSelector((state) => state.intake);
  const intake_data = data?.intakedata;

  useEffect(() => {
    setIsClient(true);
  }, []);

  


  useEffect(() => {
    if (!socket) return;


      dispatch(fetchIntakeRequest());
    
  }, [socket, dispatch]);

   

  const { astrologerloading, astrologerdata: astro } = useSelector((state) => state.astrologerdetail);


  useEffect(() => {
     if (!astro || astro.length === 0) {
      
   dispatch(RequestAstrologerDetail({ astro_id: parseInt(astro_id) }));
      }
  }, [dispatch, astro_id,astro]);

  


  useEffect(() => {
    if (astro) {
      setAstrologer(astro);
    }
  }, [astro]);

  const {
    loading: dataloading, callData, callStatusCode, error
  } = useSelector((state) => state.send_request_call);
  useEffect(() => {
    const intakesingledata = data?.intakedata?.[0] || null;
    setName(intakesingledata?.name || "");
    setPhone(intakesingledata?.mobile || "");
    setDob(intakesingledata?.dob || "");
    setTime(intakesingledata?.btime || "");
    setOccupation(intakesingledata?.occupation || "");
  }, [data]);
  

    const sendRequest = () => {
    if (
      name == "" ||
      phone == "" ||
      dob == "" ||
      time == "" ||
      occupation == "" || place == ""
    ) {
      toast.error("Please enter a valid Input");
    } else {

    
  setCallPopUp(true);
    setSend(1);
 }
  };



  // card request



  const sendRequestcard = (intakeid) => {
    setInatkeId(intakeid);
    setCallPopUp(true);

  };





  const gender = ["Male", "Female", "Other"];
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
  const SelectMethod = (method) => {

    setType(method);
 const expert_id = parseInt(astro_id);
    const user_name = name || "";
    const request_type = method || "";
    const astro_charge = astrologer?.disc_call_charge || 0;
    const user_amount = userData?.balance_amount || 0;
    const is_promotional = userData?.user_status;
    dispatch(sendCallRequest({
      expert_id,
      user_name,
      request_type,
      astro_charge,
      user_amount,
      is_promotional
    })
    );

  }
 useEffect(() => {
  if (callStatusCode === 200 && callData) {
      const roomId = callData.callId;
      setRoomId(roomId);
      const callTime = callData?.callTime;
      setcalltime(callTime);
      const requesttype=type || "";

      const intakeItem = intake_data?.find(item => item.id === intake_Id);

 
      let messageData = {
        message: "sent a webcall request!",
        room_id: roomId || "",
        astro_id: astro_id || "",
        user_id: user?.id || "",
        is_promotional: true,
        astro_name: astrologer?.full_name || "",
        maximum_time: callTime || 0,
      };

      let intakedata;
      if (send === 1) {
        intakedata = {
          name,
          gender: usergender,
          dob,
          btime: time,
          occupation,
          birth_place: place,
          mobile: phone,
          chatid: roomId,
          request_type: requesttype,
        };
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
        intakedata = {
          name: intakeItem?.name || name || "Unknown",
          gender: intakeItem?.gender || usergender || "",
          dob: intakeItem?.dob || dob || "",
          btime: intakeItem?.btime || time || "",
          occupation: intakeItem?.occupation || occupation || "",
          birth_place: intakeItem?.birth_place || place || "",
          mobile: phone,
          chatid: roomId,
          request_type: requesttype,
        };
        messageData = {
          ...messageData,
          userName: intakeItem?.name || name || "Unknown",
          gender: intakeItem?.gender || usergender || "",
          dateOfBirth: intakeItem?.dob || dob || "",
          timeOfBirth: intakeItem?.btime || time || "",
          occupation: intakeItem?.occupation || occupation || "",
          location: intakeItem?.birth_place || place || "",
        };
      }

      dispatch(IntakeFromRequest({ intakedata }));
        if(type === "webcall"){
        socket?.emit("call_request", messageData);
        }else{

        }



      socket?.emit("astrologer_request", { astro_id, status: 2 });
       dispatch(resetCallCode());
    }

    if (callStatusCode === 400) {
      toast.error(error?.message );
      setCallPopUp(false);
      dispatch(resetCallCode());
    }


  }, [callStatusCode, callData, error, send, intake_data, 
    intake_Id, name, usergender, dob, time, occupation, place, phone, astro_id, user, astrologer, dispatch, socket,type]);


  return (
    <div className="relative w-full">
      {!request ? (
        <div className="flex items-start justify-center gap-5 px-10 my-10">
          <div className="relative z-10 w-full max-w-5xl overflow-hidden bg-white border border-gray-200 shadow-lg rounded-2xl">
            <div className="bg-[#2e0854] py-4 px-6 rounded-t-2xl">
              <h2 className="text-xl font-semibold text-center text-white">
               Consultation Form
              </h2>
            </div>

            <div
             
              className="grid grid-cols-1 gap-4 p-6 md:grid-cols-3"
            >
              <div className="flex flex-col">
                <CustomInput
                  label="Name"
                  placeholder="amrendra"
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
                      disabled
                    type="tel"
                    placeholder=""
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
                <button aria-label="Send Call Request"
                  onClick={sendRequest}
                  className="px-6 py-2 font-semibold text-black transition bg-yellow-400 rounded-full shadow-md hover:bg-yellow-500"
                  disabled={disabled}
                >
                  Send call Request to  {astrologer?.full_name || ""}
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
                  onClick={() => sendRequestcard(item?.id)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-[70%] place-self-center">
          <CallRequestCard
            room_Id={roomId}
            astro_Name={astrologer?.full_name || ""}
            user_Id={user?.id}
            astroimage={astrologer?.profile_image || ""}
            astro_id={astrologer?.id || ""}
            chat_time={200}
            experts_price={astrologer?.disc_chat_charge}
          />
        </div>
      )}

      <AlertLoading show={dataloading} title="Call Request..." />
      <AlertLoading show={astrologerloading} title="Fetch Astrologer..." />


      {callPopUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000d1] bg-opacity-50">
          <div className="relative z-60 w-[40%]">
            <CallOptionModal
              closeModal={() => setCallPopUp(false)}
              onSelectMethod={SelectMethod}
              room_Id={roomId || 0}
              time={calltime || 0}
              astro_Name={astrologer?.full_name}
              astro_id={astro_id}
              astro_price={astrologer?.disc_call_charge}
              is_promotional={userData?.user_status}

            />


          </div>
        </div>
      )}
    </div>
  );
}