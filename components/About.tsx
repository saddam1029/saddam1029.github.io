'use client';

import { Reveal } from './Reveal';

const CARDS = [
  {
    title: 'Architecture',
    body: 'MVVM, Clean Architecture, Repository pattern, and Dependency Injection with Hilt for scalable codebases.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Engineering',
    body: 'Kotlin Coroutines, Retrofit, OkHttp, and Room Database for robust data handling and async operations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Location & Maps',
    body: 'Google Maps SDK, Location APIs, GPS navigation, and real-time location features for map-based apps.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Backend Services',
    body: 'Firebase, Crashlytics, Analytics, and Google Services for app monitoring, auth, and cloud features.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
  },
];

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
            <p>
              I&apos;m an <strong>Android developer</strong> who builds mobile applications with Kotlin and the modern Android ecosystem. My work centers on creating apps that are genuinely useful — apps that solve real problems and feel good to use.
            </p>
            <p>
              I work with <strong>Kotlin</strong>, the Android SDK, and Jetpack libraries to build maintainable, testable applications. I follow <strong>MVVM and Clean Architecture</strong> patterns to keep code organized, use <strong>Coroutines</strong> for asynchronous work, and integrate REST APIs with Retrofit and OkHttp.
            </p>
            <p>
              On the data side, I use <strong>Room Database</strong> for local persistence and <strong>Firebase</strong> for backend services, analytics, and crash reporting. I&apos;ve also worked extensively with <strong>Google Maps</strong> and location APIs for navigation-based apps.
            </p>
            <p>
              I care about UI implementation — translating designs into responsive, accessible interfaces with XML and Material Design. Performance matters to me: smooth scrolling, efficient background work, and keeping apps fast on real devices.
            </p>
          </Reveal>
          <Reveal className="about-cards" delay={0.2}>
            {CARDS.map((card) => (
              <div className="about-card" key={card.title}>
                <div className="about-card-icon">{card.icon}</div>
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
