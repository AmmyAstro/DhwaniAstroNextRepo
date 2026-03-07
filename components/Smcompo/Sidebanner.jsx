'use client';
import useScrollZoom from "@/Hooks/scrollZoom";
import Image from "next/image";
import Link from "next/link";



export default function Sidebanner() {
useScrollZoom(".head-wrap");
    return (
        <section>
            <div className="">
                <Link className="head-wrap flex items-center justify-center" href="/chat-with-astrologer"> 
                <Image src="/ds-img/d.jpg" className="md:w-full md:h-full w-80 h-60 rounded-lg" width={100} unoptimized height={100} alt="banner free chat" />
                </Link>
            </div>
        </section>
    );
}


