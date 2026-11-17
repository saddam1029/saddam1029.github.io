'use client';

import { ABOUT } from '@/data/about';
import { SkillIcon } from './Icons';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-label">About</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="section-title">
            A developer who cares about <em>craft</em> and substance.
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text" delay={0.12}>
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal className="about-cards" delay={0.2}>
            {ABOUT.cards.map((card) => (
              <div className="about-card" key={card.title}>
                <div className="about-card-icon">
                  <SkillIcon name={card.icon} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
