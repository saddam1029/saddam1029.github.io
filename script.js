// Reveal project lane cards as they enter the viewport (one subtle, deliberate effect)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.lane-card');

  if ('IntersectionObserver' in window && cards.length) {
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
      card.style.transition = 'opacity .5s ease, transform .5s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cards.forEach(card => observer.observe(card));
  }

  // Close-enough active nav state on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.site-nav a');

  if ('IntersectionObserver' in window && sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.style.color = '');
          link.style.color = 'var(--amber)';
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => navObserver.observe(s));
  }
});
