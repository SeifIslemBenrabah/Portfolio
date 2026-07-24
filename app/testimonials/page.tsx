import { SiteHeader } from '@/components/site/site-header';
import { TestimonialsSection } from '@/components/site/testimonials-section';

export default function TestimonialsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <TestimonialsSection />
      </main>
    </>
  );
}
