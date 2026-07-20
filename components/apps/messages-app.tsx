'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import testimonialsData from '@/data/testimonials';

export function MessagesApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();

  return (
    <AppWindow title={t('home.app.messages')} onClose={onClose} headerClassName="bg-[#25D366]/90 text-white" bodyClassName="bg-[#ECE5DD]">
      <div className="p-4 sm:p-6 flex flex-col gap-6">
        <p className={`text-[11px] uppercase tracking-widest text-neutral-500 font-semibold ${isRtl ? 'text-right' : 'text-left'}`}>
          {t('messages.subtitle')}
        </p>
        {testimonialsData.map((tItem) => (
          <div key={tItem.id} className="flex flex-col gap-1 items-start">
            <div className={`flex items-center gap-2 px-1 `}>
              <span className="text-xs font-semibold text-neutral-600">{tItem.name}</span>
              <span className="text-[10px] text-neutral-400">— {tItem.company}</span>
            </div>
            <div
              className={`relative max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-3 bg-[#DCF8C6] text-neutral-900 text-sm leading-relaxed shadow-sm ${
                isRtl ? 'rounded-tr-sm' : 'rounded-tl-sm'
              }`}
              dir="auto"
            >
              {tItem.text}
            </div>
            <div className={`flex gap-0.5 px-1 `}>
              {Array.from({ length: tItem.rating }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppWindow>
  );
}
