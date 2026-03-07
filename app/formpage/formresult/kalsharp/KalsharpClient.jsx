"use client";

export default function KalsharpClient({ kalData, kalSarpaPuja }) {
  if (!kalData) {
    return (
      <p className="text-center text-red-500">
        No Kalsharp Dosha data available.
      </p>
    );
  }

  return (
    <div className="basic-kundli-charts col-span-4 flex flex-col gap-2 items-center">
      <div className="flex flex-col gap-4 w-full max-w-7xl">

        <h5 className="text-sm md:text-2xl text-black text-center font-semibold">
          <span className="text-red-500">"Kalsharp Dosha </span> In Kundli"
        </h5>

      
        <div className="p-4 bg-purple-50 shadow-md rounded-2xl border-2">
          <div className="flex flex-col gap-2 text-base text-black">
            <div>
              <b className="text-purple-700">Kalsharp Dosha Present:</b>{" "}
              {kalData.present ? "Yes" : "No"}
            </div>
            <div>
              <b className="text-purple-700">Type:</b> {kalData.type}
            </div>
            <div>
              <b className="text-purple-700">Name:</b> {kalData.name}
            </div>
            <div>
              <b className="text-purple-700">House Effected:</b>{" "}
              {kalData.report?.house_id}
            </div>
            <div>
              <b className="text-purple-700">One Line:</b>{" "}
              {kalData.one_line}
            </div>
            <div>
              <b className="text-purple-700">Main Report:</b>
              <div
                dangerouslySetInnerHTML={{
                  __html: kalData.report?.report,
                }}
              />
            </div>
          </div>
        </div>

        
        {kalData.present && kalSarpaPuja && (
          <div className="flex flex-col mt-4 gap-3">
            <h1 className="text-[#2f1254] text-md sm:text-2xl text-center font-semibold">
              • <strong>Kalsharp Remedies & Puja Suggestion</strong> •
            </h1>

            <div className="p-4 bg-purple-50 shadow-md rounded-2xl text-base text-black">
              <h5 className="font-semibold text-purple-700 text-xl">
                {kalSarpaPuja.title}
              </h5>
              <div className="flex flex-col gap-1">
                <b>Description:</b>
                {kalSarpaPuja.summary}
              </div>
              <div>
                <b>One Line:</b> {kalSarpaPuja.one_line}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
