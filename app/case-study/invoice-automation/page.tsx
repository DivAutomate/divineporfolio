import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Invoice Automation Case Study',
  description: 'Case study: enterprise invoice processing with Vision OCR, LLM extraction, approval routing, ERP sync, and a full audit trail.',
  alternates: { canonical: '/case-study/invoice-automation' },
}

const workflowImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ttUKjqUtOK35Q4GcXFmAfp9ceFifCy.png'

export default function InvoiceAutomationCaseStudy() {
  return (
    <main className="ai-case-study invoice-case-study" id="top">
      <nav className="ai-case-nav" aria-label="Case study navigation">
        <a href="/work" className="ai-back"><ArrowLeft size={15} /> Back to portfolio</a>
        <a href="/" className="ai-back">Home <ArrowUpRight size={15} /></a>
            </nav>

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · AI implementation</p>
        <h1>Enterprise Invoice Processing <em>&amp; Accounts Payable Automation</em></h1>
        <p className="ai-lead">How I engineered an event-driven n8n workflow pipeline that cut invoice cycle times from 40 minutes to under 10 minutes with a 70% straight-through processing rate.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">Executive summary</p>
        <div><p>Manual Accounts Payable workflows are a massive operational bottleneck for growing businesses. Teams spend hours reading scanned document images, manually typing data into accounting software, hunting down managers for email approvals, and risking costly duplicate payment errors.</p><p>To solve this, I built an end-to-end autonomous AP Automation Engine using n8n. The system ingests invoices directly from Google Drive, leverages a combined Vision OCR and LLM data extraction layer, runs deterministic validation checks against an audit ledger, handles automated tier-based human approvals, and pushes validated records seamlessly into enterprise ERP systems.</p></div>
      </section>

      <section className="ai-friction ai-section">
        <p className="ai-label">The problem &amp; financial risks</p>
        <div className="ai-friction-grid"><article><b>01</b><h2>Massive time sink</h2><p>AP teams averaged 40 minutes per invoice validating data, manually cross-checking line items, and tracking down manager sign-offs.</p></article><article><b>02</b><h2>High document error rates</h2><p>Scanned text, varying layout templates, and skewed invoice photos caused constant data-entry errors and inaccurate bookkeeping.</p></article><article><b>03</b><h2>Compliance exposure</h2><p>High-value invoices lacked a centralized, tamper-proof audit history to verify who approved an invoice before ledger processing.</p></article></div>
      </section>

      <section className="ai-architecture ai-section">
        <div className="ai-section-intro"><p className="ai-label">System architecture &amp; tech stack</p><p>The production-ready architecture flows from intake to ERP with parallel error handling and an asynchronous callback loop for human intervention.</p></div>
        <figure className="invoice-workflow"><img src={workflowImage} alt="n8n workflow for enterprise invoice processing and accounts payable automation" decoding="async" fetchPriority="high" /><figcaption>Workflow · Invoice intake, OCR, validation, approvals, ERP sync, and audit</figcaption></figure>
        <div className="ai-stack"><p className="ai-label">Technical blueprint breakdown</p><ul><li><strong>Orchestration engine</strong><span>n8n · Event-driven webhooks, error routing, and execution hooks</span></li><li><strong>Intake &amp; ledger layer</strong><span>Google Drive API · Google Sheets API</span></li><li><strong>Document AI layer</strong><span>Vision OCR · Constrained LLM extraction prompts</span></li><li><strong>Approval &amp; messaging</strong><span>Slack Webhook API · Webhook-Wait nodes</span></li><li><strong>Accounting / ERP layer</strong><span>Zoho Books · Odoo · ERPNext REST connectors</span></li></ul></div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">Key engineering feats &amp; implementation highlights</p>
        <div className="ai-highlight-list"><article><span>01</span><div><h2>Vision OCR + LLM hybrid extraction</h2><p>Instead of relying on rigid template-based OCR, the system extracts raw text and structural components using Vision OCR, then passes the payload to an LLM constrained to a strict JSON schema. This maps fields like vendor name, invoice total, tax ID, and due date across arbitrary multinational layouts.</p></div></article><article><span>02</span><div><h2>Dual-layer fraud &amp; duplicate prevention</h2><p>The workflow checks invoice number and vendor name against the audit history before writing to accounting software. Exact matches trigger a duplicate event, alert finance in Slack, and move the file to an exception queue. Low-confidence extraction is diverted from auto-approval.</p></div></article><article><span>03</span><div><h2>Asynchronous human-in-the-loop routing</h2><p>High-risk bills pause in an n8n webhook-wait container while a single-use approve or reject link is posted into Slack. Once clicked, the workflow resumes, logs manager metadata, transforms the payload, and writes the validated bill to the ERP.</p></div></article></div>
      </section>

      <section className="ai-results ai-section"><p className="ai-label">Measurable metrics &amp; business outcomes</p><div className="ai-metrics"><div><strong>75%</strong><span>Cycle time reduction</span><p>Average invoice processing dropped from 40 minutes of manual handling to under 10 minutes total.</p></div><div><strong>70%</strong><span>Straight-through processing</span><p>Clean standard-format invoices pass extraction, validation, and accounting gates without human clicks.</p></div><div><strong>89%</strong><span>LLM reading accuracy</span><p>Reliable data capture across challenging unstructured PDF scans and camera images.</p></div></div></section>

      <section className="ai-cta"><p className="ai-kicker">Ready to build a resilient system?</p><h2>Let&apos;s make your<br /><em>next workflow intelligent.</em></h2></section>
      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
