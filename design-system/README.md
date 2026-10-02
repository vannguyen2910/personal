# Design system

Everything shared between pages lives in this one folder, so it can be reused in another site.

| Folder | What it holds |
|---|---|
| `components/` | Buttons, cards, nav, footer, contact form, program sections |
| `css/` | Colors, fonts, spacing and component styles |
| `fonts/` | Font files used by `css/tokens.css` |
| `hooks/` | Small helpers, for example the scroll-in animation |
| `data/site.js` | Your email, LinkedIn and other links. Change these per site |
| `templates/` | Starter pages: program, card list, resource, lesson text |
| `examples/` | Sample images used by the templates (replace with your own) |
| `*.html` | Preview pages for the templates. Open `index.html` first |

## Preview

Run the preview and open `/design-system/index.html`. It lists every template.

## Make a new page from a template

1. Copy a folder from `templates/` (for example `program/`).
2. Edit its `*.content.js` file for the words, and the page file for layout.
3. Add a small `.html` page next to the others and list it in `vite.config.js`.

## Use it in another site

Copy this whole folder into the other site, then:

1. Keep `design-system/css` and `design-system/fonts` served at `/assets/css` and `/assets/fonts`.
   `vite.config.js` in this site shows how (the `designSystemAssets` part).
2. Install the one extra library the text template needs: `npm install marked`.
3. Edit `data/site.js` for the new site.

Later, this folder can become its own repository that both sites pull from, so a fix in one place reaches both.
