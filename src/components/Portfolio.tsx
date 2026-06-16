import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import projectsData from '../data/projects';

interface PortfolioProps {
  onProjectClick?: (project: any) => void;
  onSeeAll?: () => void;
}

const VISIBLE_COUNT = 6;

export default function Portfolio({ onProjectClick, onSeeAll }: PortfolioProps) {
  const { language, t, isRtl } = useLanguage();
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

  const visibleProjects = filteredProjects.slice(0, VISIBLE_COUNT);
  const hiddenCount = filteredProjects.length - visibleProjects.length;

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-black/[0.01] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading & Filter */}
        <div className={`flex flex-col items-center justify-center w-full ${isRtl ? 'md:text-right' : 'md:text-left'} gap-8 mb-6 md:mb-10`}>
          <div className={`w-full ${isRtl ? 'text-right' : 'text-left'}`}>
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-800 font-mono font-semibold block mb-3">
              {t('portfolio.caption')}
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight">
              {language === 'ar' ? (
                <span>معرض من الأفكار الرقمية <br />والبرمجيات الرائدة.</span>
              ) : language === 'fr' ? (
                <span>Une galerie de concepts numériques <br />et de codes de prestige.</span>
              ) : (
                <span>A gallery of premium digital <br />concepts and code.</span>
              )}
            </h2>
          </div>

          <div className={`flex flex-row gap-2.5 bg-neutral-100 p-1.5 rounded-full border border-black/5 shadow-sm ${isRtl ? 'flex-row-reverse' : ''}`}>
            {filters.map((filter) => (
              <button
                key={filter.code}
                id={`filter-button-${filter.code.replace(/\s+/g, '-').toLowerCase()}`}
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

        {/* Project grid — capped at VISIBLE_COUNT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                onClick={() => onProjectClick?.(project)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group relative flex flex-col h-full rounded-2xl bg-white border border-black/10 overflow-hidden shadow-md transition-all duration-300 hover:border-black/30 glow-card cursor-pointer ${isRtl ? 'text-right' : 'text-left'}`}
              >
                <div className={`absolute top-5 ${isRtl ? 'left-5' : 'right-5'} w-8 h-8 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center text-black transform opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-sm z-10`}>
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
                    {project.tags.map((tag) => (
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

        {/* See All button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={onSeeAll}
            className="group flex items-center gap-3 px-7 py-3.5 border border-black/20 rounded-full text-xs font-bold uppercase tracking-widest text-black/60 hover:text-black hover:border-black transition-all duration-200 cursor-pointer"
          >
            {t('portfolio.seeAll')}
            {hiddenCount > 0 && (
              <span className="px-2 py-0.5 text-[9px] font-mono bg-black text-white rounded-full">
                +{hiddenCount}
              </span>
            )}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

      </div>
    </section>
  );
}
