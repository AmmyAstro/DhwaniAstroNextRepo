import {
  fetchKPPlanets,
  fetchKPHouses,
  fetchKPPlanetSignificators,
} from "@/app/api/astroapi.server";

import { decodeKundliHash } from "@/utils/kundliHash";
import KpClient from "./KpClient";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center">Missing Kundli data</p>;
  }


  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center">Invalid or expired link</p>;
  }

  const [kpPlanets, kpHouses, kpPlanetSig] = await Promise.all([
    fetchKPPlanets(formData),
    fetchKPHouses(formData),
    fetchKPPlanetSignificators(formData),
  ]);

  if (!kpPlanets || !kpHouses || !kpPlanetSig) {
    return (
      <p className="text-center text-red-500">
        Failed to load KP report.
      </p>
    );
  }


  return (
    <KpClient
      kp={kpPlanets}
      houseData={kpHouses}
      planetSigData={kpPlanetSig}
    />
  );
}
