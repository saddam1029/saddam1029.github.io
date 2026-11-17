import { About } from '@/components/About';
import { Certification } from '@/components/Certification';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Nav } from '@/components/Nav';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
