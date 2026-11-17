'use client';

import { CERTIFICATIONS } from '@/data/certifications';
import { IconBadge } from './Icons';
import { Reveal } from './Reveal';

export function Certification() {
  return (
    <section className="section" id="certification" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <Reveal>
          <div className="section-label">Certification</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="section-title">
            Credentials and <em>certifications</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="section-intro">
            Professional certifications and course completions that support my Android engineering work.
          </p>
        </Reveal>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={0.05 + i * 0.04}>
              <a
                className="cert-card"
                href={cert.url || '#certification'}
                target={cert.url ? '_blank' : undefined}
                rel={cert.url ? 'noopener noreferrer' : undefined}
              >
                <div className="cert-icon">
                  <IconBadge />
                </div>
                <div>
                  <h3>{cert.title}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  {cert.date ? <div className="cert-issuer">{cert.date}</div> : null}
                  {cert.credentialId ? <div className="cert-id">ID: {cert.credentialId}</div> : null}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
