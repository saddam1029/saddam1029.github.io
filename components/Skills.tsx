'use client';

import { SKILL_GROUPS } from '@/data/skills';
import { Reveal } from './Reveal';
import { SkillIcon } from './Icons';

export function Skills() {
  return (
    <section className="section" id="skills" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">Skills</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">
            Tools and technologies I work with <em>daily</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-intro">
            Technical skills from my professional toolkit — languages and UI, Android platform work, architecture and APIs, data and backend services, monetization, AI tools, and development practices.
          </p>
        </Reveal>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.name} delay={0.05 + i * 0.04}>
              <div className="skill-group">
                <div className="skill-group-header">
                  <SkillIcon name={group.icon} />
                  <h3>{group.name}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
