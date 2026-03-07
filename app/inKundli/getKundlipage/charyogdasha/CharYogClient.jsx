"use client";

import { useState } from "react";
import Chardasha from "./chardasha/Chardasha";
import Yoginidasha from "./yognidasha/Yognidasha";

const TABS = [
  { id: "char", label: "Char Dasha" },
  { id: "yogni", label: "Yogini Dasha" },
];

export default function CharYogClient({
  charData,
  charcData,
  yogniData,
  yognicData,
}) {
  const [activeTab, setActiveTab] = useState("char");

  return (
    <>
      <div className="basic-list bg-[#2f1254] px-10 py-2 rounded-lg">
        <ul className="flex gap-5 justify-center">
          {TABS.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 py-1 rounded-full text-sm ${
                activeTab === tab.id
                  ? "bg-purple-500 text-white"
                  : "text-white"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-5">
        {activeTab === "char" && (
          <Chardasha charData={charData} charcData={charcData} />
        )}
        {activeTab === "yogni" && (
          <Yoginidasha yogniData={yogniData} yognicData={yognicData} />
        )}
      </div>
    </>
  );
}
