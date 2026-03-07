"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useScrollZoom from "@/Hooks/scrollZoom";

export default function AstrostoreSlider({ items }) {
  useScrollZoom(".head-wrap");

  return (
    <div className="relative w-full">
      <div className="absolute top-[55%] sm:left-[-5px] -left-2.5 lg:left-[-50px] transform -translate-y-1/2 z-10">
        <button aria-label="Previous Store Item" className="swiper-button-prev-str">
          ‹
        </button>
      </div>

      <div className="absolute top-[55%] sm:right-[-5px] -right-2.5 lg:right-[-50px] transform -translate-y-1/2 z-10">
        <button aria-label="Next Store Item" className="swiper-button-next-str">
          ›
        </button>
      </div>
 
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next-str",
          prevEl: ".swiper-button-prev-str",
        }}
        autoplay={false}
        loop 
        className="astrostoreSwiper"
        style={{
          "--swiper-navigation-color": "#2f1254",
          "--swiper-navigation-size": "25px",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="prblm-card-top head-wrap flex items-center justify-center sm:w-75 sm:h-55 xl:min-w-70 xl:h-60 min-w-40 sm:min-w-55 h-40 relative"
            >
              <Image
                className="store-img-home rounded-xl"
                src={item.img}
                unoptimized
                height={120}
                width={120}
                loading="lazy"
                alt={item.name}
              />
  
              <div className="flex items-center justify-center absolute bottom-2 w-full left-0">
                <h2 className="prblm-txt w-[90%] rounded-full border justify-self-center self-center place-self-center text-xs sm:text-sm lg:text-base text-center bg-white/80 backdrop-blur-md shadow-md">
                  {item.name}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
