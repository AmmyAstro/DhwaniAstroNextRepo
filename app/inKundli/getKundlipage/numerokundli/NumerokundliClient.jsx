"use client";

import NumerokundliUI from "./NumerokundliUI";

export default function NumerokundliClient({ data }) {
  if (!data?.main) {
    return (
      <p className="text-center text-gray-400">
        No Numerology data available
      </p>
    );
  }

  return <NumerokundliUI data={data} />;
}
