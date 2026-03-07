

import { fetchManglik } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import ManglikClient from "./ManglikClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const manglikData = await fetchManglik(formData);

  if (!manglikData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Manglik Dosha report.
      </p>
    );
  }


  return <ManglikClient manglik={manglikData} />;
}
