'use client';

import React from 'react';
import { motion } from 'motion/react';
import portrait from '@/assets/images/portfolio2_nobg.webp';
import { personalInfo } from '@/data/personal';
import projectsData from '@/data/projects';
import { lightLogoClass } from '@/lib/utils';
import { useTranslation } from '@/context/i18n';
import Link from 'next/link';

const heroLogos = projectsData.filter((p) => p.image).slice(0, 5);
export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-paper h-screen max-h-screen">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-5">
        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-ink/50 text-sm sm:text-base font-medium text-center"
        >
          {t.hero.intro.replace('{name}', personalInfo.name)}
        </motion.p>

        <div className="relative flex flex-col items-center">
          {/* Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 font-condensed font-black text-ink leading-[1.2] tracking-tight uppercase text-center text-[18vw] sm:text-[13vw] lg:text-[9.5rem]"
          >
            {t.hero.line1}
          </motion.h1>

          {/* Line 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 font-condensed font-black leading-[0.85] tracking-tight uppercase text-center text-[18vw] sm:text-[13vw] lg:text-[9.5rem] -mt-[2vw] sm:-mt-[1.5vw] lg:-mt-[1rem]"
            style={{
              WebkitTextStroke: '2px #000',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            {t.hero.line2}
          </motion.h1>
        </div>

        {/* Location text + logos - stacked column on mobile, one row on big devices */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex flex-col items-center gap-4 mt-4 sm:mt-6 sm:flex-row sm:justify-between sm:gap-4 sm:w-8/12 sm:min-w-0 sm:mx-auto z-10 relative"
>
  <p className="text-ink/60 text-base sm:text-lg text-center sm:shrink-0">
    {t.hero.location.replace('{location}', personalInfo.location)}
  </p>
  <div className="flex items-center gap-6 sm:gap-6 sm:min-w-0 flex-wrap justify-center sm:justify-end">
    {heroLogos.map((p) => (
      <img
        key={p.id}
        src={p.image}
        alt={p.title}
        className={`h-5 sm:h-6 w-auto object-contain grayscale opacity-100 shrink-0 ${lightLogoClass(p)}`}
        draggable={false}
      />
    ))}
  </div>
</motion.div>


        {/* CTA Buttons - stacked on mobile, inline on larger, even spacing on big screens */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="fixed bottom-4 left-4 right-4 z-50 flex flex-col gap-3 sm:static sm:mt-8 sm:mb-8 sm:flex-row sm:items-center sm:justify-center sm:gap-3 lg:mt-10 lg:mb-10"
        >
         <Link
            href="/design"
            className="inline-flex z-30 items-center justify-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-semibold hover:bg-ink/85 transition-colors cursor-pointer w-full sm:w-auto"
          >
            {t.hero.ctaDesigner}
          </Link>
          <Link
            href="/dev"
            className="inline-flex z-30 items-center justify-center gap-2 border border-ink/25 text-ink bg-paper px-6 py-3.5 text-sm font-semibold hover:border-ink hover:bg-ink/5 transition-colors cursor-pointer w-full sm:w-auto"
          >
            {t.hero.ctaDeveloper}
          </Link>
        </motion.div>
      </div>

      {/* Portrait - fixed to bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 lg:-bottom-20 left-1/2 -translate-x-1/2 z-20 w-[85vw] max-w-[400px] sm:w-[320px] lg:w-[350px]"
      >
        <div className="relative">
          <div
            className="absolute bottom-0 left-0 right-0 h-[45%] z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%,#ffffff 35%, #ffffff 100%)' }}
          />
          <img
            src={portrait.src}
            alt={personalInfo.name}
            className="w-full h-auto object-contain grayscale contrast-[1.05]"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
}