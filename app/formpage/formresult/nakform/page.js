

import { fetchMyDay } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import NakshatraClient from "./NakshatraClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }

  
  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const dailyData = await fetchMyDay(formData);

  if (!dailyData || !dailyData.prediction) {
    return (
      <p className="text-center text-red-500">
        Failed to load Nakshatra prediction.
      </p>
    );
  }

 
  return <NakshatraClient daily={dailyData} />;
}
