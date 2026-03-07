"use client";

export default function MydayClient({ daily, numero }) {
  if (!daily || !numero) {
    return (
      <p className="text-center text-red-500">
        Failed to load daily prediction.
      </p>
    );
  }

  return (
    <div className="basic-kundli-charts col-span-4 flex flex-col gap-4 items-center">
      <h5 className="text-sm md:text-2xl text-black text-center font-semibold">
        <span className="text-red-500">"My Day </span> Prediction"
      </h5>


      <div className="p-5 rounded-lg bg-linear-to-r from-pink-100 to-yellow-100 shadow-lg text-black border">
        <h3 className="text-lg font-bold mb-2">
          Today’s Prediction
        </h3>
        <p className="text-sm leading-relaxed">{daily?.prediction}</p>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
        {Object.entries(numero || {}).map(([key, value]) => (
          <div
            key={key}
            className="bg-purple-100 p-4 rounded-lg shadow text-center"
          >
            <p className="font-semibold capitalize">
              {key.replace(/_/g, " ")}
            </p>
            <p className="text-lg font-bold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
