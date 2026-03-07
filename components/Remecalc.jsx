"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";

export default function Remecalc() {
  useScrollZoom(".head-wrap");
  const { messages: t } = useLanguage();
  const remedbox = [
    { id: 1, ulname: `${t.remedies.rem1 || 'Gemstones'}`, src: "/ds-img/diamond.png", link: "/formpage", slug: "gemfol" },
    { id: 2, ulname: `${t.remedies.rem2 || 'Puja & Anusthan'}`, src: "/ds-img/onpooja.webp", link: "/formpage", slug: "pujafol" },
    { id: 3, ulname: `${t.remedies.rem3 || 'Rudraksha'}`, src: "/ds-img/cultural-celebration.png", link: "/formpage", slug: "rudrafol" },
    { id: 4, ulname: `${t.remedies.rem4 || 'Lal Kitab'}`, src: "/ds-img/booklal.png", link: "/formpage", slug: "lalkitab" },
    { id: 5, ulname: `${t.remedies.rem5 || 'Krishnamurti Paddhati'}`, src: "/ds-img/scroll.png", link: "/formpage", slug: "kp" },

  ];
  const remdosha = [
    { id: 1, ulname: `${t.doshas.dosha1 || 'Mangal Dosha'}`, src: "/ds-img/saturn.png", link: "/formpage", slug: "manglik" },
    { id: 2, ulname: `${t.doshas.dosha2 || 'Kaal Sarp Dosha'}`, src: "/ds-img/king.png", link: "/formpage", slug: "kalsharp" },
    { id: 3, ulname: `${t.doshas.dosha3 || 'Pitra Dosha'}`, src: "/ds-img/heterosexual.png", link: "/formpage", slug: "pitra" },
    { id: 4, ulname: `${t.doshas.dosha4 || 'Sadhe Sati Dosha'}`, src: "/ds-img/pitradosha.png", link: "/formpage", slug: "sadesati" },
  ];
  const calbox = [
    { id: 3, ulname: `${t.calculator.calc1 || 'Numerology Calculator'}`, src: "/ds-img/number-blocks.webp", link: "/formpage", slug: "numerokundli" },
    { id: 5, ulname: `${t.calculator.calc2 || 'Nakshatra Calculator'}`, src: "/ds-img/astrology.webp", link: "/formpage", slug: "nakform" },
    { id: 9, ulname: `${t.calculator.calc3 || 'Kundli Milan'}`, src: "/ds-img/not-compatible.png", link: "/doubleform", slug: "kundlislug" },
    { id: 9, ulname: `${t.calculator.calc4 || 'Moon Biorhythm'}`, src: "/ds-img/esoteric.png", link: "/formpage", slug: "moonbio" },
  ];
  return (
    <div className="astrology-remedies-section flex flex-col items-center justify-center relative w-full mx-auto py-0 sm:py-5 px-4 md:px-6">

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-cover bg-center opacity-100"
          style={{ backgroundImage: "url('/ds-img/bgreme.webp')" }}>
        </div>
      </div>

      <div className="remedies-and-query max-w-7xl sm:w-[85%] flex flex-col  items-start justify-between gap-4 sm:gap-5 lg:gap-8">

        <div className="grid grid-cols-1 items-start justify-center gap-4 sm:gap-5 lg:gap-8 w-full">

          <div className="heading-astro-remed relative flex flex-col w-full gap-2">
            <h1 dangerouslySetInnerHTML={{ __html: t?.remedies?.heading || "About Heading" }} className="head-wrap relative text-[#2f1254] text-md sm:text-xl lg:text-2xl py-1 sm:py-0 lg:py-0 text-center font-semibold">

            </h1>

            <div className="flex  items-center gap-2 justify-start w-full">
              <div className="relative py-3 grid w-full  items-center justify-center grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 z-10">
                {remedbox.map((rembx) => (
                  <Link href={{
                    pathname: rembx.link,
                    query: { slug: rembx.slug },
                  }}
                    key={rembx.id}
                    className="remedies-card-top hover:scale-105 head-wrap bg-linear-to-r from-orange-100 to-yellow-200 rounded-xl  sm:h-26 h-23   shadow-lg p-3 text-center flex flex-col items-center justify-center gap-2"
                  >
                    <h2 className="sm:text-sm text-xs text-black ">
                      {rembx.ulname}
                    </h2>
                    <Image className="w-8 sm:w-10 lg:w-11" src={rembx.src} width={50} height={50} alt="service image" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="heading-astro-remed relative flex flex-col w-full gap-2">
            <h1 dangerouslySetInnerHTML={{ __html: t?.doshas?.heading || "About Dosha" }} className="head-wrap relative text-[#2f1254] text-md sm:text-xl lg:text-2xl py-1 sm:py-0 lg:py-0 text-center font-semibold">
            </h1>

            <div className="flex  items-center gap-2 justify-start w-full">
              <div className="relative py-3 grid w-full  items-center justify-center grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 z-10">
                {remdosha.map((remd) => (
                  <Link href={{
                    pathname: remd.link,
                    query: { slug: remd.slug },
                  }}
                    key={remd.id}
                    className="remedies-card-top hover:scale-105 head-wrap bg-linear-to-r from-orange-100 to-yellow-200 rounded-xl  sm:h-26 h-23   shadow-lg p-3 text-center flex flex-col items-center justify-center gap-2"
                  >
                    <h2 className="sm:text-sm text-xs text-black ">
                      {remd.ulname}
                    </h2>
                    <Image className="w-8 sm:w-10 lg:w-11" src={remd.src} width={50} height={50} alt="service image" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="astro-free-calculator w-full  flex flex-col gap-2 items-center justify-center">
          <h1 dangerouslySetInnerHTML={{ __html: t?.calculator?.heading } || "About Calcculator"} className="relative head-wrap text-[#2f1254] text-md sm:text-xl lg:text-2xl py-1 sm:py-0 lg:py-0  text-center font-semibold">
          </h1>
          <div className="relative py-3 grid  max-w-7xl w-full items-center justify-center grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 z-10">
            {calbox.map((calcu, index) => (
              <Link href={calcu.link ? { pathname: calcu.link, query: { slug: calcu.slug }, } : `/${calcu.slug}`}
                key={index} className="calculator-card-top head-wrap hover:scale-105 sm:h-26 h-23  bg-linear-to-r from-orange-100 to-yellow-200 rounded-xl shadow-lg p-3 text-center flex flex-col items-center justify-center">
                <h2 className="md:text-sm text-xs   text-black ">
                  {calcu.ulname}
                </h2>
                <Image
                  className="w-8 sm:w-10 lg:w-11"
                  src={calcu.src}
                  alt="free calculator image"
                  height={15}
                  width={15}
                  loading="lazy" unoptimized />
              </Link>
            ))}

          </div>

        </div>
      </div>
    </div >
  );
}
