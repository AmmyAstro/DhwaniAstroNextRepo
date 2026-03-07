'use client'

import { useState } from "react";
import Basic from "./Basic";
import Planets from "./Planets";
import Divcharts from "./Divcharts";

const btabs = [
    { id: "basic", label: "Basic", component: <Basic /> },
    { id: "planets", label: "Planets", component: <Planets /> },
    { id: "divcharts", label: "Divisional Charts", component: <Divcharts /> }
]

export default function Basicdetail() {
    const [basicTab, setBasicTab] = useState("basic");

    return (
        <section className="basic-ul-main w-full">
            <div className="basic-list bg-[#2f1254] px-9 py-2 rounded-lg">
                <ul className="basic-li flex items-center gap-5 justify-center self-center">
                    {btabs.map((btab) => (
                        <li
                            key={btab.id}
                            onClick={() => setBasicTab(btab.id)}
                            className={`cursor-pointer lg:px-5 text-xs px-2 py-1 md:text-base lg:py-1 rounded-full ${basicTab === btab.id ? "bg-purple-500 text-white" : " text-white"
                                }`}     >
                            {btab.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="basic-down py-5">
                {btabs.find((btab) => btab.id === basicTab)?.component}
            </div>


        </section>
    );




}