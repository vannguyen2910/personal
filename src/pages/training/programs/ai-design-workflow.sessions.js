// Curriculum for AI Design Workflow: 10 weekly sessions (English + Vietnamese).
// Built from the series plan in the mentoring library (lessons/ai design workflow/learning/00-plan.md).

const t = (en, vi) => ({ en, vi })

const session = (idx, title, summary, learn, outcomeTitle, outcomeDesc) => ({
  idx,
  title,
  summary,
  columns: [
    { label: t("What you'll learn", 'Bạn sẽ học'), items: learn },
    { label: t("You'll leave with", 'Bạn nhận được'), outcome: { title: outcomeTitle, description: outcomeDesc } },
  ],
})

export const sessions = [
  { phase: t('Foundation', 'Foundation') },
  session(
    '01',
    t('Set Up Your AI Workspace', 'Set Up Your AI Workspace'),
    t('A folder and rules every later step builds on', '1 folder và rules để mọi bước sau xây tiếp lên'),
    [
      t('Core AI terms, learned by doing', 'Các AI terms cốt lõi, học qua thực hành'),
      t('What is safe to share with AI', 'Cái gì an toàn để đưa cho AI'),
      t('Set up your case folder and context pack', 'Dựng case folder và context pack'),
    ],
    t('A case folder you can reuse', 'Case folder dùng lại được'),
    t('Your own case set up with a context pack, data rules and an empty Experience Hub.', 'Case của bạn đã có context pack, data rules và Experience Hub trống.'),
  ),

  { phase: t('Discover', 'Discover') },
  session(
    '02',
    t('Align on the Brief', 'Align on the Brief'),
    t('AI prepares your questions, you lead the PO talk', 'AI chuẩn bị questions, bạn dẫn dắt cuộc trò chuyện với PO'),
    [
      t('Start from the business question, not the PRD', 'Bắt đầu từ business questions, không phải PRD'),
      t('Prepare questions and assumptions with AI', 'Chuẩn bị questions và assumptions cùng AI'),
      t('Rehearse the PO conversation', 'Tập trước cuộc trò chuyện với PO'),
    ],
    t('A shared scope', 'Scope chung'),
    t('Business question, outcome, metrics and your own beliefs, with an agreement status.', 'Business question, outcome, metrics và beliefs của bạn, kèm agreement status.'),
  ),
  session(
    '03',
    t('Synthesize User Research', 'Synthesize User Research'),
    t('AI synthesizes, you verify every quote', 'AI synthesize, bạn verify từng quote'),
    [
      t('Pair what users say with what competitors do', 'Ghép điều user nói với điều competitor làm'),
      t('Synthesise quotes with AI, word for word', 'Synthesize quotes với AI, giữ nguyên văn'),
      t('Verify every theme against its source', 'Verify mỗi theme với source gốc'),
    ],
    t('An evidence pack', 'Evidence pack'),
    t('Verified themes and opportunity candidates, each traced to real quotes, plus what the sample cannot tell you.', 'Các theme đã verify và opportunity candidates, mỗi cái truy về quote thật, kèm giới hạn của sample.'),
  ),

  { phase: t('Define', 'Define') },
  session(
    '04',
    t('Define the Problem', 'Define the Problem'),
    t('AI drafts, product and business sign off', 'AI viết draft, product và business sign off'),
    [
      t('Rank opportunities with evidence', 'Rank opportunities dựa trên evidence'),
      t('Turn heuristics into principle checks', 'Biến heuristics thành principle checks'),
      t('Write hypotheses and success metrics', 'Viết hypotheses và success metrics'),
      t('Get product and business to agree', 'Thống nhất brief với product và business'),
    ],
    t('A shared problem brief', 'Problem brief chung'),
    t('Outcome, ranked opportunities, hypotheses and principle checks: the requirement you helped write.', 'Outcome, ranked opportunities, hypotheses và principle checks: requirement do chính bạn cùng viết.'),
  ),

  { phase: t('Develop', 'Develop') },
  session(
    '05',
    t('Ideate and Pick a Direction', 'Ideate and Pick a Direction'),
    t('AI generates options, you choose and say why', 'AI tạo options, bạn chọn và giải thích vì sao'),
    [
      t('Generate three different directions with AI', 'Tạo 3 directions khác nhau cùng AI'),
      t('Choose one and record why', 'Chọn 1 direction và ghi lại lý do'),
      t('Draft flows and content, then edit', 'Draft flows và content bằng AI, rồi tự chỉnh'),
    ],
    t('One chosen direction', 'Một direction đã chọn'),
    t('A chosen direction with its reasoning, a user flow and a content model.', 'Direction đã chọn kèm lý do, user flow và content model.'),
  ),
  session(
    '06',
    t('Prototype, Part 1: Build', 'Prototype, Part 1: Build'),
    t('AI builds on your design system, you check every change', 'AI build trên design system của bạn, bạn check từng thay đổi'),
    [
      t('Write design system notes and a rules file', 'Viết design system notes và rules file'),
      t('Build the main flow screen by screen', 'Build main flow từng màn hình'),
      t('Check what the AI actually changed', 'Check những gì AI thực sự đã sửa'),
    ],
    t('A first working prototype', 'Prototype chạy được đầu tiên'),
    t('The main flow running in the browser, with design system notes and a rules file.', 'Flow chính chạy trên trình duyệt, kèm design system notes và rules file.'),
  ),
  session(
    '07',
    t('Prototype, Part 2: Refine and Check', 'Prototype, Part 2: Refine and Check'),
    t('AI audits states, accessibility and your decisions, you decide what to fix', 'AI audit states, accessibility và decisions của bạn, bạn quyết định fix gì'),
    [
      t('Add states and edge cases', 'Thêm states và edge cases'),
      t('AI check for design system and accessibility', 'AI check design system và accessibility'),
      t('Run the alignment check', 'Chạy alignment check'),
      t('Let AI challenge your decisions', 'Để AI phản biện decisions của bạn'),
    ],
    t('A refined, checked prototype', 'Prototype đã refine và check'),
    t('An alignment table and principle audit in your hub, ready for real users.', 'Alignment table và principle audit trong hub, sẵn sàng cho real users.'),
  ),

  { phase: t('Deliver', 'Deliver') },
  session(
    '08',
    t('Usability Testing', 'Usability Testing'),
    t('AI prepares the test, real users run it', 'AI chuẩn bị test, real users thực hiện nó'),
    [
      t('Prepare the test plan and script with AI', 'Chuẩn bị test plan và script cùng AI'),
      t('Run peer usability tests', 'Chạy usability test theo cặp'),
      t('Verify findings against raw notes', 'Verify findings với raw notes'),
    ],
    t('Findings you can defend', 'Findings bạn bảo vệ được'),
    t('Test results set against your baseline, and an updated prototype and decision log.', 'Test results so với baseline, cùng prototype và decision log đã update.'),
  ),
  session(
    '09',
    t('Handoff and Measure Success', 'Handoff and Measure Success'),
    t('Everything a developer needs, no questions asked', 'Mọi thứ developer cần, không cần hỏi lại'),
    [
      t('Build a handoff pack', 'Tạo handoff pack'),
      t('Write a measurement plan for the PO', 'Viết measurement plan cho PO'),
      t('Measure your own AI workflow', 'Đo kết quả AI workflow của chính bạn'),
    ],
    t('A handoff pack and measurement plan', 'Handoff pack và measurement plan'),
    t('Everything a developer and a PO need to take your design forward.', 'Mọi thứ developer và PO cần để đưa design của bạn đi tiếp.'),
  ),
  session(
    '10',
    t('Capstone: Present Your Case', 'Capstone: Present Your Case'),
    t('The judgement behind the work, not just the speed', 'Judgement đằng sau công việc, không chỉ tốc độ'),
    [
      t('Present evidence, decisions and trade-offs', 'Trình bày evidence, decisions và trade-offs'),
      t('Finish your Experience Hub', 'Hoàn thiện Experience Hub'),
      t('Decide what to keep, tune or skip', 'Quyết định keep, tune hay skip'),
    ],
    t('A complete case and portfolio piece', 'Case hoàn chỉnh và portfolio piece'),
    t('The finished Experience Hub and a case you can show an employer or your PO.', 'Experience Hub hoàn chỉnh và 1 case bạn có thể cho nhà tuyển dụng hoặc PO xem.'),
  ),
]
