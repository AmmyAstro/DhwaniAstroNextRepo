"use client";

import Sadhesati from "@/components/Kundli/Kundliinter/Sadhesati/Sadhesati";

export default function SadeSatiClient({
  satiData,
  remeData,
  detailsData,
}) {
  if (!satiData) {
    return (
      <p className="text-center text-gray-400">
        No Sade Sati data available
      </p>
    );
  }

  return (
    <Sadhesati
      satiData={satiData}
      remeData={remeData}
      detailsData={detailsData}
    />
  );
}
