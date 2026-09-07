/* =========================================================================
   PROJECT DATA
   Edit descriptions, features, technologies, and image paths here.
   Each project's "images" array points to assets/projects/<slug>/NN.png
   Add more entries to that array as you add real screenshots (up to ~10).
   Leave "liveUrl" / "githubUrl" empty to hide that button on the detail page.
   ========================================================================= */
const PROJECTS = [
  {
    slug: "ai-voice-translator",
    title: "AI Voice Translator",
    category: "Utility",
    shortDescription: "A voice-first translator built for fast, natural conversations across languages.",
    description: "AI Voice Translator focuses on real-time voice translation, making cross-language conversations feel natural and immediate rather than typed and mechanical. [Add more project details here]",
    features: [
      "Real-time voice-to-voice translation",
      "Support for multiple languages",
      "Clean, focused conversation UI",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Android SDK", "MVVM", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "gps-voice-navigation",
    title: "GPS Voice Navigation",
    category: "Navigation",
    shortDescription: "Turn-by-turn navigation with live traffic, satellite view, and voice guidance.",
    description: "A navigation app featuring voice guidance, GPS camera, car parking assistance, live traffic and nearby places, satellite view, speedometer, live weather, area calculator, and compass.",
    features: [
      "Voice-guided turn-by-turn navigation",
      "Live traffic and nearby places",
      "Satellite view and speedometer",
      "Area calculator and compass"
    ],
    technologies: ["Kotlin", "Maps SDK", "Location Services", "MVVM"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "signature-maker",
    title: "Signature Maker",
    category: "Tools",
    shortDescription: "A simple tool for creating and exporting custom digital signatures.",
    description: "Signature Maker lets users draw, style, and export a personal signature for use across documents and apps. [Add more project details here]",
    features: [
      "Freehand signature drawing",
      "Adjustable stroke width and color",
      "Export signature as an image",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Android SDK", "Custom Canvas Views", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "neon-clock-app",
    title: "Neon Clock App",
    category: "Personalization",
    shortDescription: "A customizable clock app with vibrant neon themes and home-screen widgets.",
    description: "Neon Clock App brings a set of neon-styled clock faces to the home screen and lock screen. [Add more project details here]",
    features: [
      "Multiple neon clock themes",
      "Home-screen widget support",
      "Custom color options",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Android Widgets", "Custom Views", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "etmaen",
    title: "Etmaen",
    category: "Healthcare",
    shortDescription: "A medical appointment app with role-based access for admins, clients, and providers.",
    description: "A medical appointment app with role-based authentication for Admins, Clients, and Providers. Built using Kotlin, MVVM, and Firebase (Auth & Realtime DB) for secure, dynamic data management.",
    features: [
      "Role-based authentication (Admin / Client / Provider)",
      "Real-time appointment data",
      "Secure Firebase-backed accounts",
      "MVVM-driven architecture"
    ],
    technologies: ["Kotlin", "MVVM", "Firebase Auth", "Firebase Realtime Database"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "my-diary",
    title: "My Diary",
    category: "Lifestyle",
    shortDescription: "A personal diary app with rich customization for entries, themes, and privacy.",
    description: "A personal diary app with customizable fonts, styles, emojis, stickers, images, and sound, plus lists, a diary calendar, timeline manager, app lock, and app theming.",
    features: [
      "Customizable fonts, emojis, and stickers",
      "Diary calendar and timeline view",
      "App lock for privacy",
      "Full app theming"
    ],
    technologies: ["Kotlin", "Room Database", "MVVM", "Custom Theming"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "stx360",
    title: "Stx360",
    category: "Android TV",
    shortDescription: "A network speed testing app built for Android TV.",
    description: "A modern Android TV app for detailed network speed testing. Implemented Retrofit APIs to fetch metrics like ping, jitter, and speed using advanced Android tools.",
    features: [
      "Ping, jitter, and speed metrics",
      "Built specifically for Android TV",
      "Retrofit-powered API calls",
      "Clean, TV-focused interface"
    ],
    technologies: ["Kotlin", "Retrofit", "Android TV", "MVVM"],
    role: "Android Developer (Freelance)",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "waqt",
    title: "Waqt",
    category: "Utility",
    shortDescription: "A time-focused utility app designed around daily schedules and reminders.",
    description: "Waqt helps users keep track of important times throughout the day with a clean, minimal interface. [Add more project details here]",
    features: [
      "Daily time tracking",
      "Clean, minimal interface",
      "Custom reminders and alerts",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Android SDK", "Notifications API", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "flip-clock-wallpaper",
    title: "Flip Clock Wallpaper",
    category: "Personalization",
    shortDescription: "A live wallpaper and clock app with flip, analog, digital, and neon styles.",
    description: "A clock and live-wallpaper app with flip-clock, analog, digital, and neon styles, an alarm system, task manager, world clock, and home-screen widgets.",
    features: [
      "Flip, analog, digital & neon clock styles",
      "Live wallpaper engine",
      "Alarm system and world clock",
      "Home-screen widgets"
    ],
    technologies: ["Kotlin", "Live Wallpaper API", "Android Widgets", "MVVM"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "live-earth-map",
    title: "Live Earth Map",
    category: "Maps & Navigation",
    shortDescription: "A satellite map explorer for viewing live earth imagery.",
    description: "Live Earth Map lets users explore satellite views of locations around the world. [Add more project details here]",
    features: [
      "Satellite map exploration",
      "Location search",
      "Smooth map interactions",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Maps SDK", "Location Services", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "notes-todo-list",
    title: "Notes & To-do List",
    category: "Productivity",
    shortDescription: "A straightforward notes and task manager for daily organization.",
    description: "Notes & To-do List keeps everyday tasks and notes organized in one simple app. [Add more project details here]",
    features: [
      "Create and organize notes",
      "Task checklist with reminders",
      "Simple, distraction-free UI",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Room Database", "MVVM", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "ai-language-translator",
    title: "AI Language Translator",
    category: "Utility",
    shortDescription: "A multi-language translator supporting text, voice, file, and camera input.",
    description: "A multi-language translation app supporting text, voice, file, and camera translation, along with phrase translation, a dictionary, and conversation/chat translation.",
    features: [
      "Text, voice, file & camera translation",
      "Built-in dictionary",
      "Conversation / chat mode translation",
      "Phrase translation"
    ],
    technologies: ["Kotlin", "REST API (Retrofit)", "MVVM", "Android SDK"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "wifi-manager",
    title: "WIFI Manager",
    category: "Utility",
    shortDescription: "A utility app for viewing and managing Wi-Fi network connections.",
    description: "WIFI Manager gives users a clear view of available networks and connection details. [Add more project details here]",
    features: [
      "View available networks",
      "Connection details at a glance",
      "Simple, fast interface",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Android WifiManager API", "MVVM", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  },
  {
    slug: "gps-navigation",
    title: "GPS Navigation",
    category: "Navigation",
    shortDescription: "A lightweight GPS navigation app for everyday route guidance.",
    description: "GPS Navigation provides straightforward turn-by-turn route guidance for daily travel. [Add more project details here]",
    features: [
      "Turn-by-turn route guidance",
      "Current location tracking",
      "Clean map interface",
      "[Add feature here]"
    ],
    technologies: ["Kotlin", "Maps SDK", "Location Services", "[Add technology]"],
    role: "Android Developer",
    liveUrl: "",
    githubUrl: "",
    images: ["01.png", "02.png", "03.png", "04.png"]
  }
];

function projectImagePath(project, filename) {
  return `assets/projects/${project.slug}/${filename}`;
}

function findProject(slug) {
  return PROJECTS.find(p => p.slug === slug);
}

/* =========================================================================
   MOBILE NAV
   ========================================================================= */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });
}

/* =========================================================================
   ACTIVE NAV ON SCROLL
   ========================================================================= */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(s => observer.observe(s));
}

/* =========================================================================
   SCROLL REVEAL (single, subtle, reused everywhere via [data-reveal])
   ========================================================================= */
function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(el => observer.observe(el));
}

/* =========================================================================
   PROJECTS GRID (index.html)
   ========================================================================= */
function renderProjectsGrid() {
  const grid = document.querySelector("[data-projects-grid]");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <a class="project-tile ${i === 0 ? 'is-feature' : ''}" href="project.html?id=${encodeURIComponent(p.slug)}" data-reveal>
      <div class="project-tile-media">
        <img src="${projectImagePath(p, p.images[0])}"
             alt="${p.title} app screenshot"
             loading="lazy"
             onerror="this.closest('.project-tile-media').classList.add('img-missing')">
      </div>
      <div class="project-tile-body">
        <span class="project-tile-category">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.shortDescription}</p>
      </div>
    </a>
  `).join("");
}

/* =========================================================================
   PROJECT DETAIL PAGE (project.html)
   ========================================================================= */
let galleryState = { images: [], index: 0 };

function renderProjectDetail() {
  const root = document.querySelector("[data-project-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("id");
  const project = findProject(slug);

  if (!project) {
    root.innerHTML = `
      <div class="detail-missing">
        <h1>Project not found</h1>
        <p>This project may have been renamed or removed.</p>
        <a class="btn-primary" href="index.html#projects">Back to all projects</a>
      </div>
    `;
    document.title = "Project not found — Syed Saddam";
    return;
  }

  document.title = `${project.title} — Syed Saddam`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", project.shortDescription);

  const images = project.images.map(f => projectImagePath(project, f));
  galleryState = { images, index: 0 };

  const linkButtons = `
    ${project.liveUrl ? `<a class="btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener">View live</a>` : ""}
    ${project.githubUrl ? `<a class="btn-ghost" href="${project.githubUrl}" target="_blank" rel="noopener">View code</a>` : ""}
  `;

  root.innerHTML = `
    <a class="back-link" href="index.html#projects">&larr; Back to all projects</a>

    <header class="detail-head" data-reveal>
      <span class="detail-category">${project.category}</span>
      <h1>${project.title}</h1>
      <p class="detail-short">${project.shortDescription}</p>
      <div class="tags">
        ${project.technologies.map(t => `<span>${t}</span>`).join("")}
      </div>
      ${linkButtons ? `<div class="detail-links">${linkButtons}</div>` : ""}
    </header>

    <section class="gallery" data-reveal aria-label="${project.title} screenshot gallery">
      <div class="gallery-frame">
        <img id="gallery-image" src="${images[0]}" alt="${project.title} screenshot 1 of ${images.length}"
             onerror="this.closest('.gallery-frame').classList.add('img-missing')">
        <button class="gallery-nav prev" type="button" aria-label="Previous screenshot">&#8249;</button>
        <button class="gallery-nav next" type="button" aria-label="Next screenshot">&#8250;</button>
      </div>
      <div class="gallery-dots" role="tablist" aria-label="Select screenshot">
        ${images.map((_, i) => `<button class="gallery-dot ${i === 0 ? 'is-active' : ''}" role="tab" aria-label="Screenshot ${i+1}" data-index="${i}"></button>`).join("")}
      </div>
    </section>

    <section class="detail-body" data-reveal>
      <div class="detail-col">
        <h2>Project overview</h2>
        <p>${project.description}</p>
      </div>
      <div class="detail-col">
        <h2>Key features</h2>
        <ul class="feature-list">
          ${project.features.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    </section>

    <section class="detail-meta" data-reveal>
      <div class="meta-item">
        <span class="meta-label">Role</span>
        <span class="meta-value">${project.role}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Category</span>
        <span class="meta-value">${project.category}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Technologies</span>
        <span class="meta-value">${project.technologies.join(", ")}</span>
      </div>
    </section>
  `;

  initGallery();
  initScrollReveal();
}

function initGallery() {
  const frame = document.querySelector(".gallery-frame");
  const img = document.getElementById("gallery-image");
  const dots = document.querySelectorAll(".gallery-dot");
  const prevBtn = document.querySelector(".gallery-nav.prev");
  const nextBtn = document.querySelector(".gallery-nav.next");
  if (!frame || !img) return;

  function show(index) {
    const total = galleryState.images.length;
    galleryState.index = (index + total) % total;
    frame.classList.remove("img-missing");
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = galleryState.images[galleryState.index];
      img.alt = `Screenshot ${galleryState.index + 1} of ${total}`;
      img.style.opacity = "1";
    }, 120);
    dots.forEach((d, i) => d.classList.toggle("is-active", i === galleryState.index));
  }

  prevBtn?.addEventListener("click", () => show(galleryState.index - 1));
  nextBtn?.addEventListener("click", () => show(galleryState.index + 1));
  dots.forEach(dot => dot.addEventListener("click", () => show(Number(dot.dataset.index))));

  // keyboard arrows
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(galleryState.index - 1);
    if (e.key === "ArrowRight") show(galleryState.index + 1);
  });

  // touch swipe
  let touchStartX = null;
  frame.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  frame.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) show(galleryState.index + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
}

/* =========================================================================
   INIT
   ========================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveNavHighlight();
  renderProjectsGrid();
  renderProjectDetail();
  initScrollReveal();
});
