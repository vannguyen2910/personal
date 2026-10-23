// Curriculum for AI Design Workflow: 12 sessions over 6 weeks, two 90-minute sessions a week (English + Vietnamese).
// 9 content sessions and 3 Check points (sessions 5, 9, 12). Phases follow the Notion course page.
// Source: the series plan in the mentoring library (programs/ai-design-workflow/learning/plan.md).

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

const checkpoint = (idx, title, summary, learn, outcomeTitle, outcomeDesc) =>
  session(idx, title, summary, learn, outcomeTitle, outcomeDesc)

export const sessions = [
  { phase: t('Foundation', 'Foundation') },
  session(
    '01',
    t('Set Up Your AI Workspace', 'Set Up Your AI Workspace'),
    t('A case folder and data rules every later step builds on', 'Một case folder và quy tắc dữ liệu để mọi bước sau xây tiếp lên'),
    [
      t('Where AI helps in each stage, and where it falls short', 'AI giúp được gì ở từng stage, và còn yếu ở đâu'),
      t('What is safe to share with AI, and what is not', 'Dữ liệu nào an toàn để đưa cho AI, dữ liệu nào không'),
      t('Set up your case folder and choose your direction', 'Dựng case folder và chọn hướng đi cho mình'),
    ],
    t('A case folder ready for AI', 'Case folder sẵn sàng làm việc với AI'),
    t('Your own case with your own data rules, a started context pack and the career direction you chose.', 'Case của bạn kèm quy tắc dữ liệu riêng, context pack đã bắt đầu và hướng đi nghề nghiệp bạn chọn.'),
  ),

  { phase: t('Discover', 'Discover') },
  session(
    '02',
    t('Discover the Problem', 'Discover the Problem'),
    t('AI prepares your questions, you lead the conversation with business', 'AI chuẩn bị câu hỏi, bạn dẫn dắt cuộc trao đổi với business'),
    [
      t('Start from the business question, not a finished brief', 'Bắt đầu từ business question, không phải từ brief có sẵn'),
      t('Separate what is confirmed from what is assumed', 'Tách điều đã xác nhận khỏi điều còn là giả định'),
      t('Evaluate the current experience, with evidence for every finding', 'Đánh giá trải nghiệm hiện tại, mỗi phát hiện đều có bằng chứng'),
    ],
    t('The business problem, scoped', 'Vấn đề kinh doanh đã rõ phạm vi'),
    t('Business question, outcome and metrics, with confirmed and assumed marked apart, plus an evidence-backed review of today\'s experience.', 'Business question, outcome và metric, tách rõ điều đã xác nhận với giả định, kèm đánh giá trải nghiệm hiện tại có bằng chứng.'),
  ),
  session(
    '03',
    t('Research You Can Trust', 'Research You Can Trust'),
    t('AI synthesizes, you verify every quote', 'AI tổng hợp, bạn kiểm tra từng quote'),
    [
      t('Pair what competitors do with what users say', 'Ghép điều đối thủ làm với điều người dùng nói'),
      t('Synthesise quotes with AI, word for word', 'Tổng hợp quote cùng AI, giữ nguyên văn'),
      t('Verify every theme against its source', 'Đối chiếu từng theme với nguồn gốc'),
    ],
    t('Insights you can trace', 'Insight truy ngược được về nguồn'),
    t('Verified themes, each traced to real quotes, plus what your sample cannot tell you.', 'Các theme đã kiểm tra, mỗi theme truy được về quote thật, kèm giới hạn của mẫu nghiên cứu.'),
  ),

  { phase: t('Define', 'Define') },
  session(
    '04',
    t('Frame the Problem Worth Solving', 'Frame the Problem Worth Solving'),
    t('AI drafts, you rank and decide what is worth solving', 'AI soạn nháp, bạn xếp hạng và quyết định vấn đề nào đáng giải'),
    [
      t('Rank opportunities by user need, with evidence', 'Xếp hạng opportunity theo nhu cầu người dùng, kèm bằng chứng'),
      t('Write hypotheses you can test', 'Viết hypothesis kiểm chứng được'),
      t('Decide how success will be measured before you design', 'Chốt cách đo thành công trước khi thiết kế'),
    ],
    t('Opportunities and hypotheses', 'Opportunity và hypothesis rõ ràng'),
    t('The most worthwhile opportunities and hypotheses clear enough to test.', 'Những opportunity đáng làm nhất, cùng hypothesis đủ rõ để kiểm chứng.'),
  ),
  checkpoint(
    '05',
    t('Check Point 1: Write the Problem Brief', 'Check Point 1: Write the Problem Brief'),
    t('Your own case, small-group coaching, peer review', 'Làm trên case của bạn, có coaching nhóm nhỏ và review chéo'),
    [
      t('Run Discover to Define on your own case', 'Chạy từ Discover đến Define trên case của bạn'),
      t('Coaching in small groups, plus time to catch up', 'Coaching theo nhóm nhỏ, có thời gian cho người cần bắt kịp'),
      t('Peer review of each other\'s briefs', 'Review chéo problem brief của nhau'),
    ],
    t('A complete problem brief', 'Problem brief hoàn chỉnh'),
    t('A written problem brief for your case, reviewed by your peers.', 'Problem brief cho case của bạn, đã được review chéo.'),
  ),

  { phase: t('Develop', 'Develop') },
  session(
    '06',
    t('Explore Ideas and Pick a Direction', 'Explore Ideas and Pick a Direction'),
    t('AI generates options, you choose and say why', 'AI tạo các phương án, bạn chọn và giải thích vì sao'),
    [
      t('Generate three genuinely different directions with AI', 'Tạo ba hướng thật sự khác nhau cùng AI'),
      t('Choose one and record the reason', 'Chọn một hướng và ghi lại lý do'),
      t('Draft the user flow and content, then edit', 'Soạn nháp user flow và nội dung cùng AI, rồi tự chỉnh'),
    ],
    t('One chosen direction', 'Một hướng đã chọn'),
    t('Three options, the one you chose and why, with its user flow and content.', 'Ba hướng, hướng bạn chọn và lý do, kèm user flow và nội dung.'),
  ),
  session(
    '07',
    t('Build Your First Prototype', 'Build Your First Prototype'),
    t('AI builds on your design system, you check every change', 'AI dựng trên design system của bạn, bạn kiểm tra từng thay đổi'),
    [
      t('Write design system notes and a rules file the AI can read', 'Viết design system notes và rules file để AI đọc được'),
      t('Build the main flow screen by screen', 'Dựng luồng chính từng màn hình một'),
      t('Check what the AI actually changed', 'Kiểm tra những gì AI thực sự đã sửa'),
    ],
    t('A first working prototype', 'Prototype đầu tiên chạy được'),
    t('The main flow running in the browser, built from your own design system rules.', 'Luồng chính chạy trên trình duyệt, dựng từ quy tắc design system của chính bạn.'),
  ),
  session(
    '08',
    t('Refine and Check Your Design', 'Refine and Check Your Design'),
    t('AI audits states and accessibility, you decide what to fix', 'AI rà soát state và accessibility, bạn quyết định sửa gì'),
    [
      t('Add states, edge cases and responsive layouts', 'Thêm state, edge case và responsive'),
      t('Check against your design system and accessibility with AI', 'Kiểm tra design system và accessibility cùng AI'),
      t('Check that every decision still traces to a user need', 'Kiểm tra mỗi decision vẫn truy được về nhu cầu người dùng'),
    ],
    t('A refined, checked prototype', 'Prototype đã tinh chỉnh và kiểm tra'),
    t('A fuller prototype with the failure cases, small screens and accessibility covered.', 'Prototype đầy đủ hơn, đã xử lý các tình huống lỗi, màn hình nhỏ và accessibility.'),
  ),
  checkpoint(
    '09',
    t('Check Point 2: Build the AI Prototype', 'Check Point 2: Build the AI Prototype'),
    t('Your own case, small-group coaching, peer review', 'Làm trên case của bạn, có coaching nhóm nhỏ và review chéo'),
    [
      t('Build the main flow on your own case', 'Dựng luồng chính trên case của bạn'),
      t('Coaching in small groups, plus time to catch up', 'Coaching theo nhóm nhỏ, có thời gian cho người cần bắt kịp'),
      t('Peer review before it goes to real users', 'Review chéo trước khi đem đi test với người dùng thật'),
    ],
    t('A prototype ready to test', 'Prototype sẵn sàng đem đi test'),
    t('The main flow of your case, running and ready for real users.', 'Luồng chính của case bạn chạy được, sẵn sàng cho người dùng thật.'),
  ),
  session(
    '10',
    t('Test with Real Users', 'Test with Real Users'),
    t('AI prepares the test, real users run it', 'AI chuẩn bị bài test, người dùng thật là người thực hiện'),
    [
      t('Prepare the test plan and script with AI', 'Chuẩn bị test plan và kịch bản cùng AI'),
      t('Why simulated users cannot replace real ones', 'Vì sao người dùng do AI mô phỏng không thay được người dùng thật'),
      t('Run the tests, verify findings, fix the prototype', 'Chạy test, kiểm tra lại phát hiện, sửa prototype'),
    ],
    t('Findings you can defend', 'Kết quả test bạn bảo vệ được'),
    t('Results from real users, measured against your baseline, and a prototype fixed accordingly.', 'Kết quả từ người dùng thật, đo so với baseline, và prototype đã sửa theo đó.'),
  ),

  { phase: t('Deliver', 'Deliver') },
  session(
    '11',
    t('Hand Off and Measure Success', 'Hand Off and Measure Success'),
    t('Everything a developer needs, and a way to know it worked', 'Mọi thứ developer cần, và cách biết thiết kế có hiệu quả'),
    [
      t('Package a handoff pack developers can use without asking', 'Đóng gói handoff pack để developer dùng mà không cần hỏi lại'),
      t('Plan how success is measured after launch', 'Lên kế hoạch đo thành công sau khi ra mắt'),
      t('Describe your AI workflow\'s results in numbers', 'Mô tả kết quả AI workflow của bạn bằng số đếm'),
    ],
    t('A handoff pack and measurement plan', 'Handoff pack và measurement plan'),
    t('Everything a developer and a PO need to take your design forward.', 'Mọi thứ developer và PO cần để đưa design của bạn đi tiếp.'),
  ),
  checkpoint(
    '12',
    t('Check Point 3: Present Your Case', 'Check Point 3: Present Your Case'),
    t('The judgement behind the work, not just the speed', 'Phán đoán đằng sau công việc, không chỉ tốc độ'),
    [
      t('Present evidence, decisions and trade-offs', 'Trình bày evidence, decision và trade-off'),
      t('Decide which parts of the workflow to keep, tune or drop', 'Quyết định phần workflow nào giữ, chỉnh hay bỏ'),
      t('Finish your Knowledge Hub', 'Hoàn thiện Knowledge Hub'),
    ],
    t('A complete case and portfolio piece', 'Case hoàn chỉnh cho portfolio'),
    t('The finished Knowledge Hub and a case you can show an employer or your PO.', 'Knowledge Hub hoàn chỉnh và một case bạn có thể cho nhà tuyển dụng hoặc PO xem.'),
  ),
]
