

export const revalidate = 3600; 

import {
  fetchCharDasha,
  fetchCurrentCharDasha,
  fetchYoginiDasha,
  fetchCurrentYoginiDasha,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import CharYogClient from "./CharYogClient";

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
    charData,
    charcData,
    yogniData,
    yognicData,
  ] = await Promise.all([
    fetchCharDasha(formData),
    fetchCurrentCharDasha(formData),
    fetchYoginiDasha(formData),
    fetchCurrentYoginiDasha(formData),
  ]);

  return (
    <section className="w-full">
      <CharYogClient
        charData={charData}
        charcData={charcData}
        yogniData={yogniData}
        yognicData={yognicData}
      />
    </section>
  );
}
