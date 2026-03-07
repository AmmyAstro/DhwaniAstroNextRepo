"use client";

import CustomButton from "@/components/Custom/CustomButton";

export default function Pujasuggest({ pujaData }) {
  if (!pujaData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Puja Suggestions.
      </p>
    );
  }

  const suggestions = pujaData?.suggestions || [];

  return (
    <div className="basic-kundli-charts flex flex-col gap-2 md:col-span-4 items-center px-4">
      <section className="text-black w-full flex flex-col gap-4 border border-purple-100 rounded-2xl px-4 py-3 shadow-md">
        <span className="text-center font-semibold text-2xl text-purple-700">
          Puja Suggestions
        </span>

        <p className="text-center text-sm text-gray-800 leading-relaxed">
          {pujaData.summary || "No summary available"}
        </p>

        <div className="flex flex-col gap-4">
          {suggestions.length > 0 ? (
            suggestions.map((sug, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border border-purple-200 rounded-2xl shadow-lg px-5 py-4 bg-purple-100"
              >
                <h5 className="text-lg font-semibold text-purple-800">
                  {sug.title}
                </h5>

                <div className="text-sm">
                  <b>Present in your Kundli:</b>{" "}
                  {sug.status ? "Yes" : "No"}
                </div>

                <div className="text-sm">
                  <b>Description:</b>
                  <p className="text-gray-700">{sug.summary}</p>
                </div>

                <div className="text-sm italic text-gray-700">
                  {sug.one_line}
                </div>

                <div className="mt-2 flex justify-center">
                  <CustomButton
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-4 py-2"
                    onClick={() => {
                      let url = null;
                      if (sug.title === "Kal Sarpa Dosha Shanti Pujan") {
                        url =
                          "https://dhwaniastro.com/product-details/kaalsarp-dosha-nivaran-pooja";
                      } else if (
                        sug.title === "Pitri Dosha Shanti Pujan"
                      ) {
                        url =
                          "https://dhwaniastro.com/product-details/pitra-dosha-nivaran";
                      }

                      if (url) window.location.href = url;
                      else alert(`Booking ${sug.title}`);
                    }}
                  >
                    Book Now
                  </CustomButton>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              No puja suggestions available.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
