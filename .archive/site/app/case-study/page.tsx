import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automating Field Operations for a 90,000-Site Logistics Platform',
  description: 'Case study: Automating field operations for a 90,000-site logistics platform.',
}

export default function CaseStudyPage() {
  return (
    <main className="mahoney-case-study" id="top">
      <nav className="mahoney-nav" aria-label="Case study navigation">
        <Link href="/" className="mahoney-wordmark">Divine Jude<span>.</span></Link>
        <Link href="/" className="mahoney-back"><ArrowLeft size={15} /> Back home</Link>
      </nav>

      <header className="mahoney-editorial-hero">
        <p className="mahoney-meta">Case Study</p>
        <h1>Automating Field Operations for a 90,000-Site Logistics Platform</h1>
        <p className="mahoney-intro">In this case study, I pull back the curtain on how I designed and deployed a central digital routing system to take Mahoney Environmental&apos;s distribution management from manual paper tracking to a real-time digital infrastructure.</p>
        <p className="mahoney-intro">Keep reading to see exactly how I eliminated critical logistical bottlenecks, protected core operational data, and saved hours of manual coordination every single week.</p>
      </header>

      <section className="mahoney-quote">
        <blockquote>&ldquo;I was impressed with his ability to step into our field workflows and completely remove our scheduling bottlenecks. Building an automated system that handles complex dispatch logistics from scratch is an incredible feat. I would recommend his development expertise to any scaling logistics company that wants to eliminate manual overhead.&rdquo;</blockquote>
        <p>— Operations Manager, Mahoney Environmental</p>
      </section>

      <section className="mahoney-scale mahoney-content-section">
        <p className="mahoney-section-label">The Project Scale</p>
        <ul><li>2,000+ Restaurant sites served</li><li>17 Daily routes automated</li><li>3 Weeks → Faster Account reconciliation and rebate cycle</li><li>Paper → Digital Real-time route visibility</li></ul>
      </section>

      <section className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">The Challenge</p></div>
        <div><p>Mahoney Environmental recycles frying oil and services grease traps across thousands of commercial kitchens nationwide. Yet, behind the scenes, everyday coordination ran on paper logs, handwritten note cards, and the institutional knowledge of a few veteran dispatchers.</p><p>Planning seventeen daily routes relied on fragile paper index cards and manual weight records, creating a three-week backlog for quarterly rebate calculations. The system required modernization to scale operations safely.</p></div>
      </section>

      <section className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">The Solution</p></div>
        <div><p>I implemented a custom CRM routing solution tailored to daily operations. It digitizes driver schedules weekly, offers real-time frequency adjustments, and secures route data in an accessible interface with minimal training needed.</p></div>
      </section>

      <section className="mahoney-implementation mahoney-content-section">
        <p className="mahoney-section-label">The Technical Implementation (How It Was Done)</p>
        <ol>
          <li><h2>Migrating to GoHighLevel CRM</h2><p>Replaced paper notes by importing 2,000+ commercial kitchen profiles, addresses, and service cycles into GoHighLevel CRM for centralized visibility.</p></li>
          <li><h2>Engineering the n8n Scheduling Engine</h2><p>Configured n8n with automated weekly triggers to group client accounts into 17 optimized daily routes and generate driver sheets.</p></li>
          <li><h2>Deploying Live Webhooks for Field Logging</h2><p>Built mobile endpoints using REST APIs and webhooks so drivers can submit collection weights instantly, updating GoHighLevel in real time.</p></li>
          <li><h2>Compressing the 3-Week Rebate Bottleneck</h2><p>Created a data pipeline to cross-reference digital logs automatically against account rules, resolving the accounting backlog instantly.</p></li>
        </ol>
      </section>

      <section className="mahoney-results mahoney-content-section">
        <p className="mahoney-section-label">The Results</p>
        <p>The workflow is now a resilient foundation for the business, providing improved customer experiences, scalable routing, reduced risk, and ease of use.</p>
      </section>

      <section className="contact-section section-shell">
        <div className="contact-main"><div className="contact-heading"><h2>Ready to automate<br />your <em>operations?</em></h2><a className="portfolio-button" href="/#work">Back to portfolio <ArrowUpRight size={14} /></a></div><a className="contact-circle" href="mailto:judedivine9@gmail.com">Let&apos;s talk <ArrowUpRight size={20} /></a></div>
        <div className="contact-meta"><div><span>Location</span><p>Port Harcourt, Nigeria · Working remotely worldwide </p></div><div><span>Elsewhere</span><a href="https://linkedin.com/in/divinechidubem" target="_blank" rel="noreferrer">LinkedIn</a></div><div><span>Availability</span><p><i />Available for select automation projects</p></div></div>
      </section>

      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
