"use client";
import React, { useRef, useEffect, useState, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import AlertLoading from "./AlertLoading";
import { resetCallingCode, StartCalling, } from "../redux/reducer/Calling/CallingSlice";
import { getCallingRequest, resetCallingState, } from "../redux/reducer/Calling/CallingResponse";
import {
  callCode_Reset,
  sendRequestCall,
} from "../redux/reducer/Calling/callCompletSlice";
import { resetCode } from "../redux/reducer/chat/sendRequestSlice";
import { phonecallStarted, resetPhonecode, } from "../redux/reducer/Calling/phonecallSlice";
import SocketContext from "../context/socketContext";

export default function ChooseMethod({ onSelect, sessionId, expert_id, astro_amount }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const intervalRef = useRef(null);

  const socket = useContext(SocketContext);

  const { loading, response, callingCode } = useSelector((state) => state.callingreducer);
  const { dataphonecall, phonecallloading, phonecode } = useSelector((state) => state.phonecall);
  const { callstatus } = useSelector((state) => state.callingresponse);
  const { userData } = useSelector((state) => state.getuserDetail);

  const callingRedirect = useCallback(() => {
    dispatch(StartCalling({
      agent_number: "+919675760189",
      customer_number: "+919319490843",
    }));
  }, [dispatch]);

  useEffect(() => {
    callingRedirect();
  }, [callingRedirect]);

  useEffect(() => {
    const raw = callstatus?.callstatus;
    if (!raw) return;

    let parsed;
    try {
      parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
    } catch {
      return;
    }

    const { New_Hangup_Cause: hangupCause, pickup_time: firsttime, hangup_time: secounttime } = parsed;
    const is_promotional = userData?.user_status;
    let chatstatus, message;

    if (hangupCause === "ANSWERED") {
      chatstatus = 5;
      message = "Call Completed Successfully";
      socket.emit("allastrologerfree", { astro_id: expert_id });

    } else if (hangupCause === "AGENT_NO_ANSWER") {
      chatstatus = 4;
      message = "Call Not Answered";
      socket.emit("allastrologerfree", { astro_id: expert_id });
    } else return;

    dispatch(phonecallStarted({ sessionId, astro_amount, expert_id, is_promotional, firsttime, secounttime, chatstatus }));
    dispatch(resetCallingState());
    toast.success(message);
    if (intervalRef.current) clearInterval(intervalRef.current);
    return () => socket.off("allastrologerfree");
  }, [callstatus?.callstatus, dispatch, sessionId, astro_amount, expert_id, userData?.user_status, socket]);

  useEffect(() => {
    if (phonecode === 200) {
      dispatch(resetPhonecode());
      dispatch(callCode_Reset());
      dispatch(resetCode());
      dispatch(resetCallingCode());
      if (onSelect)
        onSelect();
      router.push("/talk-to-astrologer");
    }


  }, [phonecode, dispatch, router, onSelect]);





  useEffect(() => {
    const callId = response?.success?.call_id;
    if (!callId) return;

    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      dispatch(getCallingRequest({ unique_call_id: String(callId) }));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [response?.success?.call_id, dispatch]);

  return (
    <div className="inset-0 z-50 bg-opacity-50 rounded-lg flex justify-center items-center w-full h-[55vh] mt-10">
      <div className="bg-white rounded-2xl shadow-lg max-w-3xl p-6 h-[70%] relative">
        <h2 className="text-xl font-bold text-center text-purple-700">Phone Call Connected ...</h2>
        <h6 className="font-bold text-center text-purple-400">
          Status: {response ? "Call successfully placed" : "Calling Start"}
        </h6>
        <div className="grid justify-around gap-10 px-5">
          <button aria-label="Select Mobile Call" className="flex flex-col items-center p-5 shadow-md hover:scale-105 bg-linear-to-r from-purple-500 via-purple-300 to-purple-500 rounded-xl">
            <Image src="/prblm/phone-contact.gif" alt="Mobile Call" width={64} height={64} className="rounded-lg mb-2" />
            <span className="text-xl font-semibold text-purple-800">Mobile Call</span>
          </button>
        </div>
      </div>

      <AlertLoading show={loading} title="Please Wait" />
      <AlertLoading show={phonecallloading} title="Calling..." />
    </div>
  );
}
