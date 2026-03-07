'use client';

import React from "react";
import CustomInput from "../Custom/CustomInput";
import { LocationSelector } from "@/app/common";
import { useLanguage } from "@/app/context/LangContext";
const UserDetFD = ({
  title = "Your Details",
  namePlaceholder = "Enter your name...",
  // birthPlacePlaceholder = "Enter Birth Place...",
  formData,
  handleChange,
  handleLocationSelect,
}) => {
  const { messages: t } = useLanguage();
  return (
    <div className="w-full p-3 pb-4 bg-purple-200 shadow-lg rounded-lg">
      <h2 className="text-base md:text-lg text-center text-black font-semibold mb-2">
        {title}
      </h2>

      <div className="flex flex-col gap-3">

        <div>
          <CustomInput
            label={t?.kform?.name || "Name"}
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            required
            placeholder={namePlaceholder}
            className="w-full p-2 shadow-md rounded-full text-sm text-[#333] bg-white outline-none border-none"
          />
        </div>


        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <label className="block text-xs md:text-sm text-[#333] font-medium mb-1">
              {t?.kform?.dob || "Date of Birth"}
            </label>
            <CustomInput
              type="date"
              name="dob"
              value={formData.dob || ""}
              onChange={handleChange}
              className="w-full p-2 shadow-md rounded-full text-sm bg-white outline-none border-none"
              required
            />
          </div>

          <div className="w-full md:w-1/2 relative">
            <label className="block text-xs md:text-sm text-[#333] font-medium mb-1">
              {t?.kform?.time || "Time of Birth"}
            </label>
            <div className="relative">
              <CustomInput
                type="time"
                name="birthTime"
                value={formData.birthTime || ""}
                onChange={handleChange}
                className="w-full p-2 pl-10 shadow-md rounded-full text-sm bg-white outline-none border-none"
                required
              />

              <span className="absolute left-45 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg width={18} height={18} viewBox="0 0 15 15" fill="none" >
                  <path d="M7.5 7.5H7C7 7.63261 7.05268 7.75979 7.14645 7.85355L7.5 7.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM7 3V7.5H8V3H7ZM7.14645 7.85355L10.1464 10.8536L10.8536 10.1464L7.85355 7.14645L7.14645 7.85355Z" fill="#000000" />
                </svg>
              </span>
            </div>
          </div>

        </div>


        <div>
          <LocationSelector
            placeholder={t?.kform?.placeh || "Your birth place/location"}

            onSelect={handleLocationSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetFD;
