'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useIsMobile } from '@/lib/use-is-mobile';
import { useLanguage } from '@/context/language-context';
import { useAudioPlayer } from '@/context/audio-player-context';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { StatusBar } from '@/components/ui/status-bar';
import { GlassDock } from '@/components/ui/liquid-glass';
import { APPS, type AppId } from '@/components/apps/registry';
import { personalInfo } from '@/data/personal';
import { NotesApp } from '@/components/apps/notes-app';
import { BehanceApp } from '@/components/apps/behance-app';
import { GithubApp } from '@/components/apps/github-app';
import { MessagesApp } from '@/components/apps/messages-app';
import { GmailApp } from '@/components/apps/gmail-app';
import { SpotifyApp } from '@/components/apps/spotify-app';
import { TranslateApp } from '@/components/apps/translate-app';
import { FoldersApp } from '@/components/apps/folders-app';

function ActiveApp({ id, onClose }: { id: AppId; onClose: () => void }) {
  switch (id) {
    case 'notes': return <NotesApp onClose={onClose} />;
    case 'behance': return <BehanceApp onClose={onClose} />;
    case 'github': return <GithubApp onClose={onClose} />;
    case 'messages': return <MessagesApp onClose={onClose} />;
    case 'gmail': return <GmailApp onClose={onClose} />;
    case 'spotify': return <SpotifyApp onClose={onClose} />;
    case 'translate': return <TranslateApp onClose={onClose} />;
    case 'folders': return <FoldersApp onClose={onClose} />;
  }
}

function AppIconTile({
  app,
  size = 'grid',
  onOpen,
}: {
  app: (typeof APPS)[number];
  size?: 'grid' | 'dock';
  onOpen: () => void;
}) {
  const { t } = useLanguage();
  const { playing } = useAudioPlayer();
  const Icon = app.Icon;
  const dims = size === 'dock' ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16';
  const iconDims = size === 'dock' ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-7 h-7 sm:w-8 sm:h-8';
  const showPlayingDot = app.id === 'spotify' && playing;

  return (
    <button
      onClick={onOpen}
      className={`group flex flex-col items-center gap-1.5 cursor-pointer ${size === 'grid' ? 'w-20' : ''}`}
      aria-label={t(app.labelKey)}
    >
      <div
        className={`relative overflow-hidden ${dims} rounded-[22%] flex items-center justify-center shadow-lg ring-1 ring-black/10 transition-transform duration-200 group-hover:scale-105 group-active:scale-95 ${app.bgClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 45%, rgba(0,0,0,0.08) 100%)' }}
        />
        <Icon className={`relative ${iconDims}`} />
        {showPlayingDot && (
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white animate-pulse ring-1 ring-black/20" />
        )}
      </div>
      {size === 'grid' && (
        <span className="text-white text-[11px] font-medium drop-shadow-md text-center leading-tight">
          {t(app.labelKey)}
        </span>
      )}
    </button>
  );
}

const WALLPAPER = {
  background: 'radial-gradient(circle at 30% 20%, rgba(249,115,22,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.18), transparent 50%), #0A0A0A',
} as const;

export function HomeScreen({
  activeApp,
  onOpenApp,
  onCloseApp,
}: {
  activeApp: AppId | null;
  onOpenApp: (id: AppId) => void;
  onCloseApp: () => void;
}) {
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();

  if (isMobile === null) return <div className="fixed inset-0 bg-ink" />;

  if (isMobile) {
    return (
      <PhoneFrame>
        <div className="relative h-full w-full" style={WALLPAPER}>
          <StatusBar light />
          <div className="grid grid-cols-4 gap-x-2 gap-y-6 px-5 pt-14">
            {APPS.map((app) => (
              <AppIconTile key={app.id} app={app} onOpen={() => onOpenApp(app.id)} />
            ))}
          </div>
          <AnimatePresence>
            {activeApp && <ActiveApp key={activeApp} id={activeApp} onClose={onCloseApp} />}
          </AnimatePresence>
        </div>
      </PhoneFrame>
    );
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden" style={WALLPAPER}>
      {/* macOS-style menu bar */}
      <div className={`relative z-20 flex items-center justify-between px-6 py-2.5 bg-black/30 backdrop-blur-xl border-b border-white/10 text-white text-sm `}>
        <span className="font-semibold">{personalInfo.name}</span>
        <span className="text-white/50 text-xs uppercase tracking-widest">
          {activeApp ? t(APPS.find((a) => a.id === activeApp)?.labelKey ?? '') : personalInfo.title}
        </span>
        <span className="tabular-nums text-white/70 text-xs">{new Date().toLocaleDateString(language === 'ar' ? 'ar-DZ' : language === 'fr' ? 'fr-FR' : 'en-US')}</span>
      </div>

      <AnimatePresence>
        {activeApp && <ActiveApp key={activeApp} id={activeApp} onClose={onCloseApp} />}
      </AnimatePresence>

      {/* Dock */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <GlassDock>
          {APPS.map((app) => (
            <AppIconTile key={app.id} app={app} size="dock" onOpen={() => onOpenApp(app.id)} />
          ))}
        </GlassDock>
      </motion.div>
    </div>
  );
}
