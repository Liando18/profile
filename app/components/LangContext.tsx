"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "id";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "id") setLang(saved);
    } catch {}
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "id" : "en";
    setLang(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
