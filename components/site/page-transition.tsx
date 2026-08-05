'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

const TRANSITION = { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const };

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');

  useEffect(() => {
    if (prevPathname.current === pathname) {
      setDisplayChildren(children);
      return;
    }
    prevPathname.current = pathname;
    setPhase('covering');
  }, [pathname, children]);

  return (
    <>
      {displayChildren}
      {phase !== 'idle' && (
        <motion.div
          className="fixed inset-0 z-[9000] bg-ink pointer-events-none"
          initial={{ y: '100%' }}
          animate={{ y: phase === 'covering' ? '0%' : '-100%' }}
          transition={TRANSITION}
          onAnimationComplete={() => {
            if (phase === 'covering') {
              setDisplayChildren(children);
              setPhase('revealing');
            } else {
              setPhase('idle');
            }
          }}
        />
      )}
    </>
  );
}
