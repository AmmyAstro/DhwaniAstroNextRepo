// app/inKundli/getKundlipage/numerokundli/page.js

import {
  fetchNumeroPred,
  fetchNumeroDet,
  fetchNumeroRepo,
  fetchNumeroFav,
  fetchNumeroPlace,
  fetchNumeroFast,
  fetchNumeroLord,
  fetchNumeroMantra,
} from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import NumerokundliClient from "./NumerokundliClient";

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

  
  const [
    pred,
    det,
    repo,
    fav,
    place,
    fast,
    lord,
    mantra,
  ] = await Promise.all([
    fetchNumeroPred(formData),
    fetchNumeroDet(formData),
    fetchNumeroRepo(formData),
    fetchNumeroFav(formData),
    fetchNumeroPlace(formData),
    fetchNumeroFast(formData),
    fetchNumeroLord(formData),
    fetchNumeroMantra(formData),
  ]);

  if (!pred) {
    return (
      <p className="text-center text-red-500">
        Failed to load Numerology data
      </p>
    );
  }

  return (
    <NumerokundliClient
      data={{
        main: pred,
        det,
        repo,
        fav,
        place,
        fast,
        lord,
        mantra,
      }}
    />
  );
}
