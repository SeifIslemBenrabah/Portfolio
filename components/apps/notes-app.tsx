'use client';

import React, { useState } from 'react';
import { NotebookPen, ChevronLeft, Sparkles, Wrench, Briefcase, Layers } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import { stats } from '@/data/personal';
import { skillsData, experienceEntries, servicesData } from '@/data/notes';

type NoteId = 'about' | 'skills' | 'experience' | 'services';

const NOTE_META: { id: NoteId; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'about', icon: Sparkles },
  { id: 'skills', icon: Wrench },
  { id: 'experience', icon: Briefcase },
  { id: 'services', icon: Layers },
];

function AboutNote() {
  const { t, isRtl } = useLanguage();
  const statEntries = [
    { value: stats.yearsExperience, label: t('about.stats.experience') },
    { value: stats.projectsCompleted, label: t('about.stats.projects') },
    { value: stats.happyClients, label: t('about.stats.clients') },
    { value: stats.retentionRate, label: t('about.stats.retention') },
  ];
  return (
    <div className={`flex flex-col gap-5 ${isRtl ? 'text-right' : 'text-left'}`}>
      <p className="text-[15px] leading-relaxed text-neutral-800">{t('about.p1')}</p>
      <p className="text-[15px] leading-relaxed text-neutral-800">{t('about.p2')}</p>
      <p className="text-[15px] leading-relaxed text-neutral-800">{t('about.p3')}</p>
      <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-neutral-200">
        {statEntries.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold text-neutral-900">{s.value}</div>
            <div className="text-xs text-neutral-500 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillsNote() {
  const { isRtl } = useLanguage();
  return (
    <div className={`flex flex-col gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
      {(['design', 'dev'] as const).map((group) => (
        <div key={group}>
          <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
            {group === 'design' ? 'Design' : 'Development'}
          </h4>
          <div className={`flex flex-wrap gap-2 `}>
            {skillsData[group].map((skill) => (
              <span key={skill} className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceNote() {
  const { t, isRtl } = useLanguage();
  return (
    <div className={`flex flex-col gap-5 ${isRtl ? 'text-right' : 'text-left'}`}>
      {experienceEntries.map((entry) => (
        <div key={entry.key} className="pb-5 border-b border-neutral-200 last:border-0">
          <div className={`flex items-center gap-2 flex-wrap mb-1.5 `}>
            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-neutral-100 text-neutral-500 rounded">
              {t(`exp.${entry.key}.type`)}
            </span>
            <span className="text-[11px] text-neutral-400 uppercase tracking-wide">{t(`exp.${entry.key}.period`)}</span>
            {entry.current && (
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-amber-400 text-amber-950 rounded">
                {t('exp.current')}
              </span>
            )}
          </div>
          <h4 className="font-semibold text-neutral-900">{entry.org}</h4>
          <p className="text-sm text-neutral-500 mb-1.5">{t(`exp.${entry.key}.role`)}</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{t(`exp.${entry.key}.desc`)}</p>
        </div>
      ))}
    </div>
  );
}

function ServicesNote() {
  const { t, isRtl } = useLanguage();
  return (
    <div className={`flex flex-col gap-6 ${isRtl ? 'text-right' : 'text-left'}`}>
      {servicesData.map((service) => (
        <div key={service.id}>
          <h4 className="font-semibold text-neutral-900 mb-1.5">{t(`services.${service.key}.title`)}</h4>
          <p className="text-sm text-neutral-600 leading-relaxed mb-2">{t(`services.${service.key}.desc`)}</p>
          <ul className={`flex flex-col gap-1 items-start`}>
            {[1, 2, 3, 4].map((n) => (
              <li key={n} className="text-xs text-neutral-500">
                • {t(`services.${service.key}.spec${n}`)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function NoteBody({ id }: { id: NoteId }) {
  if (id === 'about') return <AboutNote />;
  if (id === 'skills') return <SkillsNote />;
  if (id === 'experience') return <ExperienceNote />;
  return <ServicesNote />;
}

export function NotesApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const [selected, setSelected] = useState<NoteId | null>('about');

  return (
    <AppWindow title={t('home.app.notes')} onClose={onClose} headerClassName="bg-amber-400 text-amber-950" bodyClassName="bg-[#FFFDF7]">
      <div className="flex h-full">
        <div className={`w-full sm:w-56 shrink-0 border-neutral-200 overflow-y-auto ${selected ? 'hidden sm:block' : 'block'} ${isRtl ? 'sm:border-l' : 'sm:border-r'}`}>
          {NOTE_META.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelected(id)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 border-b border-neutral-100 text-left cursor-pointer transition-colors ${
                selected === id ? 'bg-amber-50' : 'hover:bg-neutral-50'
              } ${isRtl ? 'text-right' : ''}`}
            >
              <Icon className="w-4 h-4 text-amber-600 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-medium text-neutral-900 truncate">{t(`notes.list.${id}`)}</div>
              </div>
            </button>
          ))}
        </div>
        <div className={`flex-1 overflow-y-auto p-5 sm:p-8 ${selected ? 'block' : 'hidden sm:block'}`}>
          {selected ? (
            <>
              <button
                onClick={() => setSelected(null)}
                className={`sm:hidden mb-4 flex items-center gap-1 text-amber-600 text-sm font-medium cursor-pointer `}
              >
                <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                {t('common.back')}
              </button>
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-5">{t(`notes.list.${selected}`)}</h3>
              <NoteBody id={selected} />
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-neutral-300 gap-2">
              <NotebookPen className="w-10 h-10" />
            </div>
          )}
        </div>
      </div>
    </AppWindow>
  );
}
