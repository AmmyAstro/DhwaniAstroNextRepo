"use client";
import React, { useState } from "react";
import CustomButton from "@/components/Custom/CustomButton";
import CustomInput from "@/components/Custom/CustomInput";

export default function ZodiacClient({ zodiacData, rashiData }) {
  const [birthDate, setBirthDate] = useState("");
  const [userName, setUserName] = useState("");
  const [result, setResult] = useState(null);

  const findZodiac = () => {
    if (!birthDate) return alert("Please enter your birth date!");
    const [year, month, day] = birthDate.split("-");
    const formatted = `${month}-${day}`;
    const zodiac = zodiacData.find(({ start, end }) =>
      start < end
        ? formatted >= start && formatted <= end
        : formatted >= start || formatted <= end
    );
    setResult(zodiac);
  };

  const findRashiByName = () => {
    if (!userName) return alert("Please enter your name!");
    const firstLetter = userName.trim().charAt(0).toUpperCase();
    const rashi = rashiData.find((r) =>
      r.letters.some((letter) => firstLetter.startsWith(letter))
    );
    setResult(
      rashi || { sign: "Unknown", emoji: "❓", desc: "Couldn’t determine your Rashi!" }
    );
  };

  return (
    <>
      <div className="w-[80%] flex flex-wrap justify-between items-center gap-5 mt-5">
        <div className="flex items-center gap-4">
          <CustomInput
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="px-2 py-2.5 text-gray-800 outline-none"
          />
          <button aria-label="Find Zodiac Sign" onClick={findZodiac} className="bg-purple-800 hover:bg-purple-900 w-65 py-2 rounded-full">
            Find Zodiac Sign
          </button>
        </div>

        <div className="flex items-center gap-4">
          <CustomInput
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 py-2.5 text-gray-800 outline-none text-start placeholder:text-gray-400"
          />
          <button aria-label="Find Rashi" onClick={findRashiByName} className="bg-purple-800 hover:bg-purple-900 w-52 py-2 rounded-full">
            Find Rashi
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-6 text-center border-gray-300 shadow-xl border bg-white/10 p-4 rounded-2xl">
          <h3 className="text-xl font-bold">
            {result.emoji} {result.sign}
          </h3>
          <p className="text-sm mt-2">{result.desc}</p>
        </div>
      )}
    </>
  );
}
