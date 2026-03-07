import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LangContext";
import useScrollZoom from "@/Hooks/scrollZoom";

export default function Kundlioth() {
    const { messages: t } = useLanguage();
    const kundliother = [
        {
            id: 0,
            name: `${t?.comfree?.match || "Match Making"}`,
            src: "/ds-img/kuoth1.png",
            link: "/doubleform", slug: "kundlislug"
        },
        {
            id: 1,
            name: `${t?.comfree?.kundli || "Kundli"}`,
            src: "/ds-img/kuoth2.png",
            link: "/inKundli", slug: ""
        },
        {
            id: 2,
            name: `${t?.comfree?.yog || "Yog"}`,
            src: "/ds-img/kuoth3.png",
            link: "/formpage", slug: "yogdasha"
        },
        {
            id: 3,
            name: `${t?.comfree?.dosh || "Doshas"}`,
            src: "/ds-img/kuoth4.png",
            link: "/formpage", slug: "doshas"
        },
    ];

    useScrollZoom(".head-wrap")
    return (
        <section>
            <div className=" md:p-3 p-2 flex flex-col gap-3">
                <div className="  items-center grid grid-cols-3 md:grid-cols-4  justify-start gap-3 md:gap-5">
                    {kundliother.map((kuoth, index) => (
                        <Link key={index} href={{
                            pathname: kuoth.link,
                            query: { slug: kuoth.slug },
                        }} className="head-wrap rounded-2xl kundli-other-item  ">
                            <div className="  flex flex-col items-center justify-center gap-3">
                                <Image src={kuoth.src} height={40} width={40} alt="kundli images" className="kunoth-img" />
                                <div className="w-full rounded-full py-1 text-black bg-white text-center text-xs">
                                    {kuoth.name}
                                </div>
                            </div>
                        </Link>
                    ))}


                </div>
            </div>
        </section>
    );
}
