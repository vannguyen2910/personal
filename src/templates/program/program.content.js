// TEMPLATE: copy this file, then replace every placeholder below.
// Every text is { en, vi }. Leave vi the same as en if you do not need Vietnamese yet.
const t = (en, vi = en) => ({ en, vi })

export const program = {
  // Used in the form email subject, so you can tell which program someone asked about
  name: 'Program Name',
  hero: {
    badge: t('Course', 'Khóa học'),
    // Three headline lines. The middle one is shown in italics, the last one is highlighted.
    lines: [t('Your', 'Dòng 1'), t('Program', 'Dòng 2'), t('Name', 'Dòng 3')],
    description: t('One sentence that says who this is for and what they get.'),
    stats: [
      { value: '12', label: t('Sessions · 90 min weekly', 'Buổi học · 90 phút/tuần') },
      { value: t('1:1 or Group', '1:1 hoặc nhóm'), label: t('Online via Google Meet or Zoom') },
      { value: '2.000.000₫', label: t('Per month · Group Training', '/tháng · Học nhóm') },
    ],
  },
  pain: {
    headline: t('The problem in one line.'),
    emphasis: t('The turning point in italics.'),
    points: [
      t('First thing your student struggles with.'),
      t('Second thing your student struggles with.'),
      t('Third thing your student struggles with.'),
    ],
  },
  who: {
    headline: t('Who this is for, in one sentence.'),
    bigNumber: '0',
    body: t('Describe the starting point of your ideal student.'),
  },
  walkaway: {
    headline: t('What they walk away with, in one strong sentence.'),
  },
  curriculum: {
    title: t('What each session builds.'),
    note: t('One line on how the sessions connect to the learner’s own work.'),
  },
  pricing: {
    plans: [
      {
        name: t('1:1 Coaching', '1 kèm 1'),
        badge: t('Most focused', 'Tập trung nhất'),
        price: '4.000.000₫',
        per: t('/month', '/tháng'),
        total: '12.000.000₫',
        features: [
          { title: t('Feature one'), desc: t('Short explanation.') },
          { title: t('Feature two'), desc: t('Short explanation.') },
        ],
        format: '1:1 Coaching',
        dark: false,
      },
      {
        name: t('Group Training', 'Học nhóm'),
        badge: t('Best value', 'Tiết kiệm nhất'),
        price: '2.000.000₫',
        per: t('/month', '/tháng'),
        total: '6.000.000₫',
        features: [
          { title: t('Feature one'), desc: t('Short explanation.') },
          { title: t('Feature two'), desc: t('Short explanation.') },
        ],
        format: 'Group Training',
        dark: true,
      },
    ],
  },
  closing: {
    title: t('Ready to start?'),
    rows: [
      { label: t('Format', 'Hình thức'), value: t('1:1 or Group (3–5)') },
      { label: t('Sessions', 'Số buổi'), value: t('12 × 90 min') },
      { label: t('Cadence', 'Tần suất'), value: t('Weekly', 'Hàng tuần') },
      { label: t('Delivery', 'Triển khai'), value: t('Online via Google Meet or Zoom') },
    ],
  },
}

export const formats = [
  { value: '1:1 Coaching', en: '1:1 Coaching', vi: '1 kèm 1' },
  { value: 'Group Training', en: 'Group Training', vi: 'Học nhóm' },
]
