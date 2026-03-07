"use client";

import useScrollZoom from "@/Hooks/scrollZoom";

export default function MydayClient({ daily, numero }) {
  useScrollZoom(".head-wrap");

  if (!daily && !numero) {
    return (
      <p className="text-center text-red-500">
        Failed to fetch My Day predictions.
      </p>
    );
  }

  return (
    <div className="basic-kundli-charts flex flex-col md:col-span-4 text-[#000]">
      <h5 className="text-sm md:text-xl place-self-center font-semibold">
        <span className="text-red-500">Prediction :</span> of the Day
      </h5>

      <section className="basic-details-main w-full flex flex-col gap-6">
        <div className="head-wrap flex flex-col gap-10">

           {numero?.prediction && (
            <div className="p-5 rounded-2xl bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg border border-orange-300">
              <h3 className="text-lg text-center font-bold text-black mb-2">
                Today's Prediction - {numero?.prediction_date}
              </h3>
              <p className="text-sm mb-2 leading-relaxed">{numero?.prediction}</p>

              <div className="flex flex-col justify-center md:flex-row gap-5 text-sm font-semibold">
                <span className="bg-purple-300 flex justify-between items-center px-5 text-base py-2 w-[30%] rounded-full text-black">
                  <span> Lucky Color:</span>{" "}
                  <span className="font-semibold">{numero?.lucky_color}</span>
                </span>
                <span className="bg-purple-300 flex justify-between items-center px-5 text-base w-[30%] py-2 rounded-full text-black">
                  <span>Lucky Number:</span>{" "}
                  <span className="font-semibold">{numero?.lucky_number}</span>
                </span>
              </div>

              {daily?.birth_moon_sign && (
                <div className="text-sm text-gray-700 mt-4 font-medium">
                  <div className="flex flex-col justify-center md:flex-row gap-5 text-sm font-semibold">
                    <span className="bg-purple-300 px-5 flex w-[30%] justify-between items-center text-base py-2 rounded-full text-black">
                      <span>Moon Sign:</span>{" "}
                      <span className="font-semibold">{daily.birth_moon_sign}</span>
                    </span>
                    <span className="bg-purple-300 px-5 flex w-[30%] justify-between items-center text-base py-2 rounded-full text-black">
                      <span>Nakshatra:</span>{" "}
                      <span className="font-semibold">
                        {daily.birth_moon_nakshatra}
                      </span>
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {daily?.prediction &&
            Object.entries(daily.prediction).map(([key, value]) => (
              <div
                key={key}
                className="shadow p-5 rounded-lg bg-purple-100"
              >
                <h3 className="text-lg font-bold capitalize mb-1 text-[#7042ac]">
                  {key.replace(/_/g, " ")} :
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
