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
          { id: 'sample-work', label: 'Sample work' },
          { id: 'results', label: 'Results' },
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
        <ul><li>200 restaurant sites served</li><li>6 daily routes automated</li><li>3-week rebate backlog cleared</li><li>Manual dispatch → live route tracking</li></ul>
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
        <div><p>I built a customized routing system directly inside GoHighLevel, tailored exactly to the team&apos;s existing field workflows. It builds driver schedules every week, lets dispatchers change visit frequency on the spot, and keeps all route data in one simple place. The work that used to be done by hand on a whiteboard now happens on a schedule, and staff needed very little training to use it.</p></div>
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

      <section id="sample-work" className="mahoney-content-section">
        <p className="mahoney-section-label">Sample work</p>
        <p className="mahoney-intro sample-lead">Mahoney&apos;s systems are private, so these screens use sample site names and weights. They show the six parts of the build: the board dispatchers open in the morning, the record behind every site, the two workflows that build routes and take in weights, the form drivers use at the tank, the rebate ledger finance checks, and the dashboard that shows the day at a glance.</p>
        <div className="ai-workflow-gallery sample-grid">
          <ZoomableFigure
            src="/images/sample-work/crm-dispatch-board.webp"
            alt="Dispatch board for Monday with 6 routes, 40 stops, driver progress bars, and status chips for complete, in progress, and queued routes"
            width={1600}
            height={1000}
            caption="Dispatch board · 6 routes and 40 stops, with progress by route"
          />
          <ZoomableFigure
            src="/images/sample-work/crm-site-record.webp"
            alt="Site record for Corner Grill 214 showing weekly used oil and monthly grease trap service, collection history, upcoming visits, and a monthly rebate of 42.84 dollars"
            width={1600}
            height={1000}
            caption="Site record · services, collection history, next visit, rebate"
          />
          <ZoomableFigure
            src="/images/sample-work/crm-schedule-workflow.webp"
            alt="Workflow diagram: a Monday schedule pulls 200 sites, groups them by area, assigns 6 drivers, creates routes, and sends a digest, while a second workflow takes webhook weights, updates the site, writes the rebate ledger, and flags exceptions"
            width={1600}
            height={1000}
            caption="Two workflows · weekly route build and collection intake"
          />
          <ZoomableFigure
            src="/images/sample-work/crm-driver-form.webp"
            alt="Phone form for logging a collection at Corner Grill 214 with site, weight of 238 lb, photo upload, and a submit button, beside the checks that accept or flag a log"
            width={1600}
            height={1000}
            caption="Driver form · weight logged at the tank, validations shown"
          />
          <ZoomableFigure
            src="/images/sample-work/crm-rebate-ledger.webp"
            alt="Rebate ledger for October 2024 listing twelve of 200 sites with visits, collected pounds, rate, rebate amount, and ready, paid, or held status, totalling 9,346 lb and 1,682.28 dollars"
            width={1600}
            height={1000}
            caption="Rebate ledger · weight times rate, held rows flagged"
          />
          <ZoomableFigure
            src="/images/sample-work/crm-operations-dashboard.webp"
            alt="Operations dashboard showing 200 active sites, 6 routes per day, 40 stops today, no rebate backlog, stops by route, service mix, and open exceptions"
            width={1600}
            height={1000}
            caption="Operations dashboard · sites, routes, stops, and exceptions"
          />
        </div>
        <p className="sample-note">Sample data: site names, weights, and totals are illustrative.</p>
      </section>

      <section id="results" className="mahoney-results mahoney-content-section">
        <p className="mahoney-section-label">The results</p>
        <p>Mahoney now has a system it can grow on. Customers get more reliable service, routes scale without extra admin, there is less risk of losing data, and the team finds it easy to use.</p>
      </section>

      <CtaSection kicker="Need to digitize a legacy operation?" title={<>Let&apos;s<br /><em>connect.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
