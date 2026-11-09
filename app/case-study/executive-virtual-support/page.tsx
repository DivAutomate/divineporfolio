import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Executive & Virtual Support Case Study',
  description: 'Professional support framework for a General Manager and Business Head covering inbox triage, calendar management, travel logistics, personal administration, and executive reporting.',
  alternates: { canonical: '/case-study/executive-virtual-support' },
}

export default function ExecutiveVirtualSupportCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main className="ai-case-study support-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Professional support framework · The Executive</p>
        <h1>Executive support that keeps <em>the business moving.</em></h1>
        <p className="ai-lead">A structured Executive &amp; Personal Assistant framework for a General Manager &amp; Business Head managing procurement, FMCG accounts, plant operations, travel, and financial priorities.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">At a glance</p>
        <div>
          <p><strong>My role</strong> — Executive &amp; Personal Assistant to the General Manager &amp; Business Head, managing the information, schedules, and follow-through behind high-value decisions.</p>
          <p><strong>The goal</strong> — Protect executive attention while keeping procurement, plant operations, key accounts, travel, and reporting moving.</p>
          <p><strong>The framework</strong> — Inbox triage, calendar control, travel and personal administration, data entry, executive reporting, and cross-platform task coordination.</p>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The situation</p>
        <div className="ai-copy">
          <p>The Executive managed a high-volume operating environment: more than 300 complex B2B emails each day, factory escalations, procurement decisions, FMCG contracts, travel requirements, and financial reporting.</p>
          <p>Without a structured support framework, critical purchase orders could disappear in digital noise, fragmented meetings could consume strategy time, and raw operational data could arrive too late for weekly executive alignment.</p>
        </div>
      </section>

      <section className="ai-friction ai-section">
        <p className="ai-label">What was getting in the way</p>
        <div className="ai-copy">
          <ul>
            <li><strong>Inbox overload:</strong> Critical line-stop issues and key client purchase orders competed with routine supplier updates.</li>
            <li><strong>Fragmented schedules:</strong> Plant, logistics, banking, and account requests left too little uninterrupted strategy time.</li>
            <li><strong>Travel and personal admin:</strong> Multi-leg itineraries, private estate operations, payroll, utilities, and financial obligations required constant coordination.</li>
            <li><strong>Scattered reporting:</strong> Production, sales, inventory, and supply data arrived in different formats before executive briefings.</li>
          </ul>
        </div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">How I supported the work</p>
        <div className="ai-copy"><p>The framework connected four support functions: inbox control, schedule protection, travel, personal administration, and executive reporting.</p></div>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>Inbox management</h2><p><strong>Context:</strong> The Executive&apos;s primary corporate inbox received over 300 highly complex emails daily, covering high-value B2B manufacturing contracts, international resin supply chain logistics, and personal administrative dependencies. Critical client purchase orders and time-sensitive approvals were frequently bottlenecked by high volumes of administrative noise.</p><div className="action-list"><strong>Action:</strong><ul><li><strong>Multi-Inbox Framework:</strong> Configured Gmail Enterprise using advanced search operators and Multi-Inboxes to establish a live, color-coded triage workspace structured by urgency.</li><li><strong>Custom Label Hierarchy:</strong> Engineered a system categorized into: 01_CRITICAL (Line Stop / Client POs), 02_EXECUTIVE REVIEW (CAPEX approvals), and 03_EA ACTION (Personal Admin / Logistics).</li><li><strong>Proactive Gatekeeping &amp; Workflow Integration:</strong> Cleared the primary workspace by pairing Gmail with Google Sidebar, pushing actionable items straight into Google Tasks and Google Keep while drafting outbound responses using Gmail Templates for review.</li></ul></div><p><strong>Result:</strong> Reduced The Executive&apos;s daily inbox processing time from 3.5 hours to under 45 minutes, ensuring high-priority key account requests achieved a response turnaround of under 2 hours.</p></div></article>
          <article><span>02</span><div><h2>Calendar management</h2><p><strong>Context:</strong> The Executive&apos;s schedule suffered from extreme time-fragmentation. Unregulated back-to-back calendar invitations from cross-functional teams (production, plant engineering, sales, and external finance partners) left no dedicated capacity for high-level business development, macro financial planning, or production-floor alignment.</p><div className="action-list"><strong>Action:</strong><ul><li><strong>Thematic Day Architecture:</strong> Structured Google Calendar into functional pillars, creating specific days dedicated to operational plant oversight, external client conferences, and fiscal reviews.</li><li><strong>Focus Time Protection:</strong> Deployed the Google Calendar &apos;Focus Time&apos; feature to systematically block non-negotiable 90-minute daily intervals for strategic oversight, automatically declining conflicting internal requests.</li><li><strong>Meeting Vetting Framework:</strong> Enforced a mandatory agenda policy for all inbound meeting requests, implementing Google Calendar Appointment Slots to let internal teams book short, purposeful syncs.</li></ul></div><p><strong>Result:</strong> Successfully reclaimed 25% of The Executive&apos;s weekly schedule. This newly recovered capacity was directly allocated toward high-level business expansion initiatives, doubling regional plant execution speeds.</p></div></article>
          <article><span>03</span><div><h2>Travel logistics</h2><p><strong>Context:</strong> Managing complex, international procurement trips and domestic logistics required seamless cross-border coordination. Concurrently, overlapping personal administrative tasks risked diverting The Executive&apos;s attention from core industrial business operations.</p><div className="action-list"><strong>Action:</strong><ul><li><strong>End-to-End Travel Dossiers:</strong> Constructed comprehensive trip dashboards within Google Drive, linking flight itineraries, hotel confirmations, ground transit tracking via Google Maps, and localized backup travel options for offline mobile access.</li><li><strong>Personal Management Security:</strong> Maintained a flawless administrative firewall using Google Forms and Sheets to organize personal invoices, private property maintenance schedules, family event tracking, and domestic payroll.</li><li><strong>Real-Time Crisis Resolution:</strong> Successfully navigated a sudden cross-border flight cancellation by identifying and securing an alternative flight option within 30 minutes, keeping travel updates fully synced to Google Calendar.</li></ul></div><p><strong>Result:</strong> Maintained a perfect zero-delay record across all international itineraries, offloading 100% of personal and logistical friction to give The Executive complete peace of mind during business travel.</p></div></article>
          <article><span>04</span><div><h2>Data entry</h2><p><strong>Context:</strong> The Executive needed to quickly evaluate disparate production data, resin market prices, and sales performance metrics from multiple departments before weekly board briefings. Sifting through multiple unstructured spreadsheets wasted valuable hours.</p><div className="action-list"><strong>Action Taken (Using Google Workspace Tools):</strong><ul><li><strong>Automated Data Cleanse:</strong> Built a unified metrics hub in Google Sheets, employing advanced relational functions (QUERY, FILTER, XLOOKUP) to automatically clean raw multi-department data points.</li><li><strong>Operational KPI Tracker:</strong> Synthesized thousands of rows of manufacturing logistics and inventory variables into a live, single-page visual dashboard displaying macro margins and unit targets.</li><li><strong>One-Click Slide Integration:</strong> Linked live Google Sheets report charts directly into Google Slides presentation decks, allowing real-time dashboard data refreshes for upcoming board presentations.</li></ul></div><p><strong>Result:</strong> Saved The Executive 4 hours of analytical preparation before every leadership briefing, providing the management team with instant visibility to optimize budget allocations and manufacturing margins.</p></div></article>
        </div>
      </section>

      <section className="ai-results ai-section">
        <p className="ai-label">The outcome</p>
        <div className="ai-copy">
          <p>The framework gave The Executive a reliable operating layer: less time sorting information, more protected strategy time, and faster access to the numbers and decisions that kept the business moving.</p>
          <div className="ai-metrics-grid">
            <article><strong>300+</strong><h2>Daily messages triaged</h2><p>Complex B2B correspondence organized around urgency and ownership.</p></article>
            <article><strong>45 min</strong><h2>Daily email processing</h2><p>Reduced from 3.5 hours while maintaining zero missed revenue opportunities.</p></article>
            <article><strong>25%</strong><h2>Calendar capacity reclaimed</h2><p>Time returned to strategy, forecasting, and expansion planning.</p></article>
            <article><strong>4+ hrs</strong><h2>Saved per briefing</h2><p>Weekly executive reporting became faster through connected live dashboards.</p></article>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The takeaway</p>
        <div className="ai-copy">
          <p>Executive and personal assistance is most valuable when it protects attention across the whole operating environment. By connecting inboxes, calendars, travel, personal administration, data entry, and reporting, I gave the General Manager &amp; Business Head a dependable support framework for making better decisions faster.</p>
        </div>
      </section>

      <CtaSection kicker="Need dependable support?" title={<>Let&apos;s make room for<br /><em>the work that matters.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
