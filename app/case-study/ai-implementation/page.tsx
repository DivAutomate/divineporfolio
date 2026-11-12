import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ZoomableFigure } from '@/components/zoomable-figure'

export const metadata: Metadata = {
  title: 'AI Implementation Case Study',
  description: 'How I built two n8n workflows that find property deals, contact brokers, and check title documents with AI.',
  alternates: { canonical: '/case-study/ai-implementation' },
}

const imageA = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwUX2SlHQXQryAa1WvSr4jYTZjiiUY.png'
const imageB = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4LoJUwtvNQQoeVgO7fffpoVuSiLToa.png'

export default function AIImplementationCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Summary' },
          { id: 'problem', label: 'Problem' },
          { id: 'build', label: 'How it works' },
          { id: 'decisions', label: 'Key decisions' },
          { id: 'results', label: 'Results' },
        ]}
      />
      <main id="main-content" className="ai-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · AI implementation</p>
        <h1>AI Implementation <em>&amp; Workflow Automation</em></h1>
        <p className="ai-lead">I built a set of n8n workflows that find property deals, score them, email brokers, and check title documents. It cut document review time by 80%.</p>
      </header>

      <section id="overview" className="ai-summary ai-section">
        <p className="ai-label">Summary</p>
        <div>
          <p>Finding property deals in Lagos, Nigeria is hard. Listings are scattered, brokers are slow to reply, and fake titles are a real risk.</p>
          <p>I built two connected n8n workflows to handle this. The first pulls listings and uses an AI analyst to keep only deals in the ₦50m–₦350m range in the right neighborhoods. Then it emails the broker. The second uses an AI legal analyst to check key title documents, like the Certificate of Occupancy and Governor&apos;s Consent, for warning signs.</p>
        </div>
      </section>

      <section id="problem" className="ai-friction ai-section">
        <p className="ai-label">The problem</p>
        <div className="ai-friction-grid">
          <article><b>01</b><h2>Messy data</h2><p>Deals were found by copying listings from cluttered property sites by hand. The result was messy, inconsistent spreadsheets.</p></article>
          <article><b>02</b><h2>Slow outreach</h2><p>Writing to each broker took hours. Good deals went to faster buyers.</p></article>
          <article><b>03</b><h2>Legal risk</h2><p>Fake titles, missing signatures, and expired consents all needed careful review. That slowed every deal down.</p></article>
        </div>
      </section>

      <section id="build" className="ai-architecture ai-section">
        <div className="ai-section-intro"><p className="ai-label">How it&apos;s built</p><p>I split the work into two separate workflows. This keeps API limits in check, handles broker replies that come days later, and keeps AI costs down.</p></div>
        <div className="ai-workflow-gallery">
          <ZoomableFigure src={imageA} alt="n8n workflow for finding properties, screening them, and emailing brokers" caption={<>Workflow A · Find, screen, and contact brokers</>} />
          <ZoomableFigure src={imageB} alt="n8n workflow for checking title documents with AI" caption={<>Workflow B · Check documents and flag legal risks</>} />
        </div>
        <div className="ai-stack"><p className="ai-label">Tools used</p><ul>
          <li><strong>Workflow engine</strong><span>n8n</span></li>
          <li><strong>Data collection &amp; cleanup</strong><span>HTTP requests · Custom JavaScript</span></li>
          <li><strong>Deal screening</strong><span>GPT-4 via LangChain</span></li>
          <li><strong>Legal review</strong><span>Anthropic Claude via LangChain</span></li>
          <li><strong>Database &amp; CRM</strong><span>Airtable · Two linked bases</span></li>
          <li><strong>Email</strong><span>Gmail API</span></li>
        </ul></div>
      </section>

      <section id="decisions" className="ai-highlights ai-section">
        <p className="ai-label">Key decisions</p>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>Two AI agents, each with one job</h2><p>Sending raw listings to an expensive model wastes money. So I split the work in two:</p><ul>
            <li><strong>Agent 1 (GPT-4, screening)</strong> Reads the listing, checks the price range (₦50M–₦350M), and drops weak deals fast.</li>
            <li><strong>Agent 2 (Claude, legal review)</strong> Runs only when a broker sends back title documents. It checks for flaws, title problems, and expired dates.</li>
          </ul></div></article>
          <article><span>02</span><div><h2>No duplicate emails to brokers</h2><p>The workflow runs on a schedule, so it could email the same broker twice. To stop this, it first checks Airtable. If a deal already has an active or pending outreach status, it skips the email.</p></div></article>
          <article><span>03</span><div><h2>Matching late replies to the right deal</h2><p>Brokers often reply days later. When they do, Workflow B starts. A small JavaScript step reads the email subject and body, finds the matching property in Airtable, and saves the legal result there: VERIFIED, CAUTION, or REJECT.</p></div></article>
        </div>
      </section>

      <section id="results" className="ai-results ai-section"><p className="ai-label">Results</p><div className="ai-metrics">
        <div><strong>80%</strong><span>Less review time</span><p>Reviewing title deeds, survey maps, and contracts now takes a fraction of the time.</p></div>
        <div><strong>95%</strong><span>Clean data</span><p>Cleanup scripts catch incomplete or badly formatted listings before they reach the AI.</p></div>
        <div><strong>100+</strong><span>Listings handled</span><p>Paging and rate-limit controls let it handle hundreds of listings at once.</p></div>
      </div></section>

      <CtaSection kicker="Have a complex operational workflow holding you back?" title={<>Let&apos;s automate<br /><em>the slow parts.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
