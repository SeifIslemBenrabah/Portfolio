'use client';
import projectsData from '@/data/projects';
import { lightLogoClass } from '@/lib/utils';
import { useTranslation } from '@/context/i18n';

const logos = projectsData.filter((p) => p.image);

export function LogoStrip() {
  const { t } = useTranslation();
  return (
    <div className="relative pt-8 mt-10 border-t border-paper-line overflow-hidden w-full max-w-sm">
      <p className="text-left text-xs sm:text-sm uppercase tracking-[0.2em] text-ink/40 mb-6">
        {t.hero.logoStrip}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-paper to-transparent z-10" />
        <div className="flex w-max animate-marquee">
          {[...logos, ...logos].map((p, i) => (
            <div key={`${p.id}-${i}`} className="flex items-center justify-center shrink-0 px-8 sm:px-12">
              <img
                src={p.image}
                alt={p.title}
                className={`h-7 sm:h-9 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 ${lightLogoClass(p)}`}
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
