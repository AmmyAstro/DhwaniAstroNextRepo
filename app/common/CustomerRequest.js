"use client";
import CustomButton from "@/components/Custom/CustomButton";
import React from "react";


function CustomerRequest({ name, dob, location, index, onClick, disabled }) {
  const bgColors = [
    "bg-blue-500",
    "bg-fuchsia-500",
    "bg-red-500",
    "bg-yellow-400",
    "bg-cyan-500",
    "bg-gray-500",
    "bg-black",
  ];
  const getColorClass = (index) => bgColors[index % bgColors.length];

  return (
    <div>
      <div className="grid grid-cols-1 gap-5" >
        <div className="flex items-center gap-4 p-4 bg-purple-300 border rounded-lg shadow-md profile-card">
          <div
            className={`flex items-center justify-center rounded-full text-white font-bold uppercase ${getColorClass(
              index
            )}`}
            style={{ width: 50, height: 50, fontSize: 20 }}
          >
            {name?.charAt(0).toUpperCase() || "A"}
          </div>

          <div className="flex-1 profile-info">
            <span className="block text-sm font-medium">{name}</span>
            <span className="block text-sm text-gray-500">{dob}</span>
            <span className="text-xs font-semibold text-black break-all line-clamp-1">
              {location}
            </span>
          </div>
          <CustomButton aria-label={`Select Customer ${name}`}
            className="  text-white transition bg-blue-500 rounded selct-btn hover:bg-blue-600"
            variant="green"
            onClick={onClick}
            disabled={disabled}
          >

            <h5 className="text-[#fff]">Select</h5>

          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default CustomerRequest;
