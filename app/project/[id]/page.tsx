import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getAllProjectIds, getProject } from '@/data/projects';
import { PERSONAL } from '@/data/personal';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${PERSONAL.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav forceScrolled />
      <main id="main">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
