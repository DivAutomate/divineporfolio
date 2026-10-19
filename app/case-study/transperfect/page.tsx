import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TransPerfect Case Study',
  description: 'Managing large-scale translation project lifecycles with Trello workflow automation.',
  alternates: { canonical: '/case-study/transperfect' },
}

export default function TransPerfectCaseStudy() {
  return (
    <main className="ai-case-study transperfect-case-study" id="top">
      <nav className="ai-case-nav" aria-label="Case study navigation">
        <a href="/work" className="ai-back"><ArrowLeft size={15} /> Back to portfolio</a>
        <a href="/" className="ai-back">Home <ArrowUpRight size={15} /></a>
            </nav>

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · localization operations</p>
        <h1>Managing Large-Scale Translation Project Lifecycles <em>via Trello</em></h1>
        <p className="ai-lead">How I built a centralized tracking system to coordinate 100+ multilingual projects across global timezones, stick to strict budgets, and hit 98% on-time delivery.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">Project at a glance</p>
        <div>
          <p><strong>My Core Job</strong> — Managing end-to-end localization pipelines, vendor sourcing, and cross-functional client communications.</p>
          <p><strong>Main Goal</strong> — Connect TransPerfect&apos;s localization loops with Trello to eliminate timezone lag and project bottlenecks.</p>
          <p><strong>Scope Impact</strong> — Managed a portfolio of 30+ enterprise accounts ($5K to $250K) across EMEA, APAC, and North America.</p>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The situation</p>
        <div className="ai-copy">
          <p>At TransPerfect—the world&apos;s largest provider of language and AI solutions with over 140 global offices—operational efficiency is everything. My job was to lead end-to-end localization and document production projects under tight deadlines while juggling multiple timezones (including CET, MDT, and IST).</p>
          <p>I managed a portfolio of 30+ enterprise accounts with project values ranging from $5K to $250K. To keep these complex pipelines moving without constant manual intervention, I mapped our workflows into Trello. This bridged the gap between our core operational teams (Production, Quality Systems, Sales) and specialized industry verticals like Life Sciences, Legal Services, and Gaming.</p>
        </div>
      </section>

      <section className="ai-friction ai-section">
        <p className="ai-label">The timezone &amp; workflow bottlenecks</p>
        <div className="ai-copy">
          <p>Operating across continents meant our teams faced daily coordination friction points:</p>
          <ul><li><strong>Manual Setup Fatigue:</strong> With over 100 multilingual projects running simultaneously, manually creating task sheets for translators, linguists, and QA teams caused major kickoff delays.</li><li><strong>Timezone Blind Spots:</strong> Because vendors worked in completely different timezones, project managers spent hours chasing down translation draft statuses, risking delivery dates.</li><li><strong>Unresolved Blockers:</strong> If a translator found missing source files or unclear terminology overnight, the issue would sit unnoticed for hours, stalling the entire regional launch.</li><li><strong>Messy Team Onboarding:</strong> New hires struggled to understand our fast-moving global account requirements, leading to high onboarding friction and initial production errors.</li></ul>
        </div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">What I did: the automated Trello solution</p>
        <div className="ai-copy"><p>I built a practical, automated Trello workspace specifically designed to sync translation milestones with broader corporate launch timelines:</p></div>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>Automatic project creation &amp; kickoffs</h2><p><strong>Action:</strong> I set up a workflow where new content requests instantly generated structured task sets in Trello. These tasks automatically assigned clear due dates and guidelines to our global marketing, product, and legal teams.</p><p><strong>Result:</strong> This eliminated manual project setups, got our multilingual campaigns kicked off faster, and allowed me to coordinate 100+ projects across continents simultaneously.</p></div></article>
          <article><span>02</span><div><h2>Live status tracking &amp; timezone bridges</h2><p><strong>Action:</strong> I mapped our core translation phases (drafting, review, QA, and final delivery) directly into Trello status fields. I established asynchronous handoff rules so that when an APAC linguist finished a review, the task automatically moved to an EMEA QA specialist&apos;s queue.</p><p><strong>Result:</strong> This gave us absolute visibility over progress, bypassed timezone lag, and helped me deliver 98% of projects on or before the client&apos;s strict deadline.</p></div></article>
          <article><span>03</span><div><h2>Automated blocker &amp; escalation systems</h2><p><strong>Action:</strong> I built a dedicated &quot;Translation Blocker&quot; trigger. If a vendor flagged missing files or context issues, Trello instantly created an urgent task assigned directly to the account&apos;s operational lead.</p><p><strong>Result:</strong> This stopped stalled jobs from going unnoticed, cut down on manual follow-ups, and dramatically speeded up issue resolution.</p></div></article>
          <article><span>04</span><div><h2>Re-engineering the onboarding blueprint</h2><p><strong>Action:</strong> I turned our complex internal workflows and account-specific SOPs into clean, repeatable Trello templates with built-in training videos and document checklists.</p><p><strong>Result:</strong> This simplified the learning curve for new hires and reduced our internal onboarding time by 40%.</p></div></article>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The daily system checklist</p>
        <div className="ai-copy"><p>To ensure our global database remained organized and production errors dropped, I turned my system framework into a live, recurring maintenance routine inside Trello.</p><h2>The operational routine schedule</h2><h3>Every day / week</h3><ul><li>Scan the escalation boards for unresolved translation blockers or missing source file flags.</li><li>Verify that incoming automated content requests are assigned to the optimal native-speaking vendor.</li></ul><h3>As needed</h3><ul><li>Update Trello custom fields with newly vetted translation vendors and updated pricing brackets.</li><li>Adjust task paths when clients request sudden changes to project scopes or delivery requirements.</li></ul><h3>Every quarter (budget &amp; system health)</h3><ul><li>Audit project member access across our 140+ global office footprints to remove inactive users and control license costs.</li><li>Review connected file repositories (Google Drive, Slack loops) to ensure no automation links are broken.</li><li>Sync with Finance and Production Leads to review project spend against our $5K–$250K account budgets.</li></ul><h3>Every year</h3><ul><li>Review how our corporate IT security rules apply to external, cross-border vendor communication boards.</li></ul></div>
      </section>

      <section className="ai-results ai-section"><p className="ai-label">Real, verifiable results</p><div className="ai-copy"><p>By moving our global operations into this structured Trello blueprint, we achieved massive operational wins:</p><div className="ai-metrics-grid"><article><strong>98%</strong><h2>Flawless deadlines</h2><p>Hit an elite on-time delivery rate across our entire multi-continent enterprise portfolio.</p></article><article><strong>20%</strong><h2>Higher quality</h2><p>Reduced production errors and shortened overall lead times by 15% by embedding mandatory QA steps into every project layout.</p></article><article><strong>40%</strong><h2>Faster team scaling</h2><p>Slashed new hire onboarding time by replacing messy training folders with clean Trello templates.</p></article><article><strong>38%</strong><h2>Fewer losses</h2><p>Cut operational production costs through better vendor delegation and tighter spreadsheet-backed tracking.</p></article></div></div></section>

      <section className="ai-section"><p className="ai-label">The takeaways</p><div className="ai-copy"><ul><li><strong>Build for Timezones:</strong> Don&apos;t count on real-time conversations when working across CET, MDT, and IST. Your project management tool must be automated enough to handle handoffs while you sleep.</li><li><strong>Protect Your Templates:</strong> Standardized project templates are the only way to scale a business without losing quality or blowing your budget.</li></ul></div></section>

      <section className="ai-cta"><p className="ai-kicker">Ready to build a resilient system?</p><h2>Let&apos;s make your<br /><em>next workflow intelligent.</em></h2></section>
      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
