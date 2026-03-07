import HoroscopeClient from "@/components/navbarcomp/Horoscope/Horoscope";
import ZodiacServer from "@/app/zodiac/ZodiacServer";
import Freereport from "@/components/Smcompo/Freereport";
import { ZodiacProvider } from "../context/ZodiacContext";

export const metadata = {
  title: "Daily Horoscope | Free Zodiac Predictions",
  description:
    "Read your free daily horoscope based on Vedic Astrology. Discover insights about love, career, and life through your zodiac sign.",
  keywords:
    "horoscope, zodiac signs, astrology, daily horoscope, vedic astrology, sun sign, moon sign",
  openGraph: {
    title: "Free Daily Horoscope | Vedic Astrology Predictions",
    description:
      "Explore personalized daily horoscope insights for all zodiac signs.",
    url: "https://yourwebsite.com/horoscope",
    images: [
      {
        url: "https://yourwebsite.com/ds-img/horoscope-banner.jpg",
        width: 800,
        height: 600,
        alt: "Horoscope Signs",
      },
    ],
  },
};


export default async function HoroscopePage() {
  const horoscopezod = [
    { name: "Aries", img: "/ds-img/ARIESn.webp", indate: "Mar 21 - Apr 19" },
    { name: "Taurus", img: "/ds-img/Taurusn.webp", indate: "Apr 20 - May 20" },
    { name: "Gemini", img: "/ds-img/GEMINIn.webp", indate: "May 21 - Jun 20" },
    { name: "Cancer", img: "/ds-img/cancern.webp", indate: "Jun 21 - Jul 22" },
    { name: "Leo", img: "/ds-img/LEO.webp", indate: "Jul 23 - Aug 22" },
    { name: "Virgo", img: "/ds-img/virgon.webp", indate: "Aug 23 - Sep 22" },
    { name: "Libra", img: "/ds-img/LIBRAn.webp", indate: "Sep 23 - Oct 22" },
    { name: "Scorpio", img: "/ds-img/Scorpio.webp", indate: "Oct 23 - Nov 21" },
    { name: "Sagittarius", img: "/ds-img/SAGITTARIUSn.webp", indate: "Nov 22 - Dec 21" },
    { name: "Capricorn", img: "/ds-img/CAPRICORNn.webp", indate: "Dec 22 - Jan 19" },
    { name: "Aquarius", img: "/ds-img/Aquariusn.webp", indate: "Jan 20 - Feb 18" },
    { name: "Pisces", img: "/ds-img/PISCESn.webp", indate: "Feb 19 - Mar 20" },
  ];

  return (
    <>
        <ZodiacProvider>
      <div className="flex flex-col max-w-7xl gap-8 justify-center">


        <HoroscopeClient horoscopezod={horoscopezod} />
        <div id="zodiac">
          <ZodiacServer />
        </div>
        <div>
          <Freereport />
        </div>
      </div>
      </ZodiacProvider>
    </>
  );
}
