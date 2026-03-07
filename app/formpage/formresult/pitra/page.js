// app/formpage/formresult/pitradosha/page.js

import { fetchPitraDosha } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import PitradoshaClient from "./PitradoshaClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const pitraData = await fetchPitraDosha(formData);

  if (!pitraData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Pitra Dosha report.
      </p>
    );
  }

  
  return <PitradoshaClient pitraData={pitraData} />;
}
