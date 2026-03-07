"use client";

import useScrollZoom from "@/Hooks/scrollZoom";

export default function NakshatraClient({ daily }) {
  useScrollZoom(".head-wrap");

  if (!daily || !daily.prediction) {
    return (
      <p className="text-center text-red-500">
        No Nakshatra prediction available.
      </p>
    );
  }

  return (
    <div className="basic-kundli-charts flex flex-col md:col-span-4">
      <h5 className="text-sm md:text-xl text-black place-self-center font-semibold">
        <span className="text-red-500">"Nakshatra Prediction </span>"
      </h5>

      <section className="basic-details-main w-full flex flex-col gap-6">
        <div className="head-wrap flex flex-col gap-5">

      
          <div className="p-5 rounded-lg bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg text-black border border-orange-300">
            <div className="flex flex-col md:flex-row gap-5 text-sm items-center justify-center font-semibold">
              <span className="bg-purple-300 px-5 flex w-full md:w-[45%] justify-between items-center text-base py-2 rounded-full text-black">
                <span>Moon Sign:</span>
                <span className="font-bold">
                  {daily.birth_moon_sign}
                </span>
              </span>

              <span className="bg-purple-300 px-5 flex w-full md:w-[45%] justify-between items-center text-base py-2 rounded-full text-black">
                <span>Nakshatra:</span>
                <span className="font-bold">
                  {daily.birth_moon_nakshatra}
                </span>
              </span>
            </div>
          </div>

  
          {Object.entries(daily.prediction).map(([key, value], index) => (
            <div
              key={index}
              className="shadow p-5 rounded-lg bg-purple-100 text-black"
            >
              <h3 className="text-lg font-bold text-[#7042ac] capitalize mb-1">
                {key.replace(/_/g, " ")}:
              </h3>
              <p className="text-sm leading-relaxed">{value}</p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
