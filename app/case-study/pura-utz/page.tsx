import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'SEO & E-Commerce Case Study',
  description: 'How SEO, cleaner ads and daily store admin doubled revenue for a small artisan jewelry brand.',
  alternates: { canonical: '/case-study/pura-utz' },
}

const frameworks = [
  {
    number: '01',
    title: 'Make the store easier to buy from',
    eyebrow: 'Store setup and repeat buyers',
    items: [
      ['Post-purchase emails', 'I set up automated emails after each order and built landing pages that matched where each customer came from, so a first-time buyer had a reason to come back.'],
      ['Early ad tests', 'I ran the first Google Shopping and Instagram tests with broad audiences. On a small budget, that kept the cost per acquisition low instead of spending on narrow guesses.'],
      ['Collection structure', 'Dozens of product categories were never mapped. I rebuilt them as clean nested URLs and linked them to each other, which gave the store a stronger starting point in search.'],
    ],
  },
  {
    number: '02',
    title: 'Fix what search could not see',
    eyebrow: 'Shopify SEO and site speed',
    items: [
      ['Image weight and alt text', 'I crawled the storefront with Screaming Frog, then compressed and alt-tagged over 1,200 product images. Alt text described the actual product, for example "hand-beaded glass fruit earrings red strawberry," so images could rank on their own.'],
      ['Duplicate pages and metadata', 'Shopify creates duplicate pages for every product variant. I cleaned those up and wrote meta titles and descriptions for every main collection.'],
      ['Long-tail keywords', 'Using Ahrefs and SEMrush, I compared the store against larger competitors and mapped terms like "artisan handmade glass jewelry" and "sustainable beaded statement bags" to dedicated blog posts.'],
    ],
  },
  {
    number: '03',
    title: 'Rebuild the ads, then keep the store moving',
    eyebrow: 'Paid media and store admin',
    items: [
      ['Campaign structure', 'The Meta account was a pile of boosted posts. I rebuilt it into one consolidated campaign budget structure so spend went to the ads that were actually selling.'],
      ['Creative and retargeting', 'I ran customer-made content at the top of the funnel, and connected the Shopify product feed to Advantage+ catalog ads so visitors saw the products they had already looked at.'],
      ['Daily store admin', 'I handled front-end changes: theme tweaks, seasonal banners made in Canva, and staging each new product drop.'],
    ],
  },
]

export default function PuraUtzCaseStudy() {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyNav
        sections={[
          { id: 'overview', label: 'Brand' },
          { id: 'challenge', label: 'Challenge' },
          { id: 'strategy', label: 'Strategy' },
          { id: 'results', label: 'Results' },
          { id: 'takeaways', label: 'Takeaways' },
        ]}
      />
      <main id="main-content" className="ai-case-study support-case-study pura-case-study">

      <header className="ai-case-hero">
        <p className="ai-kicker">Case study · e-commerce growth</p>
        <h1>More search traffic, cleaner ads, <em>double the revenue.</em></h1>
        <p className="ai-lead">Pura Utz makes hand-beaded glass jewelry with a collective of Mayan artisans in Guatemala. A team of one or two handled design, production and community work, so the store came last. I took over SEO, paid ads and daily store admin, and built the channel back up.</p>
      </header>

      <section id="overview" className="ai-summary ai-section">
        <p className="ai-label">Brand profile</p>
        <div>
          <p><strong>Brand:</strong> Pura Utz</p>
          <p><strong>Platform:</strong> Shopify</p>
          <p><strong>Niche:</strong> Hand-beaded glass jewelry and accessories</p>
          <p>I worked with the brand in two stages. First I fixed the store basics: collections, checkout and repeat buyers. Then I went after the search and ad problems that appeared as the catalog grew. Over that time organic search traffic rose 350%, online revenue doubled, and Meta ads went from losing money to a 3.5x return.</p>
        </div>
      </section>

      <section id="challenge" className="ai-section pura-longform">
        <p className="ai-label">The challenge</p>
        <div className="ai-copy">
          <p>With a team this small, the store was always the last thing on the list. Two problems stood out at different stages.</p>
          <ul>
            <li><strong>The basics:</strong> Collections were unorganized, checkout was leaking buyers, and marketing was a set of scattered social posts that never turned into steady monthly orders.</li>
            <li><strong>The catalog:</strong> Every product had many variants, and the images were so heavy that mobile pages crawled. With almost no metadata or indexing, the store was invisible to high-intent product searches.</li>
          </ul>
        </div>
      </section>

      <section id="strategy" className="ai-highlights ai-section">
        <p className="ai-label">The strategy &amp; execution</p>
        <div className="ai-highlight-list">
          {frameworks.map((framework) => (
            <article key={framework.title}><span>{framework.number}</span><div><h2>{framework.title}</h2><p className="pura-eyebrow">{framework.eyebrow}</p>{framework.items.map(([label, text]) => <p key={label}><strong>{label}:</strong> {text}</p>)}</div></article>
          ))}
        </div>
      </section>

      <section id="results" className="ai-results ai-section"><p className="ai-label">The results &amp; performance metrics</p><div className="pura-table-wrap"><table><thead><tr><th>Metric</th><th>Before Optimization</th><th>After Optimization</th><th>Net Impact</th></tr></thead><tbody><tr><td>Monthly Organic Traffic</td><td>~2,500 Unique Visitors</td><td>~11,250 Unique Visitors</td><td>+350% Growth</td></tr><tr><td>Total Online Store Revenue</td><td>Previous Portfolio Baseline</td><td>2x Previous Baseline</td><td>+100% Growth</td></tr><tr><td>Meta Blended ROAS</td><td>&lt;1.1x (Negative ROI)</td><td>3.5x Sustained ROAS</td><td>Profitable Scale</td></tr><tr><td>E-Commerce Conversion Rate</td><td>1.8%</td><td>2.9%</td><td>+1.1% Increase</td></tr><tr><td>Cart Abandonment Rate</td><td>68%</td><td>53%</td><td>15% Recovery Rate</td></tr></tbody></table></div></section>

      <section id="takeaways" className="ai-section pura-longform"><p className="ai-label">Key takeaways</p><div className="ai-copy"><ol><li><strong>Google Images became a sales channel.</strong> Within months of the alt-tag work, more than 22% of organic conversions came from Google Images, mostly long-tail beadwork searches that competitors never wrote for.</li><li><strong>One owner for the whole channel helped a tiny team.</strong> Email, ads, technical SEO and store layout sat with one person. That freed the founding team from digital operations so they could put their time into the artisan network.</li></ol></div></section>

      <section className="ai-section pura-tools"><p className="ai-label">Tools used</p><div className="ai-copy"><ul><li><strong>E-Commerce Platform:</strong> Shopify (Liquid Theme Framework)</li><li><strong>SEO Platforms:</strong> SEMrush, Ahrefs, Screaming Frog SEO Spider</li><li><strong>Paid Media &amp; Tracking:</strong> Meta Ads Manager, Google Ads (PMax), GA4, Google Search Console</li><li><strong>Creative Production:</strong> Canva</li></ul></div></section>

      <CtaSection kicker="Need clearer growth operations?" title={<>Let&apos;s improve<br /><em>the path to purchase.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
