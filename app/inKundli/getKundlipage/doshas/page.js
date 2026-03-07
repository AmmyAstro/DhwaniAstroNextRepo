// app/inKundli/getKundlipage/doshas/page.js

export const revalidate = 3600; // 1 hour ISR

import {
  fetchManglik,
  fetchKalSharp,
  fetchPitraDosha,
  fetchSadheSati,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import DoshasClient from "./DoshasClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Kundli session expired</p>;
  }


  const [
    manglikData,
    kalSharpData,
    pitraDoshaData,
    satiData,
  ] = await Promise.all([
    fetchManglik(formData),
    fetchKalSharp(formData),
    fetchPitraDosha(formData),
    fetchSadheSati(formData),
  ]);

  return (
    <DoshasClient
      manglikData={manglikData}
      kalSharpData={kalSharpData}
      pitraDoshaData={pitraDoshaData}
      satiData={satiData}
    />
  );
}
