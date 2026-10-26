/** Edit personal details, project descriptions, and skills here. Empty URLs are hidden. */
export const profile = {
  name: 'Takudzwa Mhlanga',
  signature: 'Casper Hlangester',
  studio: 'CasperCode Studio',
  email: 'mhlangatakudzwa236@gmail.com',
  whatsappNumber: '263777225094',
  callNumber: '+263773543589',
  githubUrl: 'https://github.com/TakudzwaMhlanga',
  linkedinUrl: 'https://www.linkedin.com/in/takudzwa-mhlanga-6a33b7349/',
  portraitUrl: '/images/takudzwa-portrait.jpg',
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
  imageUrl?: string
  imageAlt?: string
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
    id: 'kci-microfinance',
    number: '02',
    title: 'KCI Microfinance Loan Management System',
    eyebrow: 'Finance / operations',
    status: 'Built',
    summary: 'A Ngezi branch dashboard for tracking loans, repayments, expenses and monthly financial totals.',
    problem: 'Branch staff need a single place to register clients, enter loans and repayments, and see current financial figures.',
    solution: 'Built a loan management dashboard with branch and date controls, summary cards, client registration and repayment entry.',
    role: 'System design and web application development.',
    technologies: ['PHP', 'Web application'],
    features: ['Business and salaried loan summaries', 'Client and loan registration', 'Repayment and expense entry'],
    imageUrl: '/images/kci-dashboard.png',
    imageAlt: 'KCI Micro-Finance Ngezi branch dashboard with loan totals and entry forms',
    visual: 'finance',
  },
  {
    id: 'warupinduka',
    number: '03',
    title: 'Warupinduka Construction Dashboard',
    eyebrow: 'Operations / dashboard',
    status: 'Built',
    summary: 'A web workspace for construction projects, finances, clients and team operations.',
    problem: 'Construction information spread across separate tools can make it harder to see project progress and operational details together.',
    solution: 'Built a central workspace with project summaries and navigation for finance, clients, reports, procurement and workforce.',
    role: 'System design and web application development.',
    technologies: ['Web application'],
    features: ['Project progress overview', 'Finance and client views', 'Procurement and workforce areas'],
    imageUrl: '/images/warupinduka-dashboard.png',
    imageAlt: 'Warupinduka Construction workspace overview with project status cards',
    visual: 'construction',
  },
  {
    id: 'portfolio',
    number: '04',
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

export type Certification = {
  title: string
  issuer: string
  issued: string
  url: string
  imageUrl?: string
}

export const certifications: Certification[] = [
  {
    title: 'Data Analysis with Python',
    issuer: 'freeCodeCamp',
    issued: '17 February 2025',
    url: 'https://www.freecodecamp.org/certification/takudzwa-mhlanga/data-analysis-with-python-v7',
    imageUrl: '/images/data-analysis-certificate.png',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    issued: '17 March 2025',
    url: 'https://www.freecodecamp.org/certification/takudzwa-mhlanga/machine-learning-with-python-v7',
    imageUrl: '/images/machine-learning-certificate.png',
  },
]

export const studioFocus = [
  'Websites and web applications',
  'Business dashboards',
  'Database-backed systems',
  'APIs and integrations',
  'Data-driven tools',
]
