"use client";

import useScrollZoom from "@/Hooks/scrollZoom";

export default function MoonBioClient({ daily }) {
  useScrollZoom(".head-wrap");

  if (!daily) {
    return (
      <p className="text-center text-red-500">
        No Moon Bio data available.
      </p>
    );
  }

  const {
    birth_pakshi,
    considered_date,
    birth_pakshi_details: details,
    activity_cycle,
  } = daily;

  const activityDay = activity_cycle?.day || [];
  const activityNight = activity_cycle?.night || [];

  return (
    <div className="basic-kundli-charts pt-3 flex flex-col gap-2 md:col-span-4 items-center">


      <div className="h-f-par flex flex-col gap-2 items-center justify-center place-self-center w-[95%] md:w-full bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg rounded-lg p-5">
        <h5 className="text-base md:text-xl text-black font-semibold">
          <span className="text-red-500">Moon Biorhythm </span> – Prediction Calculator
        </h5>
        <span className="text-black text-sm md:text-base">
          Birth pakshi details and recommended activities based on moon position.
        </span>
      </div>


      <div className="md:w-full w-[95%] place-self-center mt-3 p-4 bg-white rounded-2xl shadow space-y-4 text-black">
        <h2 className="md:text-2xl text-xl font-bold text-purple-600">
          🌙 Moon Bio
        </h2>

   
        <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
          <p><strong>Birth Pakshi:</strong> {birth_pakshi}</p>
          <p><strong>Considered Date:</strong> {considered_date}</p>
          <p><strong>Color:</strong> {details?.color}</p>
          <p><strong>Direction:</strong> {details?.direction}</p>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ["📝 Name Letters", details?.name_letter],
            ["⚔️ Enemies", details?.enemy],
            ["🤝 Friends", details?.friend],
            ["🌞 Day Ruling Days", details?.day_ruling_days],
            ["🌜 Night Ruling Days", details?.night_ruling_days],
          ].map(
            ([title, list], i) =>
              list?.length > 0 && (
                <div
                  key={i}
                  className="border border-purple-200 bg-purple-200 rounded-lg shadow p-3"
                >
                  <h3 className="font-semibold">{title}</h3>
                  <ul className="list-disc ml-5 text-sm md:text-base">
                    {list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>


        <div>
          <h3 className="text-xl font-semibold mt-4">🌞 Day Activities</h3>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {activityDay.map((act, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg border-purple-200 bg-purple-200 text-sm md:text-base"
              >
                <p><strong>Time:</strong> {act.start_time} – {act.end_time}</p>
                <p>
                  <strong>Activity:</strong> {act.activity} ({act.activity_meaning})
                </p>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h3 className="text-xl font-semibold mt-4">🌜 Night Activities</h3>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {activityNight.map((act, idx) => (
              <div
                key={idx}
                className="p-3 border rounded-lg border-purple-200 bg-purple-200 text-sm md:text-base"
              >
                <p><strong>Time:</strong> {act.start_time} – {act.end_time}</p>
                <p>
                  <strong>Activity:</strong> {act.activity} ({act.activity_meaning})
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
