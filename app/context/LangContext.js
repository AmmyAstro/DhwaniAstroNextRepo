"use client";

import { createContext, useContext, useState, useEffect } from "react";
import en from "../../src/i18n/en.json";
import hi from "../../src/i18n/hi.json";
import kn from "../../src/i18n/kn.json";
import ta from "../../src/i18n/ta.json";
import tl from "../../src/i18n/tl.json";
import pb from "../../src/i18n/pb.json";
import ml from "../../src/i18n/ml.json";
import as from "../../src/i18n/as.json";


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState(en);

  useEffect(() => {
    if (lang === "en") setMessages(en);
    if (lang === "hi") setMessages(hi);
    if (lang === "kn") setMessages(kn);
    if (lang === "ta") setMessages(ta);
    if (lang === "tl") setMessages(tl);
    if (lang === "pb") setMessages(pb);
    if (lang === "ml") setMessages(ml);
    if (lang === "as") setMessages(as);

  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, messages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
