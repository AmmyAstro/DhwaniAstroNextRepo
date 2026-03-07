"use client";

import { useSelector } from "react-redux";
import {
  useGetPlanetsMutation,
  useGetVimAllMutation,
} from "@/app/redux/services/astrologyAPI";
import { useAPIFetchMHook } from "@/Hooks/useAPIFetchMHook";
import { useMemo } from "react";

export default function Planets() {
  const formData = useSelector((state) => state.daUserForm);

  const [getPlanets] = useGetPlanetsMutation();
  const [getVimAll] = useGetVimAllMutation();


  const extraTriggersMap = useMemo(() => ({
    vim: getVimAll,
  }), [getVimAll]);


  const {
    mainData: planetsData,
    extraData = {},
    loading,
    error,
  } = useAPIFetchMHook(getPlanets, formData, null, false, "", extraTriggersMap);

  const vimData = extraData?.vim;

  const isFormEmpty = (
    !formData?.day ||
    !formData?.month ||
    !formData?.year ||
    !formData?.hour ||
    !formData?.min ||
    !formData?.lat ||
    !formData?.lon ||
    !formData?.tzone
  );

  if (isFormEmpty) {
    return <p className="text-center text-gray-400">Waiting for user data...</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center flex-col gap-4 items-center h-32">
        <span className="loader-all"></span>
        <span className="ml-3 text-purple-600 font-medium">
          Loading Reports...
        </span>
      </div>
    );
  }

  if (error) return <Message text={`Error: ${error}`} color="red" />;
  if (!planetsData || !vimData) return <Message text="No data received." color="red" />;

  const roundUp = (num, decimalPlaces) => {
    if (typeof num !== "number") return "—";
    const factor = Math.pow(10, decimalPlaces);
    return Math.ceil(num * factor) / factor;
  };

  return (
    <div className="basic-kundli-charts flex flex-col gap-4 items-center px-4 pb-10">
      <h2 className="text-lg md:text-xl font-bold text-purple-700">
        Planet Positions
      </h2>


      <div className="basic-det w-full flex flex-col border rounded-lg shadow-lg p-2 border-purple-100">
        <div className="overflow-x-auto w-88 md:w-full text-black text-xs md:text-sm">
          <div className="basic-box flex flex-col gap-1 w-160 md:w-full">
            <div className="pl-ul grid grid-cols-9 bg-purple-400 rounded-lg px-5 py-2 text-nowrap">
              {[
                "Planet",
                "Sign",
                "Sign Lord",
                "Nakshatra",
                "Naksh Lord",
                "Degree",
                "Retro(R)",
                "Awastha",
                "House",
              ].map((head, i) => (
                <h5 key={i} className="text-sm font-semibold">{head}</h5>
              ))}
            </div>

            {planetsData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-9 bg-purple-200 rounded-lg px-4 py-2 mb-2"
              >
                <span>{item.name || "—"}</span>
                <span>{item.sign || "—"}</span>
                <span>{item.signLord || "—"}</span>
                <span>{item.nakshatra || "—"}</span>
                <span>{item.nakshatraLord || "—"}</span>
                <span>{roundUp(item.normDegree, 3)}</span>
                <span>{item.isRetro ? "Yes" : "No"}</span>
                <span>{item.planet_awastha || "—"}</span>
                <span>{item.house || "—"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vimshottari Dasha */}
        <div className="vimh-det mt-6 w-full">
          <h5 className="p-5 text-center text-2xl text-black">Vimshottari Dasha</h5>
          <div className="basic-box flex flex-col gap-3 text-black">
            <div className="pl-ul grid grid-cols-4 bg-purple-400 rounded-lg px-5 py-2">
              {["Planet", "Start Date", "End Date", "Next"].map((head, i) => (
                <h5 key={i} className="md:text-sm text-xs font-semibold">{head}</h5>
              ))}
            </div>

            {vimData.map((item, index) => (
              <div
                key={index}
                className="basic-card grid grid-cols-4 gap-4 bg-purple-200 rounded-lg px-5 text-sm py-2"
              >
                <span>{item.planet || "—"}</span>
                <span>{item.start || "—"}</span>
                <span>{item.end || "—"}</span>
                <span>{item.nxt || "—"}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Message({ text, color }) {
  return <p className={`text-center text-${color}-500`}>{text}</p>;
}
