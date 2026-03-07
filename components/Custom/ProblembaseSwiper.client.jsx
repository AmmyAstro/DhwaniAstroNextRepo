"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProblembaseSwiper({ chathorobox }) {
  return (
    <div className="slider-horo-home w-full">

      <div className="absolute top-[50%] sm:left-[-45px] left-[5px] -lg:left-[45px] transform -translate-y-1/2 z-10" >
        <button
          aria-label="Previous Problem"
          className="swiper-button-prev-blg"
        >
          ‹
        </button>
      </div>

      <div className="absolute top-[50%] sm:right-[-45px] right-1 -lg:right-[45px] transform -translate-y-1/2 z-10">
        <button
          aria-label="Next Problem"
          className="swiper-button-next-blg"
        >
          ›
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next-blg",
          prevEl: ".swiper-button-prev-blg",
        }}
        autoplay={false}
        loop
        className="mySiperblog"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-navigation-size": "25px",
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {chathorobox.map((chatbox) => (
          <SwiperSlide key={chatbox.id}>
            <Link
              href={chatbox.href}
              className="prob-wrap prblm-card-top flex items-center justify-center sm:w-75 sm:h-55 xl:min-w-70 xl:h-60 min-w-40 sm:min-w-55 h-40"
            >
              <Image
                src={chatbox.src}
                className="prblm-image"
                width={35}
                height={35}
                alt={chatbox.alt}
                unoptimized
                loading="lazy"
              />

              <div className="flex items-center justify-center absolute bottom-2 w-full left-0">
                <h2 className="prblm-txt w-[90%] rounded-full border text-xs sm:text-sm lg:text-base">
                  {chatbox.ulname}
                </h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
