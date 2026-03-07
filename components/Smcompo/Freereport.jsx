"use client";

import Image from "next/image";
import Link from "next/link";
// import styles from "./NavBar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";
export default function Freereport() {
    const { messages: t } = useLanguage();
    useScrollZoom(".head-wrap");
    const freereport = [
        {
            id: 1,
            src: "/ds-img/dating.gif",
            name: `${t?.comfree?.love || "Love Compatibilty"}`,
            link: "/doubleform", slug: "kundlislug"
        },
        {
            id: 2,
            src: "/ds-img/mars.gif",
            name: `${t?.comfree?.mangal || "Manglik Dosha"}`,
            link: "/formpage", slug: "manglik",
        },
        {
            id: 3,
            src: "/ds-img/solar-system.gif",
            name: `${t?.comfree?.lal || "Lal Kitab"}`,
            link: "/formpage", slug: "lalkitab",
        },
        {
            id: 4,
            src: "/ds-img/uranus.gif",
            name: `${t?.comfree?.sade || "Sade Sati Report"}`,
            link: "/formpage", slug: "sadesati",
        },
        {
            id: 5,
            src: "/ds-img/horoscope.gif",
            name: `${t?.comfree?.moon || "Moon Sign "}`,
            link: "/formpage", slug: "moonbio",
        },
        {
            id: 6,
            src: "/ds-img/taurus.gif",
            name: `${t?.comfree?.ascen || "Ascendant Report "}`,
            link: "/formpage", slug: "ascendant",
        },
    ];

    return (
        <section className=" flex-col w-full items-center self-center sm:max-w-7xl my-2  ">
            <div className="py-3">
                <h1 dangerouslySetInnerHTML={{__html : t?.comfree?.free || "Free Reports"}} className="relative head-wrap text-[#2f1254] text-md sm:text-2xl text-center font-semibold"/>

            </div>
            <div className="slider-freereport  w-full relative">

                <div className="absolute top-1/2 -left-0.5 sm:-left-2.5 lg:-left-12 transform -translate-y-1/2 z-10">
                    <button aria-label="Previous Slide" className="swiper-button-prev-free rounded-lg">‹</button>
                </div>
                <div className="absolute top-1/2 right-0 sm:-right-2.5 lg:-right-12 transform -translate-y-1/2 z-10">
                    <button aria-label="Next Slide" className="swiper-button-next-free rounded-lg">›</button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{
                        nextEl: ".swiper-button-next-free",
                        prevEl: ".swiper-button-prev-free",
                    }}
                    // pagination={{ clickable: true }}
                    autoplay={true}
                    loop={true}
                    className="mySiperfree w-84 md:w-full"
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
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {freereport.map((freere) => (
                        <SwiperSlide key={freere.id} style={{ width: "100%" }}>
                            <Link
                                href={{
                                    pathname: freere.link,
                                    query: { slug: freere.slug },
                                }}
                                className="p-3 border-2 head-wrap border-stone-500 rounded-lg flex flex-col md:flex-row  items-center justify-between w-40 md:w-full mt-2">
                                <Image className=" w-15 h-15 md:w-20 md:h-20" width={50} height={50} src={freere.src} alt="report images" unoptimized />

                                <div className="">
                                    <h5 className="text-center text-black text-sm md:text-base">{freere.name}</h5>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
}
