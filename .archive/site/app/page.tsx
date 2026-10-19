import { ArrowUpRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'

const projects = [
  {
    number: '01',
    title: 'Mahoney Environmental',
    type: 'Field operations · Logistics automation',
    description: 'A connected routing system that digitized 2,000+ restaurant sites, automated 17 daily routes, and removed a three-week rebate backlog for Mahoney Environmental.',
    tags: ['GoHighLevel', 'n8n', 'Webhooks'],
    className: 'project-mahoney',
    href: '/case-study',
  },
  {
    number: '02',
    title: 'WindWire Studio',
    type: 'Data enrichment · AI research automation',
    description: 'An automated research pipeline combining multi-source data collection, AI enrichment, and workflow orchestration to identify high-fit business profiles.',
    tags: ['Apollo', 'Clay', 'Perplexity'],
    className: 'project-windwire',
    href: '/case-study/windwire',
  },
  {
    number: '03',
    title: 'AI Implementation',
    type: 'Document intelligence · Unstructured data ingestion',
    description: 'An event-driven orchestration pipeline linking vision OCR layers, multi-agent AI scoring systems, and asynchronous human-in-the-loop validation to enterprise CRMs and ERP systems.',
    tags: ['n8n', 'LangChain', 'REST APIs'],
    className: 'project-lime',
    href: '/case-study/ai-implementation',
  },
]

export default function Page() {
  return (
    <main>
      <SiteNav />

      <section className="hero" id="top">
        <div className="eyebrow">AI implementation · Workflow automation <span>Based in Port Harcourt · Working remotely worldwide</span></div>
        <h1>Build <span className="hero-highlight">resilient</span><br /><em>workflows.</em></h1>
        <div className="hero-bottom">
          <p>I design AI-powered workflows, automated data pipelines, and system integrations that remove manual work for operations teams and businesses.</p>
          <a className="circle-link" href="#work" aria-label="Explore portfolio"><ArrowUpRight size={22} /></a>
        </div>
        <div className="hero-stamp" aria-hidden="true">DJ<br /><span>AUTOMATION</span></div>
        <img className="profile-portrait" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.png-ZaiJAmZoQKIeTmHjbQRoPCXLmApWkT.jpeg" alt="Divine Jude smiling in a black shirt" width={150} height={150} fetchPriority="high" />
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading"><span>Selected delivery</span><span>Scroll to explore ↓</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.className}`}>
                <span className="project-number">{project.number}</span>
                <div className="visual-art" aria-hidden="true">
                  {project.className === 'project-lime' && <><div className="object object-one" /><div className="object object-two" /><div className="object object-three" /></>}
                </div>
                <a className="view-project" href={project.href} aria-label={`View ${project.title} case study`}>View case study <ArrowUpRight size={16} /></a>
              </div>
              <div className="project-copy"><div><h2>{project.title}</h2><p>{project.type}</p></div><div className="project-detail"><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
            </article>
          ))}
        </div>
        <div className="view-portfolios-wrap">
          <a className="view-portfolios" href="/work">View portfolios <ArrowUpRight size={16} /></a>
        </div>
  </section>
  
  <section className="about-section section-shell" id="about">
        <div className="section-heading"><span>About Me</span></div>
        <div className="about-grid">
          <div className="about-portrait-wrap"><img className="about-portrait" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.png-ZaiJAmZoQKIeTmHjbQRoPCXLmApWkT.jpeg" alt="Divine Jude" loading="lazy" decoding="async" /></div>
          <div className="about-copy"><p>I&apos;m Divine, an AI Implementation and Workflow Automation Specialist helping teams replace manual processes with reliable, connected systems.</p><p>My work covers workflow design, AI agents and document processing, CRM and ERP integrations, and the monitoring that keeps every handoff running smoothly.</p><a className="text-link" href="/contact">Start a conversation <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="services"><div><span>01</span><strong>Workflow automation</strong><p>n8n, Zapier, webhooks, retries, and error monitoring that protect handoffs.</p></div><div><span>02</span><strong>AI implementation</strong><p>LangChain agents, OCR document processing, and human-in-the-loop review.</p></div><div><span>03</span><strong>Systems integration</strong><p>CRMs, ERPs, REST APIs, and data sync between the tools your team already uses.</p></div></div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-main"><div className="contact-heading"><h2>Ready to automate<br />your <em>operations?</em></h2><a className="portfolio-button" href="#work">Portfolio <ArrowUpRight size={14} /></a></div><a className="contact-circle" href="mailto:judedivine9@gmail.com">Let&apos;s talk <ArrowUpRight size={20} /></a></div>
        <div className="contact-meta"><div><span>Location</span><p>Port Harcourt, Nigeria · Working remotely worldwide </p></div><div><span>Elsewhere</span><a href="https://linkedin.com/in/divinechidubem" target="_blank" rel="noreferrer">LinkedIn</a></div><div><span>Availability</span><p><i />Available for select automation projects</p></div></div>
      </section>

      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
