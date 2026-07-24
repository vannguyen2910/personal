# Coaching Playbook — Notes → Advice

This is the **engine** behind the advice attached to student notes in the self-assessment. When a student writes a note, the tool scans it for the **trigger words** below and, if it matches a theme, attaches that theme's advice directly underneath that note — in the results screen and the PDF.

- **How to edit:** change any wording here, then tell Claude to sync it into [self-assessment.html](self-assessment.html) (the live copy lives in the `PLAYBOOK` list in that file's script).
- **Matching rules:** a note matches a theme if it contains **any** trigger word. Up to **2** notes get advice per report (the first two themes matched, in question order). A note that matches nothing still appears under "Your notes" — just with no advice attached.
- **Where it shows:** advice is **nested inside the same note card it came from** (not a separate section) — so a note's text is never shown twice on the page.
- **Voice:** advice is written **to the student** ("try this…"), so it works whether or not you're sitting with them.
- **Limitation:** this is keyword matching — it catches the common phrasings but can miss unusual wording. (An AI version that reads any phrasing is a possible phase 2.)

---

## ① Hold your ground on evidence
*Grounded in: Tam — works closely with a backend/technical team; hesitates to hold a design call when technical preferences conflict.*

- **Triggers:** push back, pushback, convince, hold my ground, hold her ground, technical preference, technical preferences, hesitate, hesitant, won't budge, overrule, stand my ground, lead with research
- **What's really going on:** Working closely with a technical or delivery team is a real strength — you understand constraints deeply. The risk is letting technical *preference* override design when they genuinely conflict. Leading with research, and holding your ground when the evidence supports a different call, is exactly the Mid → Senior shift.
- **Try this:**
  - Separate constraint from preference — ask "is this technically *impossible*, or just *not preferred*?" Only the first should overrule the design.
  - Turn disagreement into a trade-off, not an opinion clash: "Research shows users need X — what's the technical cost of supporting it?"
  - Practise on one low-risk decision: write your evidence-based rationale before the meeting, and hold it.
- **Grows:** Stakeholder Management · User Research · Storytelling
- **Resource:** Influencing Without Authority
- **In your plan:** On the next design–tech conflict, bring a written, research-backed recommendation framed as a trade-off. *Success: you held a research-based call at least once.*

## ② When you can't reach real users
*Grounded in: Anh — Germany-based clients; user access has to go through the PO.*

- **Triggers:** find user, reach user, user access, access to user, recruit, overseas, can't interview, hard to interview, through the po, product owner, no users, talk to users
- **What's really going on:** Direct user access is often gated — overseas clients, or a PO who controls contact. That's real, but it's not a dead end. Proxy sources get you most of the way and are a completely valid place to start.
- **Try this:**
  - Interview internal stakeholders (PO, support, sales, CS) — they carry a lot of proxy knowledge about user pain points.
  - Mine evidence that already exists: support tickets, reviews, analytics, and past research.
  - Ask the PO for recordings or notes from their user contact, even when you can't attend live.
- **Grows:** User Research · Service Design · Customer Understanding
- **Resource:** Interviewing Users Effectively
- **In your plan:** Run 2 proxy interviews this cycle and synthesise 3 grounded insights. *Success: insights based on evidence, not assumption.*

## ③ Fit the system, raise the finish
*Grounded in: John & Hiep — proposals need adjustment to fit the design system; consistency and polish need strengthening.*

- **Triggers:** design system, guideline, guidelines, consistency, consistent, inconsistent, polish, doesn't fit, not fit, finish, pattern, tokens
- **What's really going on:** Strong ideas sometimes drift from the design system or project constraints, which costs trust and rework. Consistency and finish are how senior work signals reliability.
- **Try this:**
  - Before sharing, self-audit against the design system — components, tokens, spacing, patterns. A 10-minute checklist catches most drift.
  - When you deviate on purpose, say why: "I'm breaking the pattern here because…". Unintentional inconsistency reads as careless; intentional deviation reads as judgement.
  - Pair with a design-system owner early on ambiguous components.
- **Grows:** Visual Design · System Design · Interaction Design
- **Resource:** Refactoring UI — Visual Design Patterns
- **In your plan:** Ship one proposal that passes a design-system self-audit with zero unflagged inconsistencies.

## ④ Drive, don't just react
*Grounded in: Thanh & Alex — tends to be reactive; should take initiative, arrange meetings, contribute unprompted.*

- **Triggers:** reactive, wait to be told, take initiative, take more initiative, proactive, proactiv, drive discussion, driving, arrange meeting, unprompted, initiative, coordination
- **What's really going on:** Waiting for direction is a Mid-level habit; Seniors *create* the direction — they convene people, surface issues early, and bring suggestions before being asked.
- **Try this:**
  - Convene, don't wait: when something's unclear, *you* schedule the 20-minute alignment — don't wait for the PM.
  - Come to discussions with a point of view and one recommendation, not just questions.
  - Flag risks early — "I think we'll hit X" — rather than reacting once it happens.
- **Grows:** Stakeholder Management · Storytelling · Shared Responsibility
- **Resource:** Presenting Design Work to Stakeholders
- **In your plan:** This cycle, initiate at least 2 cross-functional conversations and bring a recommendation to each.

## ⑤ Prototyping & ambiguous briefs
*Grounded in: Matthias — prototyping skills need development; handling open-ended, conceptual briefs is untested.*

- **Triggers:** prototyp, interactive flow, navigation demo, conceptual, open-ended, open ended, ambiguous, ambiguity, high-fidelity, hi-fi, not sure how to approach
- **What's really going on:** Two related growth edges — making ideas tangible with interactive prototypes, and handling briefs that are conceptual rather than spec'd. Both are how you move from executing a brief to *defining* the work.
- **Try this:**
  - Build one clickable prototype for a real flow (not just screens) — even low-fidelity — and test it.
  - For ambiguous briefs, start by framing: write the problem, the assumptions, and 2–3 directions before designing. Structure handles ambiguity, not more pixels.
  - Use AI to generate divergent concept directions fast, then curate the strongest.
- **Grows:** Prototyping · Interaction Design · Define Success
- **Resource:** Figma Prototyping — Official Learning
- **In your plan:** Deliver one interactive prototype and one framing doc for an open-ended brief.

## ⑥ Cross-functional process habits
*Grounded in: 360 review — link designs to Jira, collaborate earlier with front-end, test behaviour and accessibility.*

- **Triggers:** jira, ticket, handoff, hand-off, link design, collaborate earlier, front-end, frontend, accessibility, a11y, test app, process, engineer
- **What's really going on:** Craft is only as good as it ships. Consistent process habits — traceable handoff, early engineering collaboration, and testing behaviour and accessibility — are what make design reliable at senior level.
- **Try this:**
  - Link every updated design to its Jira ticket so the work is traceable.
  - Loop front-end engineers in at *design* time, not at handoff, to catch UI issues early.
  - Add a self-check pass: test real app behaviour and run a quick accessibility check (contrast, keyboard, labels) before calling it done.
- **Grows:** Frontend Development · Interaction Design · Iterate Towards Success
- **Resource:** MDN Web Docs — HTML & CSS for Designers
- **In your plan:** For the next feature, engineers are looped in before handoff and the design passes a basic accessibility check.

## ⑦ Build AI into your practice
*Grounded in: longer-term risk — limited AI-in-design exposure.*

- **Triggers:** ai tool, ai in design, use ai, using ai, ai workflow, ai feature, chatgpt, copilot, llm, artificial intelligence, new to ai, haven't used ai, limited ai
- **What's really going on:** AI fluency is fast becoming a baseline senior expectation. Low exposure is a monitorable risk — but an easy one to close, because the leverage is high.
- **Try this:**
  - Pick one repeatable task (research synthesis, first-draft copy, concept divergence) and do it with AI this week.
  - Build a small personal workflow and notice where AI helped versus needed rework.
  - Share one AI-assisted result with your team to normalise it.
- **Grows:** AI-Assisted Workflow · Designing for AI Features · Learning Agility
- **Resource:** AI Tools for Designers — Getting Started
- **In your plan:** Adopt AI into one weekly task and share one result with the team.

---

*Engine for the "Advice from your notes" feature in [self-assessment.html](self-assessment.html). Hand-maintained — keep this and the code copy in sync.*
