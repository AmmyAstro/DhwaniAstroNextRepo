"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import CustomButton from "../Custom/CustomButton";

export default function AstrowaitPop({
  name = "Astro Name",
  imgSrc = "/ds-img/a.jpg",
  onAccept,
  onReject,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex justify-center items-end pb-6 bg-black/20"
      onClick={onReject} 
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        className="bg-white rounded-full shadow-lg px-6 py-3 flex gap-6 items-center min-w-[340px] animate-fadeIn"
      >
        <Image
          src={imgSrc}
          alt={name}
          width={56}
          height={56}
          className="w-14 h-14 rounded-full object-cover border-4 border-yellow-400"
        />

        <div className="flex flex-col items-start">
          <span className="text-base font-semibold text-gray-800">{name}</span>
          <div className="text-xs text-gray-400">
            <span>0.00</span> <span>/min</span>
          </div>
          <span className="text-sm text-gray-500">
            Waiting for your response
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <CustomButton aria-label={`Accept call from ${name}`}
            variant="green"
            onClick={onAccept}
            className="bg-green-500 text-sm w-20 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium shadow"
          >
            Accept
          </CustomButton>
          <CustomButton aria-label={`Reject call from ${name}`}
            variant="redo"
            onClick={onReject}
            className="bg-red-500 text-sm w-20 hover:bg-red-700 text-white px-5 py-2 rounded-full font-medium shadow"
          >
            Reject
          </CustomButton>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
