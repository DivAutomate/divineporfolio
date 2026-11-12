import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ZoomableFigure } from '@/components/zoomable-figure'

export const metadata: Metadata = {
  title: 'Invoice Automation Case Study',
  description: 'How I cut invoice processing from 40 minutes to under 10 with an n8n workflow that reads, checks, approves, and records invoices.',
  alternates: { canonical: '/case-study/invoice-automation' },
}

const workflowImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ttUKjqUtOK35Q4GcXFmAfp9ceFifCy.png'

export default function InvoiceAutomationCaseStudy() {
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
      <main id="main-content" className="ai-case-study invoice-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · AI implementation</p>
        <h1>Invoice Processing <em>&amp; Accounts Payable Automation</em></h1>
        <p className="ai-lead">I built an n8n workflow that cut invoice processing from 40 minutes to under 10. Seven in ten invoices now go through without anyone touching them.</p>
      </header>

      <section id="overview" className="ai-summary ai-section">
        <p className="ai-label">Summary</p>
        <div>
          <p>Paying invoices by hand is slow and risky. Teams read scanned files, type the numbers into accounting software, chase managers for approval, and sometimes pay the same bill twice.</p>
          <p>I built a workflow in n8n that does this work. It picks up invoices from Google Drive, reads them with OCR and AI, and checks them against past records. It sends risky ones to a manager for approval, then records clean ones in the accounting system.</p>
        </div>
      </section>

      <section id="problem" className="ai-friction ai-section">
        <p className="ai-label">The problem</p>
        <div className="ai-friction-grid">
          <article><b>01</b><h2>Too much time</h2><p>Each invoice took about 40 minutes to check, match line by line, and get signed off.</p></article>
          <article><b>02</b><h2>Too many errors</h2><p>Blurry scans, different layouts, and crooked photos led to typing mistakes and wrong books.</p></article>
          <article><b>03</b><h2>No clear record</h2><p>For large invoices, there was no reliable record of who approved what before payment.</p></article>
        </div>
      </section>

      <section id="build" className="ai-architecture ai-section">
        <div className="ai-section-intro"><p className="ai-label">How it&apos;s built</p><p>Invoices move from intake to the accounting system in one flow. Errors are caught along the way, and the workflow pauses when a person needs to step in.</p></div>
        <ZoomableFigure
          className="invoice-workflow"
          src={workflowImage}
          alt="n8n workflow for invoice intake, reading, checks, approvals, and accounting sync"
          caption={<>Workflow · Intake, reading, checks, approvals, accounting sync, and audit log</>}
          priority
        />
        <div className="ai-stack"><p className="ai-label">Tools used</p><ul>
          <li><strong>Workflow engine</strong><span>n8n · Webhooks and error handling</span></li>
          <li><strong>Intake &amp; records</strong><span>Google Drive · Google Sheets</span></li>
          <li><strong>Reading invoices</strong><span>Vision OCR · AI with a fixed output format</span></li>
          <li><strong>Approvals</strong><span>Slack · Wait-for-reply steps</span></li>
          <li><strong>Accounting system</strong><span>Zoho Books</span></li>
        </ul></div>
      </section>

      <section id="decisions" className="ai-highlights ai-section">
        <p className="ai-label">Key decisions</p>
        <div className="ai-highlight-list">
          <article><span>01</span><div><h2>OCR and AI working together</h2><p>Template-based OCR breaks when the layout changes. So OCR reads the text first, then AI turns it into a fixed format. It pulls out the vendor name, total, tax ID, and due date, no matter what the invoice looks like.</p></div></article>
          <article><span>02</span><div><h2>Stopping duplicates and fraud</h2><p>Before anything is recorded, the workflow checks the invoice number and vendor against past records. If it finds a match, it alerts finance in Slack and sets the file aside. If the AI isn&apos;t confident in what it read, the invoice skips auto-approval.</p></div></article>
          <article><span>03</span><div><h2>A person approves the risky ones</h2><p>High-risk invoices pause while a one-time approve or reject link goes to Slack. Once a manager clicks, the workflow records who approved it and sends the bill to the accounting system.</p></div></article>
        </div>
      </section>

      <section id="results" className="ai-results ai-section"><p className="ai-label">Results</p><div className="ai-metrics">
        <div><strong>75%</strong><span>Faster processing</span><p>Each invoice went from 40 minutes of manual work to under 10.</p></div>
        <div><strong>70%</strong><span>No human needed</span><p>Clean, standard invoices go from inbox to books with no clicks.</p></div>
        <div><strong>89%</strong><span>Reading accuracy</span><p>Reliable results, even on poor scans and phone photos.</p></div>
      </div></section>

      <CtaSection kicker="Drowning in invoices?" title={<>Let&apos;s automate<br /><em>your back office.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
