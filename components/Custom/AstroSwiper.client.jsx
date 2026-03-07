"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CustomButton from "./CustomButton";
import { AstrologerPrice } from "@/app/common" ;

export default function AstroSwiper({
  astrologerlist,
  busyAstros,
  router,
  callredirect,
  chatredirect,
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={2}
      navigation={{
        nextEl: ".swiper-button-next-astro",
        prevEl: ".swiper-button-prev-astro",
      }}
      resizeObserver={false}
      observer={false}
      observeParents={false}
      autoplay={false}
      loop={true}
      className="mySwiperhoro"
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "25px",
      }}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        480: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 },
      }}
    >
      {astrologerlist?.map((astro, index) => (
        <SwiperSlide key={index}>
          <div>
            <div
              className="relative w-full p-1 overflow-hidden bg-center bg-cover rounded-lg shadow-lg md:h-77 h-68 lg:h-80 sm:h-88 sm:p-1 back-astro-image"
              style={{ backgroundImage: "url('/ds-img/mnew.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#00000030] bg-opacity-0"></div>

              <div className="relative h-full p-2 flex rounded-lg flex-col items-center text-white bg-linear-to-r from-[#f4eaffc9] via-[#e1e7fda8] to-[#f3e8ffb8]">
                <div className="flex flex-col items-start justify-start gap-2 astro-image-price-box">
                  <div className="flex items-center justify-center gap-1">
                    <Image
                      src={`/ds-img/${astro.profile_image}`}
                      className="object-cover w-16 h-16 border-4 border-yellow-400 rounded-full shadow-md sm:w-22 sm:h-22"
                      width={80}
                      height={80}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      alt={astro.full_name}
                      onClick={() =>
                        router.push(`/astrologerprofile/${astro?.id}`)
                      }
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center p-1 rounded-lg md:p-2 bg-linear-to-r from-violet-200 to-purple-200">
                    <h2
                      className="text-sm font-bold text-black sm:text-base"
                      onClick={() =>
                        router.push(`/astrologerprofile/${astro?.id}`)
                      }
                    >
                      {astro?.full_name}
                    </h2>

                    <p className="text-[10px] md:text-xs text-black">
                      {astro?.specialisation}
                    </p>

                    <span className="flex gap-1">
                      <p className="text-[10px] md:text-xs text-yellow-300 bg-[#00000880] rounded-lg py-1 px-2">
                        Exp: {astro?.experience} Yrs
                      </p>
                      <p className="text-[10px] md:text-xs bg-[#00000880] text-yellow-300 rounded-lg py-1 px-2">
                        {astro?.rating}
                      </p>
                    </span>

                    <div className="mt-2 text-[10px] sm:text-xs font-semibold">
                      <AstrologerPrice mode="chat" astro={astro} />
                    </div>
                  </div>
                </div>

                <div className="flex justify-around w-full mt-1 space-x-4">
                  {busyAstros.includes(astro?.id) ? (
                    <CustomButton variant="yellow">
                      <h5 className="text-white">Busy</h5>
                    </CustomButton>
                  ) : (
                    <CustomButton
                      variant="gcircle"
                      onClick={() => callredirect(astro?.id)}
                    >
                      Call
                    </CustomButton>
                  )}

                  <CustomButton
                    variant="gcircle"
                    onClick={() => chatredirect(astro?.id)}
                  >
                    Chat
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
