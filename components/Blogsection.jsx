"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLanguage } from "@/app/context/LangContext";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomButton from "./Custom/CustomButton";
import useScrollZoom from "@/Hooks/scrollZoom";

export default function Blogsection() {
  const { messages: t } = useLanguage();
  useScrollZoom(".head-wrap");
  const blogcardarray = [
    {
      id: 1,
      src: "/ds-img/onman.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "666",
    },
    {
      id: 2,
      src: "/ds-img/ganc.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "1232",
    },
    {
      id: 3,
      src: "/ds-img/dhg.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "8732",
    },
    {
      id: 4,
      src: "/ds-img/onman.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "12372",
    },
    {
      id: 5,
      src: "/ds-img/dhg.webp",
      ulname: "Ganesh Chaturthi 2024: Powerful Remedies to Remove Obstacles ",
      dat: "September 5, 2024",
      vw: "2",
    },
  ];

  return (
    <section className="flex flex-col gap-4 w-full items-center self-center sm:max-w-7xl sm:my-4 p-3 ">
      <div className="py-3 flex flex-col gap-2">
        <h1 dangerouslySetInnerHTML={{ __html: t?.hblog?.head || "Latest Blogs" }} className="relative head-wrap text-[#2f1254] text-md sm:text-xl lg:text-2xl text-center font-semibold" />


        <span className="relative head-wrap text-[#2f1254] text-xs sm:text-sm text-center  ">{t?.hblog?.tag || "Tag line"}</span>

      </div>
      <div className="slider-astrocard-home  w-full relative">
       
        <div className="absolute top-[59%] sm:left-[-5px] -left-2 lg:left-[-50px] transform -translate-y-1/2 z-10">
          <button aria-label="Previous Blog" className="swiper-button-prev-blg">‹</button>
        </div>
        <div className="absolute top-[59%] sm:right-[-5px] -right-2 lg:right-[-50px] transform -translate-y-1/2 z-10">
          <button aria-label="Next Blog" className="swiper-button-next-blg">›</button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next-blg",
            prevEl: ".swiper-button-prev-blg",
          }}
          // pagination={{ clickable: true }}
          autoplay={false}
          loop={true}
          resizeObserver={false}
          observer={false}
          observeParents={false}
          className="mySiperblog"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "25px",

          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {blogcardarray.map((blgsec, i) => (
            <SwiperSlide key={blgsec.id} style={{ width: "100%" }}>
              <Link href="#" className="head-wrap">
                <div className="blog-bx rounded-2xl flex flex-col w-[90%] mx-auto">
                  <Image
                    src={blgsec.src}
                    className="bl-im rounded-2xl"
                    width={400}
                    height={250}
                    alt="blog image"
                    priority={i === 0}
                    loading={i === 0 ? "eager" : "lazy"}
                  />

                  <div className="bl-con px-2  flex flex-col  justify-between">
                    <div href="#" className="text-decoration-none">
                      <h6 className="bl-h line-clamp-2">{blgsec.ulname}</h6>
                    </div>
                    <div className="bldate gap-2 py-1  items-center justify-between ">
                      <span className="bldat1 gap-1 flex items-center flex-col xl:flex-row">
                        <span className="bl-d-t flex items-center text-black">
                      

                          <svg fill="#000000" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z" /></svg>
                          {blgsec.dat}
                        </span> &nbsp; { }
                        <span className="bl-d-c text-black">
                          •&nbsp;&nbsp;Posted By DhwaniAstro{" "}
                        </span>
                      </span>
                    </div>
                    <CustomButton
                      aria-label="Read Blog"
                      variant={"purple"} className="text-xs w-fit px-5 rounded-full place-self-center hover:scale-102">Read Blog</CustomButton>
                  </div>

                  <div className="review_upper_image">
           
                    <svg width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#fff" d="M8,2 C14,2 16,8 16,8 C16,8 14,14 8,14 C2,14 0,8 0,8 C0,8 2,2 8,2 Z M8,4 C5.76219,4 4.27954,5.08865 3.28644,6.28037 C2.78373,6.88363 2.42604,7.49505 2.1951,7.95693 L2.17372,8 L2.1951,8.04307 C2.42604,8.50495 2.78373,9.11637 3.28644,9.71963 C4.27954,10.9113 5.76219,12 8,12 C10.2378,12 11.7205,10.9113 12.7136,9.71963 C13.2163,9.11637 13.574,8.50495 13.8049,8.04307 L13.8263,8 L13.8049,7.95693 C13.574,7.49505 13.2163,6.88363 12.7136,6.28037 C11.7205,5.08865 10.2378,4 8,4 Z M8,5 C8.30747,5 8.60413,5.04625 8.88341,5.13218 C8.36251,5.36736 8,5.89135 8,6.5 C8,7.32843 8.67157,8 9.5,8 C10.1087,8 10.6326,7.63749 10.8678,7.11659 C10.9537,7.39587 11,7.69253 11,8 C11,9.65685 9.65685,11 8,11 C6.34315,11 5,9.65685 5,8 C5,6.34315 6.34315,5 8,5 Z" />
                    </svg>
                    <span>
                      &nbsp;{blgsec.vw}&nbsp;
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
}
