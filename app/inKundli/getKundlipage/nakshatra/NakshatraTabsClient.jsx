"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const NakprevClient = dynamic(() => import("./previous/NakprevClient"), {
  loading: () => <p className="text-center">Loading previous...</p>,
});

const NaktodayClient = dynamic(() => import("./naktoday/NaktodayClient"), {
  loading: () => <p className="text-center">Loading today...</p>,
});

const NaktommClient = dynamic(() => import("./tomorrow/NaktommClient"), {
  loading: () => <p className="text-center">Loading tomorrow...</p>,
});

const TABS = [
  { id: "nakprev", label: "Yesterday Nakshatra Prediction" },
  { id: "naktoday", label: "Today Nakshatra Prediction" },
  { id: "naktomm", label: "Tomorrow Nakshatra Prediction" },
];

export default function NakshatraTabsClient({
  prev,
  today,
  tomorrow,
  defaultTab = "naktoday",
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

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
        {activeTab === "nakprev" && <NakprevClient prev={prev} />}
        {activeTab === "naktoday" && <NaktodayClient today={today} />}
        {activeTab === "naktomm" && <NaktommClient tomorrow={tomorrow} />}
      </div>
    </>
  );
}
