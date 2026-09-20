// ── DATA ─────────────────────────────────────────────────────────

export const SKILLS = [
  {
    id: 'user-research', name: 'User Research',
    desc: 'Rate your ability to understand customers and uncover meaningful insights.',
    levels: {
      aware:   'Understand the Design Process (Design Thinking, Double Diamond) and when to apply it.',
      capable: 'Plan and lead user research activities and interviews. Synthesise research insights with a team.',
      strong:  'Plan and conduct research to deeply understand customers, their unmet needs, and opportunities. Communicate insights and recommendations to key product decision makers.',
      expert:  'Define and assure best practice, influence organisational strategy. Make insights scalable and evergreen. Enable others to find, synthesise and action their own insights.'
    }
  },
  {
    id: 'information-architecture', name: 'Information Architecture',
    desc: 'Rate your ability to structure and organise information effectively.',
    levels: {
      aware:   'Can demonstrate a theoretical understanding of disciplines of information architecture.',
      capable: 'Can architect (effectively structure and sequence) information and content using a variety of mapping techniques.',
      strong:  'Can work with a broad range of people and processes to extract and document a coherent systemic overview of an experience.',
      expert:  'Is adept at shaping complex user experiences, architecting solutions across a variety of touchpoints and channels, or for an intricate mix of audiences and scenarios.'
    }
  },
  {
    id: 'interaction-design', name: 'Interaction Design',
    desc: 'Rate your ability to design clear, elegant, and usable interaction flows.',
    levels: {
      aware:   'Understand when strong interaction design is needed and ask for help.',
      capable: 'Reflect design principles in your designs. Design holistic flows, not individual screens. Choose design patterns based on strong rationale.',
      strong:  'Design simple and elegant interfaces for complex systems. Refine the details of interaction design to achieve a high level of polish.',
      expert:  'Lead projects in unknown or new forms of interaction, with demonstrable outcomes. Guide the rest of the team in interaction best practices.'
    }
  },
  {
    id: 'visual-design', name: 'Visual Design',
    desc: 'Rate your ability to craft visually compelling and consistent design.',
    levels: {
      aware:   'Produce work that respects the styling of the surrounding product and is visually up to standards.',
      capable: 'Produce multiple medium to large scale pieces of visual design. Augment and adapt to what you need, building on it appropriately.',
      strong:  'Define and improve the styling and experience of your product. Lead and guide others\' work, with effective critique.',
      expert:  'Exceptional ability with visual design. Finger on the pulse of trends, tools and techniques. Drive impactful visual improvements to the entire product suite.'
    }
  },
  {
    id: 'writing', name: 'Writing / Content Design',
    desc: 'Rate your ability to write clear, strategic UX copy and microcopy.',
    levels: {
      aware:   'Familiar with copy guidelines and why we use them.',
      capable: 'Develop and improve copy and microcopy found throughout the product experience. Test copy with users.',
      strong:  'Own and develop the strategic voice and tone of the product. Guide teams to ensure consistency across the customer journey.',
      expert:  'Master content design and help others. Raise the content design bar with innovative concept design.'
    }
  },
  {
    id: 'service-design', name: 'Service Design',
    desc: 'Rate your ability to map and improve end-to-end customer experiences.',
    levels: {
      aware:   'Familiar with service blueprints, journey maps and user flow maps.',
      capable: 'Understand and map each key customer\'s journey. Use research and data to highlight key gaps and opportunities.',
      strong:  'Champion and communicate which gaps need to close in each Service Blueprint. Know who needs to be involved to see the whole picture and make changes.',
      expert:  'Lead organisational change management through collaboration and trust. Drive company-wide objectives and key results.'
    }
  },
  {
    id: 'prototyping', name: 'Prototyping',
    desc: 'Rate your ability to make ideas tangible with prototypes at the right fidelity.',
    levels: {
      aware:   'Understand the strengths of prototypes, when they\'re most useful and the different types.',
      capable: 'Create click-based prototypes to validate a journey or flow. Recognise the level of prototyping required based on context.',
      strong:  'Create refined interactive prototypes to test complex interactive flows, micro-interactions and user reactions.',
      expert:  'Can make any idea real. Complex animations and interactions are a breeze. Inspire others towards a vision with highly interactive experiences.'
    }
  },
  {
    id: 'frontend-development', name: 'Frontend Development',
    desc: 'Rate your ability to work with code and collaborate closely with engineers.',
    levels: {
      aware:   'Pair with developers to craft quality experiences. Understand the basics of frontend and design systems to make smart trade-offs.',
      capable: 'Make moderate changes to production code in a design system or front-end applications. Understand accessibility standards.',
      strong:  'Add new components and large improvements to a design system. Make complex interactions and animations possible with code.',
      expert:  'Can work as a senior front-end developer. On the cutting-edge of new technologies. Uplift the skills and quality of other designers and front-end developers.'
    }
  },
  {
    id: 'system-design', name: 'System Design',
    desc: 'Rate your ability to build, maintain, and scale design systems.',
    levels: {
      aware:   'Aware of the history and future of your work and design accordingly. Understand the value of using a design system.',
      capable: 'Contribute to a design system.',
      strong:  'Act as steward for a design system. Drive improvements to design system and tooling.',
      expert:  'An industry-renowned system designer. Oversee large scale projects serving broad design goals at scale.'
    }
  },
  {
    id: 'ai-workflow', name: 'AI-Assisted Workflow',
    desc: 'Rate your ability to integrate AI tools meaningfully into your design process.',
    levels: {
      aware:   'Aware that AI tools can accelerate design tasks. Has experimented with at least one AI tool in a design context (research synthesis, copy, ideation).',
      capable: 'Actively integrates AI tools across multiple stages of the design process — generating options faster, synthesising notes, drafting copy — with appropriate review.',
      strong:  'Has a repeatable AI-integrated workflow. Evaluates when AI output is good enough vs. needs rework. Coaches others on practical AI tool use in design.',
      expert:  'Defines team-wide AI workflow standards. Stays current with emerging AI capabilities and identifies new leverage points. Shapes how the organisation uses AI in design.'
    }
  },
  {
    id: 'ai-features', name: 'Designing for AI Features',
    desc: 'Rate your ability to design products and interfaces that contain AI-powered functionality.',
    levels: {
      aware:   'Understands that AI-powered features have different design constraints. Aware of concepts like confidence levels, errors, and model limitations.',
      capable: 'Can design core states for AI features: empty, loading, low-confidence output, error, and fallback. Considers how users build trust with AI over time.',
      strong:  'Designs end-to-end AI feature experiences — onboarding, progressive disclosure, recovery flows, and human override patterns. Tests with users to validate mental models.',
      expert:  'Sets standards for AI feature design across the product. Leads conversations with engineering and product on capability, reliability, and user trust. Shapes responsible AI UX for the organisation.'
    }
  },
  {
    id: 'stakeholder-management', name: 'Stakeholder Management',
    desc: 'Rate your ability to manage relationships, expectations, and alignment with key stakeholders.',
    levels: {
      aware:   'Knows who the key stakeholders are for their project. Keeps them informed at appropriate intervals.',
      capable: 'Proactively manages stakeholder expectations — sets scope, flags risks early, and avoids surprises at review. Handles feedback constructively.',
      strong:  'Builds trust with difficult or senior stakeholders. Navigates competing priorities across functions. Brings stakeholders into alignment without escalation.',
      expert:  'Manages stakeholder relationships at an executive level. Shapes expectations before projects begin. Creates the conditions for design to be heard at the strategic level.'
    }
  },
  {
    id: 'storytelling', name: 'Storytelling',
    desc: 'Rate your ability to frame and communicate design work in a compelling, audience-appropriate narrative.',
    levels: {
      aware:   'Can describe what they designed and why in a clear sequence. Uses "problem → solution → outcome" structure.',
      capable: 'Frames design work as a narrative — sets context, builds tension around the problem, lands the solution with evidence. Adapts the story for different audiences.',
      strong:  'Uses storytelling to shift perspectives and build alignment in high-stakes moments. Makes complex, ambiguous work feel clear and credible.',
      expert:  'Shapes how the team and organisation talks about design work. Creates the narratives that get design a seat in strategic conversations. Inspires others to communicate with more intention.'
    }
  }
];

export const BEHAVIOURS = [
  {
    id: 'customer-understanding', name: 'Customer Understanding',
    desc: 'How well do you know your target customers — their jobs, challenges, and needs?',
    levels: {
      developing: 'Know your ideal customer and personas. Know who\'s using your product.',
      practising: 'Leverage existing research and talk to customers regularly. Pair with stakeholders to do research.',
      consistent: 'Understand underlying motivations. Lead research and make customer needs clear to the whole team.'
    }
  },
  {
    id: 'define-success', name: 'Define Success',
    desc: 'How effectively do you frame problems and hypothesise solutions with your team?',
    levels: {
      developing: 'Know what success looks like and explore different ways to solve problems.',
      practising: 'Involve cross-functional partners in discovery. Narrow to the best solution with strong rationale.',
      consistent: 'Diverge and converge quickly. Apply first principles thinking for complex problems.'
    }
  },
  {
    id: 'measure-outcomes', name: 'Measure Outcomes',
    desc: 'How much ownership do you take of measuring impact and customer outcomes?',
    levels: {
      developing: 'Know what business impact metrics you\'re trying to achieve.',
      practising: 'Help shape metrics that tell you if customers are achieving their outcomes.',
      consistent: 'Own your team\'s customer outcomes and business impact. Influence go-to-market approach.'
    }
  },
  {
    id: 'iterate', name: 'Iterate Towards Success',
    desc: 'How effectively do you work with engineers and use feedback to improve shipped work?',
    levels: {
      developing: 'Collaborate with engineers to improve solutions as they\'re built. Use insights after release.',
      practising: 'Pair with developers to ship quality work. Make smart trade-offs between quality and speed.',
      consistent: 'Improve the way your squad ships. Help developers prioritise what matters most to customers.'
    }
  },
  {
    id: 'shared-responsibility', name: 'Shared Responsibility',
    desc: 'How much do you take ownership beyond your immediate design tasks?',
    levels: {
      developing: 'Actively involved in testing usability during solution and validation stages. Own your work.',
      practising: 'Test designs with customers. Help your PM understand usability impact. Be generous with feedback.',
      consistent: 'Own your squad\'s work. Identify and anticipate risks. Work beyond design to ensure quality.'
    }
  },
  {
    id: 'transparency', name: 'Transparency',
    desc: 'How well do you communicate your design decisions and involve others?',
    levels: {
      developing: 'Involved in squad rituals. Use data and insights to communicate your decisions.',
      practising: 'Actively contribute to team rituals. Make the complex clear in writing and speaking.',
      consistent: 'Use storytelling to communicate work. Influence product and org leaders\' thinking and decisions.'
    }
  },
  {
    id: 'learning-agility', name: 'Learning Agility',
    desc: 'How proactively do you grow your skills and adapt to new tools, methods, and contexts?',
    levels: {
      developing: 'Tries new tools or methods when directed. Completes learning when assigned. Shows curiosity about the craft.',
      practising: 'Proactively seeks out new skills relevant to their role. Picks up unfamiliar tools without needing a course first. Reflects and adjusts.',
      consistent: 'Continuously self-directed in learning. Shares what they\'ve learned with the team. Adapts quickly when methods, tools, or context shift — including AI.'
    }
  }
];

export const SKILL_RESOURCES = {
  'user-research':            [{ title: 'Intro to UX Research Methods' }, { title: 'Interviewing Users Effectively' }, { title: 'Synthesis & Problem Definition in UX' }],
  'information-architecture': [{ title: 'Information Architecture' }],
  'interaction-design':       [{ title: 'Mental Models in UX Design' }, { title: 'UX Design Principles Reference' }],
  'visual-design':            [{ title: 'Visual Design Study Guide (NN/g)' }, { title: 'Refactoring UI — Visual Design Patterns' }],
  'writing':                  [{ title: 'UX Content Collective — Writing for UX' }, { title: 'Google Developer Documentation Style Guide' }],
  'service-design':           [{ title: 'Journey Mapping Workshop Guide' }, { title: 'Synthesis & Problem Definition in UX' }],
  'prototyping':              [{ title: 'Product Thinking Foundations' }, { title: 'Figma Prototyping — Official Learning' }],
  'frontend-development':     [{ title: 'Frontend for Designers (CareerFoundry)' }, { title: 'MDN Web Docs — HTML & CSS for Designers' }],
  'system-design':            [{ title: 'How to Give Design Critique' }, { title: 'Product Thinking Foundations' }],
  'ai-workflow':              [{ title: 'AI Tools for Designers — Getting Started' }, { title: 'Prompt Engineering for Design Tasks' }],
  'ai-features':              [{ title: 'Designing for AI — Patterns & Principles' }, { title: 'Google PAIR Guidebook — Human-AI Interaction' }],
  'stakeholder-management':   [{ title: 'Influencing Without Authority' }, { title: 'Design Critique & Stakeholder Feedback' }],
  'storytelling':             [{ title: 'Presenting Design Work to Stakeholders' }, { title: 'Storytelling in Product Design' }]
};

export const DIRECTIONS = [
  {
    id: 'e2e-service', emoji: '🗺️', name: 'E2E / Service Designer',
    desc: 'Design end-to-end experiences across touchpoints — research through to service blueprints and systems.',
    skills: ['user-research', 'service-design', 'information-architecture', 'prototyping', 'interaction-design']
  },
  {
    id: 'product-specialist', emoji: '🎨', name: 'Product Specialist',
    desc: 'Go deep on craft — shipping polished, well-considered product experiences.',
    skills: ['visual-design', 'interaction-design', 'prototyping', 'system-design', 'user-research']
  },
  {
    id: 'research-led', emoji: '🔍', name: 'Research-led Designer',
    desc: 'Lead with evidence — drive product decisions through deep user understanding and insight strategy.',
    skills: ['user-research', 'service-design', 'writing', 'information-architecture', 'stakeholder-management']
  },
  {
    id: 'design-lead', emoji: '🎤', name: 'Design Lead / Manager',
    desc: 'Move from maker to multiplier — build influence, coach others, and connect design to business strategy.',
    skills: ['storytelling', 'stakeholder-management', 'system-design', 'user-research', 'service-design']
  },
  {
    id: 'design-engineering', emoji: '⚙️', name: 'Design × Engineering',
    desc: 'Work at the boundary between design and code — building systems, components, and interactive experiences.',
    skills: ['frontend-development', 'system-design', 'prototyping', 'interaction-design', 'ai-workflow']
  },
  {
    id: 'ai-integrated', emoji: '🤖', name: 'AI-integrated Designer',
    desc: 'Build an AI-native practice — integrate AI tools into your workflow and design intelligent AI features.',
    skills: ['ai-workflow', 'ai-features', 'user-research', 'prototyping', 'storytelling']
  }
];

export const TARGET_LEVELS = { Associate: 1.5, Mid: 2, Senior: 3, Lead: 3.5, Principal: 4 };
export const LEVEL_NAMES   = ['', 'Aware', 'Capable', 'Strong', 'Expert'];
export const TOTAL_Q = SKILLS.length + BEHAVIOURS.length; // 15

// Programs to recommend on the results screen — matched to the student's
// own target level, so we only ever suggest something built for them.
// Add more entries here as new programs launch.
export const PROGRAMS = [
  {
    href: 'programs/ui-ux-fundamentals.html',
    tag: '1:1 or Group',
    title: 'UI/UX Design Fundamentals',
    desc: 'Your first real design process, built step by step, from problem to portfolio-ready case study. 12 sessions, weekly, over about 3 months.',
    level: 'is-beginner',
    levelLabel: 'Beginner',
    visual: 'beginner',
    matches: s => s.experience === '0–1 years'
  },
  {
    href: 'programs/junior-to-mid-level.html',
    tag: '1:1 or Group Training',
    title: 'UX Product Design Roadmap to Mid-Level',
    desc: 'Learn to run a full UX process yourself, not just execute a screen. 12 sessions, weekly, over about 3 months.',
    level: 'is-intermediate',
    levelLabel: 'Intermediate',
    visual: 'steps',
    matches: s => s.target === 'Associate' || s.target === 'Mid'
  },
  {
    href: 'programs/mid-to-senior.html',
    tag: '1:1 or Group',
    title: 'UX Product Design Roadmap to Senior',
    desc: 'Defend decisions with evidence, not gut feel, and own projects end-to-end. 12 sessions, weekly, over 3 months.',
    level: 'is-advanced',
    levelLabel: 'Advanced',
    visual: 'senior',
    matches: s => s.target === 'Senior' || s.target === 'Lead' || s.target === 'Principal'
  },
  {
    href: 'programs/systematic-ai-prototyping.html',
    tag: 'Video · 1:1 · Group',
    title: 'Systematic AI Prototyping for UX Product Designer',
    desc: 'Stop prompting screen by screen. Define your design system once, then let AI build consistently at any scale.',
    level: 'is-intermediate',
    levelLabel: 'Intermediate',
    visual: 'ai',
    matches: s => true
  }
];

// ── Results content ──────────────────────────────────────────────
export const PLAYBOOK = [
  { id:'hold-ground', theme:'Hold your ground on evidence',
    triggers:['push back','pushback','convince','hold my ground','hold her ground','technical preference','technical preferences','hesitate','hesitant','won\'t budge','overrule','stand my ground','lead with research'],
    diagnosis:'Working closely with a technical or delivery team is a real strength — you understand constraints deeply. The risk is letting technical preference override design when they genuinely conflict. Leading with research, and holding your ground when the evidence supports a different call, is exactly the Mid → Senior shift.',
    moves:['Separate constraint from preference — ask "is this technically impossible, or just not preferred?" Only the first should overrule the design.','Turn disagreement into a trade-off, not an opinion clash: "Research shows users need X — what\'s the technical cost of supporting it?"','Practise on one low-risk decision: write your evidence-based rationale before the meeting, and hold it.'],
    skills:'Stakeholder Management · User Research · Storytelling', resource:'Influencing Without Authority',
    plan:'On the next design–tech conflict, bring a written, research-backed recommendation framed as a trade-off. Success: you held a research-based call at least once.' },
  { id:'user-access', theme:'When you can\'t reach real users',
    triggers:['find user','reach user','user access','access to user','recruit','overseas','can\'t interview','hard to interview','through the po','product owner','no users','talk to users'],
    diagnosis:'Direct user access is often gated — overseas clients, or a PO who controls contact. That\'s real, but it\'s not a dead end. Proxy sources get you most of the way and are a completely valid place to start.',
    moves:['Interview internal stakeholders (PO, support, sales, CS) — they carry a lot of proxy knowledge about user pain points.','Mine evidence that already exists: support tickets, reviews, analytics, and past research.','Ask the PO for recordings or notes from their user contact, even when you can\'t attend live.'],
    skills:'User Research · Service Design · Customer Understanding', resource:'Interviewing Users Effectively',
    plan:'Run 2 proxy interviews this cycle and synthesise 3 grounded insights. Success: insights based on evidence, not assumption.' },
  { id:'system-fit', theme:'Fit the system, raise the finish',
    triggers:['design system','guideline','guidelines','consistency','consistent','inconsistent','polish','doesn\'t fit','not fit','finish','pattern','tokens'],
    diagnosis:'Strong ideas sometimes drift from the design system or project constraints, which costs trust and rework. Consistency and finish are how senior work signals reliability.',
    moves:['Before sharing, self-audit against the design system — components, tokens, spacing, patterns. A 10-minute checklist catches most drift.','When you deviate on purpose, say why: "I\'m breaking the pattern here because…". Unintentional inconsistency reads as careless; intentional deviation reads as judgement.','Pair with a design-system owner early on ambiguous components.'],
    skills:'Visual Design · System Design · Interaction Design', resource:'Refactoring UI — Visual Design Patterns',
    plan:'Ship one proposal that passes a design-system self-audit with zero unflagged inconsistencies.' },
  { id:'drive', theme:'Drive, don\'t just react',
    triggers:['reactive','wait to be told','take initiative','take more initiative','proactive','proactiv','drive discussion','driving','arrange meeting','unprompted','initiative','coordination'],
    diagnosis:'Waiting for direction is a Mid-level habit; Seniors create the direction — they convene people, surface issues early, and bring suggestions before being asked.',
    moves:['Convene, don\'t wait: when something\'s unclear, you schedule the 20-minute alignment — don\'t wait for the PM.','Come to discussions with a point of view and one recommendation, not just questions.','Flag risks early — "I think we\'ll hit X" — rather than reacting once it happens.'],
    skills:'Stakeholder Management · Storytelling · Shared Responsibility', resource:'Presenting Design Work to Stakeholders',
    plan:'This cycle, initiate at least 2 cross-functional conversations and bring a recommendation to each.' },
  { id:'prototyping', theme:'Prototyping & ambiguous briefs',
    triggers:['prototyp','interactive flow','navigation demo','conceptual','open-ended','open ended','ambiguous','ambiguity','high-fidelity','hi-fi','not sure how to approach'],
    diagnosis:'Two related growth edges — making ideas tangible with interactive prototypes, and handling briefs that are conceptual rather than spec\'d. Both are how you move from executing a brief to defining the work.',
    moves:['Build one clickable prototype for a real flow (not just screens) — even low-fidelity — and test it.','For ambiguous briefs, start by framing: write the problem, the assumptions, and 2–3 directions before designing. Structure handles ambiguity, not more pixels.','Use AI to generate divergent concept directions fast, then curate the strongest.'],
    skills:'Prototyping · Interaction Design · Define Success', resource:'Figma Prototyping — Official Learning',
    plan:'Deliver one interactive prototype and one framing doc for an open-ended brief.' },
  { id:'process', theme:'Cross-functional process habits',
    triggers:['jira','ticket','handoff','hand-off','link design','collaborate earlier','front-end','frontend','accessibility','a11y','test app','process','engineer'],
    diagnosis:'Craft is only as good as it ships. Consistent process habits — traceable handoff, early engineering collaboration, and testing behaviour and accessibility — are what make design reliable at senior level.',
    moves:['Link every updated design to its Jira ticket so the work is traceable.','Loop front-end engineers in at design time, not at handoff, to catch UI issues early.','Add a self-check pass: test real app behaviour and run a quick accessibility check (contrast, keyboard, labels) before calling it done.'],
    skills:'Frontend Development · Interaction Design · Iterate Towards Success', resource:'MDN Web Docs — HTML & CSS for Designers',
    plan:'For the next feature, engineers are looped in before handoff and the design passes a basic accessibility check.' },
  { id:'ai', theme:'Build AI into your practice',
    triggers:['ai tool','ai in design','use ai','using ai','ai workflow','ai feature','chatgpt','copilot','llm','artificial intelligence','new to ai','haven\'t used ai','limited ai'],
    diagnosis:'AI fluency is fast becoming a baseline senior expectation. Low exposure is a monitorable risk — but an easy one to close, because the leverage is high.',
    moves:['Pick one repeatable task (research synthesis, first-draft copy, concept divergence) and do it with AI this week.','Build a small personal workflow and notice where AI helped versus needed rework.','Share one AI-assisted result with your team to normalise it.'],
    skills:'AI-Assisted Workflow · Designing for AI Features · Learning Agility', resource:'AI Tools for Designers — Getting Started',
    plan:'Adopt AI into one weekly task and share one result with the team.' }
];

export const ARCHETYPES = [
  { id:'craftsperson', name:'The Craftsperson', emoji:'🎨',
    color:'#8A6D00', bg:'#FFFDE8', border:'#F5D028',
    superpower:'Beautiful, considered execution that makes complex things feel simple.',
    blindspot:'Can over-polish before validating the right problem.' },
  { id:'researcher', name:'The Researcher', emoji:'🔍',
    color:'#1D4ED8', bg:'#DBEAFE', border:'#93C5FD',
    superpower:'Deep user understanding that keeps the team grounded in real needs.',
    blindspot:'Work can lack the craft finish to land strongly with stakeholders.' },
  { id:'strategist', name:'The Strategist', emoji:'♟️',
    color:'#166534', bg:'#DCFCE7', border:'#86EFAC',
    superpower:'Sees the big picture — connects features to outcomes to strategy.',
    blindspot:'Can get stuck in concepts without shipping tangible work.' },
  { id:'communicator', name:'The Communicator', emoji:'💬',
    color:'#C2185B', bg:'#FCE4EC', border:'#F48FB1',
    superpower:'Turns complex work into clear, compelling narratives that earn trust.',
    blindspot:'May underestimate the need to level up core execution and craft skills.' },
  { id:'influencer', name:'The Influencer', emoji:'🎤',
    color:'#0E7490', bg:'#ECFEFF', border:'#67E8F9',
    superpower:'Leads through story and relationships — gets alignment where others hit friction.',
    blindspot:'Can rely too much on communication and under-deliver on execution depth.' },
  { id:'allrounder', name:'The All-Rounder', emoji:'⚡',
    color:'#6B3FEE', bg:'#EAE0FF', border:'#C4B5FD',
    superpower:'Adaptable across any team, brief, or product challenge.',
    blindspot:'Not yet deep enough in any area to be the go-to person.' }
];

export const RATIONALES = {
    'user-research':           'Strong research foundation is the single biggest multiplier for design decisions at any level.',
    'information-architecture':'IA shapes every navigation decision. Weak IA often can\'t be fixed by visual design alone.',
    'interaction-design':      'Interaction craft separates designers who deliver screens from designers who deliver experiences.',
    'visual-design':           'Visual polish signals professionalism and is often the first thing stakeholders respond to.',
    'writing':                 'Microcopy and content strategy are increasingly core designer responsibilities, not handoffs.',
    'service-design':          'Connecting user journeys across touchpoints is essential for senior and lead-level work.',
    'prototyping':             'The ability to make ideas tangible fast accelerates every phase of product development.',
    'frontend-development':    'Designers who can speak in code build significantly stronger relationships with engineering teams.',
    'system-design':           'Design systems thinking is a force multiplier — one decision scales to hundreds of components.',
    'ai-workflow':             'AI fluency is fast becoming a baseline expectation. Designers who use AI well ship more and learn faster.',
    'ai-features':             'Most products now include AI-powered functionality. Knowing how to design for it is a distinct, in-demand skill.',
    'stakeholder-management':  'Your ability to manage stakeholders often determines whether great design actually ships — or gets deprioritised.',
    'storytelling':            'The ability to frame your work as a narrative is what gets design a seat at the table in high-stakes decisions.'
  }
export const DEFAULT_RATIONALE = 'Closing this gap will directly support your growth toward your target level.'

export const BEHAVIOUR_ACTIONS = {
    'customer-understanding': 'Talk to one user about a problem you\'re currently designing for',
    'delivering-outcomes':    'Track the metric your next design decision is meant to move',
    'iteration':              'Set a rule: test with a real user before any design goes hi-fi',
    'shared-responsibility':  'Schedule a working session with your PM or engineer before the next kickoff',
    'transparency':           'Write a 5-sentence decision log the next time you make a major design call',
    'learning-agility':       'Spend 30 minutes a week exploring one new tool or method — then share what you found with someone',
    'custom-focus':           'Ask your manager what \'great\' looks like for your current role'
  };
export const SHORT_LABELS = {
    'user-research':            'User Research',
    'information-architecture': 'Info Arch',
    'interaction-design':       'Interaction',
    'visual-design':            'Visual Design',
    'writing':                  'Writing',
    'service-design':           'Service Design',
    'prototyping':              'Prototyping',
    'frontend-development':     'Frontend Dev',
    'system-design':            'Systems',
    'ai-workflow':              'AI Workflow',
    'ai-features':              'AI Features',
    'stakeholder-management':   'Stakeholders',
    'storytelling':             'Storytelling'
  };

export const CALIBRATION_CONTENT = {
  under: { dot: '#F59E0B', msg: 'You may be underselling yourself based on your experience. Revisit a few ratings with a peer.' },
  over: { dot: '#EF4444', msg: 'Some ratings may be aspirational. Expert means consistently leading others — check with a manager.' },
  calibrated: { dot: '#22C55E', msg: 'Your self-ratings look well-calibrated for your years of experience.' },
}

export const BALANCE_MESSAGES = {
  'high-skills': 'Your craft is ahead of how you operate. Focus on visibility and influence.',
  'high-behaviours': 'Your professional maturity is strong. Time to close the craft gaps.',
  'both-low': 'Focus on fundamentals. Behaviour maturity follows real project experience.',
  'both-high': 'Strong across both. You may be closer to levelling up than you think.',
  balanced: 'Good balance between craft and working style. Keep building both steadily.',
}
