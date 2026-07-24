import { SiteHeader } from '@/components/site/site-header';
import { WorkSection } from '@/components/site/work-section';

export default function DesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <WorkSection variant="design" />
      </main>
    </>
  );
}
