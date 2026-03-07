"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CustomButton from "../Custom/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AlertLoading } from "@/app/common";
import SocketContext from "@/app/context/socketContext";
import toast from "react-hot-toast";
import React, { useContext } from 'react';
import { useLanguage } from "@/app/context/LangContext";



export default function Recastro() {
    const { messages: t } = useLanguage();
    const socket = useContext(SocketContext);
    const [alert, setAlert] = useState(false);
    const router = useRouter();
    const { data = [], loading } = useSelector(
        (state) => state.astrologerReducer
    );
    const astrologerlist = data?.sortedAstrologers?.filter((item) => item.availability === 1);
    useEffect(() => {
    }, [astrologerlist])







    const chatredirect = (astroid) => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
            router.push(`/chatrequest/${astroid}`);
        }, 1000);
    };

    const callredirect = (astroid) => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
            router.push(`/callrequest/${astroid}`);
        }, 1000);
    };

    const astrologerbusy = () => {
        toast.success(
            "Astrologer selected by you is Busy now so please choose another astrologer."
        );
    };



    return (
        <section className="flex flex-col w-full items-center self-center sm:max-w-7xl my-2 ">
            <div className="py-3">
                <h1 dangerouslySetInnerHTML={{ __html: t?.comfree?.recastro || "Recommanded Astrologers" }} className="relative text-[#2f1254] text-md sm:text-2xl text-center font-semibold" />

            </div>
            <div className="slider-recastro  w-full relative">
                {/* Custom Navigation Buttons */}
                <div className="absolute top-1/2 -left-0.5 md:-left-2.5 lg:-left-12 transform -translate-y-1/2 z-10">
                    <button aria-label="Previous Slide" className="swiper-button-prev-rec">‹</button>
                </div>
                <div className="absolute top-1/2 -right-0.5 md:-right-2.5 lg:-right-12 transform -translate-y-1/2 z-10">
                    <button aria-label="Next Slide" className="swiper-button-next-rec">›</button>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={2}
                    navigation={{
                        nextEl: ".swiper-button-next-rec",
                        prevEl: ".swiper-button-prev-rec",
                    }}
                    // pagination={{ clickable: true }}
                    autoplay={false}
                    loop={true}
                    className="mySiperrecastro w-88 md:w-full"
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
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {astrologerlist.map((reca) => (
                        <SwiperSlide key={reca.id} style={{ width: "100%" }}>
                            <div className="border border-purple-200 shadow-lg  rounded-lg p-2 flex flex-col gap-3 ">
                                <div className="flex flex-col md:flex-row  items-center justify-center gap-3">
                                    <Image className="md:w-16 md:h-16 w-12 h-12" width={50} height={50} src={`/ds-img/${reca.profile_image}`}
                                        alt={reca?.full_name} />

                                    <div className="flex flex-col gap-1 justify-center items-center">
                                        <h5 className="text-center text-black ">  {reca?.full_name}</h5>
                                        <span className="flex items-center gap-2 text-black text-xs">
                                    <svg width={18} height={18} viewBox="0 -64 640 640" ><path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"/></svg>
                                            {reca?.languages}</span>
                                        <span className="flex items-center gap-2 text-black text-xs">
                                            <svg fill="#000000" width={18} height={18} viewBox="0 0 24 24" enable-background="new 0 0 24 24"><path d="M17,15.5V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.5H9V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.5H5c-0.7,0-1.4-0.2-2-0.5v4c0,1.7,1.3,3,3,3h12c1.7,0,3-1.3,3-3v-4c-0.6,0.3-1.3,0.5-2,0.5H17z M21,6h-4V5c0-1.7-1.3-3-3-3h-4C8.3,2,7,3.3,7,5v1H3C2.4,6,2,6.4,2,7v4c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V7C22,6.4,21.6,6,21,6z M15,6H9V5c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V6z" /></svg>
                                            Experience : {reca?.experience} years</span>
                                    </div>
                                </div>
                                <div className="w-full md:px-10 flex items-center justify-between ">



                                    <>
                                    <CustomButton aria-label={`Chat with ${reca?.full_name}`} type="button" variant={"green"}
                                        onClick={() => chatredirect(reca?.id)} className=""> Chat</CustomButton><CustomButton aria-label={`Call ${reca?.full_name}`} type="button" variant={"green"}
                                            onClick={() => callredirect(reca?.id)} className=""> Call</CustomButton></>




                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <AlertLoading show={alert} title="Please Wait .." />
            </div>
        </section>
    );
}
