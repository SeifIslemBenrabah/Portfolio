'use client';

import React, { createContext, useContext, useRef, useState, useCallback } from 'react';

export interface Track {
  title: string;
  src: string;
}

// Placeholder reciter/surah — swap freely, no API key required.
export const TRACKS: Track[] = [
  { title: 'Surah Al-Mulk', src: 'https://server8.mp3quran.net/afs/067.mp3' },
  { title: 'Surah Al-Kahf', src: 'https://server8.mp3quran.net/afs/018.mp3' },
  { title: 'Surah Ar-Rahman', src: 'https://server8.mp3quran.net/afs/055.mp3' },
];

interface AudioPlayerContextType {
  trackIndex: number;
  track: Track;
  playing: boolean;
  progress: number;
  duration: number;
  togglePlay: () => void;
  seek: (time: number) => void;
  next: () => void;
  prev: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

/**
 * Owns the single <audio> element for the whole app, mounted once at the
 * root so playback survives closing/reopening the Spotify-styled app (the
 * element never unmounts — only the app UI that controls it does).
 */
export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playing]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setProgress(time);
  }, []);

  const changeTrack = useCallback((index: number) => {
    setTrackIndex(index);
    setProgress(0);
    setPlaying(false);
  }, []);

  const next = useCallback(() => changeTrack((trackIndex + 1) % TRACKS.length), [trackIndex, changeTrack]);
  const prev = useCallback(() => changeTrack((trackIndex - 1 + TRACKS.length) % TRACKS.length), [trackIndex, changeTrack]);

  return (
    <AudioPlayerContext.Provider
      value={{ trackIndex, track: TRACKS[trackIndex], playing, progress, duration, togglePlay, seek, next, prev }}
    >
      <audio
        ref={audioRef}
        src={TRACKS[trackIndex].src}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={next}
      />
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  return ctx;
}
