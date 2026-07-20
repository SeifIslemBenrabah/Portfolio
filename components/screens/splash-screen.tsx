'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';
import { useLanguage } from '@/context/language-context';

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const { t } = useLanguage();
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [exiting, setExiting] = useState(false);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-ink overflow-hidden"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute w-125 h-125 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
          <AppleHelloEnglishEffect
            className="h-16 sm:h-20 text-white"
            speed={0.8}
            onAnimationComplete={() => {
              setShowSubtitle(true);
              setTimeout(() => setExiting(true), 700);
            }}
          />
          <motion.p
            className="relative mt-4 text-white/60 text-sm sm:text-base font-sans tracking-wide text-center px-6"
            initial={{ opacity: 0, y: 8 }}
            animate={showSubtitle ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
          >
            {t('splash.subtitle')}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
