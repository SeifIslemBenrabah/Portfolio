import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects';

interface AllProjectsProps {
  onBack: () => void;
  onProjectClick?: (project: any) => void;
}

export default function AllProjects({ onBack, onProjectClick }: AllProjectsProps) {
  const { t, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { code: 'All', label: t('portfolio.filter.all') },
    { code: 'UI/UX', label: t('portfolio.filter.ui') },
    { code: 'Branding', label: t('portfolio.filter.branding') },
    { code: 'Web Development', label: t('portfolio.filter.dev') },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10 px-6 py-4">
        <div className={`container mx-auto max-w-6xl flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            {t('common.back')}
          </button>
          <span className="text-[10px] font-mono text-black/30 uppercase tracking-widest">
            {filteredProjects.length} {t('common.projects')}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl py-14">

        {/* Header */}
        <div className={`mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-800 font-mono font-semibold block mb-3">
            {t('portfolio.caption')}
          </span>
          <h1 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight mb-8">
            {t('allProjects.title')}
          </h1>

          {/* Filter pills */}
          <div className={`flex flex-row gap-2.5 bg-neutral-100 p-1.5 rounded-full border border-black/5 shadow-sm w-fit ${isRtl ? 'flex-row-reverse' : ''}`}>
            {filters.map(filter => (
              <button
                key={filter.code}
                onClick={() => setActiveFilter(filter.code)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === filter.code
                    ? 'text-white font-bold bg-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                onClick={() => onProjectClick?.(project)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`group relative flex flex-col h-full rounded-2xl bg-white border border-black/10 overflow-hidden shadow-md transition-all duration-300 hover:border-black/30 glow-card cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} w-8 h-8 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-sm z-10`}>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>

                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between relative bg-white group-hover:bg-[#FDFDFD] transition-colors duration-300 h-full">
                  <div className="mb-4">
                    <div className={`flex items-center justify-between text-[10px] sm:text-[11px] text-gray-550 font-mono font-semibold mb-5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <span className="tracking-widest">{project.month ? `${project.month} ` : ''}{project.year}</span>
                      <span className="px-2 py-1 rounded bg-black/5 text-black font-bold tracking-widest uppercase">{project.category}</span>
                    </div>

                    <div className={`flex items-center gap-4 mb-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex flex-shrink-0 items-center justify-center bg-[#F9F9F9] rounded border border-black/5 p-2 group-hover:border-black/15 transition-colors duration-300">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out ${project.noInvert ? 'filter brightness-0' : 'filter invert'}`}
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="font-display font-black text-sm text-black">
                            {project.title.split(/[\s—-]+/).slice(0, 2).map((w: string) => w[0]).join('').toUpperCase()}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-black leading-snug line-clamp-2 pr-6">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-650 text-xs leading-relaxed font-sans line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className={`border-t border-black/10 pt-4 flex flex-wrap gap-1.5 mt-auto ${isRtl ? 'flex-row-reverse' : ''}`}>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[9px] uppercase tracking-wider font-semibold font-mono bg-neutral-100 border border-black/5 text-gray-750 rounded transition-colors duration-300 group-hover:bg-black/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
