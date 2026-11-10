import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type SupportedLang } from '../data/translations';
import type { PortfolioContent } from '../data/content';

interface LanguageContextValue {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  content: PortfolioContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): SupportedLang {
  if (typeof window === 'undefined') return 'pt';
  const urlParam = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
  if (urlParam === 'en' || urlParam === 'es' || urlParam === 'pt') return urlParam;
  const saved = localStorage.getItem('portfolio_lang')?.toLowerCase();
  if (saved === 'en' || saved === 'es' || saved === 'pt') return saved;
  return 'pt';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>(getInitialLang);

  const setLang = (nextLang: SupportedLang) => {
    setLangState(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
    document.documentElement.lang = nextLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    content: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage deve ser usado dentro de um <LanguageProvider>');
  }
  return ctx;
}
