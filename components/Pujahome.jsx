"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"

export default function Pujahome() {
  const pujasku = [
    { id: 1, src: "/ds-img/onpooja.webp", alt: "Home", ulname: "Online Puja" },
    {
      id: 2,
      src: "/ds-img/chdwa-rem.webp",
      alt: "Home",
      ulname: " Online Chadhawa",
    },
    {
      id: 3,
      src: "/ds-img/ladoo.webp",
      alt: "Home",
      ulname: "   Authentic Temple Prasad",
    },
    { id: 4, src: "/ds-img/omhnd.png", alt: "Home", ulname: " Daily Darshan" },
  ];
  return (
    <div className="home-puja-section flex flex-col items-center justify-center relative w-full mx-auto py-10">
      <div className="absolute inset-0 shadow-lg flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/ds-img/dspuja.webp')" }}
        ></div>
      </div>

      <div className="puja-section-main-home flex flex-col items-center justify-center">
        <h1 className="relative text-white bg-[#00000880] rounded-lg p-3 text-md sm:text-4xl mx-4 sm:mx-0 text-center font-semibold">
          •
          <strong>
            Experience Hindu Pujas & Rituals with Dhwani Astro 🛕🕉️
          </strong>
          •
        </h1>

        <div className="relative py-3 grid max-w-7xl items-center justify-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 z-10">
          {pujasku.map((pujali) => (
            <div
              key={pujali.id}
              className="puja-card-top w-45 sm:w-38 xl:w-55 rounded-xl shadow-lg p-3 text-center flex sm:flex-col items-center justify-center"
            >
              <Image
                className="w-11 sm:w-15 puja-ser-img"
                src={pujali.src}
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
              />
              <h3 className="text-[10px] sm:text-base font-semibold text-white">
                {pujali.ulname}
              </h3>
            </div>
          ))}
          ;
        </div>

        <div className="puja-images-marquee-sec relative flex flex-col">
          <div className="puja-images-wrapper">
            <div className="puja-image-gradient-l"></div>

            <div className="puja-images-sec flex py-5 px-5">
              <Image
                src="/ds-img/puja2.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
              <Image
                src="/ds-img/puja1.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
              <Image
                src="/ds-img/puja3.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
              <Image
                src="/ds-img/puja4.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
              <Image
                src="/ds-img/puja5.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
              <Image
                src="/ds-img/puja6.webp"
                alt="Puja image"
                height={15}
                width={15}
                loading="lazy"
                unoptimized
                className="w-35 h-25 sm:w-50"
              />
            </div>
            <div className="puja-image-gradient-r"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
