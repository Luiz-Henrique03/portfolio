"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, TRANSLATIONS } from "@/data/translations";
import {
  PERSONAL_INFO,
  CORE_METRICS,
  BI_DASHBOARDS,
  PROJECTS,
  TECHNICAL_DISCOVERIES,
  SKILL_GROUPS,
  CAREER_JOURNEY,
  EDUCATION_HONORS,
  ProjectItem,
  TechnicalDiscovery,
} from "@/data/portfolioData";
import {
  PERSONAL_INFO_EN,
  CORE_METRICS_EN,
  BI_DASHBOARDS_EN,
  PROJECTS_EN,
  TECHNICAL_DISCOVERIES_EN,
  SKILL_GROUPS_EN,
  CAREER_JOURNEY_EN,
  EDUCATION_HONORS_EN,
} from "@/data/portfolioDataEn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isPt: boolean;
  isEn: boolean;
  personalInfo: typeof PERSONAL_INFO;
  coreMetrics: typeof CORE_METRICS;
  biDashboards: typeof BI_DASHBOARDS;
  projects: ProjectItem[];
  technicalDiscoveries: TechnicalDiscovery[];
  skillGroups: typeof SKILL_GROUPS;
  careerJourney: typeof CAREER_JOURNEY;
  educationHonors: typeof EDUCATION_HONORS;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: TRANSLATIONS.pt,
  isPt: true,
  isEn: false,
  personalInfo: PERSONAL_INFO,
  coreMetrics: CORE_METRICS,
  biDashboards: BI_DASHBOARDS,
  projects: PROJECTS,
  technicalDiscoveries: TECHNICAL_DISCOVERIES,
  skillGroups: SKILL_GROUPS,
  careerJourney: CAREER_JOURNEY,
  educationHonors: EDUCATION_HONORS,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language | null;
      if (saved && (saved === "pt" || saved === "en")) {
        setLanguageState(saved);
      }
    } catch {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {}
  };

  const isEn = language === "en";

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: TRANSLATIONS[language],
        isPt: language === "pt",
        isEn,
        personalInfo: isEn ? PERSONAL_INFO_EN : PERSONAL_INFO,
        coreMetrics: isEn ? CORE_METRICS_EN : CORE_METRICS,
        biDashboards: isEn ? BI_DASHBOARDS_EN : BI_DASHBOARDS,
        projects: isEn ? PROJECTS_EN : PROJECTS,
        technicalDiscoveries: isEn ? TECHNICAL_DISCOVERIES_EN : TECHNICAL_DISCOVERIES,
        skillGroups: isEn ? SKILL_GROUPS_EN : SKILL_GROUPS,
        careerJourney: isEn ? CAREER_JOURNEY_EN : CAREER_JOURNEY,
        educationHonors: isEn ? EDUCATION_HONORS_EN : EDUCATION_HONORS,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
