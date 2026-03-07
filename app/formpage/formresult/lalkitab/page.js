import {
  fetchLalKitab,
  fetchLalDebt,
  fetchLalHouses,
  fetchLalPlanet,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import LalkitabClient from "../../../inKundli/getKundlipage/lalkitab/LalkitabClient";

export default async function Page({ params, searchParams }) {
  const { slug } = params;
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }

 
  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }


  const [kitabData, debtData, houseData, planetData] =
    await Promise.all([
      fetchLalKitab(formData),
      fetchLalDebt(formData),
      fetchLalHouses(formData),
      fetchLalPlanet(formData),
    ]);

  if (!kitabData && !debtData && !houseData && !planetData) {
    return (
      <p className="text-center text-red-500">
        Failed to load Lal Kitab report.
      </p>
    );
  }


  return (
    <LalkitabClient
      kitabData={kitabData}
      debtData={debtData}
      houseData={houseData}
      planetData={planetData}
    />
  );
}
