import { SiteHeader } from '@/components/site/site-header';
import { AboutSection } from '@/components/site/about-section';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <AboutSection />
      </main>
    </>
  );
}
