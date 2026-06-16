import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroScreenProps {
  onFinish: () => void;
}

const WORD = 'Hello';
const TYPE_SPEED = 140; // ms per character
const HOLD_AFTER = 900; // pause after typing completes, cursor still blinking

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  const [typed, setTyped] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (typed >= WORD.length) {
      const holdTimer = setTimeout(() => setExiting(true), HOLD_AFTER);
      return () => clearTimeout(holdTimer);
    }
    const typeTimer = setTimeout(() => setTyped((n) => n + 1), TYPE_SPEED);
    return () => clearTimeout(typeTimer);
  }, [typed]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-200 bg-black flex items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="font-mono text-2xl sm:text-4xl text-white flex items-center">
            <span className="text-white/30 mr-2">$</span>
            <span>{WORD.slice(0, typed)}</span>
            <span className="w-2.5 h-6 sm:h-8 bg-white ml-1 animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
