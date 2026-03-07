"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import useScrollZoom from "@/Hooks/scrollZoom";
import { useLanguage } from "@/app/context/LangContext";


const ProblembaseSwiper = dynamic(
  () => import("./ProblembaseSwiper.client"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full bg-gray-100 rounded-xl animate-pulse" />
    ),
  }
);

export default function ProblembaseClient({ t }) {
  const { messages } = useLanguage();
  useScrollZoom(".head-wrap, .prob-wrap");

  
  const chathorobox = [
    {
      id: 7,
      src: "/prblm/marriage.webp",
      alt: "Marriage problem astrology consultation",
      ulname: messages?.problem?.prob7 || "Marriage",
      href: "/marriage",
    },
    {
      id: 6,
      src: "/prblm/educat.webp",
      alt: "Education problem astrology consultation",
      ulname: messages?.problem?.prob6 || "Education",
      href: "/education",
    },
    {
      id: 1,
      src: "/ds-img/love1.webp",
      alt: "Love problem astrology consultation",
      ulname: messages?.problem?.prob1 || "Love",
      href: "/problemLove",
    },
    {
      id: 2,
      src: "/ds-img/jobb.webp",
      alt: "Job problem astrology consultation",
      ulname: messages?.problem?.prob2 || "Job",
      href: "/jobprob",
    },
    {
      id: 3,
      src: "/prblm/moneyy.webp",
      alt: "Money and fame problem astrology consultation",
      ulname: messages?.problem?.prob3 || "Money & Fame",
      href: "/moneyprob",
    },
    {
      id: 4,
      src: "/prblm/healthpr.webp",
      alt: "Health problem astrology consultation",
      ulname: messages?.problem?.prob4 || "Health",
      href: "/health",
    },
    {
      id: 5,
      src: "/prblm/pregg.jpeg",
      alt: "Pregnancy astrology consultation",
      ulname: messages?.problem?.prob5 || "Pregnancy",
      href: "/pregnancy",
    },
  ];

  return (
    <section className="relative w-full mx-auto py-5 sm:py-10 px-4">

   
      <div className="absolute inset-0">
        <Image
          src="/ds-img/ZODIAC-CONSTELL.webp"
          alt="Zodiac constellation astrology background"
          fill
          priority={false}
          className="object-cover opacity-5"
        />
      </div>

     
      <div className="relative z-10 flex flex-col items-center">
        <div className="sm:max-w-7xl w-full p-1">

         
          <div className="head-wrap">
            <h1 className="text-[#2f1254] text-md sm:text-xl lg:text-2xl pb-3 text-center font-semibold">
              {messages?.problem?.heading ||
                "Get expert astrological guidance to overcome your problems & challenges"}
            </h1>
          </div>

       
          <div className="py-2.5">
            <div className="relative w-full h-[180px] sm:h-[220px] lg:h-[260px]">
              <ProblembaseSwiper chathorobox={chathorobox} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
