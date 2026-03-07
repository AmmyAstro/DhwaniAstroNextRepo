// app/formpage/formresult/moonbio/page.js

import { fetchMoonBio } from "../../../api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import MoonBioClient from "./MoonBioClient";

export const revalidate = 3600; 

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }

 
  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }

 
  const moonData = await fetchMoonBio(formData);

  if (!moonData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Moon Biorhythm data.
      </p>
    );
  }

 
  return <MoonBioClient daily={moonData} />;
}
