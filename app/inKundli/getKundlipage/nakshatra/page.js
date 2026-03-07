// app/inKundli/getKundlipage/nakshatra/page.js

export const revalidate = 3600;

import {
  fetchNakPrev,
  fetchNakToday,
  fetchNakTomorrow,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import NakshatraTabsClient from "./NakshatraTabsClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;
  const defaultTab = searchParams.tab || "naktoday";

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }

  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Invalid or expired link</p>;
  }

  const [prev, today, tomorrow] = await Promise.all([
    fetchNakPrev(formData),
    fetchNakToday(formData),
    fetchNakTomorrow(formData),
  ]);

  return (
    <NakshatraTabsClient
      prev={prev}
      today={today}
      tomorrow={tomorrow}
      defaultTab={defaultTab}
    />
  );
}
