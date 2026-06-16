import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { language, t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsData = [
    {
      id: 't-1', name: 'Marketing Manager', role: 'Marketing Manager', company: 'Boutique Hafouda',
      text: "الله يبارك ما كنتش متوقع الخدمة تخرج هكذا خدمتها كيما كنا حابيين وافضل شكرا", rating: 5,
    },
    {
      id: 't-2', name: 'Dr. Nafissa Djelid', role: 'Dermatologist & Aesthetic Doctor', company: 'Medical Clinic',
      text: "Merci beaucoup pour ton professionnalisme et ta patience. Désolée pour mes demandes qui changeaient parfois, tu as toujours été à l'écoute et tu as réussi à réaliser exactement ce que je voulais. Je suis très satisfaite du résultat.", rating: 5,
    },
    {
      id: 't-3', name: 'Belfedhal Rima', role: 'Founder', company: 'Phinlex',
      text: "I had the pleasure of working with Seif on the design of my company's brand identity, and I must say that I am extremely satisfied with the result. Seif is a true professional who is passionate about his work.", rating: 5,
    },
  ];

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Heading */}
        <div className="mb-16 md:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-mono font-semibold block mb-3">
            {t('testimonials.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {language === 'ar' ? (
              <span>ثقة شركائنا المتميزين <br />وقصص نجاح مشتركة.</span>
            ) : language === 'fr' ? (
              <span>Confiance de nos partenaires <br />et histoires de succès.</span>
            ) : (
              <span>Client collaboration <br />stories of success.</span>
            )}
          </h2>
        </div>

        {/* Carousel */}
        <div className={`relative bg-white/5 rounded-3xl p-8 sm:p-14 border border-white/10 overflow-hidden min-h-[320px] flex flex-col justify-between ${isRtl ? 'text-right' : 'text-left'}`}>
          <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} p-8 text-white/5`}>
            <Quote className={`w-20 h-20 ${isRtl ? '' : 'rotate-180'}`} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
              transition={{ duration: 0.4 }}
              className={`relative z-10 flex flex-col h-full ${isRtl ? 'items-end text-right' : 'items-start text-left'}`}
            >
              <div className={`flex gap-1 mb-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              <p className="font-display font-medium text-base sm:text-lg leading-relaxed text-white/80 italic mb-8 w-full">
                "{current.text}"
              </p>

              <div className={`flex items-center gap-4 border-t border-white/10 pt-6 mt-auto w-full ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-semibold text-white">{current.name}</h4>
                  <p className="text-[10px] sm:text-xs font-mono font-semibold text-white/40 uppercase tracking-widest mt-0.5">
                    {current.role} — <span className="text-white/50">{current.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className={`flex items-center justify-between mt-10 relative z-10 pt-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <div className={`flex gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Review ${idx + 1}`}
                />
              ))}
            </div>
            <div className={`flex gap-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
              <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white border border-white/10 hover:border-white text-white/60 hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer" aria-label="Previous">
                {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
              </button>
              <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white border border-white/10 hover:border-white text-white/60 hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer" aria-label="Next">
                {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
