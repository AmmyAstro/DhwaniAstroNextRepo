"use client";

import useScrollZoom from "@/Hooks/scrollZoom";
import Image from "next/image";

import Link from "next/link";

export default function Procards({ data, heading }) {
    useScrollZoom(".head-wrap");
    return (
        <div className="relative flex flex-col items-center gap-2">
            <h1
                className=" relative text-[#2f1254] text-md sm:text-2xl py-1  sm:py-2 text-center font-semibold"
                dangerouslySetInnerHTML={{ __html: heading }}
            ></h1>

            <div className="love-product-new grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 place-self-center  gap-4">
                {data.map((card, index) => (
                    <Link href={card.href} key={index} className=" free_store_pro-home  w-auto md:h-70 h-40" >
                        <Image
                            className="store-img-home"
                            src={card.img}
                            unoptimized
                            height={120}
                            width={120}
                            loading="lazy"
                            alt="Personalized services"
                        />
                        <div className="flex items-center justify-center absolute bottom-2 w-[100%] left-0">
                            <h3 className="prblm-txt w-[90%] rounded-full border justify-self-center self-center  place-self-center text-xs sm:text-sm ">
                                {card.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
