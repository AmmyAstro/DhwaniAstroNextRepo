"use client";

import dynamic from "next/dynamic";

const CinematicHero = dynamic(
  () => import("./new3d/CinematicHero"),
  { ssr: false }
);

export default function Banner() {
  return (
    <div className="relative w-full  overflow-hidden">
      <CinematicHero />
    </div>
  );
}
