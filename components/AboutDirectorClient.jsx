"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import useScrollZoom from "@/Hooks/scrollZoom";
import Image from "next/image";
import { useLanguage } from "@/app/context/LangContext";

export default function AboutDirectorClient({ messages }) {
  useScrollZoom(".head-wrap");
  const { messages: t } = useLanguage();

  return (
    <>
      <h1
        className="text-[#2f1254] text-md sm:text-xl lg:text-2xl text-center font-semibold"
        dangerouslySetInnerHTML={{
          __html: t?.about?.heading || "",
        }}
      ></h1>
      <div className="grid grid-cols-7 gap-4 items-center">

        <div className="col-span-2 w-full  object-contain h-60 overflow-hidden rounded-xl ">
          <LiteYouTubeEmbed
            id="Z1xtQkosANM"
            title="Founder Video"
            poster="hqdefault"
            noCookie
          />
        </div>

        <div className="col-span-5 px-3 place-self-start ">
          <h2 className="text-[#2f1254] text-md sm:text-xl font-semibold">
            {t?.about?.tagline}
          </h2>

          <p className="text-black" dangerouslySetInnerHTML={{ __html: t?.about?.paragraph }} />

          <div className="flex items-center gap-5 mt-4">
            <Image src="/ds-img/legacy.webp" width={56} height={60} alt="Legacy" />
            <div className="text-black">
              <h4>{t?.about?.legacyTitle}</h4>
              <p>{t?.about?.legacySubtitle}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
