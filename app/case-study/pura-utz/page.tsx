import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'SEO & E-Commerce Case Study',
  description: 'Scaling a small artisan brand with integrated Shopify SEO and Meta Ads tuning.',
  alternates: { canonical: '/case-study/pura-utz' },
}

const frameworks = [
  {
    number: '01',
    title: 'Foundational Growth & Store Optimization',
    eyebrow: 'E-Commerce Digital Marketer',
    items: [
      ['Customer Retention', 'Designed and deployed automated post-purchase email workflows and mapped out direct landing pages to turn one-time buyers into repeat customers.'],
      ['Early Paid Acquisition', 'Structured initial ad tests on Google Shopping and Instagram. By prioritizing broad audience targeting, I kept the Cost Per Acquisition (CPA) low despite lean startup budgets.'],
      ['Collection URL Architecture', "Organized dozens of unmapped product categories. I established clean nested URL strings and built an internal linking system to raise the store's baseline domain authority."],
    ],
  },
  {
    number: '02',
    title: 'Technical SEO & Catalog Infrastructure',
    eyebrow: 'Shopify SEO & Performance Specialist',
    items: [
      ['Image Asset Optimization', 'Crawled the storefront using Screaming Frog to isolate and batch-compress over 1,200 heavy product images. Implemented an image alt-tagging naming framework optimized for colors, shapes, and textures (e.g., "hand-beaded glass fruit earrings red strawberry").'],
      ['Metadata & Indexing Clean-up', 'Corrected duplicate content errors natively caused by Shopify’s variant URL structures. Wrote keyword-dense meta titles and descriptions across all primary collections.'],
      ['Search Intent Mapping', 'Used Ahrefs and SEMrush to run deep competitor gap reviews. Mapped out long-tail keywords like "artisan handmade glass jewelry" and "sustainable beaded statement bags" across dedicated blogs to capture traffic from larger mass-market competitors.'],
    ],
  },
  {
    number: '03',
    title: 'Full-Funnel Paid Scaling & Daily Administration',
    eyebrow: 'Paid media and storefront operations',
    items: [
      ['Account Restructuring', 'Re-engineered the Meta Ads account away from scattered boosted posts into a consolidated CBO (Campaign Budget Optimization) architecture.'],
      ['Creative Testing', 'Deployed top-of-funnel (TOF) ads utilizing high-quality user-generated content (UGC). Connected the live Shopify product feed to Advantage+ catalog ads to dynamically retarget bottom-of-funnel (BOF) site visitors.'],
      ['Storefront Administration', 'Maintained 100% ownership of basic front-end updates, including theme tweaks, uploading seasonal promotional banners via Canva, and staging new product drops.'],
    ],
  },
]

export default function PuraUtzCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <main className="ai-case-study support-case-study pura-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study: Scaling a Micro-DTC Artisan Brand via Integrated Shopify SEO &amp; Meta Ads Tuning</p>
        <h1>Pura Utz <em>{' E-Commerce SEO Growth'}</em></h1>
        <p className="ai-lead">Pura Utz creates hand-beaded glass accessories and jewelry crafted by a collective of Mayan artisans in Guatemala. Operating with a tiny core team, the storefront initially struggled with low search visibility, massive image file weights that slowed down mobile page speeds, and a completely cold, unoptimized ad account.</p>
      </header>

      <section className="ai-summary ai-section">
        <p className="ai-label">Brand profile</p>
        <div>
          <p><strong>Brand:</strong> Pura Utz</p>
          <p><strong>Platform:</strong> Shopify</p>
          <p><strong>Niche:</strong> Artisan Beaded Jewelry &amp; Accessories</p>
         
          <p>Over a continuous tenure—moving from foundational site health as an E-Commerce Digital Marketer to aggressive optimization as the Shopify SEO &amp; Performance Marketing Specialist—I scaled the storefront into an efficient direct-to-consumer (DTC) channel. By restructuring their Shopify architecture, executing a comprehensive technical SEO campaign, and launching a structured Meta Ads strategy, the store achieved a 350% increase in organic search traffic, a 3.5x blended ROAS, and a 200% increase in total store revenue.</p>
        </div>
      </section>

      <section className="ai-section pura-longform">
        <p className="ai-label">The challenge</p>
        <div className="ai-copy">
          <p>The 1–2 person founding team spent all their bandwidth on design workflows, artisan logistics, and community ethics. This left the brand with major digital bottlenecks across two major phases:</p>
          <ul>
            <li><strong>The Digital Marketer Phase:</strong> The store lacked early-stage digital infrastructure. Collection navigation was unorganized, checkout abandonment was high, and marketing relied on scattered social posts that failed to generate predictable monthly order volume.</li>
            <li><strong>The SEO &amp; Performance Specialist Phase:</strong> As the product catalog grew, the variant-heavy listings suffered from extreme image bloat, tanking mobile loading times. A complete lack of indexing and metadata left the store invisible to high-intent product searches.</li>
          </ul>
        </div>
      </section>

      <section className="ai-highlights ai-section">
        <p className="ai-label">The strategy &amp; execution</p>
        <div className="ai-highlight-list">
          {frameworks.map((framework) => (
            <article key={framework.title}><span>{framework.number}</span><div><h2>{framework.title}</h2><p className="pura-eyebrow">{framework.eyebrow}</p>{framework.items.map(([label, text]) => <p key={label}><strong>{label}:</strong> {text}</p>)}</div></article>
          ))}
        </div>
      </section>

      <section className="ai-results ai-section"><p className="ai-label">The results &amp; performance metrics</p><div className="pura-table-wrap"><table><thead><tr><th>Metric</th><th>Before Optimization</th><th>After Optimization</th><th>Net Impact</th></tr></thead><tbody><tr><td>Monthly Organic Traffic</td><td>~2,500 Unique Visitors</td><td>~11,250 Unique Visitors</td><td>+350% Growth</td></tr><tr><td>Total Online Store Revenue</td><td>Previous Portfolio Baseline</td><td>2x Previous Baseline</td><td>+200% YOY Growth</td></tr><tr><td>Meta Blended ROAS</td><td>&lt;1.1x (Negative ROI)</td><td>3.5x Sustained ROAS</td><td>Profitable Scale</td></tr><tr><td>E-Commerce Conversion Rate</td><td>1.8%</td><td>2.9%</td><td>+1.1% Increase</td></tr><tr><td>Cart Abandonment Rate</td><td>68%</td><td>53%</td><td>15% Recovery Rate</td></tr></tbody></table></div></section>

      <section className="ai-section pura-longform"><p className="ai-label">Key takeaways</p><div className="ai-copy"><ol><li><strong>Google Images as a Revenue Driver:</strong> Within months of executing the mass alt-tagging framework, over 22% of organic conversions originated directly from Google Image search results for long-tail beadwork queries.</li><li><strong>Lean Team Longevity:</strong> By handling everything from email flows and ad scaling to backend technical SEO and layout administration under a single growth role, the 1–2 person founding team was completely freed from digital operations, allowing them to focus entirely on expanding their artisan network.</li></ol></div></section>

      <section className="ai-section pura-tools"><p className="ai-label">Tools used</p><div className="ai-copy"><ul><li><strong>E-Commerce Platform:</strong> Shopify (Liquid Theme Framework)</li><li><strong>SEO Platforms:</strong> SEMrush, Ahrefs, Screaming Frog SEO Spider</li><li><strong>Paid Media &amp; Tracking:</strong> Meta Ads Manager, Google Ads (PMax), GA4, Google Search Console</li><li><strong>Creative Production:</strong> Canva</li></ul></div></section>

      <CtaSection kicker="Need clearer growth operations?" title={<>Let&apos;s improve<br /><em>the path to purchase.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
