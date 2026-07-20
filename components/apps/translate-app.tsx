'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';

const LANGUAGES: { code: 'en' | 'fr' | 'ar'; label: string; native: string }[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'ar', label: 'Arabic', native: 'العربية' },
];

export function TranslateApp({ onClose }: { onClose: () => void }) {
  const { t, language, setLanguage, isRtl } = useLanguage();

  return (
    <AppWindow title={t('home.app.translate')} onClose={onClose} headerClassName="bg-sky-500 text-white" bodyClassName="bg-white">
      <div className={`p-6 sm:p-8 max-w-sm mx-auto ${isRtl ? 'text-right' : 'text-left'}`}>
        <p className="text-sm text-neutral-500 mb-6">{t('translate.select')}</p>
        <div className="flex flex-col gap-2">
          {LANGUAGES.map((lang) => {
            const isCurrent = language === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl border transition-colors cursor-pointer ${
                  isCurrent ? 'bg-sky-50 border-sky-300' : 'border-neutral-200 hover:bg-neutral-50'
                } `}
              >
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <div className="text-sm font-semibold text-neutral-900">{lang.native}</div>
                  <div className="text-xs text-neutral-400">{lang.label}</div>
                </div>
                {isCurrent && <Check className="w-5 h-5 text-sky-500" />}
              </button>
            );
          })}
        </div>
      </div>
    </AppWindow>
  );
}
