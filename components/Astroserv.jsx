"use client"; 

import useScrollZoom from "@/Hooks/scrollZoom";
import Image from "next/image";
import Link from "next/link";

export default function Astroserv() {
  useScrollZoom(".head-wrap");
  const astroservices = [
    { name: "Muhurata Consultation", img: "/prblm/muhuimage.png", link: "/muhurata", },
    { name: "Match Making", img: "/ds-img/match-mak.png", link: "/matching", },
    { name: "Health Consultation", img: "/ds-img/Medical.jpg", link: "/healthcon", },
    { name: "Child Related Consultation", img: "/ds-img/childbirth.jpg", link: "/child", },
    { name: "Property/Land/House Consultation", img: "/ds-img/Property.jpeg", link: "/property", },
    { name: "Legal Case Consultation", img: "/ds-img/legal-astro.jpg", link: "/legal", },
    { name: "Business Consultation", img: "/ds-img/buisness.png", link: "/business", },
    { name: "Marriage / Relationship", img: "/ds-img/marriage.webp", link: "/marriagecon", },
    { name: "Yearly Chart Prediction", img: "/ds-img/fn.jpg", link: "/yearlyy", },

  ];
  return (
    <section className="healing_service_new mt-0 self-center sm:max-w-7xl w-full  p-4 ">
      <div className="container">
        <h1 className="relative head-wrap text-[#2f1254] text-md sm:text-xl lg:text-2xl py-1  sm:py-5 text-center font-semibold">
          • Personalized <strong>ASTROLOGY SERVICES</strong> •
        </h1>
        <div className="main-product-store-home ">
          {astroservices.map((astroser, index) => (
            <Link href={astroser.link} key={index} className="free_store_pro-home head-wrap sm:w-75 sm:h-55 xl:min-w-70 xl:h-60 min-w-40 sm:min-w-55 h-40" >
              <Image className="store-img-home"
                src={astroser.img} unoptimized
                height={120} width={120} loading="lazy" alt="Personalized services" />
              <div className="flex items-center justify-center absolute bottom-2 w-full left-0">
                <h3 className="prblm-txt w-[90%] rounded-full border justify-self-center self-center  place-self-center text-xs sm:text-sm lg:text-base ">
                  {astroser.name}
                </h3>
              </div>
            </Link>
          ))};
        </div>
      </div>
    </section>
  )
};