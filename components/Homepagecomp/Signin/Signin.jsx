"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import PhoneInput from "./PhoneInput";

import { cookieHelper } from "@/src/helpers/cookieHelper";
import client from "@/utils/apolloClient";
import { useOTP } from "@/Hooks/useOTP";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useAuth } from "@/app/context/authContext";


const loadrx = (name) =>
  dynamic(() => import("react-icons/rx").then((mod) => mod[name]));

const RxCrossCircled = loadrx("RxCrossCircled");

const UPDATE_PROFILE = gql`
  mutation UpdateUserProfile($input: UpdateUserInput!) {
    updateUserProfile(input: $input) {
      id
      name
    }
  }
`;

const SignInModal = ({ onClose }) => {
  const router = useRouter();

  const {
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
  } = useOTP();

  const [phoneData, setPhoneData] = useState({
    raw: "",
    dialCode: "",
    e164: "",
    isValid: false,
  });

  //  const [view, setView] = useState("PHONE");
  const [existingUserName, setExistingUserName] = useState("");
  const [userName, setUserName] = useState("");

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const { pendingRoute, setPendingRoute } = useAuth();

  // Disable background scroll
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      resetOTP();
    };
  }, []);



  const handleGetOTP = async () => {
    try {
      await sendOtp(phoneData.e164);
      toast.success("OTP sent successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };



  const handleVerifyOTP = async () => {
    try {
      const result = await confirmOtp(phoneData.e164);



      client.writeQuery({
        query: gql`
        query Me {
          me {
            id
            name
          }
        }
      `,
        data: { me: result.user },
      });

      await client.refetchQueries({ include: ["Me"] });

      if (result.hasName) {
        setExistingUserName(result.user.name);

        
        if (pendingRoute) {
          onClose();
          router.push(pendingRoute);
          setPendingRoute(null);
          return;
        }

        setStep("WELCOME");
      } else {
        setStep("NAME");
      }

    } catch (err) {
      toast.error(err.message);
      setOtp(["", "", "", ""]);
    }
  };



  const handleSaveName = async () => {
    if (!userName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    try {
      await updateProfile({
        variables: { input: { name: userName } },
      });

      await client.refetchQueries({ include: ["Me"] });
      if (pendingRoute) {
        onClose();
        router.push(pendingRoute);
        setPendingRoute(null);
        return;
      }

      setUserName(false);
      onClose();
      router.refresh();
    } catch (err) {
      toast.error(err.message);
    }
  };


  useEffect(() => {
    if (step === "WELCOME") {
      const t = setTimeout(() => {
        onClose();
        router.refresh();
      }, 3000);

      return () => clearTimeout(t);
    }
  }, [step]);


  // ================== OTP INPUT ==================

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Move to next input only if digit entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`);
        prevInput?.focus();
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-[9999]">
        <div className="flex flex-col w-full max-w-2xl bg-white text-black rounded-lg shadow-lg overflow-hidden">


          <div className="relative py-4 flex items-center justify-center bg-[#3f1069]">
            <span className="text-xl font-semibold text-white">
              Continue With Mobile
            </span>
            <RxCrossCircled
              onClick={onClose}
              className="text-white absolute right-7 cursor-pointer text-xl"
            />
          </div>

          <div className="flex side-div">
            <div className="bg-[#3f1069] text-white w-2/5 flex flex-col items-center p-8">
              <Image src="/ds-img/logo.webp" alt="Logo" width={100} height={100} />
              <h2 className="text-xl font-bold">Welcome to Dhwani Astro</h2>
            </div>

            <div className="w-3/5 flex flex-col items-center justify-center p-8 gap-4">

              {step === "PHONE" && (
                <>
                  <PhoneInput onChange={setPhoneData} />
                  <button
                    onClick={async () => {
                      await sendOtp(phoneData.e164);
                      setStep("OTP");
                    }}
                    disabled={otpLoading}
                    className="w-[70%] bg-yellow-400 py-2 rounded-full"
                  >
                    {otpLoading ? "Sending OTP..." : "GET OTP"}
                  </button>
                </>
              )}

              {step === "OTP" && (
                <>
                  <div className="flex gap-3">
                    {otp.map((digit, index) => (
                      <input
                        disabled={timer === 0}
                        id={`otp-${index}`}
                        key={index}
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleOtpKeyDown(e, index)}
                        className="w-12 h-12 text-center border-2"
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleVerifyOTP}
                    disabled={verifyLoading || timer === 0}

                    className="w-[70%] bg-yellow-400 py-2 rounded-full"
                  >
                    {verifyLoading ? "Verifying..." : "Verify OTP"}
                  </button>

                  {timer > 0 ? (
                    <p className="text-sm text-gray-500">
                      Resend OTP in {timer}s
                    </p>
                  ) : (
                    <button
                      className="text-sm text-purple-700 underline cursor-pointer "
                      onClick={async () => {
                        await handleGetOTP();
                      }}
                    >
                      Resend OTP
                    </button>
                  )}
                </>
              )}

              {step === "NAME" && (
                <>
                  <h2 className="text-xl font-bold mb-4">
                    Welcome ✨ Please Enter Your Name
                  </h2>

                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full border p-2 rounded"
                    placeholder="Your Name"
                  />

                  <button
                    onClick={handleSaveName}
                    className="w-[70%] bg-yellow-400 py-2 rounded-full"
                  >
                    Continue
                  </button>
                </>
              )}

              {step === "WELCOME" && (
                <>
                  <h2 className="text-xl font-bold text-purple-700">
                    Welcome Back ✨
                  </h2>
                  <p className="text-lg mt-2">{existingUserName}</p>
                </>
              )}

            </div>


          </div>
        </div>


        {/* Name Popup */}




      </div>
    </>
  );
};

export default SignInModal;