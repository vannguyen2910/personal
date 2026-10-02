// TEMPLATE: one entry per session. A { phase } entry is just a divider label.
const t = (en, vi = en) => ({ en, vi })

export const sessions = [
  { phase: t('Phase one', 'Giai đoạn 1') },
  {
    idx: '01',
    title: t('Session title'),
    summary: t('One or two sentences on what this session covers.'),
    tools: [],
    columns: [
      { label: t('Learning objective'), items: [{ en: 'What the learner will understand.', vi: 'What the learner will understand.' }] },
      { label: t('Outcome'), outcome: { title: t('What they leave with'), description: t('A short description.') } },
    ],
  },
  {
    idx: '02',
    title: t('Another session'),
    summary: t('One or two sentences on what this session covers.'),
    tools: [],
    columns: [
      { label: t('Learning objective'), items: [{ en: 'What the learner will understand.', vi: 'What the learner will understand.' }] },
    ],
  },
]
