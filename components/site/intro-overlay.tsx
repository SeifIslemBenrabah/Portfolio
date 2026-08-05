'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const TRANSITION = { duration: 1.7, delay: 0.6, ease: [0.76, 0, 0.24, 1] as const };

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSkip(true);
      return;
    }
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  if (skip || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* top-left half, split along the diagonal, slides away to the top-left */}
      <motion.div
        className="absolute inset-0 bg-ink"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: '-100%', y: '-100%' }}
        transition={TRANSITION}
      />
      {/* bottom-right half, slides away to the bottom-right */}
      <motion.div
        className="absolute inset-0 bg-ink"
        style={{ clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)' }}
        initial={{ x: 0, y: 0 }}
        animate={{ x: '100%', y: '100%' }}
        transition={TRANSITION}
      />
    </div>
  );
}
