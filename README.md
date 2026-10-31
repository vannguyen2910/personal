# Winnie Nguyen: personal website

UX training hub, program pages and the self-assessment tool. Built with React and Vite, published to GitHub Pages.

## Run it locally

You need [Node.js](https://nodejs.org) (version 20 or newer).

```bash
npm install     # once, to download the packages
npm run dev     # live preview at http://localhost:5173
npm run build   # builds the finished site into dist/
```

## Folder map

```
index.html                 Site entry. Sends visitors to the training hub.
training/**/*.html         One small entry file per training page. Each loads its page from src/pages.
docs/*.html                Entry files for the style guide pages.
design-system/             Everything shared between pages (see design-system/README.md)
  components/              atoms, layout, contact popup, program parts, CaseCard, CountUp
  templates/               Starter pages: program, card list, resource, lesson text
  css/, fonts/, hooks/, data/, examples/
src/
  pages/
    home/                  The old landing page (no longer shown)
    training/              hub/, programs/ (five programs), assessment/ (self-assessment)
    docs/                  The two style guide pages
public/                    Copied to the site as is
  assets/images/           favicon, training image, brand/ (logos, headshot)
  assets/js/               Slide template scripts
  training/assets/         Training page images
  docs/slides/             Slide templates
```

The work (portfolio) pages, code and files are not part of the site. They live in `01_Work/Portfolio` in Google Drive. To publish them again, copy them back and list their entries under `input` in `vite.config.js`.

Colours, fonts and component styles are in `design-system/css/`, served at `/assets/css/`.

## Common edits

| To change | Edit |
|---|---|
| Email, LinkedIn, Behance links | `design-system/data/site.js` |
| A program's sessions (English and Vietnamese) | `src/pages/training/programs/<program>.sessions.js` |
| Program pricing, hero or other copy | `src/pages/training/programs/<Program>.jsx` |
| Self-assessment skills, directions, programs, archetypes, coaching advice | `src/pages/training/assessment/data.js` |
| Colours, fonts, spacing | `design-system/css/tokens.css` (training), `program-tokens.css` (program pages) |

## Adding a page

1. Add an HTML entry file, for example `training/new-page.html`, copied from an existing one.
2. Add `src/pages/.../entry-new-page.jsx` and the page component.
3. List the entry file under `input` in `vite.config.js`.

Keep the page address the same as any old link. Name entry files `entry-<name>.jsx`: on a Mac, `about.jsx` and `About.jsx` are the same file.

## Things to know

- **Not converted to React:** `training/assessment-report-preview.html` (an older copy of the self-assessment) and the slide templates in `public/docs/slides/`. They live in `public/` and are copied as they are.
- **Self-assessment:** the quiz flow and PDF export are in `engine.js`, moved over from the original page. The results screen is React (`results/`): each section is a component that reads the finished answers from `results/store.js`, and the radar chart is `results/RadarCard.jsx`. Scoring lives in `scoring.js`, and all fixed text and lists live in `data.js`.
- **Contact popup:** `design-system/components/contact/ContactModal.jsx`. Pass `accent="purple"` or `"coral"` to match the page, `links` to choose the rows, and `role` for the subtitle.
- **Fade-in on scroll:** elements that also change their own class names (like an open accordion row) must track "seen" in React state. Adding the class straight onto the element gets wiped, and the element vanishes. See `design-system/components/program/Curriculum.jsx`.
- **Language toggle:** program pages hold English and Vietnamese side by side (`lang-en`, `lang-vi`), and the toggle switches a class on `<body>`.
- **Private notes** (coaching playbook, pricing copy) are kept outside this folder, so they are not published.

## Publishing

Pushing to `main` starts the GitHub Actions workflow in `.github/workflows/static.yml`. It runs `npm ci` and `npm run build`, then publishes the `dist/` folder to GitHub Pages. The live site updates in about two minutes.
