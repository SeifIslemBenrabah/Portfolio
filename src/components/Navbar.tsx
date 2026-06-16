import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), id: 'home' },
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.services'), id: 'services' },
    { label: t('nav.work'), id: 'portfolio' },
    { label: t('nav.testimonials'), id: 'testimonials' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  const languagesList: { code: 'en' | 'fr' | 'ar'; label: string; name: string }[] = [
    { code: 'en', label: 'EN', name: 'Eng' },
    { code: 'fr', label: 'FR', name: 'Fr' },
    { code: 'ar', label: 'عربي', name: 'Ar' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:py-6 transition-all duration-300">
      <div
        id="navbar-container"
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${isScrolled
          ? 'glass-navbar bg-white/80 shadow-md px-6 py-3 border border-black/10 backdrop-blur-md'
          : 'bg-transparent px-4 py-4 md:px-8 border border-transparent'
          }`}
      >
        <div className={`flex items-center justify-between ${isRtl ? 'flex-row-reverse' : ''}`}>
          {/* Logo on Left */}
          <div
            id="nav-logo"
            onClick={() => handleLinkClick('home')}
            className={`flex items-center gap-2 cursor-pointer group ${isRtl ? 'flex-row-reverse' : ''}`}
          >
            <span className="font-mozilla font-bold tracking-wider text-base inline-block">
              Seif<span className="text-black font-light">Islem</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-1 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${isActive
                    ? 'text-black font-bold'
                    : 'text-gray-500 hover:text-black'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-black/5 border border-black/10 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Contact CTA & Language Picker on Right */}
          <div className={`hidden md:flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Minimalist Premium Dropdown */}
            <div className="relative" id="language-dropdown-wrapper">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-black text-[11px] font-bold tracking-widest uppercase rounded-full border border-black/5 shadow-sm transition-all duration-300 select-none cursor-pointer"
              >
                <Languages className="w-3.5 h-3.5 text-black" />
                <span>{languagesList.find(l => l.code === language)?.name}</span>
                <span className={`text-[8px] transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsLangOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute mt-2 w-40 bg-white border border-black/10 rounded-2xl shadow-xl z-50 p-1.5 backdrop-blur-md overflow-hidden ${isRtl ? 'left-0' : 'right-0'}`}
                    >
                      {languagesList.map((lang) => {
                        const isCurrent = language === lang.code;
                        return (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setIsLangOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${isCurrent
                              ? 'bg-black text-white shadow-sm'
                              : 'text-gray-600 hover:bg-neutral-50 hover:text-black'
                              } ${isRtl ? 'text-right flex-row-reverse' : 'text-left'}`}
                          >
                            <span>{lang.name}</span>
                            <span className="font-mono text-[9px] opacity-60 uppercase">{lang.code}</span>
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <button
              id="nav-cta-desktop"
              onClick={() => handleLinkClick('contact')}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile Menu Trigger & Switcher preview */}
          <div className={`md:hidden flex items-center gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Quick mini custom cycle switch for Mobile */}
            <button
              onClick={() => {
                const currentIndex = languagesList.findIndex(l => l.code === language);
                const nextIndex = (currentIndex + 1) % languagesList.length;
                setLanguage(languagesList[nextIndex].code);
              }}
              className="px-3 py-1.5 rounded-full bg-neutral-100/95 backdrop-blur-md border border-black/10 text-[10px] font-bold tracking-wider text-black flex items-center gap-1.5 shadow-sm active:scale-95 transition-all select-none cursor-pointer"
              aria-label={t('nav.toggleLanguage')}
            >
              <Languages className="w-3 h-3 text-black" />
              <span className="uppercase font-mono">{language}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-full border border-black/10 text-gray-500 hover:text-black hover:bg-black/5 transition-all"
              aria-label={t('nav.toggleMenu')}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 p-6 rounded-3xl bg-white border border-black/10 shadow-2xl backdrop-blur-xl md:hidden flex flex-col gap-5 z-40 text-black animate-fade-in"
          >
            <div className={`flex flex-col gap-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${isRtl ? 'text-right' : 'text-left'} ${isActive
                      ? 'text-black bg-black/5 border-l-2 border-black'
                      : 'text-gray-500 hover:text-black hover:bg-black/5'
                      }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Language Selection Header inside Drawer */}
            <div className="border-t border-black/10 pt-4 flex flex-col gap-2">
              <span className={`text-[9px] font-mono tracking-wider uppercase text-gray-400 font-bold flex items-center gap-1.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <Languages className="w-3 h-3" />
                {t('nav.selectLanguage')}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${language === lang.code
                      ? 'bg-black text-white'
                      : 'bg-neutral-50 text-gray-500 hover:bg-neutral-100 hover:text-black border border-black/5'
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-black/10 pt-4">
              <button
                id="nav-cta-mobile"
                onClick={() => handleLinkClick('contact')}
                className={`w-full py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200 text-center font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
              >
                {t('nav.contact')} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
