"use client";

import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState, useRef, useEffect } from "react";


const REQUEST_OTP = gql`
  mutation RequestOtp($mobile: String!) {
    requestOtp(mobile: $mobile) {
      message
    }
  }
`;

const AUTHWITH_OTP = gql`
  mutation AuthWithOtp($mobile: String!, $otp: String!) {
    authWithOtp(mobile: $mobile, otp: $otp) {
      accessToken
      refreshToken
      hasName
      user {
        id
        name
      }
    }
  }
`;

export const useOTP = () => {
  const [step, setStep] = useState("PHONE"); // PHONE | OTP
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);

  const timerRef = useRef(null);

  const [requestOtp, { loading: otpLoading }] =
    useMutation(REQUEST_OTP);

  const [verifyOtp, { loading: verifyLoading }] =
    useMutation(AUTHWITH_OTP);

  // Cosmetic timer only
  const startTimer = (seconds = 60) => {
    setTimer(seconds);

    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const sendOtp = async (mobile) => {
    await requestOtp({ variables: { mobile } });
    setStep("OTP");
    startTimer(60);
  };

  const confirmOtp = async (mobile) => {
    const otpValue = otp.join("");

    if (!/^\d{4}$/.test(otpValue)) {
      throw new Error("Invalid OTP");
    }

    const res = await verifyOtp({
      variables: { mobile, otp: otpValue },
    });

    clearInterval(timerRef.current);
    setTimer(0);
    setOtp(["", "", "", ""]);
    setStep("PHONE");

    return res.data.authWithOtp;
  };

  const resetOTP = () => {
    clearInterval(timerRef.current);
    setTimer(0);
    setOtp(["", "", "", ""]);
    setStep("PHONE");
  };

  // Safety cleanup
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return {
    step,
    otp,
    setOtp,
    timer,
    otpLoading,
    verifyLoading,
    sendOtp,
    confirmOtp,
    resetOTP,
    setStep,
  };
};