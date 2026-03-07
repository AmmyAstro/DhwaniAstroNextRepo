// app/formpage/formresult/kalsharp/page.js

import { fetchKalSharp, fetchPujaSuggestion } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import KalsharpClient from "./KalsharpClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const [kalData, pujaData] = await Promise.all([
    fetchKalSharp(formData),
    fetchPujaSuggestion(formData),
  ]);

  if (!kalData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Kalsharp Dosha.
      </p>
    );
  }


  const kalSarpaPuja =
    pujaData?.suggestions?.find(
      (s) => s.puja_id === "KAL_SARPA"
    ) || null;

  return (
    <KalsharpClient
      kalData={kalData}
      kalSarpaPuja={kalSarpaPuja}
    />
  );
}
