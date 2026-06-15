import { createContext, useContext, useState } from "react";
import { type Language, translations } from "./translations";

interface LanguageContextValue {
  language: Language;
  content: typeof translations.en;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  content: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  function toggle() {
    setLanguage((l) => (l === "en" ? "de" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, content: translations[language], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
