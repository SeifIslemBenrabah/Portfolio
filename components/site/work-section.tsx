'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { LogoStrip } from '@/components/site/logo-strip';
import { designProjects, devProjects } from '@/data/projects';
import { lightLogoClass } from '@/lib/utils';
import { useTranslation } from '@/context/i18n';
import type { ProjectData } from '@/types';

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const { t } = useTranslation();
  const thumb = project.images?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group relative block rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer"
      >
        <div className="relative aspect-video overflow-hidden bg-ink/5">
          {thumb ? (
            <img
              src={thumb}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {project.image && (
                <img src={project.image} alt="" className={`h-16 w-16 object-contain ${lightLogoClass()} opacity-70`} />
              )}
            </div>
          )}
          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ink flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
            <ArrowUpRight className="w-4 h-4 text-paper" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5 pt-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10 flex flex-col justify-end">
            <div className="flex items-center gap-2 text-xs text-black/60 mb-1.5">
              <span>{project.category}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
              {project.featured && (
                <>
                  <span aria-hidden>·</span>
                  <span className="text-orange-dark">{t.work.featured}</span>
                </>
              )}
            </div>
            <h3 className="text-black font-condensed font-bold text-xl sm:text-2xl leading-snug uppercase">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function WorkSection({ variant }: { variant: 'design' | 'dev' }) {
  const { t } = useTranslation();
  const projects = variant === 'design' ? designProjects : devProjects;
  const section = variant === 'design' ? t.work.design : t.work.dev;

  return (
    <section className="relative py-20 sm:py-28 bg-paper">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="lg:fixed lg:top-28 flex flex-col w-full max-w-md lg:max-w-[480px]">
              <div className="max-w-2xl">
                <p className="text-ink/40 text-sm font-semibold uppercase tracking-[0.2em] mb-3">{section.eyebrow}</p>
                <h2 className="font-condensed font-black text-ink text-4xl sm:text-6xl leading-[0.95] uppercase mb-4">{section.title}</h2>
                <p className="text-ink/55 text-base sm:text-lg leading-relaxed">{section.description}</p>
              </div>
              <LogoStrip />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-10 max-w-xl mx-auto">
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
