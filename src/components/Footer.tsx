import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111] border-t border-white/10 py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>

          {/* Logo brand */}
          <div
            className={`flex items-center gap-2 cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
            onClick={handleScrollTop}
          >
            <span className="font-mozilla font-bold tracking-wider text-base text-white hidden sm:inline-block">
              Seif<span className="text-white/50 font-light">Islem</span>
            </span>
          </div>

          {/* Copyright */}
          <div className={`text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <p className="text-[11px] font-mono text-white/40 uppercase tracking-widest leading-relaxed">
              &copy; {new Date().getFullYear()} {t('footer.copyright')}
            </p>
            <p className="text-[9px] font-mono text-white/25 uppercase tracking-widest mt-1">
              {t('footer.desc')}
            </p>
          </div>

          {/* Back to top */}
          <button
            id="back-to-top"
            onClick={handleScrollTop}
            className={`group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white border border-white/10 hover:border-white text-white/50 hover:text-black text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${isRtl ? 'flex-row-reverse' : ''}`}
            aria-label="Back to top"
          >
            {t('footer.top')}
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
