"use client"

import { useLanguage } from "@/context/LanguageContext";
import { en } from "@/data/translations/en";
import { id } from "@/data/translations/id";

export const useTranslation = () => {
  const { lang } = useLanguage();
  const t = lang === "en" ? en : id;
  
  return { t, lang };
};
