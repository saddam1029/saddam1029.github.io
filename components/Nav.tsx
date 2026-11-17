'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PERSONAL } from '@/data/personal';

const LINKS = [
  { href: '/#home', label: 'Home', id: 'home' },
  { href: '/#about', label: 'About', id: 'about' },
  { href: '/#skills', label: 'Skills', id: 'skills' },
  { href: '/#projects', label: 'Projects', id: 'projects' },
  { href: '/#certification', label: 'Certification', id: 'certification' },
  { href: '/#contact', label: 'Contact', id: 'contact' },
];

type NavProps = {
  forceScrolled?: boolean;
};

export function Nav({ forceScrolled = false }: NavProps) {
  const [scrolled, setScrolled] = useState(forceScrolled);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      if (!forceScrolled) setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let current = 'home';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.id;
        }
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [forceScrolled]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className={`nav${scrolled || forceScrolled ? ' scrolled' : ''}`} id="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="dot" />
          {PERSONAL.name}
        </Link>

        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          {LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={active === link.id ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle${open ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
