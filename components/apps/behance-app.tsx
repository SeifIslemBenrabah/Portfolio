'use client';

import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import { designProjects } from '@/data/projects';
import type { ProjectData } from '@/types';

export function BehanceApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const [filter, setFilter] = useState<'All' | 'Branding' | 'UI/UX'>('All');
  const [active, setActive] = useState<ProjectData | null>(null);

  const filters: { code: typeof filter; label: string }[] = [
    { code: 'All', label: t('behance.filter.all') },
    { code: 'Branding', label: t('behance.filter.branding') },
    { code: 'UI/UX', label: t('behance.filter.uiux') },
  ];

  const filtered = filter === 'All' ? designProjects : designProjects.filter((p) => p.category === filter);

  return (
    <AppWindow title={t('home.app.behance')} onClose={onClose} headerClassName="bg-[#1769FF] text-white" bodyClassName="bg-[#F5F5F5]">
      {active ? (
        <div>
          <button
            onClick={() => setActive(null)}
            className={`sticky top-0 z-10 w-full flex items-center gap-1.5 px-5 py-3 bg-white border-b border-neutral-200 text-[#1769FF] text-sm font-medium cursor-pointer `}
          >
            <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            {t('common.back')}
          </button>
          <div className={`p-5 sm:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 mb-2">{active.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-4">{active.description}</p>
            <div className={`flex flex-wrap gap-1.5 mb-6 `}>
              {active.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wide font-semibold bg-white border border-neutral-200 text-neutral-500 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-[#1769FF] text-white text-xs font-bold uppercase tracking-wide rounded-full mb-6 `}
            >
              {t('project.viewBehance')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div className="flex flex-col gap-3">
              {(active.images ?? []).map((src, i) => (
                <img key={i} src={src} alt={`${active.title} ${i + 1}`} className="w-full rounded-xl shadow-sm" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6">
          <div className={`flex gap-2 mb-5 `}>
            {filters.map((f) => (
              <button
                key={f.code}
                onClick={() => setFilter(f.code)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                  filter === f.code ? 'bg-[#1769FF] text-white' : 'bg-white text-neutral-600 border border-neutral-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setActive(project)}
                className={`group relative rounded-xl overflow-hidden bg-white border border-neutral-200 text-left cursor-pointer hover:shadow-lg transition-shadow ${isRtl ? 'text-right' : ''}`}
              >
                {project.images?.[0] && (
                  <img src={project.images[0]} alt={project.title} className="w-full h-36 object-cover" loading="lazy" />
                )}
                <div className="p-3.5">
                  <h4 className="text-sm font-semibold text-neutral-900 line-clamp-1">{project.title}</h4>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{project.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </AppWindow>
  );
}
