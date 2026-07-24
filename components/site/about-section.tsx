'use client';

import React from 'react';
import { motion } from 'motion/react';
import portrait from '@/assets/images/lock-background.webp';
import { stats } from '@/data/personal';
import { cvExperience, cvEducation } from '@/data/cv';
import { skillsData } from '@/data/notes';
import { useTranslation } from '@/context/i18n';

const TIMELINE = [
  ...cvExperience.map((e) => ({ role: e.role, org: e.org, period: e.period })),
  ...cvEducation.map((e) => ({ role: e.degree, org: e.school, period: e.period })),
];

export function AboutSection() {
  const { t } = useTranslation();

  const STAT_ITEMS = [
    { value: stats.yearsExperience, label: t.about.statYears },
    { value: stats.projectsCompleted, label: t.about.statProjects },
    { value: stats.happyClients, label: t.about.statClients },
    { value: stats.retentionRate, label: t.about.statRetention },
  ];

  return (
    <div id="about" className="py-10 sm:py-5 border-t border-paper-line bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:fixed lg:top-20 self-start w-full max-w-[300px] xl:max-w-[360px]">
              <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-40 sm:w-52 aspect-[4/5] mb-8 overflow-hidden bg-paper-surface border border-paper-line">
                <img src={portrait.src} alt="" className="w-full h-full object-cover object-top" draggable={false} />
              </div>
              <p className="text-ink/40 text-sm font-semibold uppercase tracking-[0.2em]">{t.about.eyebrow}</p>
              <h2 className="font-condensed font-black text-ink text-4xl sm:text-5xl leading-[0.95] uppercase">
                {t.about.title}
              </h2>
            </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-2xl">{t.about.bio}</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pb-10 border-b border-paper-line">
              {STAT_ITEMS.map((s) => (
                <div key={s.label}>
                  <div className="font-condensed font-black text-ink text-4xl sm:text-5xl">{s.value}</div>
                  <div className="text-ink/45 text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-3">{t.about.devSkills}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.dev.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-paper-surface border border-paper-line text-ink/65">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-3">{t.about.designSkills}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsData.design.map((s) => (
                    <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-paper-surface border border-paper-line text-ink/65">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-5">{t.about.timeline}</h3>
              <div className="flex flex-col">
                {TIMELINE.map((item) => (
                  <div
                    key={`${item.role}-${item.period}`}
                    className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3.5 border-b border-paper-line last:border-0"
                  >
                    <span className="text-ink/40 text-sm sm:w-40 shrink-0">{item.period}</span>
                    <span className="text-ink font-medium">{item.role}</span>
                    <span className="text-ink/40 text-sm">{item.org}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
