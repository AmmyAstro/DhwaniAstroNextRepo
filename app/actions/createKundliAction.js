"use server";

import { redirect } from "next/navigation";
import { createKundliHash } from "@/utils/kundliHash";
import { saveKundli } from "@/lib/kundliStore";

export async function createKundliAction(formData) {
  const payload = {
    name: formData.get("name"),
    day: Number(formData.get("day")),
    month: Number(formData.get("month")),
    year: Number(formData.get("year")),
    hour: Number(formData.get("hour")),
    min: Number(formData.get("min")),
    lat: Number(formData.get("lat")),
    lon: Number(formData.get("lon")),
    tzone: Number(formData.get("tzone")),
    birthplace: formData.get("birthplace"),
  };


  if (Number.isNaN(payload.lat) || Number.isNaN(payload.lon)) {
    throw new Error("Invalid form submission");
  }

  const hash = createKundliHash(payload);

  await saveKundli(hash, payload);

  const slug = formData.get("slug");

  redirect(`/formpage/formresult/${slug}?hash=${hash}`);
}
