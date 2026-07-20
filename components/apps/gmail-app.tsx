'use client';

import React, { useState } from 'react';
import { Send, Github, Linkedin, Instagram, MapPin } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 504.4 504.4" fill="currentColor" className={className}>
      <path d="M195.2,184.2H188h-48v44h51.6c9.2,0,17.2-2.4,17.2-23.6C208.8,183.4,195.2,184.2,195.2,184.2z" />
      <path d="M195.2,260.2H140v56h48.4c0.8,0,2,0,3.6,0c8,0,23.2-3.2,23.2-27.2C215.6,260.6,195.2,260.2,195.2,260.2z" />
      <path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6 C504,57,447.2,0.2,377.6,0.2z M296,160.2h84v20h-84V160.2z M256.8,291.8c0,62.4-61.6,64.4-61.6,64.4h-56.8h-1.6H96v-208h40.4h1.6 h56.8c30.8,0,55.2,17.6,55.2,54.4c0,36.8-29.6,38.8-29.6,38.8C259.6,241,256.8,291.8,256.8,291.8z M407.6,288.2H306.4 c0,40,34.4,36.8,34.4,36.8c32.4,0,31.2-20.8,31.2-20.8h34.4c0,56-66.8,53.6-66.8,53.6c-80,0-74.8-78.8-74.8-78.8s0-79.2,74.8-79.2 C418.4,199.4,407.6,288.2,407.6,288.2z" />
      <path d="M340.4,228.6c-30,0-34.4,31.6-34.4,31.6h64C370,260.2,370.4,228.6,340.4,228.6z" />
    </svg>
  );
}

export function GmailApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const [form, setForm] = useState({ subject: '', body: '' });

  const handleSend = () => {
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(form.body)}`;
    window.location.href = mailto;
  };

  const socials = [
    { icon: Linkedin, url: personalInfo.linkedin },
    { icon: Github, url: personalInfo.github },
    { icon: BehanceIcon, url: personalInfo.behance },
    { icon: Instagram, url: personalInfo.instagram },
  ];

  return (
    <AppWindow title={t('home.app.gmail')} onClose={onClose} headerClassName="bg-white text-red-500 border-b border-neutral-200" bodyClassName="bg-white">
      <div className={`p-5 sm:p-8 max-w-xl mx-auto ${isRtl ? 'text-right' : 'text-left'}`}>
        <h3 className="font-display text-lg font-semibold text-neutral-900 mb-5">{t('gmail.newMessage')}</h3>

        <div className="flex flex-col gap-3 mb-5">
          <div className={`flex items-center gap-3 border-b border-neutral-200 py-2.5 `}>
            <span className="text-xs text-neutral-400 w-16 shrink-0">{t('gmail.to')}</span>
            <span className="text-sm text-neutral-800">{personalInfo.email}</span>
          </div>
          <div className={`flex items-center gap-3 border-b border-neutral-200 py-2.5 `}>
            <span className="text-xs text-neutral-400 w-16 shrink-0">{t('gmail.subject')}</span>
            <input
              value={form.subject}
              onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
              className={`flex-1 text-sm text-neutral-800 outline-none bg-transparent ${isRtl ? 'text-right' : 'text-left'}`}
            />
          </div>
          <textarea
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
            rows={8}
            placeholder={t('gmail.message')}
            className={`w-full text-sm text-neutral-800 outline-none resize-none py-2 ${isRtl ? 'text-right' : 'text-left'}`}
          />
        </div>

        <button
          onClick={handleSend}
          className={`inline-flex items-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer `}
        >
          {t('gmail.send')}
          <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
        </button>

        <div className="mt-8 pt-6 border-t border-neutral-100">
          <div className={`flex items-center gap-2 text-xs text-neutral-500 mb-4 `}>
            <MapPin className="w-3.5 h-3.5" />
            {t('gmail.location')}
          </div>
          <div className={`flex gap-2 `}>
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
