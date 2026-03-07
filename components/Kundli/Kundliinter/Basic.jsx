"use client";

import { useSelector } from "react-redux";
import {
  useGetBirthDetailsMutation,
  useGetAstroDetailsMutation,
  useGetBasicPanchangMutation,
} from "@/app/redux/services/astrologyAPI";
import { useAPIFetchMHook } from "@/Hooks/useAPIFetchMHook";
import { useMemo } from "react";

export default function Basic() {
  const formData = useSelector((state) => state.daUserForm);

  const [getBirthDetails] = useGetBirthDetailsMutation();
  const [getAstroDetails] = useGetAstroDetailsMutation();
  const [getBasicPanchang] = useGetBasicPanchangMutation();


  const extraTriggersMap = useMemo(() => ({
    astro: getAstroDetails,
    panchang: getBasicPanchang,
  }), [getAstroDetails, getBasicPanchang]);

  const {
    mainData: birthData,
    extraData = {},
    loading,
    error,
  } = useAPIFetchMHook(getBirthDetails, formData, null, false, "", extraTriggersMap);


  const astroData = extraData?.astro;
  const bpData = extraData?.panchang;

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
        <span className="ml-3 text-purple-600 font-medium">Loading Reports...</span>
      </div>
    );
  }

  if (error) return <Message text={`Error: ${error}`} color="red" />;

  if (!birthData || !astroData || !bpData) {
    return <Message text="No data received." color="red" />;
  }

  const format = (val) =>
    typeof val === "number" && val % 1 !== 0 ? val.toFixed(4) : val;

  const makeEntries = (data, exclude = []) =>
    Object.entries(data)
      .filter(([k]) => !exclude.includes(k))
      .map(([k, v]) => [k, format(v)]);

  const birthEntries = makeEntries(birthData, [
    "day",
    "month",
    "year",
    "hour",
    "minute",
    "seconds",
  ]);

  if (
    birthData?.hour !== undefined &&
    birthData?.minute !== undefined &&
    birthData?.seconds !== undefined
  ) {
    birthEntries.unshift([
      "Time of Birth",
      `${String(birthData.hour).padStart(2, "0")}:${String(
        birthData.minute
      ).padStart(2, "0")}:${String(birthData.seconds).padStart(2, "0")}`,
    ]);
  }
  if (birthData?.day && birthData?.month && birthData?.year) {
    birthEntries.unshift([
      "Date of Birth",
      `${String(birthData.day).padStart(2, "0")}-${String(
        birthData.month
      ).padStart(2, "0")}-${birthData.year}`,
    ]);
  }
  if (formData?.name) {
    birthEntries.unshift(["Name", formData.name]);
  }

  const astroEntries = makeEntries(astroData);
  const bpEntries = makeEntries(bpData);

  return (
    <div className="basic-kundli-charts flex flex-col gap-4 items-center px-4 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col gap-5">
          <DetailCard title="Basic Birth Details" entries={birthEntries} />
          <DetailCard title="Basic Panchang Details" entries={bpEntries} />
        </div>
        <DetailCard title="Avakhada Details" entries={astroEntries} />
      </div>
    </div>
  );
}

function Message({ text, color }) {
  return <p className={`text-center text-${color}-500`}>{text}</p>;
}

function DetailCard({ title, entries }) {
  return (
    <div className="w-full p-3 shadow-lg rounded-lg bg-white text-black">
      <h2 className="text-lg md:text-xl font-bold text-center text-purple-700 mb-2">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="bg-purple-200 px-2 py-2 rounded-lg shadow flex items-center justify-between"
          >
            <span className="text-sm font-semibold capitalize">{key}:</span>
            <span className="text-sm ml-1">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
