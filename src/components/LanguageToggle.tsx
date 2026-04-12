"use client"

import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-px bg-border border border-border overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-2 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
          lang === "en"
            ? "bg-foreground text-background"
            : "bg-background text-foreground/40 hover:text-foreground hover:bg-muted/30"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("id")}
        className={`px-3 py-2 text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
          lang === "id"
            ? "bg-foreground text-background"
            : "bg-background text-foreground/40 hover:text-foreground hover:bg-muted/30"
        }`}
      >
        ID
      </button>
    </div>
  );
};
