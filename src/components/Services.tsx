import React from 'react';
import { motion } from 'motion/react';
import { Gem, Terminal, Layers, Video, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Gem, Terminal, Layers, Video,
};

export default function Services() {
  const { language, t, isRtl } = useLanguage();

  const servicesData = [
    {
      id: 'branding', title: t('services.branding.title'), description: t('services.branding.desc'),
      details: [t('services.branding.spec1'), t('services.branding.spec2'), t('services.branding.spec3'), t('services.branding.spec4')],
      iconName: 'Gem',
    },
    {
      id: 'web-dev', title: t('services.webdev.title'), description: t('services.webdev.desc'),
      details: [t('services.webdev.spec1'), t('services.webdev.spec2'), t('services.webdev.spec3'), t('services.webdev.spec4')],
      iconName: 'Terminal',
    },
    {
      id: 'ui-ux', title: t('services.uiux.title'), description: t('services.uiux.desc'),
      details: [t('services.uiux.spec1'), t('services.uiux.spec2'), t('services.uiux.spec3'), t('services.uiux.spec4')],
      iconName: 'Layers',
    },
    {
      id: 'motion', title: t('services.motion.title'), description: t('services.motion.desc'),
      details: [t('services.motion.spec1'), t('services.motion.spec2'), t('services.motion.spec3'), t('services.motion.spec4')],
      iconName: 'Video',
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#111] relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className={`mb-16 md:mb-20 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-mono font-semibold block mb-3">
            {t('services.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'ar' ? (
              <span>حلول إبداعية فائقة الدقة <br />تتلاقى مع أهدافك الاستراتيجية.</span>
            ) : language === 'fr' ? (
              <span>Des solutions créatives <br />alignées sur vos objectifs.</span>
            ) : (
              <span>High-fidelity creative solutions <br />aligned to premium goals.</span>
            )}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Gem;
            return (
              <motion.div
                key={service.id}
                className={`group relative rounded-3xl p-8 sm:p-10 bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/8 ${isRtl ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div className={`flex items-center justify-between mb-8 relative z-10 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-black group-hover:bg-white/90 transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-white/30 font-bold tracking-wider select-none">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mb-8">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mt-4 font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6 relative z-10">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4 font-bold">
                    {t('services.specialties')}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className={`flex items-center gap-2 text-xs text-white/60 ${isRtl ? 'flex-row-reverse text-right' : ''}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
