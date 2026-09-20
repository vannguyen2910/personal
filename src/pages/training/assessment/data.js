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
