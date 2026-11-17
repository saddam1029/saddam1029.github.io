import { PERSONAL } from '@/data/personal';
import { IconGithub, IconLinkedIn, IconMail, IconPhone } from './Icons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            {PERSONAL.name}
            <span className="role">{PERSONAL.role}</span>
          </div>
          <div className="footer-links">
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer">
              <IconGithub />
              GitHub
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
              LinkedIn
            </a>
            <a href={`mailto:${PERSONAL.email}`}>
              <IconMail />
              Email
            </a>
            <a href={`tel:${PERSONAL.phone}`}>
              <IconPhone />
              {PERSONAL.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="footer-copy">© {year} {PERSONAL.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
