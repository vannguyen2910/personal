# Winnie Nguyen: personal website

Portfolio, UX training hub, program pages and the self-assessment tool. Built with React and Vite, published to GitHub Pages.

## Run it locally

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install     # once, to download the packages
npm run dev     # live preview at http://localhost:5173
npm run build   # builds the finished site into dist/
```

## Folder map

```
index.html, portfolio/*.html, training/**/*.html   One small entry file per page. Each loads its page from src/pages.
src/
  components/
    atoms/      Button, Chip, Avatar, Card, Field, Checkbox, Radio, Toggle, Alert, Tabs, Accordion
    layout/     Portfolio nav, footer, page header, contact popups
    program/    Program page parts: nav, curriculum accordion, enrollment form, mentor, testimonials
    CaseCard.jsx, CountUp.jsx
  pages/
    home/       The landing page
    portfolio/  Portfolio home, Work, About, Contact, Go1 case study
    training/   hub/, programs/ (four programs), assessment/ (self-assessment)
  data/         Text you edit: case studies, work history, contact links
  hooks/        Shared behaviour (scroll fade-in)
public/         Copied to the site as is: CSS, fonts, images, PDF, and the pages not yet converted
  assets/css    Design tokens and component styles
```

The atoms use the class names from `public/assets/css/components.css`, so a change to that file restyles every page that uses them.

## Common edits

| To change | Edit |
|---|---|
| A portfolio case study | `src/data/caseStudies.js` |
| Work history on the About page | `src/data/experience.js` |
| Email, LinkedIn, Behance links | `src/data/site.js` |
| A program's sessions (English and Vietnamese) | `src/pages/training/programs/<program>.sessions.js` |
| Program pricing, hero or other copy | `src/pages/training/programs/<Program>.jsx` |
| Self-assessment skills, directions, programs | `src/pages/training/assessment/data.js` |
| Colours, fonts, spacing | `public/assets/css/tokens.css` (portfolio and training), `program-tokens.css` (program pages) |

## Adding a page

1. Add an HTML entry file, for example `training/new-page.html`, copied from an existing one.
2. Add `src/pages/.../entry-new-page.jsx` and the page component.
3. List the entry file under `input` in `vite.config.js`.

Keep the page address the same as any old link. Name entry files `entry-<name>.jsx`: on a Mac, `about.jsx` and `About.jsx` are the same file.

## Things to know

- **Page addresses did not change.** `/portfolio/work.html` and the others work exactly as before.
- **Not converted to React:** `portfolio/work/imp.html` and `kulti.html` (exported slide decks), `training/assessment-report-preview.html` and the style guides in `public/docs/`. They live in `public/` and are copied as they are.
- **Self-assessment:** the quiz and results logic is in `src/pages/training/assessment/engine.js`, moved over from the original page. The radar chart and PDF export are drawn there.
- **Fade-in on scroll:** elements that also change their own class names (like an open accordion row) must track "seen" in React state. Adding the class straight onto the element gets wiped, and the element vanishes. See `src/components/program/Curriculum.jsx`.
- **Language toggle:** program pages hold English and Vietnamese side by side (`lang-en`, `lang-vi`), and the toggle switches a class on `<body>`.
- **Private notes** (coaching playbook, pricing copy) are kept outside this folder, so they are not published.

## Publishing

Pushing to `main` starts the GitHub Actions workflow in `.github/workflows/static.yml`. It runs `npm ci` and `npm run build`, then publishes the `dist/` folder to GitHub Pages. The live site updates in about two minutes.
