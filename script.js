/* ============================================
   Portfolio — script.js
   Android Developer: Saddam
   ============================================ */
// Auto-detect version from script tag to bust image cache
const SCRIPT_URL = document.currentScript ? document.currentScript.src : '';
const VERSION = SCRIPT_URL.includes('?v=') ? SCRIPT_URL.split('?v=')[1] : '1.0';

console.log("Portfolio script starting with version:", VERSION);

/* ============================================
   PERSONAL INFO — Edit these fields
   ============================================ */
const PERSONAL = {
  name: 'Saddam',
  role: 'Android Developer',
  email: 'saddam.jaff07@gmail.com',
  github: 'https://github.com/saddam1029',
  linkedin: 'https://www.linkedin.com/in/syed-saddam-4ab1a71b7',
};
/* ============================================
   PROJECTS — Edit, add, or remove projects here
   ============================================ */
const PROJECTS = [
 {
id: 'ai-voice-translator',
title: 'AI Voice Translator',
category: 'Android App',
description: 'An AI-powered multilingual translation app that provides text, voice, camera, conversation, and file translation with translation history, phrases, and dictionary features.',
overview: 'AI Voice Translator is a feature-rich multilingual Android translation application designed to make communication across languages simple and accessible. The app supports text translation, voice translation, camera-based text recognition and translation, real-time voice conversations, file translation, saved phrases, dictionary lookup, and complete translation history management. It also provides multi-language support with a modern interface and both dark and light themes.',
role: 'Android Developer',
platform: 'Android',
technologies: [
'Kotlin',
'Android',
'MVVM',
'Clean Architecture',
'Coroutines',
'Retrofit',
'REST APIs',
'CameraX',
'Speech Recognition',
'Text-to-Speech',
'Room Database'
],
features: [
'AI-powered text translation with multi-language support',
'Voice-to-voice translation using speech recognition and text-to-speech',
'Camera translation with text detection and translation from images',
'Real-time voice conversation translation',
'File translation for translating supported documents',
'Phrases and frequently used translations for quick access',
'Built-in multilingual dictionary and word lookup',
'Complete translation history with management and search',
'Support for multiple languages and translation directions',
'Dark mode and light mode with a modern responsive UI'
],
images: [
'assets/projects/ai-voice-translator/01.png',
'assets/projects/ai-voice-translator/02.png',
'assets/projects/ai-voice-translator/03.png',
'assets/projects/ai-voice-translator/04.png',
'assets/projects/ai-voice-translator/21.png',
'assets/projects/ai-voice-translator/05.png',
'assets/projects/ai-voice-translator/07.png',
'assets/projects/ai-voice-translator/08.png',
'assets/projects/ai-voice-translator/09.png',
'assets/projects/ai-voice-translator/10.png',
'assets/projects/ai-voice-translator/11.png',
'assets/projects/ai-voice-translator/12.png',
'assets/projects/ai-voice-translator/13.png',
'assets/projects/ai-voice-translator/14.png',
'assets/projects/ai-voice-translator/15.png',
'assets/projects/ai-voice-translator/16.png',
'assets/projects/ai-voice-translator/17.png',
'assets/projects/ai-voice-translator/18.png',
'assets/projects/ai-voice-translator/19.png',
'assets/projects/ai-voice-translator/20.png',
],
githubUrl: '',
liveUrl: 'https://play.google.com/store/apps/details?id=com.tw.aivoice.translate.all.language.translator&hl=en',
},
{
id: 'gps-navigation',
title: 'GPS Navigation',
category: 'Android App',
description: 'A feature-rich GPS navigation and location utility app built with Google Maps APIs, providing route planning, live navigation, location tools, compass, speedometer, map services, and travel information.',
overview: 'GPS Navigation is a comprehensive Android navigation and location application designed for everyday navigation, travel, and location-based utilities. The app provides current location and address information, route planning with multiple stops, saved locations such as Home and Office, navigation history, voice-guided navigation, satellite maps, traffic information, street view, nearby places, and multiple compass and speedometer tools. It also includes a camera map feature that captures photos with latitude, longitude, date, time, and current address information. The application supports multiple languages and integrates Google Maps services using the Google Maps API.',
role: 'Android Developer',
platform: 'Android',
technologies: [
'Kotlin',
'Android',
'MVVM',
'Clean Architecture',
'Coroutines',
'Google Maps API',
'Google Maps SDK',
'Location APIs',
'Geocoding',
'Navigation',
'CameraX',
'Google Places API'
],
features: [
'Live GPS location with current address and location details',
'Route planning with multiple destinations and stops',
'Saved locations such as Home and Office for quick navigation',
'Navigation history for previously searched and navigated routes',
'Voice-guided navigation for hands-free driving',
'Satellite, normal, and traffic map views',
'Live traffic information and traffic conditions on roads',
'Camera Map for capturing photos with latitude, longitude, date, time, and current address',
'Four compass modes including digital and analog compass interfaces',
'Digital and analog speedometer with real-time speed information',
'Nearby places and location-based place discovery',
'Google Street View integration for exploring locations',
'Multiple-country information and location-based travel details',
'Multi-language application support',
'Google Maps integration using Google Maps API services',
'Modern UI with support for light and dark themes'
],
images: [
'assets/projects/gps-navigation/01.png',
'assets/projects/gps-navigation/02.png',
'assets/projects/gps-navigation/03.png',
'assets/projects/gps-navigation/04.png',
'assets/projects/gps-navigation/05.png',
'assets/projects/gps-navigation/06.png',
'assets/projects/gps-navigation/07.png',
'assets/projects/gps-navigation/08.png',
'assets/projects/gps-navigation/09.png',
'assets/projects/gps-navigation/10.png',
],
githubUrl: '',
liveUrl: '',
},

 {
    id: 'gps-voice-navigation',
    title: 'GPS Voice Navigation',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Google Maps', 'Location APIs', 'Coroutines'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/gps-voice-navigation/01.png',
      'assets/projects/gps-voice-navigation/02.png',
      'assets/projects/gps-voice-navigation/03.png',
      'assets/projects/gps-voice-navigation/04.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
{
id: 'signature-maker',
title: 'Signature Maker',
category: 'Android App',
description: 'A feature-rich Android signature and document utility app for creating, scanning, drawing, customizing, and adding digital signatures and watermarks to images and PDF documents.',
overview: 'Signature Maker is a comprehensive Android application that provides multiple ways to create and manage digital signatures. Users can automatically generate signatures using different signature fonts, draw signatures with their fingers, or scan signatures using the camera or gallery. Signatures can be customized with different colors, sizes, styles, and backgrounds. The app also allows users to sign PDF documents by drawing a signature or selecting an existing signature, as well as add customizable watermarks to images. A collection section stores generated signatures, scanned signatures, drawn signatures, and signed PDFs for easy management, including rename and delete functionality. The application supports multiple languages and provides a modern Android UI built with Kotlin and XML.',
role: 'Android Developer',
platform: 'Android',
technologies: [
'Kotlin',
'XML',
'MVVM',
'Hilt',
'Coroutines',
'Room Database',
'CameraX',
'uCrop',
'PdfRenderer',
'FileProvider',
'Canvas',
'Material Design'
],
features: [
'Auto Signature Creation using multiple signature fonts and styles',
'Draw Signature with finger using a customizable drawing canvas',
'Undo and redo support while drawing signatures',
'Customize signatures with color, size, style, and background options',
'Scan Signature using the camera or select an image from the gallery',
'Crop and edit scanned signatures before saving',
'Save signatures as high-quality images for reuse',
'Sign PDF documents by drawing a signature or selecting an existing signature',
'Add, position, resize, and customize signatures on PDF documents',
'Save signed PDF documents for later access',
'Add customizable watermarks to images from the camera or gallery',
'Customize watermarks with different fonts, colors, sizes, angles, and opacity',
'My Collection for managing auto-created, drawn, scanned signatures, and signed PDFs',
'Rename and delete saved signatures and documents',
'Persistent history and collection management using Room Database',
'Secure file sharing and URI access using FileProvider',
'Multi-language support for a localized user experience'
],
images: [
'assets/projects/signature-maker/02.png',
'assets/projects/signature-maker/03.png',
'assets/projects/signature-maker/04.png',
'assets/projects/signature-maker/05.png',
'assets/projects/signature-maker/06.png',
'assets/projects/signature-maker/07.png',
'assets/projects/signature-maker/08.png',
'assets/projects/signature-maker/09.png',
'assets/projects/signature-maker/10.png',
],
githubUrl: '',
liveUrl: '',
},
{
id: 'neon-clock',
title: 'Neon Clock App',
category: 'Android App',
description: 'A customizable Android clock and wallpaper application that lets users personalize digital, analog, smart, and neon clock designs and set them as static or live wallpapers.',
overview: 'Neon Clock App is a personalization utility that allows users to browse, preview, customize, and set different clock designs as Android wallpapers. The app includes Digital, Analog, Smart, and Neon clock categories with customizable backgrounds, accent colors, size, and alignment. Digital and Smart clocks use XML layouts rendered into bitmaps for consistent previews and wallpaper output, while Analog and Neon clocks use custom Canvas drawing with real-time clock calculations and neon shadow effects. The application uses a dedicated WallpaperService to render and update live clocks on the home screen while managing visibility and drawing updates to reduce unnecessary battery usage. It also includes onboarding and multi-language support.',
role: 'Android Developer',
platform: 'Android',
technologies: [
'Kotlin',
'XML',
'MVVM',
'Android SDK',
'Custom Views',
'Canvas',
'WallpaperService',
'View Binding',
'LiveData',
'ViewModel',
'Glide',
'SharedPreferences',
'Material Components',
'Coroutines'
],
features: [
'Multiple clock categories including Digital, Analog, Smart, and Neon',
'Real-time clock previews with customizable backgrounds and accent colors',
'Set clock designs as static wallpapers',
'Set dynamic clock designs as Android live wallpapers',
'Customize clock size and screen alignment',
'Custom Analog and Neon clock rendering using Android Canvas',
'Neon visual effects using Paint shadow rendering',
'Real-time analog clock hand positioning using trigonometric calculations',
'Digital and Smart clock layouts rendered from XML into Bitmaps',
'Live wallpaper rendering through WallpaperService and WallpaperEngine',
'Clock updates every second with optimized Handler-based drawing',
'Automatically pause wallpaper rendering when the wallpaper is not visible',
'Persistent clock selection, type, and customization settings',
'Onboarding flow for new users',
'Multi-language support',
'Responsive layouts across different Android screen sizes'
],
images: [
'assets/projects/neon-clock/02.png',
'assets/projects/neon-clock/03.png',
'assets/projects/neon-clock/04.png',
'assets/projects/neon-clock/05.png',
'assets/projects/neon-clock/06.png',
'assets/projects/neon-clock/07.png',
],
githubUrl: '',
liveUrl: '',
},
  {
    id: 'etmaen',
    title: 'Etmaen',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'MVVM', 'Retrofit', 'Room'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/etmaen/01.png',
      'assets/projects/etmaen/02.png',
      'assets/projects/etmaen/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'my-diary',
    title: 'My Diary',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Room Database', 'MVVM', 'Coroutines'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/my-diary/01.png',
      'assets/projects/my-diary/02.png',
      'assets/projects/my-diary/03.png',
      'assets/projects/my-diary/04.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'stx360',
    title: 'Stx360',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Android SDK', 'Material Design'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/stx360/01.png',
      'assets/projects/stx360/02.png',
      'assets/projects/stx360/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
  id: 'waqt',
  title: 'Waqt',
  category: 'Android App',
  description: 'A prayer time and Islamic utility Android application that provides daily prayer schedules, live countdowns, precise prayer alarms, daily Dhikr reminders, and an interactive digital Tasbeeh counter.',
  overview: 'Waqt is an Android prayer and Islamic utility application designed to help users manage their daily prayer schedule and Dhikr routine. The app displays the five daily prayers with a prominent live countdown to the next prayer and highlights the upcoming prayer in the schedule. Users can customize prayer times according to their local mosque or personal preferences and enable or disable individual prayer alarms. Precise notifications are scheduled using Android AlarmManager, while custom alarm sounds can be selected from the device. The app also includes a digital Tasbeeh counter with target milestones, progress animations, and haptic feedback. A daily Dhikr reminder is shown when the application opens, featuring Dhikr such as Alhamdulillah, Salawat, and Astaghfar. The application supports persistent light and dark themes and uses a modern MVVM architecture with Hilt dependency injection and reactive StateFlow-based UI updates.',
  role: 'Android Developer',
  platform: 'Android',
  technologies: [
  'Kotlin',
  'XML',
  'MVVM',
  'Hilt',
  'Coroutines',
  'Flow',
  'StateFlow',
  'ViewBinding',
  'Jetpack Navigation',
  'Room Database',
  'DataStore',
  'SharedPreferences',
  'AlarmManager',
  'NotificationManager',
  'Lottie',
  'Material Design 3',
  'Android SDK'
  ],
  features: [
  'Prayer dashboard displaying Fajr, Dhuhr, Asr, Maghrib, and Isha',
  'Real-time countdown showing the remaining time until the next prayer',
  'Automatic highlighting of the upcoming prayer in the daily schedule',
  'Manual prayer time adjustment based on local mosque timings or user preferences',
  'Precise prayer notifications using Android AlarmManager',
  'Individual prayer alarm controls to enable or disable notifications',
  'Custom prayer alarm sound selection from the device',
  'Automatic rescheduling of prayer alarms for the following day',
  'Daily Dhikr reminder displayed when opening the application',
  'Dhikr reminders including Alhamdulillah, Salawat, Astaghfar, and other Islamic remembrance',
  'Digital Tasbeeh counter with target milestones such as 33 repetitions',
  'Tasbeeh progress animations and haptic vibration feedback',
  'Persistent light and dark theme support',
  'Notification and exact-alarm permission management',
  'Responsive Material Design 3 interface with custom Poppins typography',
  'Multi-device UI scaling using SDP and SSP resources'
  ],
  images: [
  'assets/projects/waqt/00.png',
  'assets/projects/waqt/01.png',
  'assets/projects/waqt/02.png',
  'assets/projects/waqt/03.png',
  'assets/projects/waqt/04.png',
  ],
  githubUrl: '',
  liveUrl: '',
  },


  {
    id: 'flip-clock-wallpaper',
    title: 'Flip Clock Wallpaper',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'WallpaperService', 'Custom Views'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/flip-clock-wallpaper/01.png',
      'assets/projects/flip-clock-wallpaper/02.png',
      'assets/projects/flip-clock-wallpaper/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'live-earth-map',
    title: 'Live Earth Map',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Google Maps', 'Location APIs'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/live-earth-map/01.png',
      'assets/projects/live-earth-map/02.png',
      'assets/projects/live-earth-map/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'notes-todo',
    title: 'Notes & To-do List',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Room Database', 'MVVM', 'RecyclerView'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/notes-todo/01.png',
      'assets/projects/notes-todo/02.png',
      'assets/projects/notes-todo/03.png',
      'assets/projects/notes-todo/04.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'ai-language-translator',
    title: 'AI Language Translator',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Retrofit', 'Coroutines', 'MVVM'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/ai-language-translator/01.png',
      'assets/projects/ai-language-translator/02.png',
      'assets/projects/ai-language-translator/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    id: 'wifi-manager',
    title: 'WIFI Manager',
    category: 'Android App',
    description: '[Add project description]',
    overview: '[Add project overview.]',
    role: 'Android Developer',
    platform: 'Android',
    technologies: ['Kotlin', 'Android SDK', 'WiFi APIs'],
    features: [
      '[Add feature]',
      '[Add feature]',
      '[Add feature]',
    ],
    images: [
      'assets/projects/wifi-manager/01.png',
      'assets/projects/wifi-manager/02.png',
      'assets/projects/wifi-manager/03.png',
    ],
    githubUrl: '',
    liveUrl: '',
  },

];

/* ============================================
   SKILLS — Edit skill groups here
   ============================================ */
const SKILL_GROUPS = [
  {
    name: 'Android',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>',
    skills: ['Kotlin', 'Android SDK', 'Jetpack', 'Android Studio', 'XML', 'Material Design'],
  },
  {
    name: 'Architecture',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    skills: ['MVVM', 'Clean Architecture', 'Repository Pattern', 'Dependency Injection', 'Hilt'],
  },
  {
    name: 'Async & Networking',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: ['Kotlin Coroutines', 'Retrofit', 'OkHttp', 'REST APIs'],
  },
  {
    name: 'Database',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    skills: ['Room Database', 'SQLite'],
  },
  {
    name: 'Firebase',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>',
    skills: ['Firebase', 'Crashlytics', 'Analytics', 'Google Services'],
  },
  {
    name: 'Maps & Location',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    skills: ['Google Maps', 'Location APIs', 'GPS', 'Navigation'],
  },
  {
    name: 'Tools',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
    skills: ['Git', 'GitHub', 'Gradle', 'KSP', 'Android Studio'],
  },
];

/* ============================================
   CERTIFICATIONS — Edit certifications here
   ============================================ */
const CERTIFICATIONS = [
{
title: 'Programming Fundamentals in Kotlin',
issuer: 'Meta',
date: '',
credentialId: '',
url: 'https://coursera.org/share/285e6f64293854078de2ed1b81d8d0bf',
image: 'assets/certification/cert-01.png',
},
{
title: 'Create the User Interface in Android Studio',
issuer: 'Meta',
date: '',
credentialId: '',
url: 'https://coursera.org/share/275434e26859f83b844270dd9caade66',
image: 'assets/certification/cert-02.png',
},
{
title: 'Advanced Programming in Kotlin',
issuer: 'Meta',
date: '',
credentialId: '',
url: 'https://coursera.org/share/7f80c9046676151136a074402f06151c',
image: 'assets/certification/cert-03.png',
},
{
title: 'Introduction to Android App Development',
issuer: 'Meta',
date: '',
credentialId: '',
url: 'https://coursera.org/share/5c810512f5679b2453a70c18312351ad',
image: 'assets/certification/cert-04.png',
},
{
title: 'Prompt Engineering for ChatGPT',
issuer: 'Vanderbilt University',
date: '',
credentialId: '',
url: 'https://coursera.org/share/334525e3c99cbca75c309afd684bca1c',
image: 'assets/certification/cert-05.png',
},
];

/* ============================================
   PLACEHOLDER IMAGE
   ============================================ */
const PLACEHOLDER = 'assets/placeholder.svg';

/* ============================================
   RENDER: Skills
   ============================================ */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = SKILL_GROUPS.map(group => `
    <div class="skill-group reveal">
      <div class="skill-group-header">
        ${group.icon}
        <h3>${group.name}</h3>
      </div>
      <div class="skill-tags">
        ${group.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ============================================
   RENDER: Projects (homepage)
   ============================================ */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => {
    const imgSrc = p.images.length > 0 ? `${p.images[0]}?v=${VERSION}` : PLACEHOLDER;
    const imgCount = p.images.length;
    return `
      <a href="project.html?id=${p.id}" class="project-card reveal">
        <div class="project-card-image">
          <span class="project-card-badge">${p.category}</span>
          ${imgCount > 0 ? `<span class="project-card-count"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>${imgCount}</span>` : ''}
          <img src="${imgSrc}" alt="${p.title}" loading="lazy" decoding="async" />
        </div>
        <div class="project-card-body">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <span class="project-card-link">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </a>
    `;
  }).join('');
}

/* ============================================
   RENDER: Certifications
   ============================================ */
function renderCertifications() {
  const grid = document.getElementById('certGrid');
  if (!grid) return;
  grid.innerHTML = CERTIFICATIONS.map(c => `
    <div class="cert-card reveal" ${c.url ? `onclick="window.open('${c.url}', '_blank')"` : ''}>
      <div class="cert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
      </div>
      <div>
        <h3>${c.title}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        ${c.date ? `<div class="cert-issuer">${c.date}</div>` : ''}
        ${c.credentialId ? `<div class="cert-id">ID: ${c.credentialId}</div>` : ''}
      </div>
    </div>
  `).join('');
}

/* ============================================
   RENDER: Project Detail Page
   ============================================ */
function renderProjectDetail() {
  const container = document.getElementById('projectContent');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    container.innerHTML = `
      <div class="not-found">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist or may have been removed.</p>
        <a href="index.html#projects" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Projects
        </a>
      </div>
    `;
    document.title = 'Project Not Found | Saddam — Android Developer';
    return;
  }

  document.title = `${project.title} | Saddam — Android Developer`;

  const images = project.images.length > 0 ? project.images : [];
  const isMobile = window.innerWidth < 768;

  container.innerHTML = `
    <a href="index.html#projects" class="back-link">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Projects
    </a>
    <div class="project-header">
      <div class="category">${project.category}</div>
      <h1>${project.title}</h1>
      <p class="desc">${project.description}</p>
      <div class="tech-tags">
        ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>

    ${images.length > 0 ? `
      <div class="gallery-section">
        <div class="${isMobile ? 'gallery-mobile' : 'gallery-desktop'}">
          <div class="gallery-viewport">
            <div class="gallery-track snap" id="galleryTrack">
              ${images.map((src, i) => `
                <div class="gallery-item" data-index="${i}">
                  <img src="${src}?v=${VERSION}" alt="${project.title} screenshot ${i + 1}" loading="${i < 3 ? 'eager' : 'lazy'}" decoding="async" />
                </div>
              `).join('')}
            </div>
          </div>
          <div class="gallery-controls">
            <button class="gallery-btn" id="galleryPrev" aria-label="Previous screenshot">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="gallery-dots" id="galleryDots">
              ${images.map((_, i) => `<span class="gallery-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}
            </div>
            <button class="gallery-btn" id="galleryNext" aria-label="Next screenshot">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <span class="gallery-counter" id="galleryCounter">1 / ${images.length}</span>
          </div>
        </div>
      </div>
    ` : `
      <div class="gallery-section">
        <div class="gallery-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <p>No screenshots added yet. Add images to <code>assets/projects/${project.id}/</code></p>
        </div>
      </div>
    `}

    <div class="project-info-grid">
      <div class="info-block">
        <h2>Overview</h2>
        <p>${project.overview}</p>
      </div>
      <div class="info-block">
        <h2>Features</h2>
        <ul>
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="project-info-grid">
      <div class="info-block">
        <h2>Technologies</h2>
        <div class="tech-tags">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="info-block">
        <h2>Project Details</h2>
        <div class="details-grid">
          <div class="detail-row"><span class="label">Role</span><span class="value">${project.role}</span></div>
          <div class="detail-row"><span class="label">Category</span><span class="value">${project.category}</span></div>
          <div class="detail-row"><span class="label">Platform</span><span class="value">${project.platform}</span></div>
        </div>
      </div>
    </div>

    ${(project.githubUrl || project.liveUrl) ? `
      <div class="project-links">
        ${project.githubUrl ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.25.82-.56 0-.28-.01-1.02-.02-2-3.34.71-4.04-1.58-4.04-1.58-.55-1.37-1.34-1.74-1.34-1.74-1.09-.73.08-.72.08-.72 1.21.08 1.85 1.22 1.85 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 015.98 0c2.29-1.53 3.3-1.21 3.3-1.21.66 1.66.24 2.88.12 3.18.77.83 1.24 1.88 1.24 3.17 0 4.54-2.81 5.54-5.49 5.83.43.36.81 1.09.81 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.83.56A12.01 12.01 0 0024 12.29C24 5.78 18.63.5 12 .5z"/></svg>
            View on GitHub
          </a>
        ` : ''}
        ${project.liveUrl ? `
          <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary">
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : ''}
      </div>
    ` : ''}
  `;

  if (images.length > 0) {
    initGallery(images, project.title);
  }
}

/* ============================================
   GALLERY — Carousel + Lightbox
   ============================================ */
let galleryState = {
  current: 0,
  total: 0,
  images: [],
  title: '',
  isLightbox: false,
};

function initGallery(images, title) {
  galleryState.images = images;
  galleryState.total = images.length;
  galleryState.title = title;
  galleryState.current = 0;

  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  const counter = document.getElementById('galleryCounter');
  const dots = document.querySelectorAll('.gallery-dot');

  // Scroll-based gallery
  if (track) {
    let scrollTimeout;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const items = track.querySelectorAll('.gallery-item');
        if (!items.length) return;

        // Calculate index based on which item is most visible (centered in viewport)
        const trackRect = track.getBoundingClientRect();
        const centerX = trackRect.left + trackRect.width / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        items.forEach((item, i) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const distance = Math.abs(centerX - itemCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        });

        if (closestIndex !== galleryState.current && closestIndex >= 0 && closestIndex < galleryState.total) {
          galleryState.current = closestIndex;
          updateGalleryUI();
        }
      }, 30);
    }, { passive: true });

    // Click items to open lightbox
    track.querySelectorAll('.gallery-item').forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => galleryNav(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => galleryNav(1));

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      goToSlide(idx);
    });
  });

  // Mouse drag for PC
  if (track) {
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('active');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('active');
    });
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('active');
    });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });
  }
}

function galleryNav(dir) {
  let next = galleryState.current + dir;
  if (next < 0) next = 0;
  if (next >= galleryState.total) next = galleryState.total - 1;
  goToSlide(next);
}

function goToSlide(index) {
  galleryState.current = index;
  const track = document.getElementById('galleryTrack');
  if (track) {
    const items = track.querySelectorAll('.gallery-item');
    const item = items[index];
    if (item) {
      const trackWidth = track.clientWidth;
      const itemWidth = item.offsetWidth;
      const itemLeft = item.offsetLeft;
      const scrollToPos = itemLeft - (trackWidth - itemWidth) / 2;

      track.scrollTo({ left: scrollToPos, behavior: 'smooth' });
    }
  }
  updateGalleryUI();
}

function updateGalleryUI() {
  const counter = document.getElementById('galleryCounter');
  const dots = document.querySelectorAll('.gallery-dot');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');

  if (counter) counter.textContent = `${galleryState.current + 1} / ${galleryState.total}`;
  dots.forEach((d, i) => d.classList.toggle('active', i === galleryState.current));
  if (prevBtn) prevBtn.disabled = galleryState.current === 0;
  if (nextBtn) nextBtn.disabled = galleryState.current === galleryState.total - 1;
}

/* ============================================
   LIGHTBOX
   ============================================ */
function openLightbox(index) {
  galleryState.isLightbox = true;
  galleryState.current = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');

  img.src = `${galleryState.images[index]}?v=${VERSION}`;
  img.alt = `${galleryState.title} screenshot ${index + 1}`;
  counter.textContent = `${index + 1} / ${galleryState.total}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  galleryState.isLightbox = false;
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  let next = galleryState.current + dir;
  if (next < 0) next = galleryState.total - 1;
  if (next >= galleryState.total) next = 0;
  galleryState.current = next;
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  img.src = `${galleryState.images[next]}?v=${VERSION}`;
  img.alt = `${galleryState.title} screenshot ${next + 1}`;
  counter.textContent = `${next + 1} / ${galleryState.total}`;
}

/* ============================================
   NAVIGATION
   ============================================ */
function initNav() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Sticky nav on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        if (navToggle) {
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      });
    });
  }

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('open')) {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        if (navToggle) {
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
      }
    }
  });

  // Active section highlighting (homepage only)
  if (document.getElementById('home')) {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${current}`) {
          item.classList.add('active');
        }
      });
    });
  }
}

/* ============================================
   REVEAL ANIMATIONS
   ============================================ */
function initReveal() {
  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================
   LIGHTBOX EVENT LISTENERS
   ============================================ */
function initLightboxEvents() {
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const lightbox = document.getElementById('lightbox');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => lightboxNav(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => lightboxNav(1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!galleryState.isLightbox) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxNav(-1);
    if (e.key === 'ArrowRight') lightboxNav(1);
  });

  // Touch swipe for lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) lightboxNav(1);
        else lightboxNav(-1);
      }
    }, { passive: true });
  }
}

/* ============================================
   RENDER: Personal Info (consistency)
   ============================================ */
function renderPersonal() {
  // Update name in logo and footer
  document.querySelectorAll('.nav-logo, .footer-brand').forEach(el => {
    const dot = el.querySelector('.dot');
    const role = el.querySelector('.role');

    // Safety check to not destroy existing elements
    if (dot) {
      el.innerHTML = '';
      el.appendChild(dot);
      el.appendChild(document.createTextNode(' ' + PERSONAL.name));
    } else if (role) {
      el.innerHTML = PERSONAL.name;
      el.appendChild(role);
    } else {
      el.textContent = PERSONAL.name;
    }
  });

  // Update role in footer
  document.querySelectorAll('.footer-brand .role').forEach(el => {
    el.textContent = PERSONAL.role;
  });

 // Update email links
 document.querySelectorAll('a[href^="mailto:"], a[href*="your-email"]').forEach(el => {
   if (PERSONAL.email) {
     el.href = `mailto:${PERSONAL.email}`;
   }
 });

  // Update LinkedIn links
document.querySelectorAll('a[href*="linkedin.com"], a[href*="your-linkedin-url"]').forEach(el => {
  if (PERSONAL.linkedin) {
    el.href = PERSONAL.linkedin;
  }
});

  // Update GitHub links
  document.querySelectorAll('[href*="github.com"]').forEach(el => {
    if (PERSONAL.github) {
      el.href = PERSONAL.github;
    }
  });
}
/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 2. Dynamic Rendering
  try {
    renderPersonal();
    renderSkills();
    renderProjects();
    renderCertifications();
    renderProjectDetail();
  } catch (e) {
    console.error('Rendering failed', e);
  }

  // 3. UI Interactions
  try {
    initNav();
    initLightboxEvents();
  } catch (e) {
    console.error('UI init failed', e);
  }

  // 4. Reveal Animations (Last, after everything is in DOM)
  initReveal();

  // 5. Emergency Fallback: Make everything visible after 1s if animations stalled
  setTimeout(() => {
    const hidden = document.querySelectorAll('.reveal:not(.visible)');
    if (hidden.length > 0) {
      console.log(`Revealing ${hidden.length} stalled elements`);
      hidden.forEach(el => el.classList.add('visible'));
    }
  }, 1000);
});
