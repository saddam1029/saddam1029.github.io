# Saddam — Android Developer Portfolio

A premium, dark editorial portfolio website built with vanilla HTML, CSS, and JavaScript. Optimized for GitHub Pages deployment.

## Quick Start

This is a static website — no build tools or servers required.

1. Open `index.html` in a browser to preview locally.
2. Or use a local server: `python3 -m http.server 8000` from the root folder, then visit `http://localhost:8000`.

## File Structure

```
saddam1029.github.io/
├── index.html          ← Homepage (Home, About, Skills, Projects, Certification, Contact)
├── project.html        ← Project detail page (reads ?id=<project-slug> from URL)
├── style.css           ← All styling (dark editorial theme)
├── script.js           ← All JavaScript (project data, gallery, lightbox, navigation)
└── assets/
    ├── favicon.svg
    ├── placeholder.svg ← Shown when screenshots are missing
    ├── projects/
    │   ├── ai-voice-translator/   ← Put 01.png, 02.png, etc. here
    │   ├── gps-voice-navigation/
    │   ├── signature-maker/
    │   ├── neon-clock/
    │   ├── etmaen/
    │   ├── my-diary/
    │   ├── stx360/
    │   ├── waqt/
    │   ├── flip-clock-wallpaper/
    │   ├── live-earth-map/
    │   ├── notes-todo/
    │   ├── ai-language-translator/
    │   ├── wifi-manager/
    │   └── gps-navigation/
    └── certification/
```

## How to Change Personal Information

Open `script.js` and edit the `PERSONAL` object at the top:

```javascript
const PERSONAL = {
  name: 'Saddam',
  role: 'Android Developer',
  email: 'your-email@example.com',     // ← change this
  github: 'https://github.com/saddam1029',
  linkedin: 'https://linkedin.com/in/your-profile',  // ← change this
};
```

The website automatically updates links and text based on this object.

## How to Add Projects

Open `script.js` and find the `PROJECTS` array. Each project object looks like this:

```javascript
{
  id: 'my-diary',                    // must match the folder name in assets/projects/
  title: 'My Diary',
  category: 'Android App',
  description: 'A short one-line description shown on the project card.',
  overview: 'A longer description shown on the project detail page.',
  role: 'Android Developer',
  platform: 'Android',
  technologies: ['Kotlin', 'Room Database', 'MVVM'],
  features: [
    'Feature one',
    'Feature two',
    'Feature three',
  ],
  images: [
    'assets/projects/my-diary/01.png',
    'assets/projects/my-diary/02.png',
    'assets/projects/my-diary/03.png',
    'assets/projects/my-diary/04.png',
  ],
  githubUrl: '',    // add your GitHub repo URL or leave empty
  liveUrl: '',      // add a live demo URL or leave empty
}
```

To add a new project:
1. Add a new object to the `PROJECTS` array.
2. Create a folder in `assets/projects/` with the same name as the `id`.
3. Add screenshot images to that folder.

## How to Add Screenshots

1. Create a folder inside `assets/projects/` matching the project's `id`.
2. Add your screenshot images named `01.png`, `02.png`, `03.png`, etc.
3. Update the `images` array in the project object to list the paths.

**Tips:**
- Use PNG format for Android screenshots.
- Portrait orientation works best (phone screenshots).
- Recommended width: 540–1080px.
- The gallery automatically adapts to any number of screenshots.

## GitHub Pages Deployment

1. This repository is already structured for GitHub Pages.
2. Push your changes to the `main` branch.
3. Go to the repository **Settings** → **Pages**.
4. Under **Build and deployment** → **Source**, ensure it's set to "Deploy from a branch".
5. Select the `main` branch and root folder `/`.
6. Visit `https://saddam1029.github.io` to see your site.

## Features

- **Dark Editorial Theme**: Premium look designed for Android Developers.
- **Dynamic Content**: Centralized data in `script.js` for easy updates.
- **Project Showcase**: Image-first gallery with touch-swipe, snap, and lightbox.
- **Responsive Design**: Works perfectly from 320px mobile to 4K desktop.
- **Zero Dependencies**: No React, no Vite, no Node.js required. Completely static.

## How to Refresh Images (Cache Busting)

If you change an image file but keep the same name (e.g., `01.png`), your browser might still show the old version. To fix this:

1.  Open `script.js`.
2.  Find `const VERSION = '1.1';` at the very top.
3.  Change it to `1.2` (or any other number).
4.  Push the change to GitHub.

This forces all browsers to download the latest images immediately.

## Troubleshooting: Blank Page after Deployment

If you see a blank page at `https://saddam1029.github.io/`:

1.  **Force Refresh**: Press `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac). This is the most common fix.
2.  **Check Repository Structure**: Ensure `index.html` is in the **root** folder, not inside `public/`.
3.  **Wait for Deployment**: Check your GitHub repository **Actions** tab to ensure the "pages-build-deployment" has finished.
4.  **Browser Console**: Press `F12`, go to the **Console** tab, and look for red error messages.
