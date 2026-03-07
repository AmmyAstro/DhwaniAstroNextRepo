// app/inKundli/getKundlipage/lalkitab/page.js

export const revalidate = 3600;

import { Suspense } from "react";
import {
  fetchLalKitab,
  fetchLalDebt,
  fetchLalHouses,
  fetchLalPlanet,
} from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import LalkitabClient from "./LalkitabClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }

  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Invalid or expired link</p>;
  }

  const [kitabData, debtData, houseData, planetData] = await Promise.all([
    fetchLalKitab(formData),
    fetchLalDebt(formData),
    fetchLalHouses(formData),
    fetchLalPlanet(formData),
  ]);

  return (
    <Suspense
      fallback={
        <p className="text-center text-purple-600">
          Loading Lal Kitab reports...
        </p>
      }
    >
      <LalkitabClient
        kitabData={kitabData}
        debtData={debtData}
        houseData={houseData}
        planetData={planetData}
      />
    </Suspense>
  );
}
