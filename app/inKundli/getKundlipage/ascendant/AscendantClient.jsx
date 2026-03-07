"use client";

import useScrollZoom from "@/Hooks/scrollZoom";

export default function AscendantClient({ ascData, nakData }) {
  useScrollZoom(".head-wrap");

  if (!ascData || !nakData) { 
    return (
      <p className="text-center text-red-500">
        Failed to load report data.
      </p>
    );
  }

  return (
    <section className="w-full px-4 py-3 text-black">
      <h5 className="text-sm mb-3 text-center md:text-xl font-semibold head-wrap">
        <span className="text-red-500">General Ascendant: </span> Report
      </h5>

      <div className="bg-purple-100 rounded-2xl px-5 py-3 shadow-lg mb-5">
        <h5 className="text-center md:text-xl font-semibold">
          <span className="text-red-500">General Ascendant</span>
        </h5>

        <div className="mt-3 space-y-2">
          <div className="flex gap-2">
            <strong>Ascendant:</strong>
            <span>{ascData.asc_report?.ascendant}</span>
          </div>
          <p>{ascData.asc_report?.report}</p>     
        </div>
      </div>


      <div className="bg-purple-100 rounded-2xl px-5 py-3 shadow-lg">
        <h5 className="text-center md:text-xl font-semibold mb-3">
          <span className="text-red-500">General Nakshatra</span> Report
        </h5>

        {["physical", "character", "education", "family", "health"].map(
          (key) => (
            <div key={key} className="mb-4">
              <h3 className="font-semibold capitalize">{key}:</h3>
              {nakData[key]?.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
}
