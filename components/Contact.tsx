'use client';

import { PERSONAL } from '@/data/personal';
import { IconGithub, IconLinkedIn, IconMail } from './Icons';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-label">Contact</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="contact-title">
            Let&apos;s build something <em>useful</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-desc">
            I&apos;m open to Android development opportunities, collaborations, and interesting projects. Reach out through any of the channels below.
          </p>
        </Reveal>
        <Reveal className="contact-links" delay={0.16}>
          <a href={`mailto:${PERSONAL.email}`} className="btn btn-primary">
            <IconMail />
            Email Me
          </a>
          <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <IconGithub />
            GitHub
          </a>
          <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <IconLinkedIn />
            LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
