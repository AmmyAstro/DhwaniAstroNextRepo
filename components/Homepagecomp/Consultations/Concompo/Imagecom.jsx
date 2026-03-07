

"use client";

import Image from "next/image";

export default function Imagecom({ data }) {

    return (

        <div className="flex flex-col items-center justify-center">
            <Image
                src={data.srcc}
                alt="bckimg"
                width={400}
                height={400}
                className="rounded-lg image-fade-edges md:w-[100%] md:h-90 w-[85%] h-70"
            />
        </div>
    )
}