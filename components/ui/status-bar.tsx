'use client';

import React, { useEffect, useState } from 'react';
import { Signal, Wifi, BatteryFull } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function StatusBar({ light = true }: { light?: boolean }) {
  const { language } = useLanguage();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const locale = language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US';
  const time = now ? now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--';
  const textColor = light ? 'text-white' : 'text-black';

  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold ${textColor} `}>
      <span className="tabular-nums">{time}</span>
      <div className={`flex items-center gap-1.5 `}>
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <BatteryFull className="w-4.5 h-4.5" />
      </div>
    </div>
  );
}
