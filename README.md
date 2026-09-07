# Saddam — Android Developer Portfolio

A premium, dark editorial portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for GitHub Pages deployment.

## Quick Start

This is a static website — no build tools or servers required.

1. Open `public/index.html` in a browser to preview locally
2. Or use a local server: `python3 -m http.server 8000` from the `public/` folder, then visit `http://localhost:8000`

## File Structure

```
public/
├── index.html          ← Homepage (Home, About, Skills, Projects, Certification, Contact)
├── project.html        ← Project detail page (reads ?id=<project-slug> from URL)
├── style.css           ← All styling (dark editorial theme)
├── script.js           ← All JavaScript (project data, gallery, lightbox, navigation)
├── assets/
│   ├── favicon.svg
│   ├── placeholder.svg ← Shown when screenshots are missing
│   ├── projects/
│   │   ├── ai-voice-translator/   ← Put 01.png, 02.png, etc. here
│   │   ├── gps-voice-navigation/
│   │   ├── signature-maker/
│   │   ├── neon-clock/
│   │   ├── etmaen/
│   │   ├── my-diary/
│   │   ├── stx360/
│   │   ├── waqt/
│   │   ├── flip-clock-wallpaper/
│   │   ├── live-earth-map/
│   │   ├── notes-todo/
│   │   ├── ai-language-translator/
│   │   ├── wifi-manager/
│   │   └── gps-navigation/
│   └── certification/
```

## How to Change Personal Information

Open `public/script.js` and edit the `PERSONAL` object at the top:

```javascript
const PERSONAL = {
  name: 'Saddam',
  role: 'Android Developer',
  email: 'your-email@example.com',     // ← change this
  github: 'https://github.com/saddam1029',
  linkedin: 'https://linkedin.com/in/your-profile',  // ← change this
};
```

Also update the email and LinkedIn placeholder links in `public/index.html` and `public/project.html` — search for `[your-email@example.com]` and `[your-linkedin-url]` and replace them with your real links.

## How to Add Projects

Open `public/script.js` and find the `PROJECTS` array. Each project object looks like this:

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
1. Add a new object to the `PROJECTS` array
2. Create a folder in `assets/projects/` with the same name as the `id`
3. Add screenshot images to that folder

To remove a project, delete its object from the array.

## How to Add Screenshots

1. Create a folder inside `assets/projects/` matching the project's `id`
   - Example: `assets/projects/my-diary/`
2. Add your screenshot images named `01.png`, `02.png`, `03.png`, etc.
3. Update the `images` array in the project object to list the paths

```
assets/projects/my-diary/01.png
assets/projects/my-diary/02.png
assets/projects/my-diary/03.png
assets/projects/my-diary/04.png
```

**Tips:**
- Use PNG format for Android screenshots
- Portrait orientation works best (phone screenshots)
- Recommended width: 540–1080px
- The gallery automatically adapts to any number of screenshots
- If no images are added, a placeholder is shown

## How to Add Certifications

Open `public/script.js` and find the `CERTIFICATIONS` array:

```javascript
{
  title: 'Google Associate Android Developer',
  issuer: 'Google',
  date: 'January 2024',
  credentialId: 'ABC-123-456',
  url: 'https://credential-url.com',
  image: 'assets/certification/cert-01.png',
}
```

Add your certificate image to `assets/certification/`.

## How to Edit Skills

Open `public/script.js` and find the `SKILL_GROUPS` array. Edit the skill names or add/remove groups as needed.

## How to Deploy to GitHub Pages

1. Create a repository named `saddam1029.github.io` on GitHub
2. Upload all files from the `public/` folder to the repository root:

```
saddam1029.github.io/
├── index.html
├── project.html
├── style.css
├── script.js
└── assets/
```

3. Go to the repository **Settings** → **Pages**
4. Under **Source**, select the `main` (or `master`) branch
5. Click **Save**
6. Wait 1–2 minutes, then visit `https://saddam1029.github.io`

**Important:** Upload the *contents* of the `public/` folder to the repository root, not the `public/` folder itself. The `index.html` file must be at the root of the repository.

## How to Update the Website

After making changes, push to GitHub:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically rebuild and deploy your site within 1–2 minutes.

## Features

- Dark editorial theme with gold accent
- Fully responsive (320px to 1920px+)
- Image-first project showcase
- Touch-swipe gallery with dots, prev/next, and keyboard support
- Fullscreen lightbox with keyboard and swipe navigation
- Lazy-loaded images for performance
- Accessible navigation with mobile hamburger menu
- No frameworks, no build tools, no dependencies
- Works directly on GitHub Pages
