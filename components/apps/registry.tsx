import React from 'react';
import { Languages, Folder } from 'lucide-react';
import { SiGithub, SiBehance, SiGmail, SiSpotify } from 'react-icons/si';

export type AppId = 'notes' | 'behance' | 'github' | 'messages' | 'gmail' | 'spotify' | 'translate' | 'folders';

export interface AppDef {
  id: AppId;
  labelKey: string;
  bgClass: string;
  Icon: React.ComponentType<{ className?: string }>;
}

function NotesGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.5 3.5h8.6L18.5 7v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M15 3.5V7h3.3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.2 12h7.2M8.2 15.3h7.2M8.2 8.7h4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MessagesGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5C6.75 3.5 2.5 7.02 2.5 11.36c0 2.53 1.44 4.78 3.68 6.22-.14 1.17-.55 2.34-1.24 3.36 1.6-.15 3.06-.77 4.26-1.7.9.26 1.85.4 2.8.4 5.25 0 9.5-3.52 9.5-7.86S17.25 3.5 12 3.5Z" />
    </svg>
  );
}

export const APPS: AppDef[] = [
  { id: 'notes', labelKey: 'home.app.notes', bgClass: 'bg-linear-to-b from-amber-300 to-amber-500 text-amber-950', Icon: NotesGlyph },
  { id: 'behance', labelKey: 'home.app.behance', bgClass: 'bg-[#1769FF] text-white', Icon: SiBehance },
  { id: 'github', labelKey: 'home.app.github', bgClass: 'bg-[#0D1117] text-white', Icon: SiGithub },
  { id: 'messages', labelKey: 'home.app.messages', bgClass: 'bg-linear-to-b from-green-400 to-green-500 text-white', Icon: MessagesGlyph },
  { id: 'gmail', labelKey: 'home.app.gmail', bgClass: 'bg-white text-[#EA4335]', Icon: SiGmail },
  { id: 'spotify', labelKey: 'home.app.spotify', bgClass: 'bg-[#1DB954] text-black', Icon: SiSpotify },
  { id: 'translate', labelKey: 'home.app.translate', bgClass: 'bg-linear-to-br from-sky-400 to-blue-600 text-white', Icon: Languages },
  { id: 'folders', labelKey: 'home.app.folders', bgClass: 'bg-linear-to-b from-sky-300 to-blue-500 text-white', Icon: Folder },
];
