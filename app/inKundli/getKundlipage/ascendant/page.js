// app/inKundli/getKundlipage/ascendant/page.js

export const revalidate = 3600; 

import {
  fetchGenAscRep,
  fetchGenNakRep,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import AscendantClient from "./AscendantClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Kundli session expired</p>;
  }


  const [ascData, nakData] = await Promise.all([
    fetchGenAscRep(formData),
    fetchGenNakRep(formData),
  ]);

  if (!ascData || !nakData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Ascendant Report.
      </p>
    );
  }

  return (
    <AscendantClient
      ascData={ascData}
      nakData={nakData}
    />
  );
}
