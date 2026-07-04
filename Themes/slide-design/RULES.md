# Winnie's Slide Deck — Design Rules

> Any new HTML slide deck for Winnie's training sessions **must follow these rules exactly** unless Winnie explicitly changes the template (`slides 3/template.html`) or instructs otherwise.

---

## 1. File setup

- **Always** link `../tokens.css` (or the correct relative path to `slide-deck-design/tokens.css`)
- **Always** load `deck-stage.js` from `slide-deck-design/slides 3/deck-stage.js`
- Wrap all slides inside `<deck-stage width="1920" height="1080">`
- Every slide: `width: 1920px; height: 1080px; overflow: hidden`
- Font imports come from `tokens.css` — do **not** add a separate Google Fonts `<link>`

---

## 2. Colour & token vocabulary

Use the **alias names** from `tokens.css`, not raw hex values:

| Role | Token | Resolved colour |
|---|---|---|
| Primary accent | `--sienna` / `--sienna-deep` / `--sienna-tint` | Purple `#6B3FEE` |
| Secondary accent | `--ochre` / `--ochre-tint` | Yellow `#F5D028` |
| Positive | `--sage` / `--sage-tint` | Green |
| Rare accent | `--coral` / `--coral-tint` | Pink-red |
| Backgrounds | `--paper`, `--paper-deeper`, `--paper-cool` | White / soft lavender |
| Text | `--ink`, `--ink-soft`, `--ink-muted`, `--ink-ghost` | Near-black → faint |

---

## 3. Typography

| Class / token | Usage |
|---|---|
| `--font-display` (Syne) | All headings, numbered items, cover titles |
| `--font-body` (Inter) | Body copy, bullet text, labels |
| `--font-mono` (JetBrains Mono) | Kickers, step numbers, AI prompts, metadata |

---

## 4. Layout catalogue — use these classes exactly

### 01 · Cover — `.cover`
- Grid: `1.1fr 1fr`
- Left: `cover__year`, `cover__day`, `cover__title` (132px, `em` → `--sienna`), `cover__sub`
- Right: photo background with dark gradient overlay (`rgba(34,22,16,…)`), `cover__badge` pill top-right, `cover__author` + `cover__name` + `cover__credentials` at bottom-left
- Right panel background: always a real Unsplash photo URL with the gradient layered on top

### 02 · Section divider — `.section-divider`
- Background: `--paper-deeper` (light lavender — **not** dark ink)
- Contains: `section-divider__inner` → `section-divider__kicker` (with large `.num` at 120px) + `section-divider__title` (144px) + `section-divider__sub`
- Title `em` spans get `color: var(--sienna)` inline

### 03 · Statement — `.statement`
- `justify-content: center` (vertically centred)
- `statement__kicker` → `statement__title` (96px, `em` → `--sienna`) → `statement__lead`

### 04 · Numbered list — `.numbered`
- Header: `.numbered__head` containing `.slide-kicker` + `.slide-title`
- Grid: `.numbered__grid` (2-col default, override to 3-col with inline style when needed)
- Each item: `.numbered-item` → `.numbered-item__num` (72px, `--sienna`) + `.numbered-item__body` h3 + p

### 05 · Compare — `.compare`
- Header: `.compare__head`
- Grid: `.compare__grid` (2-col, hairline borders)
- Labels: `.compare__label--pos` (sage) for strengths, `.compare__label--neg` (sienna) for weaknesses
- List items use `::before` dash rule

### 06 · Process / Flow — `.process`
- Header: `.process__head`
- Track: `.process__track` — use `repeat(4,1fr)` for 4 steps, `repeat(5,1fr)` for 5 steps
- Active step: `.process__step--active` (sienna background)
- Bullet marker: `·` in sienna

### 08 · Quote — `.quote`
- Background: `--ink` (dark), text `--paper`
- `quote__mark` (240px italic `"`) → `blockquote.quote__text` (92px italic) → `quote__author` with `.quote__avatar` + `.quote__who .name` / `.role` (role in `--ochre`)

### 10 · Milestone / Big moment — `.milestone`
- Background: `--sienna` (purple)
- Decorative circles via `::before` / `::after`
- Contains: `milestone__inner` → `milestone__kicker` + `milestone__num` (280px) + `milestone__title` (96px) + `milestone__sub`
- **Use this for Activity slides**, not custom yellow backgrounds

### 11 · Practice / Assignment — `.practice`
- Header: `.practice__head` → `.slide-kicker` + `.slide-title`
- Grid: `.practice__grid` (2-col)
- Cards: `.practice__card` with `border: 2px solid var(--ink)`, `practice__card-kicker`, h3 (52px), ul with `→` arrow bullets in `--sienna`
- **Use this for assignment / homework slides**

### 12 · End — `.end`
- Background: `--paper-deeper` (light)
- `end__kicker` (sienna, mono) → `end__title` (220px italic) → `end__sign` (italic, sienna-deep) → `end__contact` (mono, muted, flex row)
- **Use this for the closing slide**, not a dark or sienna background

---

## 5. Shared helpers — always use these classes

```css
/* Kicker line — bar before the text */
.slide-kicker {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-mono);
  text-transform: uppercase;
  color: var(--sienna-deep);
  margin-bottom: 20px;
  display: flex; align-items: center; gap: 16px;
}
.slide-kicker::before {
  content: ''; width: 40px; height: 2px; background: var(--sienna);
}

/* Slide title */
.slide-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 72px;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin: 0;
}

/* Body lead text */
.slide-lead {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  color: var(--ink-soft);
  line-height: var(--leading-relaxed);
  margin-top: 28px;
}
```

---

## 6. Chrome — hidden by default

The `.chrome` element is always `display: none`. Do **not** add visible slide numbers or session tags unless Winnie asks for them.

---

## 7. Entrance animations

Always include the `slideRise` / `slideFade` / `slideScale` keyframes and the `[data-active]` animation rules from the template. Stagger: child 1 → 0.05s, child 2 → 0.15s, child 3 → 0.25s, child 4 → 0.32s. Grid children (`.numbered-item`, `.compare__col`, `.process__step`, `.practice__card`) stagger from 0.20s → 0.60s. Always include `prefers-reduced-motion` media query to disable all animations.

---

## 8. What NOT to do

- ❌ Do not use dark `--ink` backgrounds for section dividers — use `--paper-deeper`
- ❌ Do not create custom "yellow activity" slides — use `.milestone` (sienna)
- ❌ Do not create custom closing slides with sienna/purple — use `.end` (light paper-deeper)
- ❌ Do not add visible `.chrome` / slide numbers / session tags unless asked
- ❌ Do not hardcode hex values — always use token variables
- ❌ Do not import Google Fonts separately — they come from `tokens.css`
- ❌ Do not use `--purple`, `--yellow` directly — use `--sienna`, `--ochre` aliases

---

## 9. Supplementary layouts (for session-specific content)

These are okay to add on top of the base template CSS when the content requires it:

- **Two-column content split** — `display: grid; grid-template-columns: 1fr 1fr; gap: 80px;`
- **AI prompt cards** — dark (`--ink`) code block with mono font, plus `--ochre-tint` warning callout and `--sienna-tint` reflect callout
- **Definition grids** (Observation/Implication) — two-col bordered grid with tag pills
- **Comparison tables** — `border-collapse: collapse` with mono headers and hairline row borders
- **HMW word cards** — 3-col grid using sienna / paper-deeper / ink backgrounds

These use the same token vocabulary and type scale as the base layouts.
