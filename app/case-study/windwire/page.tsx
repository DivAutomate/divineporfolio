import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WindWire Studio Case Study',
  description: 'How Divine Jude built a predictable outbound pipeline for WindWire Studio through research, automation, and full-funnel growth operations.',
}

const metrics = [
  ['1125+', 'Prospects sourced'],
  ['540', 'Connected'],
  ['136', 'Qualified leads'],
  ['50.8%', 'Connection acceptance rate'],
  ['1.5/day', 'Qualified leads per day'],
]

export default function CaseStudyPage() {
  return (
    <main className="case-study-page windwire-case-study">
      <nav className="ai-case-nav" aria-label="Case study navigation">
        <a href="/work" className="ai-back"><ArrowLeft size={15} /> Back to portfolio</a>
        <a href="/" className="ai-back">Home <ArrowUpRight size={15} /></a>
            </nav>

      <header className="windwire-hero">
        <div className="windwire-brand-mark" aria-hidden="true">W</div>
        <p className="windwire-eyebrow">WindWire Studio · Outbound Growth &amp; Revenue Operations Case Study</p>
        <h1>How I Engineered <em>1,125+ Prospects</em> into a Predictable Outbound Pipeline </h1>
        <div className="windwire-hero-meta"><p><span>Client Partner</span>Stephen, CEO of WindWire Studio</p><p><span>Timeline</span>12-Week Full-Funnel Outbound &amp; Revenue Sprint</p></div>
        <p className="windwire-dek">WindWire Studio serves early-stage founders, high-growth startups, AI platforms, digital health product teams, specialized B2B agencies, and tech consultants seeking premium UI/UX, MVP development, and enterprise software scaling.</p>
      </header>

      <section className="windwire-testimonial section-shell">
        <p className="windwire-label">Client partner</p>
        <blockquote>&ldquo;Divine didn&apos;t just send more outreach. He gave us a reliable way to find the right companies, start relevant conversations, and turn our lead expectations into a real sales pipeline.&rdquo;</blockquote>
        <p className="windwire-attribution">— Stephen, CEO of WindWire Studio</p>
      </section>

      <section className="windwire-section section-shell" id="challenge">
        <div className="windwire-section-intro"><p className="windwire-label">Case study at a glance</p><h2>From referrals to a <em>predictable AI outbound pipeline.</em></h2></div>
        <div className="windwire-copy"><p><strong>Business context:</strong> WindWire Studio needed to transition from feast-or-famine referrals to a predictable, evergreen outbound revenue pipeline.</p><p><strong>Core challenge:</strong> Native LinkedIn Sales Navigator industry filters were more than 40% inaccurate, while manual founder research created bottlenecks that threatened sales velocity.</p><p><strong>WindWire Studio ICP &amp; specialization:</strong> Early-stage founders, high-growth startups, AI platforms, and digital health product teams needing premium UI/UX design and MVP development, alongside specialized B2B agencies and tech consultants seeking an elite referral partner for enterprise UI/UX and software scaling.</p><p><strong>Full-stack growth execution:</strong> Built secure DNS deliverability infrastructure with SPF, DKIM, and DMARC; cross-referenced Clutch, ZoomInfo, and Google Search intelligence; mastered LinkedIn Sales Navigator boolean workflows and Google X-Ray searches; deployed automated Apollo + Claude research workflows; and executed omni-channel campaigns across the full funnel.</p></div>
      </section>

      <section className="windwire-section windwire-challenge section-shell" id="challenge">
        <div className="windwire-section-intro"><p className="windwire-label">01. The challenge</p><h2>Eliminating pipeline bottlenecks and <em>targeting inaccuracies.</em></h2></div>
        <div className="windwire-copy"><p>WindWire Studio builds premium digital products, complex MVPs, and scalable software experiences for early-stage founders, AI disruptors, and digital health teams.</p><p>While their UI/UX frameworks and product expertise were strong, the pipeline depended too heavily on referrals. The priority was to build a reliable system that could consistently identify the right accounts, start relevant conversations, and create qualified opportunities.</p><p>The first constraint was data quality. Native industry filters were not accurate enough, so the campaign needed a richer research layer before any message was sent.</p></div>
      </section>

      <section className="windwire-section windwire-strategy section-shell" id="strategy">
        <div className="windwire-section-intro"><p className="windwire-label">02. The full-stack growth &amp; outbound strategy</p><h2>Infrastructure, targeting, and automation working as <em>one system.</em></h2></div>
        <div className="windwire-copy"><p>Over a 12-week sprint, I deployed a comprehensive growth operations framework spanning infrastructure, targeting, multi-channel marketing, and automated outbound execution.</p><h3>Phase A: Infrastructure &amp; deliverability architecture</h3><p>Configured cold and warm email infrastructure across secondary domains with strict DNS records—SPF, DKIM, and DMARC—to protect sender reputation and maximize inbox placement.</p><p>Targeted digital marketing and newsletter campaigns contributed directly to a <strong>239% year-over-year increase in organic leads.</strong></p><h3>Phase B: Advanced Sales Navigator &amp; Multi-Source Prospecting</h3><p>Used Clutch.com to isolate verified B2B agencies for repeat project referrals, ZoomInfo to build a targeted database of tech founders, and Google Search/X-Ray scrapes to find decision-makers using explicit terms such as “MVP development,” “product design,” and “UI/UX.” Manual account vetting isolated decision-makers across <strong>403 high-target business profiles</strong> matching WindWire&apos;s exact ICP (early-stage founders, high-growth startups, AI platforms, and digital health product teams).</p><h3>Phase C: Automated Apollo + Claude research workflow</h3><p>Programmatically scraped live web copy, recent technology updates, and podcast appearances, reducing manual lead-finding labor by <strong>60%</strong>. Every message followed a strict <strong>90% prospect context / 10% pitch</strong> rule in a friendly, professional, and confident tone.</p><p className="windwire-example"><strong>Example context hook:</strong> “Heard the interview you gave on the tech podcast about scaling distributed product teams. I appreciated your insights on choosing development sprints based on Total Value Delivered.”</p></div>
      </section>

      <section className="windwire-metrics section-shell" aria-label="Campaign results">
        <div className="windwire-section-heading"><p className="windwire-label">Campaign results</p><p>12 weeks · US, UK + emerging global markets</p></div>
        <div className="windwire-metric-grid">{metrics.map(([value, label]) => <div className="windwire-metric" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="windwire-breakdown section-shell" id="campaign-1"><p className="windwire-label">03. Campaign results &amp; performance</p><ul><li><strong>Campaign 1 · Strategic partnership &amp; agency referral outbound</strong> Targeted the top 1,000 consulting and tech development agencies, early-stage founders, and digital product studios across the U.S. and Canada.</li><li><span style={{color: '#d4fc79'}}><strong>1,125</strong></span> total prospects in the database; <span style={{color: '#d4fc79'}}>1,063</span> targeted connection requests sent.</li><li><span style={{color: '#d4fc79'}}><strong>540</strong></span> connections established at a <span style={{color: '#d4fc79'}}><strong>50.8% acceptance rate</strong></span>.</li><li><span style={{color: '#d4fc79'}}><strong>136</strong></span> qualified leads captured directly from the campaign inbox at a <span style={{color: '#d4fc79'}}><strong>24.0% lead rate</strong></span>.</li><li><span style={{color: '#d4fc79'}}><strong>1.5 qualified leads per day</strong></span> over 12 weeks, closing 3 major enterprise clients for Stephen and WindWire Studio.</li></ul></section>

      <section className="windwire-breakdown section-shell campaign-2-breakdown" id="campaign-2"><ul><li><strong>Campaign 2 · AI platforms &amp; high-growth digital health expansion</strong> Focused on seed-to-Series A founders and product leaders building AI platforms and digital health solutions ready for rapid MVP scaling.</li><li><span style={{color: '#d4fc79'}}><strong>850</strong></span> high-growth startup profiles matched WindWire&apos;s ICP.</li><li><span style={{color: '#d4fc79'}}><strong>410</strong></span> connections established at a <span style={{color: '#d4fc79'}}><strong>48.2% acceptance rate</strong></span>.</li><li><span style={{color: '#d4fc79'}}><strong>95</strong></span> booked discovery calls captured at a <span style={{color: '#d4fc79'}}><strong>22.3% lead rate</strong></span>.</li><li>Execution combined Sales Navigator boolean searches with automated web-scraping pipelines to identify companies actively hiring engineers or launching AI and digital health product lines.</li></ul></section>

      <section className="windwire-playbook section-shell" id="playbook">
        <div className="windwire-section-intro"><p className="windwire-label">The playbook</p><h2>Three moves that made outbound <em>more human.</em></h2></div>
        <div className="windwire-steps">
          <article><span>01</span><h3>Step 1: I built a list of the best prospects</h3><p>Standard platform filters were over 40% inaccurate, so I cross-referenced company signals from Clutch, ZoomInfo, and Google Search scrapes. That gave me a cleaner list of high-growth startups, AI platforms, and digital health teams with a credible reason to need WindWire.</p></article>
          <article><span>02</span><h3>Step 2: I then sent out connection request invitations</h3><p>The hook was curiosity, not a hard pitch. Every request was designed to feel like the beginning of a relevant professional conversation—specific enough to earn attention, light enough to invite a reply.</p></article>
          <article><span>03</span><h3>Step 3: I deployed an automated Apollo + Claude research workflow</h3><p>Apollo and Claude turned research into a repeatable workflow and reduced manual labor by 60%. I followed a 90% prospect, 10% pitch personalization rule: most of the message proved I understood their context.</p><p className="windwire-example"><strong>Example:</strong> “I noticed your team is expanding the AI product line while the onboarding experience is still being described as an MVP. That gap is exactly where a focused product sprint can create leverage.”</p></article>
        </div>
      </section>

      <section className="windwire-replies section-shell"><p className="windwire-label">04. Direct inbox proof</p><h2>Direct responses captured from the <em>campaign inbox.</em></h2><div className="windwire-reply-list"><p>&ldquo;This is relevant. Can you send over your Calendly?&rdquo;</p><p>&ldquo;Please route this to Stephen—I think there&apos;s a fit here.&rdquo;</p><p>&ldquo;We&apos;re looking for exactly this kind of product partner. Are you free next week?&rdquo;</p><p>&ldquo;Thanks for the thoughtful note. Let&apos;s find a time to talk.&rdquo;</p><p>&ldquo;Hi Stephen, good to connect! Send over some times for next week.&rdquo;</p></div></section>

      <section className="windwire-bottom-line section-shell"><p className="windwire-label">05. The bottom line</p><h2>Technical infrastructure, advanced prospecting, and AI research turned WindWire into a <em>predictable revenue pipeline.</em> </h2><p>By bridging the gap between outbound infrastructure, advanced LinkedIn Sales Navigator workflows, multi-source intelligence, and automated AI research matrices, I helped Stephen move away from inaccurate filters and manual grunt work—consistently capturing 1.5+ qualified leads a day and accelerating business growth.</p></section>

      <section className="case-study-next section-shell"><p className="case-study-kicker">Have a system to untangle?</p><h2>Let&apos;s make your next stage of growth <em>work harder.</em></h2></section>
      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
