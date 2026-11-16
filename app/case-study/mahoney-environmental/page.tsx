import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ZoomableFigure } from '@/components/zoomable-figure'

export const metadata: Metadata = {
  title: 'Field Operations Case Study',
  description: 'How I replaced manual route planning at a 200-site field operation with a live digital routing system.',
  alternates: { canonical: '/case-study/mahoney-environmental' },
}

export default function MahoneyEnvironmentalCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyNav
        sections={[
          { id: 'scale', label: 'The scale' },
          { id: 'challenge', label: 'Challenge' },
          { id: 'build', label: 'What I built' },
          { id: 'implementation', label: 'How I did it' },
          { id: 'decisions', label: 'Decisions' },
          { id: 'results', label: 'Results' },
          { id: 'sample-work', label: 'Sample work' },
        ]}
      />
      <main id="main-content" className="mahoney-case-study">

      <header className="mahoney-editorial-hero">
        <p className="mahoney-meta">Case Study</p>
        <h1>Automating Field Operations for a 200-Site Logistics Operation</h1>
        <p className="mahoney-intro">Mahoney Environmental planned its routes manually. I replaced that with a digital system that shows every route live.</p>
        <p className="mahoney-intro">Here is how I removed the scheduling bottleneck, protected their data, and saved the team hours every week.</p>
      </header>

      <section className="mahoney-quote">
        <blockquote>&ldquo;I was impressed with his ability to step into our field workflows and completely remove our scheduling bottlenecks. Building an automated system that handles complex dispatch logistics from scratch is an incredible feat. I would recommend his development expertise to any scaling logistics company that wants to eliminate manual overhead.&rdquo;</blockquote>
        <p>— Operations manager, Mahoney Environmental</p>
      </section>

      <section id="scale" className="mahoney-scale mahoney-content-section">
        <p className="mahoney-section-label">The scale</p>
        <ul><li>200 commercial kitchen sites served</li><li>6 daily routes automated</li><li>3-week rebate backlog cleared</li><li>Manual dispatch → live route tracking</li></ul>
      </section>

      <section id="challenge" className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">The challenge</p></div>
        <div>
          <p>Mahoney Environmental collects used cooking oil and cleans grease traps for 200 commercial kitchens across the U.S. But day-to-day planning ran on manual work: a whiteboard, handwritten route sheets, and the memory of a few senior dispatchers.</p>
          <p>Six routes were planned by hand every day. Dispatchers wrote out each driver&apos;s run, then rewrote it whenever a site changed its service frequency or a truck broke down. Collection weights were written at the tank and typed up later. Because of all that manual handling, quarterly rebates took three weeks to calculate. The business could not grow safely like this.</p>
        </div>
      </section>

      <section id="build" className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">What I built</p></div>
        <div>
          <p>I built a customized routing system directly inside GoHighLevel, tailored exactly to the team&apos;s existing field workflows. It builds driver schedules every week, lets dispatchers change visit frequency on the spot, and keeps all route data in one simple place. The work that used to be done by hand on a whiteboard now happens on a schedule, and staff needed very little training to use it.</p>
          <p>Everything lives in Mahoney&apos;s own GoHighLevel account. I kept the structure of their existing accounts, so every site arrived with its service history in place instead of being rebuilt from scratch. Drivers log collections through their own logins, and no route or weight data is copied out to a separate spreadsheet. There is one record to trust instead of several that drift apart.</p>
        </div>
      </section>

      <section id="implementation" className="mahoney-implementation mahoney-content-section">
        <p className="mahoney-section-label">How I did it</p>
        <ol>
          <li><h2>Moved everything into GoHighLevel</h2><p>I imported 200 kitchen profiles, addresses, and service schedules into GoHighLevel. For the first time, the whole team could see every account in one place instead of chasing separate lists.</p></li>
          <li><h2>Built the scheduling engine in n8n</h2><p>Every week, n8n groups accounts into six daily routes and creates the driver sheets on its own. What used to take a dispatcher hours of manual planning now runs without anyone touching it.</p></li>
          <li><h2>Let drivers log collections from the field</h2><p>I set up webhooks so drivers can submit collection weights from their phones. GoHighLevel updates the moment they do.</p></li>
          <li><h2>Cleared the rebate backlog</h2><p>The system now checks driver logs against each account&apos;s rebate rules on its own. Work that took three weeks is now done right away.</p></li>
        </ol>
      </section>

      <section id="tools" className="mahoney-tools mahoney-content-section">
        <p className="mahoney-section-label">Tools used</p>
        <div className="ai-stack"><ul>
          <li><strong>Customer records, routes, and rebates</strong><span>GoHighLevel</span></li>
          <li><strong>Weekly scheduling engine</strong><span>n8n · scheduled workflow</span></li>
          <li><strong>Driver sheets and rebate report</strong><span>Google Sheets</span></li>
          <li><strong>Collection logging from the road</strong><span>REST endpoint · mobile webhooks</span></li>
          <li><strong>Log validation</strong><span>n8n · checked against account rules</span></li>
          <li><strong>Dispatch notifications</strong><span>Email · SMTP</span></li>
        </ul></div>
      </section>

      <section id="decisions" className="mahoney-highlights mahoney-content-section">
        <p className="mahoney-section-label">Key decisions</p>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>One record per site</h2><p>Each site has a single profile holding its service type, visit frequency, tank details, and rebate rate. The weekly build reads that profile, so a dispatcher changes the frequency in one place and the next schedule follows. There is no route sheet and weight sheet to keep in sync.</p></div></article>
          <article><span>02</span><div><h2>Check the weight before it reaches the ledger</h2><p>Every collection that comes in from the field is checked against the site and the account rules before anything is written. A log that does not add up gets flagged for a dispatcher instead of quietly turning into a wrong rebate. Finance works from weights the system has already checked.</p></div></article>
          <article><span>03</span><div><h2>Rebuild weekly, not redraw daily</h2><p>Routes are built on a weekly schedule rather than rewritten every morning. When a site changes its frequency, only the affected route changes. When a truck breaks down, the day&apos;s route is rerun from the same data instead of being redrawn from memory.</p></div></article>
        </div>
      </section>

      <section id="results" className="mahoney-results mahoney-content-section">
        <p className="mahoney-section-label">The results</p>
        <p>Mahoney now has a system it can grow on. Customers get more reliable service, routes scale without extra admin, there is less risk of losing data, and the team finds it easy to use.</p>
        <p>Planning that used to sit with one or two dispatchers now runs on a weekly schedule, and a new site slots into a route instead of starting a fresh list. Rebates come from the same weights drivers submit, so the three-week reconciliation is gone and the quarter closes without chasing paperwork. For drivers, the change is small: they take a weight at the tank, send it from their phone, and the office has it straight away.</p>
      </section>

      <section id="sample-work" className="mahoney-content-section">
        <p className="mahoney-section-label">Sample work</p>
        <ZoomableFigure
          className="mahoney-workflow"
          src="/images/sample-work/mahoney-workflow.png"
          alt="n8n workflow for weekly route building, driver log intake, missing-weight exceptions, and rebate reconciliation"
          width={2880}
          height={1800}
          priority
        />
      </section>

      <CtaSection kicker="Need to digitize a legacy operation?" title={<>Let&apos;s<br /><em>connect.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
