'use client';

import React, { useState } from 'react';
import { FileText, ChevronLeft, Download } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import {
  cvHeader,
  cvAbout,
  cvEducation,
  cvExperience,
  cvProjects,
  cvSkills,
  cvLanguages,
  cvPdfUrl,
} from '@/data/cv';

function CvPreview() {
  const { t, isRtl } = useLanguage();

  return (
    <div className={`bg-white text-neutral-900 ${isRtl ? 'text-right' : 'text-left'}`} dir="ltr">
      {/* CV content stays LTR internally (English CV convention) even when the app chrome is RTL */}
      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-8 sm:py-10">
        <div className="text-center mb-6">
          <h1 className="font-display text-2xl sm:text-3xl font-bold">{cvHeader.name}</h1>
          <p className="text-sm text-neutral-500 mt-1">{cvHeader.title}</p>
          <p className="text-xs text-neutral-400 mt-2">
            {cvHeader.location} &middot; {cvHeader.email}
          </p>
          <p className="text-xs text-neutral-400">
            {cvHeader.linkedin} &middot; {cvHeader.github} &middot; {cvHeader.behance}
          </p>
        </div>

        <Section title={t('cv.about')}>
          <p className="text-sm leading-relaxed text-neutral-700">{cvAbout}</p>
        </Section>

        <Section title={t('cv.education')}>
          <div className="flex flex-col gap-4">
            {cvEducation.map((e) => (
              <div key={e.school}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h4 className="text-sm font-semibold">{e.school}</h4>
                  <span className="text-xs text-neutral-400">{e.period}</span>
                </div>
                <p className="text-xs text-neutral-500">{e.degree} — {e.location}</p>
                {e.note && <p className="text-xs text-neutral-400 mt-0.5">{e.note}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section title={t('cv.experience')}>
          <div className="flex flex-col gap-5">
            {cvExperience.map((x) => (
              <div key={x.role}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h4 className="text-sm font-semibold">{x.role} — {x.org}</h4>
                  <span className="text-xs text-neutral-400 shrink-0">{x.period}</span>
                </div>
                <ul className="mt-1 flex flex-col gap-1">
                  {x.bullets.map((b) => (
                    <li key={b} className="text-xs text-neutral-600 leading-relaxed flex gap-1.5">
                      <span className="text-neutral-300 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t('cv.projects')}>
          <div className="flex flex-col gap-5">
            {cvProjects.map((p) => (
              <div key={p.name}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h4 className="text-sm font-semibold">{p.name}</h4>
                  <span className="text-[10px] uppercase tracking-wide text-neutral-400 shrink-0">{p.tag}</span>
                </div>
                <ul className="mt-1 flex flex-col gap-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="text-xs text-neutral-600 leading-relaxed flex gap-1.5">
                      <span className="text-neutral-300 shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={t('cv.skills')}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">{t('cv.skills.dev')}</h4>
              <ul className="flex flex-col gap-1">
                {cvSkills.development.map((s) => (
                  <li key={s} className="text-xs text-neutral-600">{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">{t('cv.skills.design')}</h4>
              <ul className="flex flex-col gap-1">
                {cvSkills.design.map((s) => (
                  <li key={s} className="text-xs text-neutral-600">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title={t('cv.languages')} last>
          <div className="flex gap-6">
            {cvLanguages.map((l) => (
              <div key={l.name} className="text-xs text-neutral-600">
                <span className="font-semibold text-neutral-800">{l.name}</span> — {l.level}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children, last = false }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`mb-5 ${last ? '' : 'pb-5 border-b border-neutral-100'}`}>
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-2.5">{title}</h3>
      {children}
    </div>
  );
}

export function FoldersApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <AppWindow title={t('home.app.folders')} onClose={onClose} headerClassName="bg-[#2E86FF] text-white" bodyClassName="bg-[#F5F6F8]">
      {open ? (
        <div>
          <div className={`sticky top-0 z-10 flex items-center justify-between gap-2 px-5 py-3 bg-white border-b border-neutral-200 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={() => setOpen(false)}
              className={`flex items-center gap-1.5 text-[#2E86FF] text-sm font-medium cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              {t('folders.back')}
            </button>
            <a
              href={cvPdfUrl}
              download
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2E86FF] text-white text-xs font-semibold cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
            >
              <Download className="w-3.5 h-3.5" />
              {t('folders.download')}
            </a>
          </div>
          <CvPreview />
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <button
            onClick={() => setOpen(true)}
            className={`group flex flex-col items-center gap-2 w-28 cursor-pointer ${isRtl ? 'items-center' : ''}`}
          >
            <div className="w-16 h-20 rounded-lg bg-white border border-neutral-200 shadow-sm flex items-center justify-center relative group-hover:shadow-md transition-shadow">
              <FileText className="w-8 h-8 text-red-500" />
              <span className="absolute bottom-1.5 text-[7px] font-bold text-neutral-400 tracking-wide">PDF</span>
            </div>
            <span className="text-xs text-neutral-700 text-center leading-tight break-words">{t('folders.cvFileName')}</span>
          </button>
        </div>
      )}
    </AppWindow>
  );
}
