'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDict, type Lang, type Dict } from '@/locales';

interface I18nContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
}

const I18nCtx = createContext<I18nContext | null>(null);

const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === 'en' || saved === 'fr') {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const t = getDict(lang);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error('useTranslation must be used inside LanguageProvider');
  return ctx;
}
