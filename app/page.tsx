import { SiteHeader } from '@/components/site/site-header';
import { HeroSection } from '@/components/site/hero-section';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-20 h-screen overflow-hidden">
        <HeroSection />
      </main>
    </>
  );
}
