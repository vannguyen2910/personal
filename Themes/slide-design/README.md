# Winnie's Teaching — Slide Design System

A warm, friendly slide system for **Winnie Nguyen's** UX Product Design teaching decks (7-day curriculum, bilingual Vietnamese/English).

## Who this is for

Winnie Nguyen — Senior Product Designer at NAB, former Go1 & StayLab instructor — teaches a 7-day intensive:

- **Day 1–2** · Design Thinking & System Understanding for Agency Workflow
- **Day 3** · Prioritization & Task Breakdown
- **Day 4** · Evaluate Design / Heuristic Evaluation
- **Day 5** · Tailoring Design Presentation
- **Day 6** · Feedback Loop Enhancement
- **Day 7** · UX Whiteboard Challenges

The system is tuned to how Winnie actually teaches: frameworks, numbered steps, side-by-side comparisons, process diagrams, real case studies (Go1, Disney, NAB), and bilingual mixed-language slides. Students should feel **guided, not lectured**.

## How to use

1. Open `index.html` to browse the full system.
2. Open `slides/template.html` to get a ready-to-fill 16:9 deck shell with every recurring layout already built in.
3. Copy individual slides out, or duplicate `template.html` as `day-8.html` and swap the content.

## Files

| File | What it is |
|---|---|
| `index.html` | Design system index — tokens, type, layouts, components |
| `tokens.css` | Color, type, spacing, radius, shadow variables |
| `slides/template.html` | 16:9 deck template with every layout filled with sample content |
| `slides/components.jsx` | Reusable slide components (Cover, Section, Numbered, Compare…) |

## Design principles

1. **Bold editorial.** Vivid purple + bright yellow on white, powered by Syne — a confident geometric display face.
2. **Bilingual-ready.** Type scale accommodates longer Vietnamese phrases; no cramped columns.
3. **Teacher's voice.** Numbers (01 / 02 / 03), kickers ("Phần 1", "Milestone 2"), and "Ví dụ" callouts mirror Winnie's structure.
4. **One idea per slide.** Every layout has obvious hierarchy — a kicker, a title, and a focused body.
5. **Frameworks render cleanly.** Trees, process diagrams, and compare tables are first-class layouts, not afterthoughts.
