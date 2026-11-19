import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ZoomableFigure } from '@/components/zoomable-figure'

export const metadata: Metadata = {
  title: 'Executive & Virtual Support Case Study',
  description: 'How I ran the inbox, calendar, travel, personal admin and weekly reporting for a General Manager at Prima Corporation Ltd.',
  alternates: { canonical: '/case-study/executive-virtual-support' },
}

export default function ExecutiveVirtualSupportCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'At a glance' },
          { id: 'situation', label: 'Situation' },
          { id: 'friction', label: 'Friction' },
          { id: 'framework', label: 'Framework' },
          { id: 'results', label: 'Outcome' },
          { id: 'tools', label: 'Tools' },
          { id: 'sample-work', label: 'Sample work' },
        ]}
      />
      <main id="main-content" className="ai-case-study support-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · executive and personal support</p>
        <h1>Executive support that keeps <em>the business moving.</em></h1>
        <p className="ai-lead">A general manager at Prima Corporation Ltd carried procurement, plant operations, key accounts, travel and reporting at the same time. I built the support system that kept all of it moving.</p>
      </header>

      <section id="overview" className="ai-summary ai-section">
        <p className="ai-label">At a glance</p>
        <div>
          <p><strong>My role:</strong> Executive and personal assistant to the General Manager and Business Head. I handled the information, the schedule and the follow-through behind their decisions.</p>
          <p><strong>The goal:</strong> Keep their attention on decisions, not on sorting.</p>
          <p><strong>The work:</strong> Inbox triage, calendar control, travel and personal administration, data entry, weekly reporting and cross-platform task tracking.</p>
        </div>
      </section>

      <section id="situation" className="ai-section">
        <p className="ai-label">The situation</p>
        <div className="ai-copy">
          <p>They ran a busy operation. More than 300 B2B emails arrived each day: factory escalations, procurement decisions, FMCG contracts, travel requests and financial reporting.</p>
          <p>All of it landed in the same place. A purchase order that needed a same-day approval sat next to a supplier newsletter. A line stop competed with a meeting request. Weekly numbers arrived from three departments in three different formats, often the day before a briefing.</p>
        </div>
      </section>

      <section id="friction" className="ai-friction ai-section">
        <p className="ai-label">What was getting in the way</p>
        <div className="ai-friction-grid is-pair">
          <article><b>01</b><h2>Inbox noise</h2><p>Line stops and client purchase orders were buried under routine supplier updates.</p></article>
          <article><b>02</b><h2>Fragmented days</h2><p>Plant, logistics, banking and account requests filled the week. No uninterrupted time was left for strategy.</p></article>
          <article><b>03</b><h2>A second job</h2><p>Travel, family logistics, payroll and utilities all ran through the same person at the same time as the business.</p></article>
          <article><b>04</b><h2>Scattered reporting</h2><p>Production, sales, inventory and supply figures arrived in different formats right before each executive briefing.</p></article>
        </div>
      </section>

      <section id="framework" className="ai-highlights ai-section">
        <p className="ai-label">How I supported the work</p>
        <div className="ai-copy"><p>I built four routines that ran every week: inbox control, schedule protection, travel and personal admin, and executive reporting.</p></div>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>Inbox management</h2><p>Their main inbox took in more than 300 emails a day. Contracts, resin supply logistics and personal admin all shared the same screen, so a client purchase order could sit unnoticed behind routine updates.</p><div className="action-list"><strong>What I did:</strong><ul><li>Set up Gmail multi-inboxes and saved searches so the important mail showed up in one triage view.</li><li>Built three labels that match how work actually moves: 01 Critical for line stops and client purchase orders, 02 Review for approvals, and 03 Action for logistics and personal admin.</li><li>Moved anything that needed doing into Google Tasks or Keep, with a draft reply already written from a template.</li><li>Kept the open follow-ups on an Asana board so nothing waited on a single inbox.</li></ul></div><p>Daily email time went from 3 hours to under 45 minutes. Key account requests were answered in under 1 hour.</p></div></article>
          <article><span>02</span><div><h2>Calendar management</h2><p>Production, plant engineering, sales and external finance partners booked back to back. Nothing was left for planning or for time on the factory floor.</p><div className="action-list"><strong>What I did:</strong><ul><li>Grouped the week into themed days: plant oversight, client meetings, and finance reviews.</li><li>Blocked 90 minutes of focus time each day. Conflicting internal invites are declined automatically.</li><li>Asked every meeting request for an agenda, kept pre-reads in Notion, and opened short Calendly slots for internal teams to book.</li></ul></div><p>That returned 25% of their week to planning and expansion work.</p></div></article>
          <article><span>03</span><div><h2>Travel and personal administration</h2><p>International procurement trips needed flights, hotels and ground transport to line up. On the personal side there were estate maintenance, invoices, family events and payroll, all with the same deadlines as the business.</p><div className="action-list"><strong>What I did:</strong><ul><li>Tracked every trip in TripIt Pro and kept one dashboard per journey in Google Drive: flights, hotel confirmations, ground transport, local backups, all readable offline from a phone.</li><li>Tracked personal admin in Google Forms and Sheets so invoices, maintenance and payroll ran on a schedule instead of from memory.</li><li>When a cross-border flight was cancelled, I found and booked a replacement within 30 minutes and updated their calendar straight away.</li></ul></div></div></article>
          <article><span>04</span><div><h2>Executive reporting</h2><p>Before each board briefing they needed production figures, resin prices and sales results pulled from separate spreadsheets. The sorting alone ate hours.</p><div className="action-list"><strong>What I did:</strong><ul><li>Built one metrics sheet in Google Sheets that cleans department data on its own with QUERY, FILTER and XLOOKUP.</li><li>Turned thousands of rows of manufacturing and inventory data into a single-page dashboard with margins and unit targets.</li><li>Linked the dashboard charts into Google Slides so the deck updates when the sheet does.</li></ul></div><p>That gave them 4 hours back before every leadership briefing, with numbers they could act on.</p></div></article>
        </div>
      </section>

      <section id="results" className="ai-results ai-section">
        <p className="ai-label">The outcome</p>
        <div className="ai-copy">
          <p>They spent less time sorting and more time deciding. The numbers and documents they needed were in one place before they asked for them.</p>
          <div className="ai-metrics-grid">
            <article><strong>300+</strong><h2>Daily messages triaged</h2><p>Sorted by urgency and by who owns the next step.</p></article>
            <article><strong>45 min</strong><h2>Daily email processing</h2><p>Down from 3 hours, with no revenue opportunity missed.</p></article>
            <article><strong>25%</strong><h2>Calendar capacity reclaimed</h2><p>Time returned to strategy, forecasting and expansion planning.</p></article>
            <article><strong>4+ hrs</strong><h2>Saved per briefing</h2><p>Weekly reporting came from connected dashboards instead of manual sorting.</p></article>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The takeaway</p>
        <div className="ai-copy">
          <p>Executive support works best when it covers the whole week, not one task at a time. Inboxes, calendars, travel, personal admin and reporting were all competing for the same attention. Connecting them gave the General Manager and Business Head one dependable layer underneath every decision.</p>
        </div>
      </section>

      <section id="tools" className="ai-section">
        <div className="ai-stack"><p className="ai-label">Tools used</p><ul>
          <li><strong>Inbox and triage</strong><span>Gmail · Asana</span></li>
          <li><strong>Tasks and notes</strong><span>Google Tasks · Google Keep · Notion</span></li>
          <li><strong>Calendar and scheduling</strong><span>Google Calendar · Calendly</span></li>
          <li><strong>Travel and personal admin</strong><span>TripIt Pro · Google Forms · Google Drive</span></li>
          <li><strong>Reporting</strong><span>Google Sheets · Google Slides</span></li>
        </ul></div>
      </section>

      <section id="sample-work" className="ai-section support-sample-work">
        <p className="ai-label">Sample work</p>
        <div className="ai-workflow-gallery support-samples">
          <ZoomableFigure
            src="/images/sample-work/inbox-triage.webp"
            alt="Before and after view of an inbox: 47,886 unread messages on the left, and the same inbox rebuilt with labels, filters, and colour-coded tags leaving 24 active messages"
            width={1600}
            height={873}
          />
          <ZoomableFigure
            src="/images/sample-work/calendar-control.webp"
            alt="Google Calendar week view with daily briefings, deep work blocks, meeting preparation, reviews, and protected personal time"
            width={1400}
            height={787}
          />
          <ZoomableFigure
            src="/images/sample-work/executive-brief.webp"
            alt="Three-panel workflow: an email asking for a good summary, an excerpt from the source article, and the finished one-page executive summary"
            width={800}
            height={1000}
          />
          <ZoomableFigure
            src="/images/sample-work/kpi-master-ytd.webp"
            alt="Google Sheets KPI report for the full year: net profit 765,741.05, marketing cost 189,743.62, 25 closed deals, 516 leads and 403.57% ROI, with a sales-by-source table, bar chart and lead source pie"
            width={1600}
            height={1000}
          />
          <ZoomableFigure
            src="/images/sample-work/kpi-q1.webp"
            alt="Google Sheets Q1 KPI report: net profit 135,600, marketing cost 44,878.85, 5 closed deals, 90 leads and 302.15% ROI, with sales by source, lead share and lead count tables and charts"
            width={1600}
            height={1000}
          />
          <ZoomableFigure
            src="/images/sample-work/travel-itinerary.webp"
            alt="Google Sheets travel plan for a four day Singapore conference trip, with time blocks for work, kids activities, dinners, and meetings"
            width={1312}
            height={640}
          />
          <ZoomableFigure
            src="/images/sample-work/travel-reservation-request.webp"
            alt="Draft email to a hotel concierge requesting early check-in, adjacent rooms with a working desk, kid meal kits, and a play kit for a family stay in Singapore"
            width={1091}
            height={593}
          />
          <ZoomableFigure
            src="/images/sample-work/travel-flight-options.webp"
            alt="Draft email comparing three business class flight options for a conference trip to Singapore, with notes on arrival times, children, and family comfort"
            width={1068}
            height={602}
          />
          <ZoomableFigure
            src="/images/sample-work/travel-checklist.webp"
            alt="Google Sheets trip checklist with ten items covering intake, flights, hotel requests, transfers, shared calendar, contingency plans, and final confirmations"
            width={756}
            height={647}
          />
        </div>
      </section>

      <CtaSection kicker="Need dependable support?" title={<>Let&apos;s make room for<br /><em>the work that matters.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
