'use client';

import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { AppWindow } from '@/components/ui/app-window';
import { useLanguage } from '@/context/language-context';
import { useAudioPlayer } from '@/context/audio-player-context';

function formatTime(sec: number) {
  if (!Number.isFinite(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function SpotifyApp({ onClose }: { onClose: () => void }) {
  const { t, isRtl } = useLanguage();
  const { track, playing, progress, duration, togglePlay, seek, next, prev } = useAudioPlayer();

  return (
    <AppWindow title={t('home.app.spotify')} onClose={onClose} headerClassName="bg-black text-white" bodyClassName="bg-linear-to-b from-[#1DB954]/30 to-black">
      <div className="flex flex-col items-center justify-center h-full px-8 py-10 text-white">
        <span className="text-[11px] uppercase tracking-widest text-white/50 mb-6">{t('spotify.nowPlaying')}</span>

        <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl mb-8 shadow-2xl overflow-hidden relative">
          <div
            className="absolute inset-0"
            style={{
              background: 'conic-gradient(from 180deg, #1DB954, #14532d, #1DB954)',
            }}
          />
          <div className="absolute inset-6 rounded-full border-4 border-black/30" />
          <div className="absolute inset-[42%] rounded-full bg-black/40" />
        </div>

        <h3 className="text-xl font-bold mb-1 text-center">{track.title}</h3>
        <p className="text-sm text-white/60 mb-8">{t('spotify.reciter')}</p>

        <div className="w-full max-w-sm flex flex-col gap-1.5 mb-6">
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={progress}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full h-1 accent-[#1DB954] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-white/40 tabular-nums">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button onClick={prev} className="text-white/70 hover:text-white cursor-pointer" aria-label="Previous">
            <SkipBack className="w-6 h-6 fill-current" />
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause className="w-6 h-6 fill-current" /> : <Play className={`w-6 h-6 fill-current ${isRtl ? '' : 'ml-0.5'}`} />}
          </button>
          <button onClick={next} className="text-white/70 hover:text-white cursor-pointer" aria-label="Next">
            <SkipForward className="w-6 h-6 fill-current" />
          </button>
        </div>

        <div className="flex items-center gap-2 mt-8 text-white/40">
          <Volume2 className="w-4 h-4" />
          <div className="w-24 h-1 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-2/3 bg-white/60" />
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
