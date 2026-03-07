"use client";

import Image from "next/image";
import Link from "next/link";



export default function Kuninterimg() {


  return (

    <section className="kundli-inter-top- img w-full ">
      <div className="kundli-top-img  flex items-center justify-center gap-3 w-full">
        <Link href="/talk-to-astrologer">  <Image src={"/ds-img/freeimg.jpg"} width={100} height={100} unoptimized alt="kundli free image" className="md:h-35 rounded-lg shadow-lg w-180" /></Link>
        <Link href="/chat-with-astrologer"> <Image src={"/ds-img/fimg2.webp"} width={100} height={100} unoptimized alt="kundli free image" className="md:h-35  rounded-lg shadow-lg w-180" /></Link>
      </div>
    </section>


  );
}
