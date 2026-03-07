"use client";

import Doshas from "@/components/Kundli/Kundliinter/Kundlidosha/Doshas";





export default function DoshasClient({
  manglikData,
  kalSharpData,
  pitraDoshaData,
  satiData,
}) {
  if (
    !manglikData &&
    !kalSharpData &&
    !pitraDoshaData &&
    !satiData
  ) {
    return (
      <p className="text-center text-gray-400">
        No Dosha data available
      </p>
    );
  }

  return (
    <Doshas
      manglikData={manglikData}
      kalSharpData={kalSharpData}
      pitraDoshaData={pitraDoshaData}
      satiData={satiData}
    />
  );
}
