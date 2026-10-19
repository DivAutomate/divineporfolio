import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'About Divine Jude',
  description: 'Learn about Divine Jude, an AI implementation and workflow automation specialist.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <SiteNav />
      <header className="about-hero section-shell">
        <a className="text-link about-home-link" href="/" aria-label="Home"><ArrowLeft size={16} /> Home</a>
        <p className="eyebrow">About me</p>
      </header>

      <section className="about-profile section-shell" aria-labelledby="about-profile-title">
        <div className="about-portrait-wrap"><img className="about-portrait" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.png-ZaiJAmZoQKIeTmHjbQRoPCXLmApWkT.jpeg" alt="Divine Jude smiling in a black shirt" /></div>
        <div className="about-profile-copy">
          <p>I&apos;m Divine, an AI Implementation and Workflow Automation Specialist helping teams replace manual processes with reliable, connected systems.</p>
          <p>My work covers workflow design, AI agents and document processing, CRM and ERP integrations, and the monitoring that keeps every handoff running smoothly.</p>
        </div>
      </section>

      <section className="about-services section-shell" aria-labelledby="about-services-title">
        <p className="eyebrow" id="about-services-title">What I do</p>
        <div className="services"><div><span>01</span><strong>Workflow automation</strong><p>n8n, Zapier, webhooks, retries, and error monitoring that protect handoffs.</p></div><div><span>02</span><strong>AI implementation</strong><p>AI agents, OCR document processing, and human-in-the-loop review.</p></div><div><span>03</span><strong>Systems integration</strong><p>CRMs, ERPs, REST APIs, and data sync between the tools your team already uses.</p></div></div>
      </section>

      <section className="about-experience section-shell" aria-labelledby="about-experience-title">
        <p className="eyebrow" id="about-experience-title">Experience</p>
        <div className="about-list"><div><span>2023 — Present</span><strong>AI Implementation &amp; Workflow Automation</strong><p>Designing practical systems that connect people, processes, and the tools behind them.</p></div><div><span>Enterprise operations</span><strong>Localization, document, and delivery systems</strong><p>Coordinating complex work across teams, vendors, time zones, and strict deadlines.</p></div></div>
      </section>

      <section className="about-tools section-shell" aria-labelledby="about-tools-title">
        <p className="eyebrow" id="about-tools-title">Tools</p>
        <div className="tool-list" aria-label="Tools and platforms">
          <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/n8n/default.svg" alt="n8n" />
          <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/trello/default.svg" alt="Trello" />
          <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/zapier/default.svg" alt="Zapier" />
          <img src="https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/langchain/default.svg" alt="LangChain" />
        </div>
      </section>

      <section className="about-cta section-shell" aria-label="Next steps">
        <p className="about-cta-copy">Have a workflow to improve or a system to connect? Let&apos;s talk about what you&apos;re building.</p>
        <div className="about-cta-links">
          <a className="about-cta-link" href="/contact">Contact me <span aria-hidden="true">↗</span></a>
          <a className="about-cta-link" href="/work">View portfolio <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
