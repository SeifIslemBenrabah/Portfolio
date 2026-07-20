'use client';

import React, { useState } from 'react';
import { SplashScreen } from '@/components/screens/splash-screen';
import { LockScreen } from '@/components/screens/lock-screen';
import { HomeScreen } from '@/components/screens/home-screen';
import { PhoneFrame } from '@/components/ui/phone-frame';
import { useIsMobile } from '@/lib/use-is-mobile';
import type { AppId } from '@/components/apps/registry';

type Phase = 'splash' | 'lock' | 'home';

export default function Page() {
  const [phase, setPhase] = useState<Phase>('splash');
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const isMobile = useIsMobile();

  if (phase === 'splash') {
    return <SplashScreen onFinish={() => setPhase('lock')} />;
  }

  if (phase === 'lock') {
    const lock = <LockScreen onUnlock={() => setPhase('home')} />;
    if (isMobile === null) return <div className="fixed inset-0 bg-ink" />;
    return isMobile ? (
      <PhoneFrame>{lock}</PhoneFrame>
    ) : (
      <div className="relative h-dvh w-full">{lock}</div>
    );
  }

  return (
    <HomeScreen
      activeApp={activeApp}
      onOpenApp={(id) => setActiveApp(id)}
      onCloseApp={() => setActiveApp(null)}
    />
  );
}
