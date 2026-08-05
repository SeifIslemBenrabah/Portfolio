'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { lightLogoClass } from '@/lib/utils';
import { useTranslation } from '@/context/i18n';
import type { ProjectData } from '@/types';

export function ProjectDetail({ project }: { project: ProjectData }) {
  const { t } = useTranslation();
  const isDev = project.category === 'Web Development';
  const backHref = isDev ? '/dev' : '/design';
  const backLabel = isDev ? t.project.backToDev : t.project.backToDesign;
  const ctaLabel = project.isGithub ? t.project.viewGithub : isDev ? t.project.visitLive : t.project.viewBehance;
  const CtaIcon = project.isGithub ? Github : ArrowUpRight;

  return (
    <article className="py-14 sm:py-20 bg-paper">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <p className="text-ink/40 text-sm font-semibold uppercase tracking-[0.2em] mb-3">{project.category}</p>
          <h1 className="font-condensed font-black text-ink text-4xl sm:text-6xl leading-[0.95] uppercase mb-5">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-ink/50 mb-6">
            <span>{project.year}</span>
            {project.month && <span>· {project.month}</span>}
            {project.duration && <span>· {project.duration}</span>}
            {project.grade && (
              <span>
                · {t.project.grade} {project.grade}
              </span>
            )}
            {project.featured && <span className="text-orange-dark font-medium">· {t.work.featured}</span>}
          </div>

          <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">{project.description}</p>

          {project.academicNote && (
            <p className="text-ink/45 text-sm italic mb-6 max-w-2xl">{project.academicNote}</p>
          )}

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs bg-paper-surface border border-paper-line text-ink/65"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3.5 text-sm font-semibold hover:bg-ink/85 transition-colors cursor-pointer"
          >
            {ctaLabel}
            <CtaIcon className="w-4 h-4" />
          </a>
        </motion.div>

        {project.images && project.images.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 flex flex-col gap-4"
          >
            {project.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-2xl border border-paper-line"
              />
            ))}
          </motion.div>
        ) : (
          project.image && (
            <div className="mt-14 flex items-center justify-center py-20 rounded-2xl bg-paper-surface border border-paper-line">
              <img src={project.image} alt="" className={`h-20 w-20 object-contain opacity-80 ${lightLogoClass()}`} />
            </div>
          )
        )}

        {project.techStack && (
          <div className="mt-14">
            <h2 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-5">{t.project.techStack}</h2>
            <div className="flex flex-col">
              {project.techStack.map((row) => (
                <div
                  key={row.layer}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3.5 border-b border-paper-line last:border-0"
                >
                  <span className="text-ink font-medium sm:w-40 shrink-0">{row.layer}</span>
                  <span className="text-ink/55 text-sm">{row.tools}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.features && (
          <div className="mt-14">
            <h2 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-5">{t.project.features}</h2>
            <ul className="flex flex-col gap-3">
              {project.features.map((f) => (
                <li key={f} className="text-ink/60 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-paper-line">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.result && (
          <div className="mt-14">
            <h2 className="text-ink text-sm font-semibold uppercase tracking-[0.15em] mb-5">{t.project.result}</h2>
            <p className="text-ink/60 text-base sm:text-lg leading-relaxed max-w-2xl">{project.result}</p>
          </div>
        )}
      </div>
    </article>
  );
}
