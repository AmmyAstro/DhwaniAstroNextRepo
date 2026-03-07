"use client";
import React, { useState } from 'react';

import { PACKAGES } from "@/components/Homepagecomp/Consultations/Concompo/package";

export default function Healdetail({ data, pkgId, setPkgId }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (

        <div className="flex flex-col gap-2">
            <h1 className="mb-0 text-xl font-bold text-purple-700 sm:text-3xl">{data.hnm}</h1>
            <div className="flex items-center mt-0 space-x-2">
                <span className="text-base font-semibold text-purple-600 sm:text-xl">Starting From: ₹ {data.startprice}</span>
                <span className="text-sm text-gray-500">(Per Session)</span>
            </div>
            <p className="mb-1 text-sm text-gray-600 sm:text-base">
                {data.hdes}
            </p>

            <div className="flex flex-col items-start gap-1 space-x-4 text-gray-600 ">
                <h4 className="font-semibold">{data.hul} :-</h4>
                <ul className="text-sm list-disc list-inside">
                    <li>{data.hli1}</li>
                    <li>{data.hli2}</li>
                    <li>{data.hli3}</li>
                    <li>{data.hli4}</li>
                    <li>{data.hli5}</li>
                </ul>
                <span className="text-sm font-semibold">The healing session is of 20 minutes.</span>
            </div>

            {/* <div className="flex flex-col gap-2 mt-4 text-black">
                <h5 className="md:text-sm text-[15px] font-semibold">Please select session:</h5>
                <div className="grid grid-cols-3 gap-4">
                    {PACKAGES.map((p) => (
                        <div
                            key={p.id}
                            onClick={() => setPkgId(p.id)}
                            className={`cursor-pointer rounded-2xl border p-2 sm:p-3 text-center shadow transition ${pkgId === p.id
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-purple-100 border-gray-300 text-gray-800'}`}>
                            <h3 className="text-xs font-semibold sm:text-sm">{p.name}</h3>
                            {p.discount > 0 && (
                                <span className="text-xs">Save {Math.round(p.discount * 100)}%</span>
                            )}
                        </div>
                    ))}
                </div>
            </div> */}


        </div>
    )
}