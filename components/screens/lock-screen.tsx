'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronUp, Briefcase, Rocket } from 'lucide-react';
import { GlassEffect } from '@/components/ui/liquid-glass';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';
import lockBackground from '@/assets/images/lock-background.webp';

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const { t, language, isRtl } = useLanguage();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      onUnlock();
    };
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 8) trigger();
    };
    let touchStartY = 0;
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 30) trigger();
    };
    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [onUnlock]);

  const locale = language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US';
  const time = now ? now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false }) : '--:--';
  const date = now ? now.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' }) : '';

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-between overflow-hidden cursor-pointer select-none bg-ink"
      onClick={onUnlock}
    >
      <div
        className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <img
        src={lockBackground.src}
        alt={personalInfo.name}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '50% 20%' }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/15 to-black/70" />

      <motion.div
        className="relative z-10 flex flex-col items-center pt-16 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="text-6xl sm:text-7xl font-semibold tabular-nums tracking-tight">{time}</span>
        <span className="text-sm sm:text-base font-medium text-white/80 mt-1 capitalize">{date}</span>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col gap-3 w-full max-w-sm px-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <GlassEffect className="px-4 py-3">
          <div className={`flex items-center gap-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center shrink-0">
              <Briefcase className="w-4 h-4 text-ink" />
            </div>
            <p className="text-white text-xs sm:text-sm font-medium leading-snug">{t('lock.experienceBanner')}</p>
          </div>
        </GlassEffect>
        <GlassEffect className="px-4 py-3">
          <div className={`flex items-center gap-3 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="w-8 h-8 rounded-lg bg-orange flex items-center justify-center shrink-0">
              <Rocket className="w-4 h-4 text-ink" />
            </div>
            <p className="text-white text-xs sm:text-sm font-medium leading-snug">{t('lock.projectsBanner')}</p>
          </div>
        </GlassEffect>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-1 pb-6 text-white/70"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronUp className="w-5 h-5" />
        <span className="text-[11px] font-medium uppercase tracking-widest">{t('lock.swipeUp')}</span>
      </motion.div>
    </div>
  );
}
