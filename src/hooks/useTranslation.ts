"use client"

import { useLanguage } from "@/context/LanguageContext";
import { en } from "@/data/translations/en";
import { id } from "@/data/translations/id";

export type TranslationType = typeof en;

export const useTranslation = () => {
  const { lang, toggleLang, setLang } = useLanguage();
  const t: TranslationType = lang === "en" ? en : id;
  
  return { t, lang, toggleLang, setLang };
};
