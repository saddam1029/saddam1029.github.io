'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/data/projects';
import { IconArrow, IconImage } from './Icons';
import { Reveal } from './Reveal';

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-label">Projects</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">
            Android applications I&apos;ve <em>built</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-intro">
            Each project is a case study — tap any card to see screenshots, features, and the technologies behind it.
          </p>
        </Reveal>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => {
            const imgSrc = project.images[0] || '/assets/placeholder.svg';
            const num = String(i + 1).padStart(2, '0');
            const techs = project.technologies.slice(0, 3);

            return (
              <Reveal key={project.id} delay={Math.min(i * 0.05, 0.35)}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link href={`/project/${project.id}/`} className="project-card shown">
                    <div className="project-card-image">
                      <span className="project-card-badge">{project.category}</span>
                      {project.images.length > 0 && (
                        <span className="project-card-count">
                          <IconImage />
                          {project.images.length}
                        </span>
                      )}
                      <Image
                        src={`/${imgSrc.replace(/^\//, '')}`}
                        alt={`${project.title} preview`}
                        width={800}
                        height={500}
                        priority={i === 0}
                      />
                    </div>
                    <div className="project-card-body">
                      <div className="project-index">{num}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      {techs.length > 0 && (
                        <div className="project-card-techs">
                          {techs.map((tech) => (
                            <span className="project-card-tech" key={tech}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="project-card-link">
                        View Project
                        <IconArrow />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
