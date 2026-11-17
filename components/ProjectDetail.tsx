'use client';

import Link from 'next/link';
import type { Project } from '@/data/types';
import { Gallery } from './Gallery';
import { IconArrowLeft, IconExternal, IconGithub } from './Icons';
import { Reveal } from './Reveal';

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="project-detail">
      <div className="container">
        <Reveal>
          <Link href="/#projects" className="back-link">
            <IconArrowLeft />
            Back to Projects
          </Link>
        </Reveal>

        <Reveal className="project-header" delay={0.08}>
          <div className="category">{project.category}</div>
          <h1>{project.title}</h1>
          <p className="desc">{project.description}</p>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <Gallery images={project.images} title={project.title} />
        </Reveal>

        <div className="project-info-grid">
          <Reveal className="info-block" delay={0.08}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </Reveal>
          <Reveal className="info-block" delay={0.12}>
            <h2>Features</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="project-info-grid">
          <Reveal className="info-block" delay={0.08}>
            <h2>Technologies</h2>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="info-block" delay={0.12}>
            <h2>Project Details</h2>
            <div className="details-grid">
              <div className="detail-row">
                <span className="label">Role</span>
                <span className="value">{project.role}</span>
              </div>
              <div className="detail-row">
                <span className="label">Category</span>
                <span className="value">{project.category}</span>
              </div>
              <div className="detail-row">
                <span className="label">Platform</span>
                <span className="value">{project.platform}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <Reveal className="project-links" delay={0.1}>
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <IconGithub />
                View on GitHub
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
                <IconExternal />
              </a>
            ) : null}
          </Reveal>
        )}
      </div>
    </section>
  );
}
