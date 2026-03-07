"use client";

import Image from "next/image";
import Link from "next/link";
import Searchtop from "../Smcompo/Searchtop";
import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";
export default function Dhservices() {
  const {messages:t} = useLanguage();
  useScrollZoom(".head-wrap");
  const dhservice = [
    {
      name: `${t?.healing?.dh1 || "Healing"}`,
      img: "/ds-img/ser1.webp",
      href: "/inHealing",
    },
    {
      name: `${t?.healing?.dh2 ||"Puja"}`,
      img: "/ds-img/ser2.webp",
      href: "https://shop.dhwaniastro.com/collections/online-puja"
    },
    {
      name: `${t?.healing?.dh3 ||"Face Reading"}`,
      img: "/ds-img/ser3.webp",
      href: "/inHealing/faceread",
    },
    {
      name: `${t?.healing?.dh4 ||"Past Life Regression"}`,
      img: "/ds-img/ser4.webp",
      href: "/inHealing/pastlife",
    },
    {
      name:`${t?.healing?.dh5 || "Spells"}`,
      img: "/ds-img/ser5.webp",
      href: "/spelling"
    },
    {
      name: `${t?.healing?.dh6 || "Birth Time Rectification"}`,
      img: "/ds-img/ser6.webp",
      href: "/inHealing/birth",
    },
    {
      name:  `${t?.healing?.dh7 ||"Pendulum Dowsing"}`,
      img: "/ds-img/ser7.webp",
      href: "/inHealing/pendulum",
    },
  ];

  return (
    <section aria-label="Healing Services List" className=" relative p-2 sm:p-5 flex w-full flex-col items-center self-center ">
   <Searchtop/>


      <div className="healing-card-main grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 py-5 xl:p-5 w-full xl:w-[90%]">
        {dhservice.map((dhser, index) => (
          <div
            key={index}
            className="element-item head-wrap cat-Service  rounded-4xl overflow-hidden bg-[#892be226] shadow-xl text-center"
            data-category="cat-Service"
          >
            <div className="block">
              <div className="relative w-full sm:h-50 h-35 overflow-hidden">
                <Image
                  src={dhser.img}
                  alt={`Image of ${dhser.name} service`}
                  className="w-full h-full object-cover"
                  width={300}
                  height={160}
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 90%, transparent 100%)",
                  }}
                />
              </div>

              <div className="sm:p-2 p-1">
                <h3 className="text-[#8a2be2] font-bold text-base  sm:text-lg mb-1">
                  {dhser.name}
                </h3>

                <div className="mt-1 sm:mt-1 mb-1 flex flex-col lg:flex-row w-full items-center justify-around gap-2 sm:gap-3">
                  <Link
                    href={dhser.href} aria-label={`Explore ${dhser.name} service`}
                    className="bg-[#8a2be2] w-[60%] text-white px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-base hover:bg-[#7325c0] transition">
                    {t?.healing?.exp || "Explore Now"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
