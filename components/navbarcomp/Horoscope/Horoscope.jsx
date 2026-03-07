"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useZodiac } from "../../../app/context/ZodiacContext";
import Zodhoro from "@/components/navbarcomp/Horoscope/Zodhoro/Zodhoro";
import useScrollZoom from "@/Hooks/scrollZoom";

const HoroscopeClient = ({ horoscopezod }) => {
  const { zodiac, setZodiac } = useZodiac();
  const zodhoroRef = useRef(null);

  useScrollZoom(".head-wrap");

  // Set default zodiac when the page first loads
  useEffect(() => {
    if (!zodiac) {
      setZodiac("Aries");
    }
  }, [zodiac, setZodiac]);

  const handleZodiacClick = (zodiacName) => {
    setZodiac(zodiacName);
    if (zodhoroRef.current) {
      const offset = -80;
      const topPosition =
        zodhoroRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (window.location.hash === "#zodhoro" && zodhoroRef.current) {
      const offset = -80;
      const topPosition =
        zodhoroRef.current.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, []);

  return (
    <section className="py-5 flex flex-col w-full gap-5">
      {/* Header Section */}
      <div className="text-black md:p-5 head-wrap bg-gradient-to-r from-pink-100 to-yellow-100 shadow-lg rounded-2xl p-5 text-center">
        <h1 className="text-[#2f1254] text-2xl font-semibold">About Horoscope</h1>
        <p className="text-black text-sm mt-2">
          Horoscopes help you discover your strengths and challenges through the lens of Vedic Astrology.
        </p>
      </div>

      {/* Zodiac Grid */}
      <section className="relative w-full bg-[#000] mx-auto py-5 px-4 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/ds-img/mnew.jpg')" }}
        />
        <div className="relative flex flex-col justify-center">
          <h2 className="text-2xl pb-4 text-white text-center font-bold">
           • Know Yourself Through Your Sign •
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
            {horoscopezod.map((horo, index) => (
              <div
                key={index}
                onClick={() => handleZodiacClick(horo.name)}
                className={`cursor-pointer flex flex-col items-center rounded-4xl shadow-lg p-3 lg:p-5 transition-all ${
                  zodiac === horo.name
                    ? "bg-purple-200 scale-105 "
                    : "bg-white hover:scale-105 text-purple-900"
                }`}
              >
                <Image
                  src={horo.img}
                  alt={`${horo.name} Zodiac`}
                  width={100}
                  height={100}
                />
                <div className="mt-1 flex flex-col items-center">
                  <p
                    className={`text-xs md:text-sm font-semibold ${
                      zodiac === horo.name ? "text-purple-900" : "text-purple-900"
                    }`}
                  >
                    {horo.name}
                  </p>
                  <p
                    className={`text-[10px] md:text-xs font-semibold ${
                      zodiac === horo.name ? "text-purple-900" : "text-purple-900"
                    }`}
                  >
                    {horo.indate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div ref={zodhoroRef}>
        <Zodhoro />
      </div>
    </section>
  );
};

export default HoroscopeClient;
