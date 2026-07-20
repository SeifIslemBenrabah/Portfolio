'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, X } from 'lucide-react';
import { useIsMobile } from '@/lib/use-is-mobile';
import { useLanguage } from '@/context/language-context';

/**
 * Shared chrome for every app screen: full-screen sheet on the phone frame,
 * centered glass modal (macOS-style app window) on desktop.
 */
export function AppWindow({
  title,
  onClose,
  children,
  headerClassName = 'bg-neutral-900 text-white',
  bodyClassName = 'bg-white',
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
}) {
  const isMobile = useIsMobile();
  const { isRtl } = useLanguage();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, ...(isMobile ? { y: 40 } : { scale: 0.94, y: 20 }) }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, ...(isMobile ? { y: 40 } : { scale: 0.96, y: 10 }) }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={
          isMobile
            ? 'absolute inset-0 z-40 flex flex-col overflow-hidden'
            : 'fixed inset-0 z-40 flex items-center justify-center p-8'
        }
      >
        {!isMobile && <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />}
        <div
          className={
            isMobile
              ? `relative flex flex-col h-full w-full ${bodyClassName}`
              : `relative flex flex-col w-full max-w-3xl h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 ${bodyClassName}`
          }
        >
          <div className={`flex items-center gap-2 px-4 py-3 shrink-0 ${headerClassName} `}>
            <button
              onClick={onClose}
              aria-label="Back"
              className={`flex items-center justify-center rounded-full p-1.5 hover:bg-white/10 transition-colors cursor-pointer `}
            >
              {isMobile ? <ChevronLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} /> : <X className="w-4 h-4" />}
            </button>
            <span className="font-semibold text-sm">{title}</span>
          </div>
          <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
