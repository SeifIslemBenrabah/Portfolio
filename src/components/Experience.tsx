import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Building2, Globe, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const entries = [
  { Icon: GraduationCap, org: 'ESI-SBA', key: 'entry1', current: true },
  { Icon: Globe, org: 'Independent', key: 'entry2', current: true },
  { Icon: Building2, org: 'Algérie Telecom', key: 'entry3', current: false },
  { Icon: BookOpen, org: "Centre de Développement de l'Entrepreneuriat-CDE", key: 'entry4', current: false },
];

export default function Experience() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section heading */}
        <div className={`mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-black font-mono font-semibold block mb-3">
            {t('exp.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            {t('exp.heading.line1')}<br />{t('exp.heading.line2')}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute top-0 bottom-0 w-px bg-black/8 ${isRtl ? 'right-6.5 sm:right-8.75' : 'left-6.5 sm:left-8.75'}`}
          />

          <div className="flex flex-col gap-0">
            {entries.map((entry, i) => {
              const { Icon } = entry;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0"
                >
                  {/* Icon dot */}
                  <div className="relative shrink-0 flex flex-col items-center z-10">
                    <div className={`w-13 h-13 sm:w-17.5 sm:h-17.5 rounded-2xl flex items-center justify-center border border-black/8 shadow-sm ${entry.current ? 'bg-black' : 'bg-white'}`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${entry.current ? 'text-white' : 'text-black/40'}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-2 sm:pt-3 min-w-0 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {/* Top row: type badge + period */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest bg-black/5 text-black/50 rounded-full">
                        {t(`exp.${entry.key}.type`)}
                      </span>
                      <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest">
                        {t(`exp.${entry.key}.period`)}
                      </span>
                      {entry.current && (
                        <span className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest bg-black text-white rounded-full">
                          {t('exp.current')}
                        </span>
                      )}
                    </div>

                    {/* Org + role */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-black leading-tight mb-1">
                      {entry.org}
                    </h3>
                    <p className="text-sm text-black/50 font-sans mb-3">
                      {t(`exp.${entry.key}.role`)}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-black/35 font-sans leading-relaxed max-w-md">
                      {t(`exp.${entry.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
