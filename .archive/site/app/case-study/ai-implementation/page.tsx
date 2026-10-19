import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Implementation Case Study',
  description: 'Case study: event-driven AI pipelines combining vision OCR, multi-agent scoring, and human-in-the-loop validation connected to CRMs and ERPs.',
  alternates: { canonical: '/case-study/ai-implementation' },
}

const imageA = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwUX2SlHQXQryAa1WvSr4jYTZjiiUY.png'
const imageB = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4LoJUwtvNQQoeVgO7fffpoVuSiLToa.png'

export default function AIImplementationCaseStudy() {
  return (
    <main className="ai-case-study" id="top">
      <nav className="ai-case-nav" aria-label="Case study navigation">
        <a href="/" className="ai-back"><ArrowLeft size={15} /> Divine Jude</a>
        <a href="/#work" className="ai-nav-link">Back to portfolio <ArrowUpRight size={14} /></a>
      </nav>

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · AI implementation</p>
        <h1>Autonomous Real Estate Sourcing <em>&amp; Legal Validation Engine</em></h1>
        <p className="ai-lead">How I built an enterprise-grade multi-agent n8n architecture that automates property procurement and cuts due diligence time by 80%.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">Executive summary</p>
        <div><p>Manual real estate sourcing in fast-paced emerging markets like Lagos, Nigeria is plagued by fragmented data, slow broker communication, and severe legal risks from unverified titles.</p><p>As an AI Implementation Specialist, I engineered a production-ready, two-part autonomous n8n workflow pipeline. The architecture scrapes real estate listings, applies an AI Investment Analyst to enforce structural buy-boxes (₦50m–₦350m budget) in prime neighborhoods, handles automated broker outreach, and deploys a secondary AI Legal Analyst to programmatically verify critical title documents (Certificate of Occupancy, Governor&apos;s Consent) for authenticity and red flags.</p></div>
      </section>

      <section className="ai-friction ai-section">
        <p className="ai-label">The problem &amp; business friction</p>
        <div className="ai-friction-grid"><article><b>01</b><h2>Data fragmentation</h2><p>Sourcing relies on manually scraping chaotic public property platforms, yielding unstructured data and inconsistent spreadsheet logs.</p></article><article><b>02</b><h2>The outreach bottleneck</h2><p>High-potential deals are frequently lost to faster buyers because drafting individual due diligence requests to listing brokers takes hours.</p></article><article><b>03</b><h2>Severe legal compliance risks</h2><p>Fraudulent titles, missing signatures, or expired Governor&apos;s Consents require meticulous manual legal review, delaying the transactional closing sequence.</p></article></div>
      </section>

      <section className="ai-architecture ai-section">
        <div className="ai-section-intro"><p className="ai-label">System architecture &amp; tech stack</p><p>The system splits the workload across two decoupled n8n workflows to optimize API rate-limiting, handle asynchronous email replies, and distribute model costs efficiently.</p></div>
        <div className="ai-workflow-gallery"><figure><img src={imageA} alt="n8n workflow for autonomous real estate sourcing" loading="lazy" decoding="async" /><figcaption>Workflow A · Property sourcing, screening, and broker outreach</figcaption></figure><figure><img src={imageB} alt="n8n workflow for document verification and legal analysis" loading="lazy" decoding="async" /><figcaption>Workflow B · Document verification and legal validation</figcaption></figure></div>
        <div className="ai-stack"><p className="ai-label">Technical blueprint breakdown</p><ul><li><strong>Orchestration engine</strong><span>n8n · Advanced event-driven node architecture</span></li><li><strong>Ingestion &amp; data quality</strong><span>HTTP Client · Custom JavaScript processors</span></li><li><strong>Screening AI</strong><span>GPT-4 via LangChain Framework</span></li><li><strong>Legal review AI</strong><span>Anthropic Claude via LangChain</span></li><li><strong>Database &amp; CRM</strong><span>Airtable API · Dual-base configuration</span></li><li><strong>Communication protocols</strong><span>Gmail Developer API</span></li></ul></div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">Key engineering feats &amp; implementation highlights</p>
        <div className="ai-highlight-list"><article><span>01</span><div><h2>The dual-agent strategy</h2><p>Instead of routing messy, raw scraped data directly to an expensive, long-context model, I built a tiered AI approach:</p><ul><li><strong>Tier 1 (GPT-4 Screening)</strong> A lightweight agent quickly parses basic text descriptions, checks financial parameters (₦50M–₦350M), and filters out low-potential options.</li><li><strong>Tier 2 (Claude Deep Legal Review)</strong> A heavy-duty legal agent triggered only when a human broker responds with complex deeds. Claude&apos;s superior legal reasoning scans the document for structural flaws, title defects, and expired validity dates.</li></ul></div></article><article><span>02</span><div><h2>Idempotency &amp; guardrails (Outreach_Status)</h2><p>To prevent the agent from spamming listing brokers during consecutive automated schedule runs, I injected a conditional boolean routing check into the n8n logic. If a deal already exists in the Airtable CRM with an active or pending outreach status, the email node safely bypasses execution.</p></div></article><article><span>03</span><div><h2>Asynchronous “Smart Merge” JavaScript algorithm</h2><p>When a broker responds to an automated outreach email days later, the inbound webhook triggers Workflow B. I wrote a custom JavaScript Sub-string Matching node that extracts tracking information from the email subject line and content. This programmatically locates the original property row ID inside Airtable and merges the AI&apos;s legal classification (VERIFIED, CAUTION, REJECT) directly back into the live pipeline.</p></div></article></div>
      </section>

      <section className="ai-results ai-section"><p className="ai-label">Measurable performance metrics</p><div className="ai-metrics"><div><strong>80%</strong><span>Time reduction</span><p>The time required to review dense title deeds, survey maps, and purchase contingencies dropped significantly.</p></div><div><strong>95%</strong><span>Clean-data rate</span><p>Custom data-normalization scripts intercept incomplete or poorly formatted listings before they hit the LLM processing nodes.</p></div><div><strong>∞</strong><span>Uncapped scalability</span><p>Automated pagination routines and robust API rate-limit controls enable hundreds of concurrent listings.</p></div></div></section>

      <section className="ai-cta"><p className="ai-kicker">Ready to build a resilient system?</p><h2>Let&apos;s make your<br /><em>next workflow intelligent.</em></h2><a href="/contact">Start a conversation <ArrowUpRight size={16} /></a><a className="ai-more-case" href="/case-study/invoice-automation">View more AI implementation <ArrowUpRight size={16} /></a></section>
      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
