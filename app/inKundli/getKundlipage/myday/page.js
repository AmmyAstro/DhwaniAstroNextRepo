// app/inKundli/getKundlipage/myday/page.js

export const revalidate = 3600;

import { Suspense } from "react";
import { fetchMyDay, fetchNumeroDay } from "@/app/api/astroapi.server";
import { decodeKundliHash } from "@/utils/kundliHash";
import MydayClient from "@/components/Kundli/Kundliinter/Myday/MydayClient";

export default async function Page({ searchParams }) {
  const hash = searchParams.hash;

  if (!hash) {
    return <p className="text-center text-gray-400">Missing Kundli data</p>;
  }

  const formData = decodeKundliHash(hash);

  if (!formData) {
    return <p className="text-center text-gray-400">Invalid or expired link</p>;
  }

  const [daily, numero] = await Promise.all([
    fetchMyDay(formData),
    fetchNumeroDay(formData),
  ]);

  return (
    <Suspense
      fallback={
        <p className="text-center text-purple-600">
          Loading daily predictions...
        </p>
      }
    >
      <MydayClient daily={daily} numero={numero} />
    </Suspense>
  );
}
