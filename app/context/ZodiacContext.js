// components/navbarcomp/Horoscope/Zodyester/Context/ZodiacContext.jsx
"use client";
import { createContext, useContext, useState } from "react";

const ZodiacContext = createContext();

export const ZodiacProvider = ({ children }) => {
  const [zodiac, setZodiac] = useState("");

  return (
    <ZodiacContext.Provider value={{ zodiac, setZodiac }}>
      {children}
    </ZodiacContext.Provider>
  );
};

export const useZodiac = () => useContext(ZodiacContext);
