import { useState } from 'react'
import { certifications, education, experience, profile, projects, skillAreas, studioFocus, type Project } from './data/site'

const nav = [
  ['Home', 'home'], ['About', 'about'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Studio', 'studio'], ['Contact', 'contact'],
] as const

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

type IconName = 'mail' | 'phone' | 'message' | 'user' | 'github' | 'linkedin' | 'chart' | 'wallet' | 'building' | 'code'

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const }
  const paths: Record<IconName, React.ReactNode> = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M6.5 3.5 9 7l-1.5 2a16 16 0 0 0 7.5 7.5l2-1.5 3.5 2.5-1 3a3 3 0 0 1-3 1.5C9 21 3 15 2 7.5A3 3 0 0 1 3.5 4.5z" />,
    message: <><path d="M20 11.5a8 8 0 0 1-8 8 8.7 8.7 0 0 1-3.5-.7L4 20l1.2-4.4A8 8 0 1 1 20 11.5Z" /><path d="M9 10c.6 1.5 1.5 2.4 3 3l1.3-.7 1.7 1.2c-.5 1.3-1.5 1.7-2.5 1.5-2.8-.6-4.7-2.5-5.3-5.3-.2-1 .2-2 1.5-2.5L10 9z" /></>,
    user: <><circle cx="12" cy="8" r="3.3" /><path d="M5 20c.4-3.6 2.9-5.5 7-5.5s6.6 1.9 7 5.5" /></>,
    github: <><path d="M9 19c-4.7 1.5-4.7-2.5-6.5-3M15 22v-3.5a3 3 0 0 0-.8-2.3c3.4-.4 6.8-1.6 6.8-7.2a5.5 5.5 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7S17.9 1 15.5 3a13 13 0 0 0-7 0C6.1 1 4.6 1.5 4.6 1.5a5 5 0 0 0-.1 3.7A5.5 5.5 0 0 0 3 9c0 5.6 3.4 6.8 6.8 7.2A3 3 0 0 0 9 18.5V22" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7.5v.1M12 17v-7h3v1.2c.5-.9 1.3-1.3 2.3-1.3 1.6 0 2.2 1 2.2 2.7V17" /></>,
    chart: <><path d="M4 19h16M6 15l4-5 3 2 5-7" /><path d="M15 5h3v3" /></>,
    wallet: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 9h18M7 6V4h11M16 14h2" /></>,
    building: <><path d="M4 21V8l8-5 8 5v13M4 21h16M9 21v-6h6v6M8 10h1M12 10h1M16 10h1" /></>,
    code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  }
  return <svg {...common}>{paths[name]}</svg>
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

function HeroPortrait() {
  const portrait = `${import.meta.env.BASE_URL}${profile.portraitUrl.replace(/^\//, '')}`
  return <div className="hero-portrait-stage">
    <div className="hero-portrait-frame">
      <img src={portrait} alt="Takudzwa Mhlanga outdoors in a tan suit and sunglasses" fetchPriority="high" />
      <div className="hero-portrait-shade" />
      <p className="hero-portrait-name"><span>THE PERSON BEHIND THE CODE</span><strong>Takudzwa Mhlanga</strong></p>
    </div>
    <span className="hero-portrait-index" aria-hidden="true">01 / TM</span>
    <span className="hero-portrait-corner" aria-hidden="true">✳</span>
  </div>
}

function Hero() {
  return <section id="home" className="hero section-grid">
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Full-stack developer & NUST final-year student</p>
        <h1>Takudzwa<br /><span>Mhlanga.</span></h1>
        <p className="hero-signature">You can call me <strong>Casper Hlangester.</strong></p>
        <p className="hero-lede">I build practical web applications, dashboards and data-driven systems while completing a BSc in Informatics and Analytics at NUST.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <Arrow diagonal /></a><a className="button button-outline" href="#contact"><Icon name="mail" size={17} /> Contact me <Arrow /></a></div>
        <a className="hero-about-link" href="#about"><span className="hero-about-icon"><Icon name="user" size={17} /></span> Get to know me <Arrow diagonal /></a>
        <div className="hero-scroll"><span className="scroll-line" /> Scroll to explore</div>
      </div>
      <HeroPortrait />
    </div>
    <div className="hero-bottom container"><span>BUILDING WITH PURPOSE</span><span>CODE / DESIGN / DATA <span aria-hidden="true">↗</span></span></div>
  </section>
}

function About() {
  return <section id="about" className="section about-section"><div className="container">
    <div className="about-grid">
      <div className="about-note" aria-label="Takudzwa's approach"><span className="about-note-index">CASPER HLANGESTER / 01</span><strong>Build things<br />that <em>matter.</em></strong><span className="about-note-mark" aria-hidden="true">&lt;/&gt;</span><p>Practical thinking. Clear interfaces. Useful outcomes.</p></div>
      <div className="about-copy"><SectionLabel number="01">ABOUT ME</SectionLabel><h2>Curiosity meets <em>craft.</em></h2>
        <p className="lead">I’m Takudzwa, a developer interested in turning complex ideas into useful digital systems.</p>
        <p>I’m a final-year student at the National University of Science and Technology (NUST), studying Informatics and Analytics. I’m drawn to practical problems where thoughtful design, clear logic and data can work together.</p>
        <p>Casper Hlangester is the name I create under. It’s a reminder to stay curious, keep learning and build with intention.</p>
        <a className="text-link" href="#studio">Meet CasperCode Studio <Arrow diagonal /></a>
      </div>
    </div>
    <div className="background-highlights" aria-label="Education and experience">
      <article className="background-card"><div className="background-card-icon"><Icon name="code" size={25} /></div><div><span className="background-card-label">EDUCATION / 01</span><h3>{education.degree}</h3><p>{education.institution}</p><div className="background-card-meta"><span>{education.status}</span><span>{education.completion}</span></div></div></article>
      <article className="background-card"><div className="background-card-icon"><Icon name="building" size={25} /></div><div><span className="background-card-label">EXPERIENCE / 02</span><h3>{experience.organization}</h3><p>{experience.location}</p><div className="background-card-meta"><span>{experience.period}</span></div></div></article>
    </div>
  </div></section>
}

function ProjectVisual({ project }: { project: Project }) {
  const icon: IconName = project.id === 'microfinance' ? 'chart' : project.id === 'kci-microfinance' ? 'wallet' : project.id === 'warupinduka' ? 'building' : 'code'
  return <div className={`project-visual project-visual-${project.id}`} aria-hidden="true">
    <div className="project-visual-top"><span>CASPERCODE / SELECTED WORK</span><span>{project.number}</span></div>
    <div className="project-symbol"><Icon name={icon} size={68} /></div>
    <div className="project-visual-bottom"><span>{project.eyebrow}</span><span>↗</span></div>
  </div>
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <ProjectVisual project={project} />
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
  return <section id="skills" className="section skills-section"><div className="container"><div className="skills-grid"><div><SectionLabel number="03">SKILLS & INTERESTS</SectionLabel><h2>Always learning.<br /><em>Always building.</em></h2><p>My academic focus is Informatics and Analytics. These are areas of interest and technologies connected to the work I want to explore.</p></div><div className="skill-list">{skillAreas.map((group, index) => <div className="skill-row" key={group.category}><span className="skill-number">0{index + 1}</span><div><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div><Arrow diagonal /></div>)}</div></div><div className="certifications"><h3>Certifications</h3><div className="certification-list">{certifications.map(certificate => <a key={certificate.url} href={certificate.url} target="_blank" rel="noopener noreferrer">{certificate.imageUrl && <img src={`${import.meta.env.BASE_URL}${certificate.imageUrl.replace(/^\//, '')}`} alt={`${certificate.title} certificate awarded to Takudzwa Mhlanga`} loading="lazy" />}<span><small>{certificate.issuer} · {certificate.issued}</small><strong>{certificate.title}</strong></span><Arrow diagonal /></a>)}</div></div></div></section>
}

function Studio() {
  return <section id="studio" className="section studio-section"><div className="container"><SectionLabel number="04">CASPERCODE STUDIO</SectionLabel><div className="studio-top"><h2>A studio for <em>useful ideas.</em></h2><p>CasperCode Studio is my founder-led development studio. Its mission is to build useful, well-designed digital tools for individuals and organizations.</p></div><div className="studio-panels"><div className="studio-focus"><p className="panel-kicker">AREAS OF FOCUS / INTENDED OFFERINGS</p><ul>{studioFocus.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}<Arrow diagonal /></li>)}</ul></div><div className="studio-process"><p className="panel-kicker">HOW I APPROACH A BUILD</p><div className="process-steps">{['Discover', 'Design', 'Build', 'Refine'].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < 3 && <span className="process-arrow" aria-hidden="true">↘</span>}</div>)}</div><p className="process-note">A simple path from the first question to a clearer, more useful result.</p></div></div></div></section>
}

function Contact() {
  const hasEmail = Boolean(profile.email.trim())
  return <section id="contact" className="section contact-section"><div className="container contact-inner"><SectionLabel number="05">CONTACT</SectionLabel><div className="contact-grid"><div><h2>Have something<br /><em>in mind?</em></h2><p>Whether it’s a role, a collaboration or an idea worth exploring, I’d be glad to hear about it.</p></div><div className="contact-action">{hasEmail ? <a className="button button-primary email-button" href={`mailto:${profile.email}`}><Icon name="mail" size={18} /> Email me <Arrow diagonal /></a> : <div className="contact-placeholder"><span className="placeholder-icon">@</span><strong>Email coming soon</strong><p>Contact details will appear here once added to the site configuration.</p></div>}
        <div className="contact-links">
          {hasEmail && <a href={`mailto:${profile.email}`}><span className="contact-link-icon"><Icon name="mail" /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span><Arrow diagonal /></a>}
          {profile.whatsappNumber && <a href={`https://wa.me/${profile.whatsappNumber}`} target="_blank" rel="noopener noreferrer"><span className="contact-link-icon"><Icon name="message" /></span><span><small>WHATSAPP</small><strong>+{profile.whatsappNumber}</strong></span><Arrow diagonal /></a>}
          {profile.callNumber && <a href={`tel:${profile.callNumber}`}><span className="contact-link-icon"><Icon name="phone" /></span><span><small>CALL</small><strong>{profile.callNumber}</strong></span><Arrow diagonal /></a>}
        </div>
        {(profile.githubUrl || profile.linkedinUrl) && <div className="socials">{profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> GitHub <Arrow diagonal /></a>}{profile.linkedinUrl && <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={18} /> LinkedIn <Arrow diagonal /></a>}</div>}
      </div></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>{profile.studio}</span></a><p>{profile.name} · {profile.signature}</p></div><div className="footer-right"><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} {profile.name}</span></div></div></footer>
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Projects /><Skills /><Studio /><Contact /></main><Footer /></>
}
