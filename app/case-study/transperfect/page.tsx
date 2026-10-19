import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Project Management Case Study',
  description: 'How I ran 100+ translation projects across three timezones with a Trello system and hit 98% on-time delivery.',
  alternates: { canonical: '/case-study/transperfect' },
}

export default function TransPerfectCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main className="ai-case-study transperfect-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · localization operations</p>
        <h1>Managing Large-Scale Translation Projects <em>with Trello</em></h1>
        <p className="ai-lead">I built one place to track 100+ translation projects across three timezones. It kept us on budget and helped us deliver 98% of projects on time.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">Project at a glance</p>
        <div>
          <p><strong>My role</strong> — I ran translation projects from start to finish. That meant picking vendors, managing timelines, and keeping clients informed.</p>
          <p><strong>The goal</strong> — Stop work from stalling between timezones and make every project easy to track.</p>
          <p><strong>The scale</strong> — 30+ enterprise accounts worth $5K to $250K each, across EMEA, APAC, and North America.</p>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">The situation</p>
        <div className="ai-copy">
          <p>TransPerfect is the world&apos;s largest language services company, with more than 140 offices. Deadlines are tight, and the teams doing the work are spread across CET, MDT, and IST.</p>
          <p>I handled 30+ enterprise accounts. Our translation tools did the translating. Trello was where the team coordinated the work. I used it to connect Production, Quality, and Sales with our industry teams in Life Sciences, Legal, and Gaming.</p>
        </div>
      </section>

      <section className="ai-friction ai-section">
        <p className="ai-label">What was slowing us down</p>
        <div className="ai-copy">
          <p>Working across continents created the same problems every day:</p>
          <ul>
            <li><strong>Slow project setup:</strong> With 100+ projects running at once, building task lists by hand for translators, reviewers, and QA delayed every kickoff.</li>
            <li><strong>No view across timezones:</strong> Vendors worked while we slept. Project managers lost hours chasing status updates, and deadlines slipped.</li>
            <li><strong>Problems sat overnight:</strong> If a translator found a missing file or a confusing term, nobody saw it for hours. One small issue could hold up a whole regional launch.</li>
            <li><strong>Hard onboarding:</strong> New hires struggled to learn each account&apos;s rules. That led to early mistakes.</li>
          </ul>
        </div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">How I built the Trello system</p>
        <div className="ai-copy"><p>I built a Trello workspace that tied every translation milestone to the client&apos;s launch date.</p></div>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>Projects that set themselves up</h2><p><strong>What I did:</strong> Every new request now created a full set of tasks in Trello on its own. Each task came with a due date, clear instructions, and an owner in marketing, product, or legal.</p><p><strong>What changed:</strong> No more manual setup. Projects started faster, and I could run 100+ of them at the same time.</p></div></article>
          <article><span>02</span><div><h2>Handoffs that work while you sleep</h2><p><strong>What I did:</strong> I gave each stage its own status in Trello: draft, review, QA, and delivery. When a reviewer in APAC finished, the task moved straight to a QA specialist in EMEA.</p><p><strong>What changed:</strong> Everyone could see where every project stood. Work kept moving overnight, and we delivered 98% of projects on or before the deadline.</p></div></article>
          <article><span>03</span><div><h2>Problems flagged in minutes, not hours</h2><p><strong>What I did:</strong> I added a &quot;Translation Blocker&quot; trigger. When a vendor flagged a missing file or unclear context, Trello created an urgent task for the account lead right away.</p><p><strong>What changed:</strong> Stuck jobs no longer went unnoticed. We spent less time chasing people and fixed issues much faster.</p></div></article>
          <article><span>04</span><div><h2>Onboarding new hires faster</h2><p><strong>What I did:</strong> I turned our internal processes and account rules into Trello templates. Each one came with training videos and checklists.</p><p><strong>What changed:</strong> New hires learned faster, and onboarding time dropped by 40%.</p></div></article>
        </div>
        <figure className="transperfect-board">
          <img src="/transperfect-trello-board.png" alt="Trello board titled Global Localization Pipeline and Timezone Sync, with columns for intake, production, a four-stage QA pipeline, timezone handoffs, and escalations" loading="lazy" decoding="async" width={2419} height={1512} />
          <figcaption>The live board · Intake, production, QA, timezone handoffs, and escalations</figcaption>
        </figure>
      </section>

      <section className="ai-section">
        <p className="ai-label">How I kept it running</p>
        <div className="ai-copy">
          <p>A system only works if someone keeps it clean. So I set a regular routine inside Trello.</p>
          <h2>The routine</h2>
          <h3>Daily and weekly</h3>
          <ul><li>Check the escalation board for open blockers and missing files.</li><li>Make sure each new request goes to the right native-speaking vendor.</li></ul>
          <h3>As needed</h3>
          <ul><li>Add newly approved vendors and updated rates.</li><li>Change task paths when a client changes the scope or deadline.</li></ul>
          <h3>Every quarter</h3>
          <ul><li>Remove inactive users to keep license costs down.</li><li>Check links to Google Drive and Slack so no automation breaks.</li><li>Review spend against each account&apos;s budget with Finance and Production.</li></ul>
          <h3>Every year</h3>
          <ul><li>Review how company security rules apply to boards shared with outside vendors.</li></ul>
        </div>
      </section>

      <section className="ai-results ai-section">
        <p className="ai-label">The results</p>
        <div className="ai-copy">
          <p>Here is what changed once the whole team worked from this system:</p>
          <div className="ai-metrics-grid">
            <article><strong>98%</strong><h2>On-time delivery</h2><p>Almost every project shipped on or before the deadline, across all regions.</p></article>
            <article><strong>20%</strong><h2>Fewer errors</h2><p>Required QA steps in every project cut production errors. Lead times also dropped by 15%.</p></article>
            <article><strong>40%</strong><h2>Faster onboarding</h2><p>Clear templates replaced scattered training folders.</p></article>
            <article><strong>38%</strong><h2>Lower costs</h2><p>Better vendor assignments and tighter tracking cut production costs.</p></article>
          </div>
        </div>
      </section>

      <section className="ai-section">
        <p className="ai-label">What I learned</p>
        <div className="ai-copy">
          <ul>
            <li><strong>Plan for timezones:</strong> You can&apos;t rely on live calls across CET, MDT, and IST. Your system has to pass work along while you sleep.</li>
            <li><strong>Protect your templates:</strong> Good templates are how you grow without losing quality or going over budget.</li>
          </ul>
        </div>
      </section>

      <section className="ai-section transperfect-client">
        <p className="ai-label">Client</p>
        <div className="ai-copy">
          <blockquote>“Divine is an outstanding Operations Assistant who consistently delivers excellence. During our time working together at TransPerfect, I was continually impressed by his organizational skills and his ability to handle complex operational challenges with ease. He acts as a central pillar for the team, keeping communication fluid and workflows running smoothly. I highly recommend Divine for any fast-paced operations role.”</blockquote>
          <cite>— TransPerfect colleague</cite>
        </div>
      </section>

      <CtaSection kicker="Running global projects?" title={<>Let&apos;s improve<br /><em>your operations.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
