"use client";

import Image from "next/image";
import Link from "next/link";

import Searchtop from "../Smcompo/Searchtop";
import { Healdata } from "./Healcompo/healdata";
import { useState } from "react";
import Freereport from "../Smcompo/Freereport";
import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";
 
export default function Healing() {
  const [search, setSearch] = useState("");
  const { messages: t } = useLanguage();
  useScrollZoom(".head-wrap");

  const data = Healdata();
  const filteredData = Object.entries(data).filter(([key, heal]) =>
    heal.secondSection.hnm.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="relative flex flex-col items-center self-center p-2 sm:p-5 w-full xl:w-[90%]">

      <Searchtop
        searchPlaceholder

        searchValue={search}
        onSearchChange={e => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
        {filteredData.length > 0 ? (
          filteredData.map(([key, heal]) => (
            <div
              key={key}
              className="element-item head-wrap cat-Service rounded-4xl overflow-hidden bg-[#892be226] shadow-xl text-center"
            >
              <div className="relative w-full overflow-hidden sm:h-50 h-35">
                <Image
                  src={heal.firstSection.srcc}
                  alt={heal.secondSection.hnm}
                  width={300}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-1 sm:p-2">
                <h3 className="text-[#8a2be2] font-bold text-base sm:text-lg mb-1">
                  {heal.secondSection.hnm}
                </h3>

                <p className="hidden text-xs text-gray-500 sm:block">
                  {heal.secondSection.hdes.slice(0, 75)}
                  {heal.secondSection.hdes.length > 75 ? "..." : ""}
                </p>

                <div className="flex flex-col items-center justify-around w-full gap-2 mt-1 mb-1 sm:mt-3 lg:flex-row sm:gap-3">
                  <div className="flex flex-col items-center w-full gap-1">
                    <span className="inline-block text-[#8a2be2] bg-white px-2 py-1 rounded-full font-bold text-xs sm:text-base shadow-md">
                      ₹ {heal.secondSection.startprice}{" "}
                      <span className="text-[10px] sm:text-xs">{t?.healing?.per || "Per Session"}</span>
                    </span>
                  </div>
                  <Link
                    href={heal.link.link}
                    className="bg-[#8a2be2] w-[80%] text-white px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-base font-medium hover:bg-[#7325c0] transition"
                  >
                    {t?.healing?.book || "Book Now"}
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found...</p>
        )}
      </div>

      <Freereport />

    </section>
  );
}
