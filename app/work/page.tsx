import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in AI implementation, workflow automation, and systems integration by Divine Jude.',
}

const projects = [
  {
    number: '01',
    title: 'Mahoney Environmental',
    type: 'Field operations · Logistics automation',
    description: 'A connected routing system that digitized 2,000+ restaurant sites, automated 17 daily routes, and removed a three-week rebate backlog for Mahoney Environmental.',
    tags: ['GoHighLevel', 'n8n', 'Webhooks'],
    className: 'project-mahoney',
    href: '/case-study/mahoney-environmental',
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
  {
    number: '04',
    title: 'TransPerfect',
    type: 'Localization operations · Trello workflow automation',
    description: 'A centralized Trello system coordinating 100+ multilingual projects across global timezones, strict budgets, and enterprise delivery timelines.',
    tags: ['Trello', 'Workflow automation', 'Localization'],
    className: 'project-transperfect',
    href: '/case-study/transperfect',
  },
  {
    number: '05',
    title: 'Invoice Automation',
    type: 'Accounts payable · Document processing',
    description: 'An event-driven n8n pipeline that cut invoice cycle times from 40 minutes to under 10 minutes with a 70% straight-through processing rate.',
    tags: ['n8n', 'Vision OCR', 'LLM extraction'],
    className: 'project-sand',
    href: '/case-study/invoice-automation',
  },
]

export default function WorkPage() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="/">Divine Jude<span className="dot">.</span></a>
        <a className="back-link" href="/"><ArrowLeft size={15} /> Home</a>
      </nav>

      <section className="work-section section-shell work-page">
        <header className="work-page-header">
          <div className="eyebrow">Portfolio</div>
        </header>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.className}`}>
                <span className="project-number">{project.number}</span>
                <div className="visual-art" aria-hidden="true">
                  {project.className === 'project-lime' && <><div className="object object-one" /><div className="object object-two" /><div className="object object-three" /></>}
                  {project.className === 'project-sand' && (
                    <img className="invoice-cover-image" src="/invoice-automation-cover.png" alt="Abstract invoice document and automation workflow cover art" />
                  )}
                  {project.className === 'project-transperfect' && (
                    <div className="transperfect-logo" role="img" aria-label="TransPerfect">TRANSPERFECT</div>
                  )}
                </div>
                <a className="view-project" href={project.href} aria-label={`View ${project.title} case study`}>View case study <ArrowUpRight size={16} /></a>
              </div>
              <div className="project-copy"><div><h2>{project.title}</h2><p>{project.type}</p></div><div className="project-detail"><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-cta section-shell" aria-labelledby="work-cta-title">
        <p className="eyebrow">Have a complex workflow?</p>
        <div className="work-cta-content">
          <h2 id="work-cta-title">Let&apos;s build a system that works better.</h2>
          <a className="text-link" href="/contact">Get in touch <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
