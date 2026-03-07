"use client";

import { useState } from "react";
import Image from "next/image";
import Pujasuggest from "./puja/Pujasuggest";
import Gemsuggest from "./gem/Gemsuggest";
import Rudrasuggest from "./rudra/Rudrasuggest";

const TABS = [
  { id: "puja", label: "Puja Suggestions", src: "/ds-img/onpooja.webp" },
  { id: "gem", label: "Gemstone Suggestions", src: "/ds-img/diamond.png" },
  { id: "rudra", label: "Rudraksha Suggestions", src: "/ds-img/cultural-celebration.png" },
];

export default function SuggestTabsClient({ pujaData, gemData, rudraData }) {
  const [activeTab, setActiveTab] = useState("puja");

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
              <Image src={tab.src} alt={tab.label} width={20} height={20} />
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="py-5">
        {activeTab === "puja" && <Pujasuggest pujaData={pujaData} />}
        {activeTab === "gem" && <Gemsuggest gemData={gemData} />}
        {activeTab === "rudra" && <Rudrasuggest rudraData={rudraData} />}
      </div>
    </>
  );
}
