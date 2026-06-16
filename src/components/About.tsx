import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sliders, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t, isRtl } = useLanguage();

  const stats = [
    { value: '3+', label: t('about.stats.experience') },
    { value: '10+', label: t('about.stats.projects') },
    { value: '99%', label: t('about.stats.clients') },
    { value: '95%', label: t('about.stats.retention') },
  ];

  const values = [
    {
      icon: Compass,
      title: t('about.pillar1.title'),
      description: t('about.pillar1.desc'),
    },
    {
      icon: Sliders,
      title: t('about.pillar2.title'),
      description: t('about.pillar2.desc'),
    },
    {
      icon: Layers,
      title: t('about.pillar3.title'),
      description: t('about.pillar3.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-black/[0.01] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-black/[0.01] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className={`mb-16 md:mb-20 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-black font-mono font-semibold block mb-3">
            {t('about.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            {language === 'ar' ? (
              <span>
                الارتقاء بالجاذبية البصرية <br />
                عبر البرمجيات فائقة الجودة.
              </span>
            ) : language === 'fr' ? (
              <span>
                Élever la gravité visuelle <br />
                grâce à un code premium.
              </span>
            ) : (
              <span>
                Elevating visual gravity <br />
                through premium code.
              </span>
            )}
          </h2>
        </div>

        {/* Journey Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${isRtl ? 'dir-rtl' : ''}`}>
          <div className={`lg:col-span-7 flex flex-col gap-6 text-gray-600 font-sans text-sm sm:text-base leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p>
              {t('about.p3')}
            </p>

            {/* Structured Stats Board */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 pt-8 border-t border-black/10`}>
              {stats.map((stat, idx) => (
                <div key={idx} className={`flex flex-col ${isRtl ? 'items-start text-right' : 'items-start text-left'}`}>
                  <span className="font-display text-2xl sm:text-3.5xl font-black text-black">
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Brand Values Dashboard Card on Right */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-xl relative glow-card">
            <h3 className={`font-display text-lg sm:text-xl font-semibold text-black mb-6 uppercase tracking-wider border-b border-black/10 pb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              {t('about.pillars')}
            </h3>

            <div className="flex flex-col gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className={`flex gap-4 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-black uppercase tracking-wider">
                        {val.title}
                      </h4>
                      <p className="text-xs text-gray-650 leading-relaxed mt-1">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
