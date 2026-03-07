"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { desktop: "/frame-banner.webp", mobile: "/ds-img/mobvw.png" },
  { desktop: "/dhwaniastro.webp", mobile: "/ds-img/mobvw.png" },
  { desktop: "/ds-img/banner2.webp", mobile: "/ds-img/mobvw.png" },
  { desktop: "/ds-img/banner3.webp", mobile: "/ds-img/mobvw.png" },
];

export default function BannerSwiper() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      updateOnWindowResize
      resizeObserver={false}
      observer={false}
      observeParents={false}
      className="mySwiper w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[230px] sm:h-[215px] lg:h-[450px]">
            <Image
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              src={slide.desktop}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
