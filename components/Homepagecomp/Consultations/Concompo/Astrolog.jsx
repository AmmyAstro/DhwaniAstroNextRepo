
"use client";

import Image from "next/image";
import { useState } from 'react';

export default function Astrolo() {
    const data = [
        {
            src: "/ds-img/user2.png",
            ulname: "Provide me the Best Astrologer"
        },
        {
            src: "/ds-img/sachin.svg",
            ulname: "Astro Ammy ",
            ordr: "6600 Orders",
            expas: "10 Years",
        },
        {
            src: "/ds-img/parth.svg",
            ulname: " Satyam",
            expas: "10 Years",
            ordr: "600 Orders",
        },
        {
            src: "/ds-img/anvi.svg",
            ulname: "Tarot Sukanya",
            expas: "2 Years",
            ordr: "600 Orders",
        },
        {

            src: "/ds-img/anshika.svg",
            ulname: "Astro Yatinder",
            expas: "8 Years",
            ordr: "5600 Orders",
        },
        {

            src: "/ds-img/shefali.svg",
            ulname: "Tarot Nikhil ",
            expas: "7 Years",
            ordr: "6100 Orders",
        }
    ]

    return (
        <div className="flex flex-col">
            <h5 className="text-xl text-black py-1 text-center font-semibold">
                Select Best Astrologers for Consultation
            </h5>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
                {data.map((ascar, i) => (
                    <div
                        key={i}
                        className="border cursor-pointer hover:scale-105  border-purple-200 flex flex-col md:flex-row items-center gap-3 py-2 px-4 rounded-lg"
                    >
                        <Image src={ascar.src} width={70} height={70} unoptimized alt="astrologer image" className="rounded-full" />
                        <div className="astro-name-exp flex flex-col items-center gap-1">
                            <h2 className="sm:mt-1 text-sm sm:text-base font-semibold text-black">
                                {ascar.ulname}
                            </h2>
                            <span className="flex flex-wrap justify-center items-center gap-1">
                                <p className="text-[10px] md:text-xs text-yellow-300 bg-[#0000088e] rounded-lg py-1 px-2 w-fit">
                                    {ascar.expas}
                                </p>
                                <span className="text-[10px] md:text-xs text-yellow-300 flex gap-1 bg-[#0000088e] p-1 rounded-lg">
                                    {ascar.ordr}
                                </span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
