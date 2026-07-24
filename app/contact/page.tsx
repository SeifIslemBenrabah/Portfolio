'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';
import { SiGithub, SiBehance, SiInstagram } from 'react-icons/si';
import logo from '@/assets/logo-light.svg';
import { personalInfo } from '@/data/personal';
import { useTranslation } from '@/context/i18n';
import { SiteHeader } from '@/components/site/site-header';

const SOCIALS = [
  { label: 'GitHub', href: personalInfo.github, icon: SiGithub },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: Linkedin },
  { label: 'Behance', href: personalInfo.behance, icon: SiBehance },
  { label: 'Instagram', href: personalInfo.instagram, icon: SiInstagram },
];

export default function ContactPage() {
  const { t } = useTranslation();

  const CTA_LINKS = [
    { label: t.footer.ctaDesign, href: '/design' },
    { label: t.footer.ctaDev, href: '/dev' },
    { label: t.footer.ctaNeedDesigner, href: `mailto:${personalInfo.email}?subject=Design%20project` },
    { label: t.footer.ctaNeedDev, href: `mailto:${personalInfo.email}?subject=Development%20project` },
  ];

  return (
    <>
      <SiteHeader />
      <main className="pt-24 sm:pt-32 pb-10 bg-paper min-h-screen flex flex-col justify-between">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full flex-grow flex flex-col justify-center py-10">
          <p className="text-ink/40 text-sm font-semibold uppercase tracking-[0.2em] mb-3">{t.footer.eyebrow}</p>
          <h2 className="font-condensed font-black text-ink text-4xl sm:text-6xl leading-[0.95] uppercase max-w-2xl mb-12">
            {t.footer.headline}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
            {CTA_LINKS.map((link) => {
              const isInternal = link.href.startsWith('/');
              const classes =
                'group flex items-center justify-between gap-4 rounded-xl border border-paper-line bg-paper-surface px-6 py-5 hover:border-ink/40 transition-colors cursor-pointer';
              const inner = (
                <>
                  <span className="text-ink text-base sm:text-lg font-medium">{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-ink/40 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink" />
                </>
              );
              return isInternal ? (
                <Link key={link.label} href={link.href} className={classes}>
                  {inner}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className={classes}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pt-8 border-t border-paper-line">
            <div className="flex items-center gap-3">
              <img src={logo.src} alt="" className="h-6 w-auto opacity-70" draggable={false} />
              <a href={`mailto:${personalInfo.email}`} className="text-ink/50 text-sm hover:text-ink transition-colors cursor-pointer">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-paper-line flex items-center justify-center text-ink/50 hover:text-ink hover:border-ink/30 transition-colors cursor-pointer"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 text-ink/35 text-xs pb-4">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
