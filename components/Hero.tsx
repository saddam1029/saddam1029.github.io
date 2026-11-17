'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL } from '@/data/personal';
import { IconArrow, IconGithub } from './Icons';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease, delay },
        };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div className="hero-label" {...item(0.05)}>
              {PERSONAL.role}
            </motion.div>
            <motion.p className="hero-status" {...item(0.12)}>
              <span className="status-dot" aria-hidden />
              Open to Android work
            </motion.p>
            <motion.h1 className="hero-title" {...item(0.18)}>
              Building Android experiences that are <em>fast</em>, useful, and beautifully engineered.
            </motion.h1>
            <motion.p className="hero-desc" {...item(0.28)}>
              I&apos;m an Android developer focused on building real-world applications with Kotlin, Jetpack, and Clean Architecture. I care about performance, thoughtful UI, and writing code that&apos;s easy to maintain.
            </motion.p>
            <motion.div className="hero-cta" {...item(0.38)}>
              <a href="#projects" className="btn btn-primary">
                View Projects
                <IconArrow />
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact Me
              </a>
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <IconGithub />
                GitHub
              </a>
            </motion.div>
          </div>

          <motion.div className="hero-meta" {...item(0.48)}>
            <div className="hero-meta-item">
              <strong>Specialization</strong>
              Native Android · Kotlin
            </div>
            <div className="hero-meta-item">
              <strong>Architecture</strong>
              MVVM · Clean Architecture
            </div>
            <div className="hero-meta-item">
              <strong>Tooling</strong>
              Jetpack · Coroutines · Hilt
            </div>
            <div className="hero-meta-item">
              <strong>Focus</strong>
              Real-world applications
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
