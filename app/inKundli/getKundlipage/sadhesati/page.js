// app/inKundli/getKundlipage/sadhesati/page.js

import {
  fetchSadheSati,
  fetchSadheRemedies,
  fetchSadheDetails,
} from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import SadeSatiClient from "./SadeSatiClient";

export const revalidate = 3600; 

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Kundli session expired</p>;
  }


  const [satiData, remeData, detailsData] = await Promise.all([
    fetchSadheSati(formData),
    fetchSadheRemedies(formData),
    fetchSadheDetails(formData),
  ]);

  if (!satiData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Sade Sati data
      </p>
    );
  }

  return (
    <SadeSatiClient
      satiData={satiData}
      remeData={remeData}
      detailsData={detailsData}
    />
  );
}
