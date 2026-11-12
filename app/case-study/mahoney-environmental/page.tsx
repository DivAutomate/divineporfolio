import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Field Operations Case Study',
  description: 'How I moved a 2,000+ site field operation from paper route cards to a live digital routing system.',
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
          { id: 'results', label: 'Results' },
        ]}
      />
      <main id="main-content" className="mahoney-case-study">

      <header className="mahoney-editorial-hero">
        <p className="mahoney-meta">Case Study</p>
        <h1>Automating Field Operations for a 2,000+ Site Logistics Operation</h1>
        <p className="mahoney-intro">Mahoney Environmental planned its routes on paper. I replaced that with a digital system that shows every route live.</p>
        <p className="mahoney-intro">Here is how I removed the scheduling bottleneck, protected their data, and saved the team hours every week.</p>
      </header>

      <section className="mahoney-quote">
        <blockquote>&ldquo;I was impressed with his ability to step into our field workflows and completely remove our scheduling bottlenecks. Building an automated system that handles complex dispatch logistics from scratch is an incredible feat. I would recommend his development expertise to any scaling logistics company that wants to eliminate manual overhead.&rdquo;</blockquote>
        <p>— Operations manager, Mahoney Environmental</p>
      </section>

      <section id="scale" className="mahoney-scale mahoney-content-section">
        <p className="mahoney-section-label">The scale</p>
        <ul><li>2,000+ restaurant sites served</li><li>17 daily routes automated</li><li>3-week rebate backlog cleared</li><li>Paper cards → live route tracking</li></ul>
      </section>

      <section id="challenge" className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">The challenge</p></div>
        <div>
          <p>Mahoney Environmental collects used cooking oil and cleans grease traps for thousands of commercial kitchens across the U.S. But day-to-day planning ran on paper logs, handwritten cards, and the memory of a few senior dispatchers.</p>
          <p>Seventeen routes were planned every day from index cards. Collection weights were written by hand. As a result, quarterly rebates took three weeks to calculate. The business could not grow safely like this.</p>
        </div>
      </section>

      <section id="build" className="mahoney-content-section mahoney-two-column">
        <div><p className="mahoney-section-label">What I built</p></div>
        <div><p>I built a customized routing system directly inside GoHighLevel, tailored exactly to the team&apos;s existing field workflows. It builds driver schedules every week, lets dispatchers change visit frequency on the spot, and keeps all route data in one simple place. Staff needed very little training to use it.</p></div>
      </section>

      <section id="implementation" className="mahoney-implementation mahoney-content-section">
        <p className="mahoney-section-label">How I did it</p>
        <ol>
          <li><h2>Moved everything into GoHighLevel</h2><p>I imported 2,000+ kitchen profiles, addresses, and service schedules into GoHighLevel. For the first time, the whole team could see every account in one place.</p></li>
          <li><h2>Built the scheduling engine in n8n</h2><p>Every week, n8n groups accounts into 17 daily routes and creates the driver sheets on its own.</p></li>
          <li><h2>Let drivers log collections from the field</h2><p>I set up webhooks so drivers can submit collection weights from their phones. GoHighLevel updates the moment they do.</p></li>
          <li><h2>Cleared the rebate backlog</h2><p>The system now checks driver logs against each account&apos;s rebate rules on its own. Work that took three weeks is now done right away.</p></li>
        </ol>
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
