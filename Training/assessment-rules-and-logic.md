# Self-Assessment — Rules & Logic Map

A plain-language reference for **how the Product Designer Self-Assessment works**: every question, every mapping, and every rule that turns a student's answers into their results.

- **The tool:** [self-assessment.html](self-assessment.html) — one file, no database. All logic lives in the `<script>` block (starts ~line 825).
- **Purpose of this doc:** so you (Winnie) can review and mark up the rules without reading code. Line numbers point to where each rule lives, in case you want me to change it.
- **How to read it:** anything marked 🔧 is a **tunable number** — a value we picked that you may want to adjust. There's a full list at the bottom.

> ⚠️ **This doc is a mirror of the code, hand-written.** If we later change the code, this doc must be updated too — it does not auto-sync.

---

## 1. The big picture — how a student flows through it

```
1. Intro       → enters Name, Email, Years of experience, Target level
2. Skills      → rates 13 skills (Aware / Capable / Strong / Expert)
3. Behaviours  → rates 7 behaviours (Developing / Practising / Consistent)
4. Direction   → picks career direction(s) + optionally deprioritises skills
5. Results     → archetype, readiness %, gaps, learning pathway, radar chart
```

- Everything runs **in the student's browser**. Answers are saved only to that browser (`localStorage`, key `winnie_assessment_v4`, line 1081).
- **There is no central collection of results.** If a student refreshes, they resume where they left off — but you don't get a copy unless they export the PDF or you're on their screen. *(This is likely relevant to your concern — flag it if so.)*

---

## 2. The inputs (Intro screen)

| Field | Options | Used for |
|---|---|---|
| Name / Email | free text | Display + PDF only |
| **Years of experience** | `0–1`, `1–3`, `3–5`, `5–10`, `10+` years | The **calibration** check (§7) |
| **Target level** | `Associate`, `Mid`, `Senior`, `Lead`, `Principal` | Sets the **bar** every skill is measured against |

**Target level → required skill level** (`TARGET_LEVELS`, line 1076) 🔧

| Target | Required level (number) | Meaning |
|---|---|---|
| Associate | 1.5 | between Aware & Capable |
| Mid | 2 | Capable |
| Senior | 3 | Strong |
| Lead | 3.5 | between Strong & Expert |
| Principal | 4 | Expert |

This "required level" is called **`tv`** (target value) throughout the logic. It's the number a student's skills are compared to for gaps, strengths, and readiness.

---

## 3. The 13 Skills

Rated on a **4-level scale** → stored as a number:

| Answer | Number |
|---|---|
| Aware | 1 |
| Capable | 2 |
| Strong | 3 |
| Expert | 4 |

*(`LEVEL_NAMES`, line 1077. A skill left unrated counts as **0**.)*

The skills (`SKILLS`, line 828):

1. User Research
2. Information Architecture
3. Interaction Design
4. Visual Design
5. Writing / Content Design
6. Service Design
7. Prototyping
8. Frontend Development
9. System Design
10. AI-Assisted Workflow
11. Designing for AI Features
12. Stakeholder Management
13. Storytelling

Each skill has a description + wording for all 4 levels (the exact text students read). Those live inline in `SKILLS` if you want to reword any.

---

## 4. The 7 Behaviours

Rated on a **3-level scale** → stored as a number:

| Answer | Number |
|---|---|
| Developing | 1 |
| Practising | 2 |
| Consistent | 3 |

The behaviours (`BEHAVIOURS`, line 961):

1. Customer Understanding
2. Define Success
3. Measure Outcomes
4. Iterate Towards Success
5. Shared Responsibility
6. Transparency
7. Learning Agility

> 📝 **Note:** total questions = 13 + 7 = **20**. A code comment on line 1078 says "15" — that comment is stale (the actual count is correct at 20). Harmless, but worth cleaning up.

---

## 5. Career Directions (Direction screen)

Students pick one or more of 6 directions. Each direction has a set of "skills that matter for this path" — used to **focus** the gaps and learning pathway on what's relevant. (`DIRECTIONS`, line 1043.)

| Direction | Skills it focuses on |
|---|---|
| 🗺️ E2E / Service Designer | user research, service design, IA, prototyping, interaction design |
| 🎨 Product Specialist | visual design, interaction design, prototyping, system design, user research |
| 🔍 Research-led Designer | user research, service design, writing, IA, stakeholder management |
| 🎤 Design Lead / Manager | storytelling, stakeholder management, system design, user research, service design |
| ⚙️ Design × Engineering | frontend, system design, prototyping, interaction design, AI workflow |
| 🤖 AI-integrated Designer | AI workflow, AI features, user research, prototyping, storytelling |

Students can also **deprioritise** skills — those get pushed out of their gap list and learning pathway.

---

## 6. Archetype — "what kind of designer are you"

Result shows one of 6 archetypes (`ARCHETYPES`, line 1369). How it's chosen (`getArchetype()`, line 1396):

Five "profiles" are scored by averaging pairs of skills:

| Profile | Calculated from |
|---|---|
| **Craftsperson** 🎨 | (Visual Design + Interaction Design) ÷ 2 |
| **Researcher** 🔍 | (User Research + Service Design) ÷ 2 |
| **Strategist** ♟️ | (System Design + Information Architecture) ÷ 2 |
| **Communicator** 💬 | (Writing + Transparency behaviour, rescaled) ÷ 2 |
| **Influencer** 🎤 | (Storytelling + Stakeholder Management) ÷ 2 |

Then:
- The **highest-scoring** profile wins and becomes the archetype.
- **BUT** if the gap between the highest and lowest profile is **less than 0.7** 🔧 (line 1409), the student is called **The All-Rounder ⚡** instead (meaning: evenly spread, not yet deep in any one area).

Each archetype also carries a fixed **"superpower"** and **"watch out for"** line (line 1370+).

> 👀 **Worth reviewing:** the Communicator formula (line 1403) mixes a skill and a behaviour with a rescaling trick. It's the one archetype rule that's a bit opaque — a candidate to simplify.

---

## 7. The result calculations

All of these are computed the moment results load (`buildInsights()`, line 1474).

### a) Career Readiness % (`getReadinessScore`, line 1414)
"How ready are you for your target level, right now?"

- **Skills part:** for each skill, `min(your level ÷ target level, 1)` — i.e. hitting target = full credit, no bonus for exceeding. Averaged across 13 skills.
- **Behaviours part:** Developing = 0, Practising = 0.5, Consistent = 1. Averaged across 7.
- **Final:** `Skills × 70% + Behaviours × 30%`, shown as a %. 🔧 *(the 70/30 weighting)*

Display bands: ≥75% green, ≥50% purple, below = amber (line 1503). 🔧

### b) Experience Calibration (`getCalibration`, line 1422)
"Are your self-ratings realistic for your experience?" Compares your **average skill level** to an expected range for your years: 🔧

| Experience | Expected avg skill range |
|---|---|
| 0–1 years | 0 – 1.8 |
| 1–3 years | 0.8 – 2.5 |
| 3–5 years | 1.5 – 3.0 |
| 5–10 years | 2.0 – 3.5 |
| 10+ years | 2.5 – 4.0 |

- Below the range → **"Possibly under-rated"** (you may be underselling yourself)
- Above the range → **"Check your ratings"** (some ratings may be aspirational)
- Inside → **"Well calibrated"**

### c) AI Readiness (`getAIReadiness`, line 1455)
Average of the two AI skills (AI Workflow + AI Features): 🔧
- **≥ 3** → "AI Ready" · **≥ 2** → "AI Growing" · **below 2** → "AI Early"

### d) Where you shine — Strengths (`getStrengthSkills`, line 1432)
- Skills **at or above** your target level → shows up to 2 of them.
- If none are at target, shows your **2 highest** skills instead.

### e) Biggest unlock — Critical Gap (`getCriticalGap`, line 1439)
- Looks at all skills **below** target (gap = target − your level).
- Narrows to your **chosen direction's** skills (and drops deprioritised ones).
- Picks the **single largest gap**. Each skill has a fixed one-line rationale for *why* it matters (`getRationale`, line 1733).

### f) Craft vs Behaviours balance (`getSkillVsBehaviourBalance`, line 1462)
Turns skills and behaviours each into a 0–100% score, then labels the pattern: 🔧
- Both < 40% → **"both-low"** ("focus on fundamentals")
- Both ≥ 65% → **"both-high"** ("closer to levelling up than you think")
- Skills lead by > 20 points → **"high-skills"** ("craft ahead of how you operate")
- Behaviours lead by > 20 points → **"high-behaviours"** ("time to close craft gaps")
- Otherwise → **"balanced"**

### g) Learning Pathway (`buildPathway`, line 1751)
- Takes skills **below** target, focused on the chosen direction, minus deprioritised ones.
- Sorts by biggest gap, shows the **top 5** with suggested resources (`SKILL_RESOURCES`, line 1027). 🔧 *(the "5")*

---

## 8. 🔧 Tunable numbers — quick reference

The values most likely worth revisiting, all in one place:

| # | Rule | Current value | Line |
|---|---|---|---|
| 1 | Target level → required score | Associate 1.5 / Mid 2 / Senior 3 / Lead 3.5 / Principal 4 | 1076 |
| 2 | All-Rounder threshold | profiles within **0.7** of each other | 1409 |
| 3 | Readiness weighting | Skills **70%** / Behaviours **30%** | 1419 |
| 4 | Readiness colour bands | 75% / 50% | 1503 |
| 5 | Calibration expected ranges (per experience) | see §7b table | 1424 |
| 6 | AI readiness thresholds | ≥3 Ready / ≥2 Growing | 1457–1459 |
| 7 | Craft-vs-behaviour cutoffs | 40 / 65 / 20-pt gap | 1467–1470 |
| 8 | Learning pathway length | top **5** skills | 1764 |
| 9 | Strengths shown | up to **2** | 1435 |

---

## 9. Known quirks / things to keep an eye on

- **No central results.** Data lives only in each student's browser — you can't see everyone's results in one place today. (Could be added — e.g. export/email on submit — if that's your concern.)
- **Unrated skill = 0.** If a student skips a skill it's treated as "worse than Aware," which drags down readiness and calibration. Worth deciding if that's intended.
- **Communicator archetype** blends a skill + a behaviour with a rescaling step (line 1403) — the least transparent rule.
- **Stale comment** on line 1078 says "15" questions; it's actually 20.

---

*Reference doc for [self-assessment.html](self-assessment.html). Hand-maintained — update it whenever the assessment logic changes.*
