'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, Star, GitFork } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import { devProjects } from '@/data/projects';
import type { ProjectData } from '@/types';

export function GithubApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const [active, setActive] = useState<ProjectData | null>(null);

  return (
    <AppWindow title={t('home.app.github')} onClose={onClose} headerClassName="bg-[#161B22] text-white" bodyClassName="bg-[#0D1117]">
      {active ? (
        <div className="text-neutral-200">
          <button
            onClick={() => setActive(null)}
            className={`sticky top-0 z-10 w-full flex items-center gap-1.5 px-5 py-3 bg-[#161B22] border-b border-white/10 text-sky-400 text-sm font-medium cursor-pointer `}
          >
            <ChevronLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            {t('common.back')}
          </button>
          <div className={`p-5 sm:p-8 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-2 flex-wrap mb-3 `}>
              {active.image && (
                <img src={active.image} alt="" className={`w-6 h-6 object-contain ${active.noInvert ? '' : 'invert'}`} />
              )}
              <h3 className="font-mono text-lg font-semibold text-white">{active.title}</h3>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">{active.description}</p>
            <div className={`flex flex-wrap gap-1.5 mb-5 `}>
              {active.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-400 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {active.techStack && (
              <div className="mb-5 rounded-lg border border-white/10 overflow-hidden">
                {active.techStack.map((row) => (
                  <div key={row.layer} className={`flex gap-3 px-3 py-2 text-xs border-b border-white/5 last:border-0 ${isRtl ? 'text-right' : ''}`}>
                    <span className="font-mono text-sky-400 shrink-0 w-28">{row.layer}</span>
                    <span className="text-neutral-400">{row.tools}</span>
                  </div>
                ))}
              </div>
            )}

            {active.features && (
              <ul className={`flex flex-col gap-1.5 mb-5 items-start`}>
                {active.features.map((f) => (
                  <li key={f} className="text-xs text-neutral-400 flex gap-2">
                    <span className="text-sky-400">▸</span> {f}
                  </li>
                ))}
              </ul>
            )}

            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wide rounded-full `}
            >
              {active.isGithub ? <Github className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
              {active.isGithub ? t('project.viewGithub') : t('project.viewLive')}
            </a>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {devProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActive(project)}
              className={`group rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 p-4 text-left cursor-pointer transition-colors ${isRtl ? 'text-right' : ''}`}
            >
              <div className={`flex items-center gap-2 mb-2 `}>
                {project.isGithub ? <Github className="w-4 h-4 text-neutral-500 shrink-0" /> : <ExternalLink className="w-4 h-4 text-neutral-500 shrink-0" />}
                <h4 className="text-sm font-mono font-semibold text-sky-400 truncate">{project.title}</h4>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-3">{project.description}</p>
              <div className={`flex items-center gap-3 text-[10px] text-neutral-500 `}>
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {project.year}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {project.tags[0]}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </AppWindow>
  );
}
