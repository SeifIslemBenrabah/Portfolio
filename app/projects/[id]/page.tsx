import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site/site-header';
import { ProjectDetail } from '@/components/site/project-detail';
import projectsData, { getProjectById } from '@/data/projects';

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-16 sm:pt-20">
        <ProjectDetail project={project} />
      </main>
    </>
  );
}
