import { useState } from 'react'
import { profile, projects, skillAreas, studioFocus, type Project } from './data/site'

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Studio', 'studio'], ['Contact', 'contact'],
] as const

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <div className="container header-inner">
      <a className="brand" href="#home" aria-label="CasperCode Studio, back to home" onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
        <span>CasperCode<span className="brand-muted"> Studio</span></span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        <span /> <span /> <span />
      </button>
      <nav className={open ? 'nav open' : 'nav'} id="primary-nav" aria-label="Primary navigation">
        {nav.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <Arrow diagonal /></a>
      </nav>
    </div>
  </header>
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span><span className="label-line" />{children}</p>
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Illustration of an application dashboard and code workspace" role="img">
    <div className="visual-orbit visual-orbit-one" /><div className="visual-orbit visual-orbit-two" />
    <div className="visual-card code-card">
      <div className="window-bar"><span /><span /><span /><em>caspercode / build</em></div>
      <div className="code-lines" aria-hidden="true">
        <p><i>01</i><span className="code-purple">const</span> idea = <span className="code-green">'useful'</span>;</p>
        <p><i>02</i><span className="code-purple">function</span> <span className="code-blue">build</span>() {'{'}</p>
        <p><i>03</i>&nbsp; <span className="code-purple">return</span> {'<'}<span className="code-green">impact</span> /{'>'};</p>
        <p><i>04</i>{'}'}</p>
      </div>
      <div className="code-footer"><span className="status-dot" /> systems in progress <span>TSX</span></div>
    </div>
    <div className="visual-card metric-card"><span className="metric-icon">◇</span><span><small>Approach</small><strong>Think. Build. Refine.</strong></span><Arrow diagonal /></div>
    <div className="visual-cross visual-cross-one">+</div><div className="visual-cross visual-cross-two">+</div>
  </div>
}

function Hero() {
  return <section id="home" className="hero section-grid">
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Full-stack developer & data science student</p>
        <h1>Hi, I’m <span>Takudzwa<br />Mhlanga.</span></h1>
        <p className="hero-signature">You can call me <strong>Casper Hlangester.</strong></p>
        <p className="hero-lede">I build practical web applications, dashboards and data-driven systems, combining full-stack development with a Data Science and Informatics background.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <Arrow diagonal /></a><a className="button button-outline" href="#contact">Contact me <Arrow /></a></div>
        <div className="hero-scroll"><span className="scroll-line" /> Scroll to explore</div>
      </div>
      <HeroVisual />
    </div>
    <div className="hero-bottom container"><span>BUILDING WITH PURPOSE</span><span>CODE / DESIGN / DATA <span aria-hidden="true">↗</span></span></div>
  </section>
}

function About() {
  const portrait = profile.portraitUrl ? `${import.meta.env.BASE_URL}${profile.portraitUrl.replace(/^\//, '')}` : ''
  return <section id="about" className="section about-section"><div className="container about-grid">
    <div className="about-portrait">
      {portrait ? <img src={portrait} alt="Portrait of Takudzwa Mhlanga" /> : <div className="initials" aria-label="Takudzwa Mhlanga initials">TM<span className="initials-star">✳</span></div>}
      <span className="portrait-caption">THE PERSON BEHIND THE CODE <span>01 / 05</span></span>
    </div>
    <div className="about-copy"><SectionLabel number="01">ABOUT ME</SectionLabel><h2>Curiosity meets <em>craft.</em></h2>
      <p className="lead">I’m Takudzwa, a developer interested in turning complex ideas into useful digital systems.</p>
      <p>I’m studying Data Science and Informatics, which shapes how I think about both the interface people use and the information behind it. I’m drawn to practical problems where thoughtful design, clear logic and data can work together.</p>
      <p>Casper Hlangester is the name I create under. It’s a reminder to stay curious, keep learning and build with intention.</p>
      <a className="text-link" href="#studio">Meet CasperCode Studio <Arrow diagonal /></a>
    </div>
  </div></section>
}

function ProjectVisual({ variant }: { variant: Project['visual'] }) {
  return <div className={`project-visual ${variant}`} aria-hidden="true">
    {variant === 'finance' && <div className="mock-window"><div className="mock-top"><span>RISK / OVERVIEW</span><span>● ● ●</span></div><div className="finance-body"><div className="ring"><span>?</span></div><div className="finance-bars"><span /><span /><span /><span /></div></div><div className="mock-bottom"><span>Data → Insight</span><span>01</span></div></div>}
    {variant === 'construction' && <div className="mock-window"><div className="mock-top"><span>PROJECT / STATUS</span><span>⌁</span></div><div className="construction-body"><div className="construction-side"><span /><span /><span /></div><div className="construction-main"><div className="construction-chart"><span /><span /><span /><span /><span /></div><div className="construction-rows"><span /><span /></div></div></div><div className="mock-bottom"><span>Plan → Progress</span><span>02</span></div></div>}
    {variant === 'portfolio' && <div className="mock-window"><div className="mock-top"><span>CASPERCODE / STUDIO</span><span>↗</span></div><div className="portfolio-body"><span className="portfolio-bracket">&lt;</span><div><small>DESIGN + DEVELOPMENT</small><strong>Built for<br />what’s next.</strong></div><span className="portfolio-bracket">/&gt;</span></div><div className="mock-bottom"><span>Idea → Experience</span><span>03</span></div></div>}
  </div>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <ProjectVisual variant={project.visual} />
    <div className="project-content"><div className="project-meta"><span>{project.number} / {project.eyebrow}</span><span className="status">{project.status}</span></div>
      <h3>{project.title}</h3><p>{project.summary}</p>
      <details className="case-study"><summary>Explore case study <span className="expand-symbol" aria-hidden="true">+</span></summary>
        <div className="case-study-content"><div><h4>Problem</h4><p>{project.problem}</p></div><div><h4>{project.status === 'Built' ? 'Solution' : 'Proposed solution'}</h4><p>{project.solution}</p></div><div><h4>My role</h4><p>{project.role}</p></div><div><h4>{project.status === 'Built' ? 'Technology' : 'Planned technology'}</h4><ul>{project.technologies.map(item => <li key={item}>{item}</li>)}</ul></div><div><h4>Key features</h4><ul>{project.features.map(item => <li key={item}>{item}</li>)}</ul></div>
        {(project.demoUrl || project.sourceUrl) && <div className="project-links">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <Arrow diagonal /></a>}{project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source code <Arrow diagonal /></a>}</div>}</div>
      </details>
    </div>
  </article>
}

function Projects() {
  return <section id="projects" className="section projects-section"><div className="container"><div className="section-heading"><div><SectionLabel number="02">SELECTED PROJECTS</SectionLabel><h2>Ideas in <em>motion.</em></h2></div><p>Projects and concepts at different stages, from early system thinking to a live portfolio. Each is labelled with its current status.</p></div><div className="projects-grid">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></div></section>
}

function Skills() {
  return <section id="skills" className="section skills-section"><div className="container skills-grid"><div><SectionLabel number="03">SKILLS & INTERESTS</SectionLabel><h2>Always learning.<br /><em>Always building.</em></h2><p>These are areas of interest and technologies connected to the work I want to explore. I’ll update this list with confirmed hands-on skills as my portfolio grows.</p></div><div className="skill-list">{skillAreas.map((group, index) => <div className="skill-row" key={group.category}><span className="skill-number">0{index + 1}</span><div><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div><Arrow diagonal /></div>)}</div></div></section>
}

function Studio() {
  return <section id="studio" className="section studio-section"><div className="container"><SectionLabel number="04">CASPERCODE STUDIO</SectionLabel><div className="studio-top"><h2>A studio for <em>useful ideas.</em></h2><p>CasperCode Studio is my founder-led development studio. Its mission is to build useful, well-designed digital tools for individuals and organizations.</p></div><div className="studio-panels"><div className="studio-focus"><p className="panel-kicker">AREAS OF FOCUS / INTENDED OFFERINGS</p><ul>{studioFocus.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}<Arrow diagonal /></li>)}</ul></div><div className="studio-process"><p className="panel-kicker">HOW I APPROACH A BUILD</p><div className="process-steps">{['Discover', 'Design', 'Build', 'Refine'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 3 && <span className="process-arrow" aria-hidden="true">↘</span>}</div>)}</div><p className="process-note">A simple path from the first question to a clearer, more useful result.</p></div></div></div></section>
}

function Contact() {
  const hasEmail = Boolean(profile.email.trim())
  return <section id="contact" className="section contact-section"><div className="container contact-inner"><SectionLabel number="05">CONTACT</SectionLabel><div className="contact-grid"><div><h2>Have something<br /><em>in mind?</em></h2><p>Whether it’s a role, a collaboration or an idea worth exploring, I’d be glad to hear about it.</p></div><div className="contact-action">{hasEmail ? <a className="button button-primary email-button" href={`mailto:${profile.email}`}>Email me <Arrow diagonal /></a> : <div className="contact-placeholder"><span className="placeholder-icon">@</span><strong>Email coming soon</strong><p>Contact details will appear here once added to the site configuration.</p></div>}
        {(profile.githubUrl || profile.linkedinUrl) && <div className="socials">{profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>}{profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>}</div>}
      </div></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>{profile.studio}</span></a><p>{profile.name} · {profile.signature}</p></div><div className="footer-right"><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} {profile.name}</span></div></div></footer>
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Projects /><Skills /><Studio /><Contact /></main><Footer /></>
}
