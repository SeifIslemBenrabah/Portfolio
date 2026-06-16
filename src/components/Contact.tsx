import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 504.4 504.4" fill="currentColor" className={className}>
      <path d="M195.2,184.2H188h-48v44h51.6c9.2,0,17.2-2.4,17.2-23.6C208.8,183.4,195.2,184.2,195.2,184.2z"/>
      <path d="M195.2,260.2H140v56h48.4c0.8,0,2,0,3.6,0c8,0,23.2-3.2,23.2-27.2C215.6,260.6,195.2,260.2,195.2,260.2z"/>
      <path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
        C504,57,447.2,0.2,377.6,0.2z M296,160.2h84v20h-84V160.2z M256.8,291.8c0,62.4-61.6,64.4-61.6,64.4h-56.8h-1.6H96v-208h40.4h1.6
        h56.8c30.8,0,55.2,17.6,55.2,54.4c0,36.8-29.6,38.8-29.6,38.8C259.6,241,256.8,291.8,256.8,291.8z M407.6,288.2H306.4
        c0,40,34.4,36.8,34.4,36.8c32.4,0,31.2-20.8,31.2-20.8h34.4c0,56-66.8,53.6-66.8,53.6c-80,0-74.8-78.8-74.8-78.8s0-79.2,74.8-79.2
        C418.4,199.4,407.6,288.2,407.6,288.2z"/>
      <path d="M340.4,228.6c-30,0-34.4,31.6-34.4,31.6h64C370,260.2,370.4,228.6,340.4,228.6z"/>
    </svg>
  );
}

export default function Contact() {
  const { language, t, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-black/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-black/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className={`mb-16 md:mb-20 ${isRtl ? 'text-right' : 'text-left'}`}>
          <span className="text-xs uppercase tracking-[0.25em] text-black font-mono font-semibold block mb-3">
            {t('contact.caption')}
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-black tracking-tight leading-tight">
            {language === 'ar' ? (
              <span>
                لنشيّد معاً أنظمة رقمية <br />
                رائدة ومبتكرة.
              </span>
            ) : language === 'fr' ? (
              <span>
                Créons ensemble des systèmes <br />
                numériques d'avant-garde.
              </span>
            ) : (
              <span>
                Let's forge pioneering <br />
                digital systems together.
              </span>
            )}
          </h2>
        </div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Metadata & Social Connections */}
          <div className={`lg:col-span-5 flex flex-col justify-between h-full ${isRtl ? 'order-last text-right items-end' : 'text-left items-start'}`}>
            <div>
              <p className="text-gray-650 text-xs sm:text-sm leading-relaxed mb-8 max-w-md font-sans">
                {t('contact.desc')}
              </p>

              {/* Physical Details cards */}
              <div className="flex flex-col gap-5 mb-10 w-full">
                {/* Email detail */}
                <div className={`flex items-center gap-4 group ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-11 h-11 rounded-full bg-black border border-black/30 flex items-center justify-center text-white group-hover:bg-black/80 transition-all duration-300 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block font-bold">
                      {language === 'ar' ? 'البريد الإلكتروني' : language === 'fr' ? 'Écrire un e-mail' : 'Write email'}
                    </span>
                    <a href="mailto:seifislem.benrabah@gmail.com" className="text-xs sm:text-sm font-semibold text-black hover:text-gray-650 transition-colors duration-200">
                      seifislem.benrabah@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location detail */}
                <div className={`flex items-center gap-4 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                  <div className="w-11 h-11 rounded-full bg-black border border-black/30 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase block font-bold">
                      {language === 'ar' ? 'نطاق العمل الرئيسي' : language === 'fr' ? 'Basé à' : 'Operating out of'}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-black">
                      {t('contact.location')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles grid */}
            <div className="pt-10 border-t border-black/10 w-full">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block mb-4 font-bold">
                {t('contact.social.label')}
              </span>
              <div className={`flex gap-3 ${isRtl ? 'justify-end' : 'justify-start'}`}>
                {[
                  { icon: Linkedin, url: 'https://www.linkedin.com/in/seifislembenrabah', label: 'LinkedIn' },
                  { icon: Github, url: 'https://github.com/SeifIslemBenrabah', label: 'GitHub' },
                  { icon: BehanceIcon, url: 'https://www.behance.net/seifislembenrabah', label: 'Behance' },
                  { icon: Instagram, url: 'https://www.instagram.com/seif_pcrafter', label: 'Instagram' },
                ].map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={sIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center text-gray-600 hover:text-white hover:bg-black hover:border-black hover:scale-105 transition-all duration-300"
                      aria-label={`Visit Seif's ${social.label}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Modern Glassmorphic Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-xl relative glow-card w-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-black/[0.01] rounded-full blur-2xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 w-full text-black">
              {/* Success Notification popover */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl bg-neutral-100 border border-black/10 flex gap-3 items-center text-black mb-2 ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 text-black" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider">{t('contact.form.success')}</h4>
                      <p className="text-[11px] text-gray-650 mt-0.5 font-sans">
                        {t('contact.form.success.sub')}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name & Email inputs grouping */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className={`text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.name')} <span className="text-black">*</span>
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seif Islem"
                    className={`w-full px-4 py-3 bg-neutral-50 rounded-xl border border-black/10 text-xs text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all block ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-input" className={`text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                    {t('contact.form.email')} <span className="text-black">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@domain.com"
                    className={`w-full px-4 py-3 bg-neutral-50 rounded-xl border border-black/10 text-xs text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all block ${isRtl ? 'text-right' : 'text-left'}`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject-input" className={`text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject-input"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={language === 'ar' ? 'فرصة عمل بصرية متميزة' : language === 'fr' ? 'Opportunité de projet de prestige' : 'Premium Project Opportunity'}
                  className={`w-full px-4 py-3 bg-neutral-50 rounded-xl border border-black/10 text-xs text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all block ${isRtl ? 'text-right' : 'text-left'}`}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message-input" className={`text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold ${isRtl ? 'text-right' : 'text-left'}`}>
                  {t('contact.form.msg')} <span className="text-black">*</span>
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.msg.placeholder')}
                  className={`w-full px-4 py-3 bg-neutral-50 rounded-xl border border-black/10 text-xs text-black placeholder-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all resize-none block ${isRtl ? 'text-right' : 'text-left'}`}
                />
              </div>

              {/* Button Submit CTA */}
              <button
                type="submit"
                id="submit-contact-form"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-black/10 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed group active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    {t('contact.form.btn.transmitting')}
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.btn')}</span>
                    <Send className={`w-3.5 h-3.5 group-hover:translate-x-1 duration-200 ${isRtl ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
