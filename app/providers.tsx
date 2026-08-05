'use client';

import { LanguageProvider } from '@/context/i18n';
import { PageTransition } from '@/components/site/page-transition';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <PageTransition>{children}</PageTransition>
    </LanguageProvider>
  );
}
