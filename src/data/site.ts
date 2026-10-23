/** Edit personal details, project descriptions, and skills here. Empty URLs are hidden. */
export const profile = {
  name: 'Takudzwa Mhlanga',
  signature: 'Casper Hlangester',
  studio: 'CasperCode Studio',
  // Replace these empty strings with real details before publishing contact links.
  email: '',
  githubUrl: 'https://github.com/TakudzwaMhlanga',
  linkedinUrl: '',
  portraitUrl: '', // Add an optimized image to public/ and enter e.g. '/portrait.webp'.
}

export type Project = {
  id: string
  number: string
  title: string
  eyebrow: string
  status: string
  summary: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  features: string[]
  demoUrl?: string
  sourceUrl?: string
  visual: 'finance' | 'construction' | 'portfolio'
}

export const projects: Project[] = [
  {
    id: 'microfinance',
    number: '01',
    title: 'AI-Based Microfinance Loan Eligibility and Risk Prediction System',
    eyebrow: 'Decision support / data',
    status: 'Concept',
    summary: 'An explainable decision-support concept for assessing loan eligibility and risk with public data.',
    problem: 'Loan assessment can be difficult to explain and compare consistently. A useful tool should surface the factors behind a recommendation and leave the decision with a person.',
    solution: 'Explore a web interface that presents model-assisted risk indicators, clear explanations and reviewable applicant information using appropriate public data.',
    role: 'Concept, product planning and proposed full-stack implementation.',
    technologies: ['Python and predictive modelling (planned)', 'React and TypeScript (planned)', 'Public datasets (planned)'],
    features: ['Explainable model output', 'Eligibility and risk overview', 'Human review workflow'],
    visual: 'finance',
  },
  {
    id: 'warupinduka',
    number: '02',
    title: 'Warupinduka Construction Dashboard',
    eyebrow: 'Operations / dashboard',
    status: 'Proposed',
    summary: 'A proposed web-based workspace for construction administration, finances, clients and project monitoring.',
    problem: 'Construction information spread across separate tools can make it harder to see project progress and operational details together.',
    solution: 'Design a central dashboard with distinct views for administration, finance, client records and project status.',
    role: 'System concept, interface planning and proposed implementation.',
    technologies: ['Web application stack (to be chosen)', 'Database (to be chosen)'],
    features: ['Project progress overview', 'Finance and client views', 'Administrative workspace'],
    visual: 'construction',
  },
  {
    id: 'portfolio',
    number: '03',
    title: 'CasperCode Studio Portfolio',
    eyebrow: 'Web experience / identity',
    status: 'Built',
    summary: 'The responsive portfolio you are viewing, built to present my work, ideas and studio clearly.',
    problem: 'My development work and studio need a clear, accessible home that is simple to maintain and share.',
    solution: 'Build a fast, static single-page experience with editable project data, accessible interactions and GitHub Pages deployment.',
    role: 'Design direction, content structure and front-end development.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Pages'],
    features: ['Responsive layout', 'Expandable case studies', 'Keyboard-friendly navigation'],
    sourceUrl: 'https://github.com/TakudzwaMhlanga/my-portfolio',
    visual: 'portfolio',
  },
]

// These are interests, not claims of proficiency. Move items into a confirmed-skills
// list only after Takudzwa reviews them.
export const skillAreas = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Responsive interfaces', 'Accessibility'] },
  { category: 'Backend', items: ['API design', 'Server-side application architecture'] },
  { category: 'Databases', items: ['Data modelling', 'Database-backed applications'] },
  { category: 'Data', items: ['Predictive modelling', 'Data visualization', 'Explainable systems'] },
  { category: 'Tools', items: ['Git & GitHub', 'Vite', 'Deployment workflows'] },
]

export const studioFocus = [
  'Websites and web applications',
  'Business dashboards',
  'Database-backed systems',
  'APIs and integrations',
  'Data-driven tools',
]
