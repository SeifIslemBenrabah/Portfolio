'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-light.svg';
import { personalInfo } from '@/data/personal';
import { useTranslation } from '@/context/i18n';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/design', label: t.nav.design },
    { href: '/dev', label: t.nav.dev },
    { href: '/about', label: t.nav.about },
    { href: '/testimonials', label: t.nav.testimonials },
  ];

  // Normalize pathname for basePath-aware active detection
  const isActive = (href: string) => {
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const clean = pathname.replace(base, '') || '/';
    return href === '/' ? clean === '/' : clean.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-paper/90 backdrop-blur-xl border-b border-paper-line' : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label={`${personalInfo.name} — home`}>
          <img src={logo.src} alt="" className="h-7 sm:h-8 w-auto" draggable={false} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${isActive(link.href) ? 'text-ink' : 'text-ink/70 hover:text-ink'
                }`}
            >
              {link.label}
              <span
                className={`absolute left-4 right-4 -bottom-0.5 h-px bg-ink origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </Link>
          ))}

          {/* Language separator */}
          <div className="w-px h-4 bg-ink/20 mx-2" />

          {/* EN button */}
          <button
            onClick={() => setLang('en')}
            className={`group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${lang === 'en' ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`}
          >
            EN
            <span
              className={`absolute left-3 right-3 -bottom-0.5 h-px bg-ink origin-left transition-transform duration-300 ${lang === 'en' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
            />
          </button>

          {/* FR button */}
          <button
            onClick={() => setLang('fr')}
            className={`group relative px-3 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${lang === 'fr' ? 'text-ink' : 'text-ink/70 hover:text-ink'
              }`}
          >
            FR
            <span
              className={`absolute left-3 right-3 -bottom-0.5 h-px bg-ink origin-left transition-transform duration-300 ${lang === 'fr' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
            />
          </button>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-ink text-paper px-5 py-2.5 text-sm font-semibold hover:bg-ink/85 transition-colors cursor-pointer"
        >
          {t.nav.contact}
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink cursor-pointer"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden h-screen font-condensed border-t border-paper-line bg-paper/95 backdrop-blur-xl px-5 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-2 py-3 text-base border-ink font-medium transition-colors cursor-pointer ${isActive(link.href) ? 'text-ink' : 'text-ink/80 hover:text-ink'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 px-2 py-2 mt-1 border-t border-paper-line">
            <button
              onClick={() => { setLang('en'); setOpen(false); }}
              className={`text-base font-medium transition-colors cursor-pointer ${lang === 'en' ? 'text-ink' : 'text-ink/70 hover:text-ink'}`}
            >
              EN
            </button>
            <button
              onClick={() => { setLang('fr'); setOpen(false); }}
              className={`text-base font-medium transition-colors cursor-pointer ${lang === 'fr' ? 'text-ink' : 'text-ink/70 hover:text-ink'}`}
            >
              FR
            </button>
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center bg-ink text-paper px-5 py-3 text-sm font-semibold cursor-pointer"
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  );
}
