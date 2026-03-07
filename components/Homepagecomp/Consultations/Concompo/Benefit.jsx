
"use client";

import { useState } from 'react';

export default function Benefit({ data }) {  

    return (

        <div className="flex flex-col md:flex-row gap-3 items-start justify-around p-6 shadow-lg border border-purple-200 rounded-lg text-black w-full">
            <div className="flex flex-col gap-2">
                <h2 className="md:text-xl text-sm font-semibold">
                    {data.whyname}
                </h2>
                <ul className="md:text-base text-[13px] list-disc pl-5">
                    <li>{data.li1}</li>
                    <li>{data.li2}</li>
                    <li>{data.li3}</li>
                    <li>{data.li4}</li>
                    <li>{data.li5}</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="md:text-xl text-sm font-semibold">
                    {data.why2}
                </h2>
                <ul className="md:text-base text-[13px] list-disc pl-5">
                    <li>{data.li21}</li>
                    <li>{data.li22}</li>
                    <li>{data.li23}</li>
                    <li>{data.li24}</li>
                    <li>{data.li25}</li>
                    <li>{data.li26}</li>
                </ul>
            </div>
        </div>
    )
}