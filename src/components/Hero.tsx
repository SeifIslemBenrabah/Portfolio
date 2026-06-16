import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data';
import { useLanguage } from '../context/LanguageContext';

const MAROON = '#111111';
const BEIGE  = '#111111';

const TEXTURE_BG = {
  backgroundImage:
    'linear-gradient(to right, rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.2) 1px, transparent 1px)',
  backgroundSize: '64px 64px',
} as const;

interface HeroProps {
  onContactClick: () => void;
  ready?: boolean;
}

export default function Hero({ onContactClick, ready = true }: HeroProps) {
  const { t, isRtl, language } = useLanguage();
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-white overflow-hidden"
      style={{ height: '100dvh', ...TEXTURE_BG }}
    >

      {/* ── Text content ── */}
      <div className="relative z-10 flex flex-col items-center pt-40 sm:pt-28 px-4 gap-2 pointer-events-none">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="relative text-center px-2"
        >
          <h1 className="font-display font-bold text-[clamp(2.4rem,5.5vw,5.2rem)] leading-[1.1] text-black">
            {t('hero.im')}{' '}
            <span style={{ color: '#6B6B6B' }} className="italic font-sans">{t('hero.name')},</span>
            {' '}{t('hero.title.creative')}
          </h1>
          <h1 className={`font-display font-bold text-[clamp(2.4rem,5.5vw,5.2rem)] leading-[1.1] text-black ${isRtl ? 'font-arabic' : ''}`}>
            {t('hero.title.and')}{' '}{t('hero.title.dev')}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="sm:hidden text-base text-black font-semibold font-sans text-center mt-1"
        >
          {t('hero.testimonial.quote')}
        </motion.p>
      </div>

      {/* ── Left float — tagline ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={ready ? { opacity: 1, x: 0 } : undefined}
        transition={{ delay: 0.4 }}
        className={`absolute z-20 top-1/2 -translate-y-1/2 hidden sm:block max-w-48 pt-40 ${isRtl ? 'right-6 lg:right-16 text-right' : 'left-6 lg:left-16 text-left'}`}
      >
        <p className="text-xl text-black font-semibold leading-snug font-sans">
          {t('hero.testimonial.quote')}
        </p>
        <span className="text-base text-stone-400 uppercase tracking-wider font-mono block mt-2">
          {t('hero.testimonial.label')}
        </span>
      </motion.div>

      {/* ── Right float — experience ── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={ready ? { opacity: 1, x: 0 } : undefined}
        transition={{ delay: 0.4 }}
        className={`absolute z-20 top-1/2 -translate-y-1/2 hidden sm:block pt-40 ${isRtl ? 'left-6 lg:left-16 text-left' : 'right-6 lg:right-16 text-right'}`}
      >
        <div className={`flex gap-0.5 mb-1.5 ${isRtl ? '' : 'justify-end'}`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} style={{ color: MAROON }} className="text-xl leading-none">★</span>
          ))}
        </div>
        <span className="font-black text-6xl text-black block leading-none">3+</span>
        <span className="text-base text-stone-500 uppercase tracking-wider font-mono block mt-1">
          {language === 'ar' ? 'سنوات' : language === 'fr' ? "Ans d'exp." : 'Years'}
        </span>
        <span className="text-base text-stone-500 uppercase tracking-wider font-mono block">
          {language === 'ar' ? 'خبرة' : 'Experience'}
        </span>
      </motion.div>

      {/* ── Beige square — wrapper clips bottom half in shape's own space, then rotates ── */}
      <motion.div
        initial={{ opacity: 0, rotate: -12, x: isMobile ? 26 : 25 }}
        animate={ready ? { opacity: 1, rotate: -12, x: isMobile ? 26 : 25 } : undefined}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="absolute z-0 left-1/2 -translate-x-1/2"
        style={{
          bottom: isMobile ? 'calc(100vw / -2)' : 'calc(min(500px, 68vw) / -2)',
          width:  isMobile ? '115vw' : 'min(500px, 68vw)',
          height: isMobile ? '115vw' : 'min(500px, 68vw)',
          backgroundColor: BEIGE,
          borderRadius: '18px',
        }}
      />

      {/* ── Profile image ── */}
      <motion.img
        src={personalInfo.avatar}
        alt="Seif Islem"
        initial={{ opacity: 0, y: isMobile ? '-22%' : 16, x: isMobile ? -31 : -25 }}
        animate={ready ? { opacity: 1, y: isMobile ? '-22%' : 0, x: isMobile ? -31 : -25 } : undefined}
        transition={{ delay: 0.18, duration: 0.65 }}
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{
          width: isMobile ? '148vw' : 'auto',
          maxWidth: 'none',
          height: isMobile ? 'auto' : '110dvh',
          top: isMobile ? '50%' : undefined,
          bottom: isMobile ? undefined : 'calc(-110dvh * 0.28)',
          objectFit: isMobile ? undefined : 'contain',
          objectPosition: isMobile ? undefined : 'bottom',
          filter: 'drop-shadow(0 -4px 16px rgba(0,0,0,0.06))',
          maskImage: 'linear-gradient(to bottom, black 38%, transparent 68%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 38%, transparent 68%)',
        }}
      />

      {/* ── CTA buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.5 }}
        className={`absolute left-1/2 -translate-x-1/2 z-30 flex items-center bg-white/55 backdrop-blur-md rounded-full p-1.5 border border-white/70 shadow-xl gap-0 ${isRtl ? 'flex-row-reverse' : ''}`}
        style={{ bottom: 24 }}
      >
        <button
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap ${isRtl ? 'flex-row-reverse' : ''}`}
          style={{ backgroundColor: MAROON }}
        >
          {t('hero.cta.work')}
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>
        <button
          onClick={onContactClick}
          className="px-6 py-2.5 rounded-full text-stone-700 hover:text-black font-bold text-sm cursor-pointer transition-colors whitespace-nowrap"
        >
          {t('hero.cta.hire')}
        </button>
      </motion.div>
    </section>
  );
}
