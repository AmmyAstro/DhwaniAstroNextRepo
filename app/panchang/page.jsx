import PanchangPage from "./PanchangPage";
import { fetchAdvPanchang, fetchChaughadiya, fetchHoraMuhurat } from "../api/astroFetch";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Today’s Panchang | Hindu Calendar & Muhurta",
  description: "Get today’s Panchang with tithi, nakshatra, yoga, karan, and auspicious muhurats.",
};

export default async function Panchang() {
  const now = new Date();
  const params = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    lat: 28.6139,
    lon: 77.209,
    tzone: 5.5,
    hour: now.getHours(),
    min: now.getMinutes(),
  };

  const data = await fetchAdvPanchang(params);
  const chaughadiyaData = await fetchChaughadiya(params);
  const horaData = await fetchHoraMuhurat(params);

  return (
    <PanchangPage
      initialPanchang={data?.data || data}
      initialChaughadiya={chaughadiyaData?.data || chaughadiyaData}
      initialHora={horaData?.data || horaData}
    />
  );
}
