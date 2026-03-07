"use client";

import Image from "next/image";

export default function Rudrasuggest({ rudraData }) {
  if (!rudraData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Rudraksha suggestions.
      </p>
    );
  }

  return (
    <section className="basic-details-main w-full flex flex-col gap-5">
      <div className="flex flex-col gap-5 text-black border border-purple-200 rounded-lg shadow-lg md:px-5 px-2 py-3 bg-purple-100">
        <span className="text-center text-2xl font-semibold text-purple-700">
          Rudraksha Suggestion
        </span>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex justify-center">
            <Image
              src={`https://json.astrologyapi.com/v1${rudraData.img_url}`}
              width={120}
              height={120}
              alt="Rudraksha image"
              className="rounded"
              unoptimized
            />
          </div>

          <Info label="Rudraksha Name" value={rudraData.name} />
          <Info label="Rudraksha Key" value={rudraData.rudraksha_key} />
          <Info label="Recommendation" value={rudraData.recommend} />
          <Info label="Details" value={rudraData.detail} />
        </div>
      </div>
    </section>
  );
}


function Info({ label, value }) {
  return (
    <div className="flex flex-col bg-purple-100 rounded-lg px-4 py-1">
      <h5 className="font-semibold">{label}:</h5>
      <span>{value || "—"}</span>
    </div>
  );
}
