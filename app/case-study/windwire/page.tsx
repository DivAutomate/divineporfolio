import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ZoomableFigure } from '@/components/zoomable-figure'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Generation Case Study',
  description: 'How Sales Navigator and Apollo campaigns brought 231 replies and 3 clients in 12 weeks.',
  alternates: { canonical: '/case-study/windwire' },
}

const metrics = [
  ['1,975+', 'Prospects sourced'],
  ['950', 'Connections made'],
  ['11.7%', 'Reply rate, 231 replies'],
  ['3/wk', 'Discovery calls booked'],
  ['3', 'Clients closed'],
]

export default function CaseStudyPage() {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'At a glance' },
          { id: 'challenge', label: 'Challenge' },
          { id: 'strategy', label: 'Approach' },
          { id: 'campaign-1', label: 'Results' },
          { id: 'playbook', label: 'Playbook' },
          { id: 'sample-work', label: 'Sample work' },
        ]}
      />
      <main id="main-content" className="case-study-page windwire-case-study">

      <header className="windwire-hero">
        <div className="windwire-brand-mark" aria-hidden="true">W</div>
        <p className="windwire-eyebrow">WindWire Studio · Outbound Growth &amp; Revenue Operations Case Study</p>
        <h1>How <em>1,975 Prospects</em> and 3 Discovery Calls a Week Became 3 Clients</h1>
        <div className="windwire-hero-meta"><p><span>Client</span>Founder of WindWire Studio</p><p><span>Timeline</span>12 weeks</p></div>
        <p className="windwire-dek">WindWire Studio designs and builds digital products. Its clients are early-stage founders, fast-growing startups, AI companies, digital health teams, and agencies that need a reliable design and development partner.</p>
      </header>

      <section className="windwire-testimonial section-shell">
        <p className="windwire-label">Client partner</p>
        <blockquote>&ldquo;Divine didn&apos;t just send more outreach. He gave us a reliable way to find the right companies, start relevant conversations, and turn our lead expectations into a real sales pipeline.&rdquo;</blockquote>
        <p className="windwire-attribution">— Founder of WindWire Studio</p>
      </section>

      <section className="windwire-section section-shell" id="overview">
        <div className="windwire-section-intro"><p className="windwire-label">At a glance</p><h2>From waiting on referrals to <em>a pipeline you can count on.</em></h2></div>
        <div className="windwire-copy">
          <p><strong>The problem:</strong> WindWire got most of its work from referrals. Some months were busy. Others were empty.</p>
          <p><strong>What stood in the way:</strong> LinkedIn Sales Navigator&apos;s industry filters were wrong more than 40% of the time. Researching each founder by hand took too long.</p>
          <p><strong>Who we targeted:</strong> Founders and product teams at startups, AI companies, and digital health firms who need design and MVP work. We also targeted agencies and consultants who could send WindWire repeat referrals.</p>
          <p><strong>What I did:</strong> I set up the email systems so messages landed in inboxes, not spam. I built one list in Sales Navigator and one in Apollo. I automated the research with Apollo and Claude. Then I ran outreach on LinkedIn and over email.</p>
        </div>
      </section>

      <section className="windwire-section windwire-challenge section-shell" id="challenge">
        <div className="windwire-section-intro"><p className="windwire-label">01. The challenge</p><h2>Too many referrals, <em>not enough control.</em></h2></div>
        <div className="windwire-copy">
          <p>WindWire does strong work. But relying on referrals meant they couldn&apos;t plan ahead. They needed a way to find the right companies, start real conversations, and book discovery calls every week.</p>
          <p>The first problem was bad data. The built-in filters couldn&apos;t be trusted, so we had to do better research before sending a single message.</p>
        </div>
      </section>

      <section className="windwire-section windwire-strategy section-shell" id="strategy">
        <div className="windwire-section-intro"><p className="windwire-label">02. How I built it</p><h2>Email setup, research, and outreach working <em>together.</em></h2></div>
        <div className="windwire-copy">
          <p>Over 12 weeks, I built the system in three parts.</p>
          <h3>Part A: Getting emails into the inbox</h3>
          <p>I set up sending domains with SPF, DKIM, and DMARC records. This protected WindWire&apos;s reputation and kept emails out of spam.</p>
          <h3>Part B: Building a better prospect list</h3>
          <p>I built campaign 1 inside Sales Navigator, where the searches, the list and the requests all live. Each company was checked against Clutch, ZoomInfo and Google before it went in. Campaign 2 started in Apollo, and Claude read each company before a message was written. That gave us a combined pool of <strong>nearly 2,000 highly targeted, verified prospects</strong>.</p>
          <h3>Part C: Automating the research</h3>
          <p>For campaign 2, Apollo and Claude pulled each prospect&apos;s website copy, recent product news, and podcast interviews. That cut manual research time by <strong>60%</strong>. Every message followed one rule: <strong>90% about them, 10% about us.</strong></p>
          <p className="windwire-example"><strong>Example opening line:</strong> &ldquo;Heard the interview you gave on the tech podcast about scaling distributed product teams. I appreciated your insights on choosing development sprints based on immediate user feedback.&rdquo;</p>
        </div>
      </section>

      <section className="windwire-metrics section-shell" aria-label="Campaign results">
        <div className="windwire-section-heading"><p className="windwire-label">Campaign results</p><p>12 weeks · US, UK + emerging global markets</p></div>
        <div className="windwire-metric-grid">{metrics.map(([value, label]) => <div className="windwire-metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="windwire-breakdown section-shell" id="campaign-1"><p className="windwire-label">03. Campaign results</p><ul>
        <li><strong>Campaign 1 · Agency partners and founders</strong> This campaign ran entirely in Sales Navigator. We built the list in the same place we sent the requests: consulting firms, development agencies, founders, and product studios in the U.S. and Canada.</li>
        <li><span className="ww-hl"><strong>1,125</strong></span> prospects sourced. <span className="ww-dim">1,063</span> requests sent.</li>
        <li><span className="ww-hl"><strong>540</strong></span> connected, a <span className="ww-hl"><strong>50.8% acceptance rate</strong></span>.</li>
        <li><span className="ww-hl"><strong>136</strong></span> replied, a <span className="ww-hl"><strong>12.1% reply rate</strong></span>.</li>
              </ul></section>

      <section className="windwire-breakdown section-shell campaign-2-breakdown" id="campaign-2"><ul>
        <li><strong>Campaign 2 · AI and digital health startups</strong> We built this list in Apollo and used Claude to research each company before writing to them. Outreach started with cold email, and whoever stayed quiet got a LinkedIn request as the follow-up.</li>
        <li><span className="ww-hl"><strong>850</strong></span> startups sourced and matched to WindWire&apos;s ideal customer.</li>
        <li><span className="ww-hl"><strong>850</strong></span> LinkedIn follow-up requests sent.</li>
        <li><span className="ww-hl"><strong>410</strong></span> connected, a <span className="ww-hl"><strong>48.2% acceptance rate</strong></span>.</li>
        <li><span className="ww-hl"><strong>95</strong></span> replied, an <span className="ww-hl"><strong>11.2% reply rate</strong></span>.</li>
        <li>We looked for teams hiring engineers or launching new AI and health products.</li>
        <li><strong>Both campaigns together:</strong> 1,975 prospects sourced, 950 connections, 231 replies, an <span className="ww-hl"><strong>11.7% reply rate</strong></span>.</li>
        <li>Acceptance rate counts requests that became connections. Reply rate counts replies over the prospects sourced in that campaign.</li>
      </ul></section>

      <section className="windwire-playbook section-shell" id="playbook">
        <div className="windwire-section-intro"><p className="windwire-label">The playbook</p><h2>Three steps that made outreach <em>feel human.</em></h2></div>
        <div className="windwire-steps">
          <article><span>01</span><h3>Step 1: Build a list worth contacting</h3><p>The standard filters were wrong over 40% of the time. So I checked companies against Clutch, ZoomInfo, and Google. That left a clean list of startups, AI companies, and health teams with a real reason to need WindWire.</p></article>
          <article><span>02</span><h3>Step 2: Open with curiosity, not a pitch</h3><p>Each first message read like the start of a real conversation. Specific enough to get noticed, light enough to invite a reply.</p></article>
          <article><span>03</span><h3>Step 3: Let automation do the research</h3><p>Apollo and Claude did the digging and cut manual work by 60%. Most of each message showed we understood their business. Only a small part was about WindWire.</p><p className="windwire-example"><strong>Example:</strong> &ldquo;I noticed your team is expanding the AI product line while the onboarding experience is still being described as an MVP. That gap is exactly where a focused product sprint can smooth out user retention before your main launch.&rdquo;</p></article>
        </div>
      </section>

      <section className="windwire-replies section-shell"><p className="windwire-label">04. Real replies · 4 of 231</p><h2>Straight from the <em>campaign inbox.</em></h2><div className="windwire-reply-list"><p>&ldquo;This is relevant. Can you send over your Calendly?&rdquo;</p><p>&ldquo;We&apos;re looking for exactly this kind of product partner. Are you free next week?&rdquo;</p><p>&ldquo;Thanks for the thoughtful note. Let&apos;s find a time to talk.&rdquo;</p><p>&ldquo;Good to connect! Send over some times for next week and I&apos;ll set it up.&rdquo;</p></div></section>

      <section className="windwire-bottom-line section-shell"><p className="windwire-label">05. The bottom line</p><h2>Good data, good timing, and honest messages gave WindWire <em>a pipeline it can rely on.</em></h2><p>The founder no longer depends on bad filters or hours of manual research. One campaign ran entirely in Sales Navigator, the other was built in Apollo and researched with Claude. Together they turned 1,975 prospects into 231 replies from 950 connections, kept 3 discovery calls a week on the calendar, and closed 3 clients in 12 weeks.</p></section>

      <section className="windwire-media section-shell" id="sample-work">
        <p className="windwire-label">Sample work</p>
        <div className="windwire-media-gallery">
          <ZoomableFigure
            src="/images/sample-work/instantly-sending.webp"
            alt="Instantly sending view: 600 first emails sent and 99.5% delivered across seven segments"
            width={1624}
            height={536}
            caption="What 600 first emails across seven segments look like. One daily cap per segment, 99.5% delivered."
          />
          <ZoomableFigure
            src="/images/sample-work/instantly-leads.webp"
            alt="Instantly lead list for a telehealth campaign showing 20,410 people across 16,893 companies, with country, company size, domain, city, phone and email columns"
            width={1600}
            height={1000}
            caption="What the pool behind one campaign looks like. Company names stay visible, contact names, emails and phone numbers are masked."
          />
        </div>
      </section>

      <CtaSection kicker="Need more qualified leads?" title={<>Let&apos;s build your <em>next pipeline.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
