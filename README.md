# UCE Website

Marketing and landing page for **UCE (Universal Control Engine)** by ControlModeler Technologies.

## Structure

```
UCE-Website/
├── index.html              Landing page
├── css/
│   └── styles.css          Main stylesheet
├── js/
│   └── scripts.js          Scroll animations, form handling, terminal effect
├── assets/
│   ├── images/             Logos, screenshots, OG images
│   └── fonts/              Local font files (if needed)
├── .gitignore
└── README.md
```

## Local development

Static site — open `index.html` in a browser, or serve with:

```bash
npx serve .
```

## Deployment

Designed for GitHub Pages or any static host. Push to `main` and enable Pages from repo settings.

## Missing / TODO

- `css/styles.css` — the original stylesheet from the first landing page draft was not preserved. Needs to be recreated to match the dark, engineering-grade aesthetic (IBM Plex Mono/Sans, dark background, amber accent).
- OG meta tags and favicon
- Beta form backend (currently client-side only)
- Analytics snippet
