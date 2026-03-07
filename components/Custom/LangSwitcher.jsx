"use client";

import { useState } from "react";
import { useLanguage } from "../../app/context/LangContext";
import dynamic from "next/dynamic";
const loadfi = (name) =>
  dynamic(() => import("react-icons/fi").then((mod) => mod[name]));

const FiChevronDown = loadfi("FiChevronDown");

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "kn", label: "KN" },
    { code: "ta", label: "TA" },
    { code: "tl", label: "TL" },
    { code: "ml", label: "ML" },
    { code: "pb", label: "PB" },
    { code: "as", label: "AS" },

  ];

  return (
    <div className="relative">
      <button aria-label="Toggle  Language Switcher"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1 bg-[#f5f5a8] cursor-pointer text-sm text-black rounded-md transition-all hover:bg-[#f5e78a]">
        <span>{languages.find((l) => l.code === lang)?.label || "Language"}</span>
        <FiChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={18}
        />
      </button>

      {isOpen && (
        <ul className="absolute overflow-hidden right-0  mt-1 bg-[#f5f5a8] border border-yellow-200 rounded-md shadow-lg z-50">
          {languages.map((l) => (
            <li
              key={l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`px-3 py-2  text-sm text-black cursor-pointer hover:bg-[#f5d8a8] ${l.code === lang ? "bg-[#f5d8a8] font-semibold text-black" : ""
                }`}
            >
              {l.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
