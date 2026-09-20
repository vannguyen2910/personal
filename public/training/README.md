# Winnie Nguyen — Training Hub

Your single source of truth for all training knowledge, content, and student work.

---

## Folder Map

```
03_Mentoring/
│
├── _templates/          ← Blank starter files — copy these to create new content
├── _design/             ← Site mockups and design references
│
├── 01_Library/          ← Everything you publish to the Knowledge Library
│   ├── lessons/         ← Full lesson plans (UX class + private)
│   ├── frameworks/      ← Reusable methods, tools, and templates
│   ├── guides/          ← How-to reference guides
│   └── slides/          ← Slide deck index pages (embeds Google Slides)
│
├── 02_Showcase/         ← Student artifact pages (published on site)
│   ├── ux-class/        ← Internal UIUX class students
│   └── private/         ← Private mentorship students
│
├── 03_Sessions/         ← Private training session recaps (NOT published)
│   ├── anh-truong/
│   └── vy-duong/
│
├── 04_Assets/           ← Images, PDFs, and downloads used on the site
│   ├── images/
│   └── pdfs/
│
└── 00_Source/           ← Your original working files (reference only)
    ├── My Teaching/     ← Existing teaching materials
    └── UX Methodology/  ← Existing methodology PDFs and templates
```

---

## How to Use This

**Creating new content?** Go to `_templates/`, copy the right template, rename it, and drop it in the correct folder inside `01_Library/` or `02_Showcase/`.

**After a training session?** Create a new file in `03_Sessions/[student-name]/` using `_template-session.md`.

**Adding a student artifact?** Use `_template-showcase.md` and save to `02_Showcase/`.

**Uploading a PDF or image for the site?** Drop it in `04_Assets/`.

---

## File Naming Convention

Use lowercase with hyphens. No spaces. No capital letters.

| Content type | Example filename |
|---|---|
| Lesson | `lesson-synthesis-problem-definition.md` |
| Framework | `framework-journey-mapping.md` |
| Guide | `guide-ux-audit-checklist.md` |
| Showcase | `showcase-sarah-journey-map.md` |
| Session recap | `session-03-synthesis.md` |

---

## Draft vs Published

Every file has `draft: true` or `draft: false` in its frontmatter.

- `draft: true` → work in progress, won't appear on the site
- `draft: false` → ready to publish, will appear on the Training Hub

---

*Winnie Nguyen Training Hub · Last updated April 2026*
