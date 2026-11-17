import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { IconArrowLeft } from '@/components/Icons';

export default function NotFound() {
  return (
    <>
      <Nav forceScrolled />
      <main id="main">
        <section className="project-detail">
          <div className="container">
            <div className="not-found">
              <h1>Project Not Found</h1>
              <p>The project you&apos;re looking for doesn&apos;t exist or may have been removed.</p>
              <Link href="/#projects" className="btn btn-primary">
                <IconArrowLeft />
                Back to Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
