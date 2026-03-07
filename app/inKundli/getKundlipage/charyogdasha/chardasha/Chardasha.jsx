"use client";

import useScrollZoom from "@/Hooks/scrollZoom";

export default function Chardasha({ charData, charcData }) {
  useScrollZoom(".head-wrap");

  if (!charData || !charcData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Char  data.
      </p>
    );
  }

  return (
    <section className="kundli-inter-page w-full flex flex-col items-center md:p-2 p-2">

      <div className="w-full mb-6">
        <h5 className="text-sm md:text-xl text-black font-semibold text-center mb-2">
          <span className="text-red-500">Major Char Dasha</span> Report
        </h5>

        <div className="bg-purple-100 rounded-xl shadow p-2">
          <div className="grid grid-cols-5 bg-purple-400 text-white rounded-lg px-4 py-2 text-sm font-semibold">
            <span>Sign Id</span>
            <span>Sign Name</span>
            <span>Duration</span>
            <span>Start Date</span>
            <span>End Date</span>
          </div>

          {charData.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-5 bg-purple-200 text-black rounded-lg px-4 py-2 mt-1 text-sm"
            >
              <span>{item.sign_id}</span>
              <span>{item.sign_name}</span>
              <span>{item.duration}</span>
              <span>{item.start_date}</span>
              <span>{item.end_date}</span>
            </div>
          ))}
        </div>
      </div>


      <div className="w-full bg-purple-100 rounded-xl shadow p-4 text-black">
        <h5 className="text-xl font-semibold text-center mb-3">
          <span className="text-red-500">Current Char Dasha</span> Report
        </h5>

        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-lg">
              Major: {charcData?.sign_name}
            </h3>
            <p>Duration: {charcData?.duration}</p>
            <p>
              {charcData?.start_date} →{" "}
              {charcData?.end_date}
            </p>
          </div>

          {/* <div>
            <h3 className="font-semibold text-lg">
              Sub: {currentData.sub_dasha?.sign_name}
            </h3>
            <p>Duration: {currentData.sub_dasha?.duration}</p>
            <p>
              {currentData.sub_dasha?.start_date} →{" "}
              {currentData.sub_dasha?.end_date}
            </p>
          </div> */}

          {/* <div>
            <h3 className="font-semibold text-lg">
              Sub-Sub: {currentData.sub_sub_dasha?.sign_name}
            </h3>
            <p>Duration: {currentData.sub_sub_dasha?.duration}</p>
            <p>
              {currentData.sub_sub_dasha?.start_date} →{" "}
              {currentData.sub_sub_dasha?.end_date}
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
