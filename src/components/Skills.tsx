import React from 'react';
import { Compass, Layers, Palette, Image, Video, Sparkles } from 'lucide-react';
import { 
  SiFigma, 
  SiReact, 
  SiExpress, 
  SiMongodb, 
  SiFastapi, 
  SiPython, 
  SiSpringboot, 
  SiHtml5, 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiGithub 
} from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const designRow = [
  { name: 'Adobe Illustrator', icon: Palette },
  { name: 'Adobe Photoshop', icon: Image },
  { name: 'Adobe After Effects', icon: Video },
  { name: 'Adobe Premiere Pro', icon: Sparkles },
  { name: 'Figma', icon: SiFigma },
  { name: 'Art Direction', icon: Compass },
  { name: 'UI/UX Design', icon: Layers },
];

const devRow = [
  { name: 'React', icon: SiReact },
  { name: 'express', icon: SiExpress },
  { name: 'mongoDB', icon: SiMongodb },
  { name: 'fastAPI', icon: SiFastapi },
  { name: 'python', icon: SiPython },
  { name: 'spring boot', icon: SiSpringboot },
  { name: 'HTML5 / CSS3', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Git & GitHub', icon: SiGithub },
];

export default function Skills() {
  const { language, t, isRtl } = useLanguage();
  // Multiply rows to ensure a seamless infinite slider
  const repeatedDesign = [...designRow, ...designRow, ...designRow, ...designRow];
  const repeatedDev = [...devRow, ...devRow, ...devRow, ...devRow];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Ambient Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-black/[0.01] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className={`mb-16 md:mb-20 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-black font-mono font-semibold block mb-3">
            {t('skills.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            {language === 'ar' ? (
              <span>
                دمج التميز التقني المتطور <br />
                مع الاتجاه الفني الراقي الفاخر.
              </span>
            ) : language === 'fr' ? (
              <span>
                Synthétiser l'excellence technique <br />
                avec une direction artistique luxueuse.
              </span>
            ) : (
              <span>
                Synthesizing technical excellence <br />
                with luxury art direction.
              </span>
            )}
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Tickers Container */}
      <div dir="ltr" className="relative w-full flex flex-col gap-6 sm:gap-8 py-4 sm:py-6 overflow-hidden">
        {/* Soft edge masking gradients to fade badges smoothly on sides */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20" />

        {/* Row 1: Going Left */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-ribbon flex gap-4 sm:gap-6 items-center">
            {repeatedDesign.map((item, idx) => {
              const Icon = item.icon as React.ElementType;
              return (
                <div
                  key={`design-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl bg-white border border-black/10 hover:border-black hover:bg-neutral-50 transition-colors duration-300 shadow-sm group shrink-0"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-black select-none whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Going Right */}
        <div className="w-full flex overflow-hidden">
          <div className="animate-ribbon-reverse flex gap-4 sm:gap-6 items-center">
            {repeatedDev.map((item, idx) => {
              const Icon = item.icon as React.ElementType;
              return (
                <div
                  key={`dev-${idx}`}
                  className="flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl bg-white border border-black/10 hover:border-black hover:bg-neutral-50 transition-colors duration-300 shadow-sm group shrink-0"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-black select-none whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
