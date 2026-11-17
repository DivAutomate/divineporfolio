import type { Metadata } from 'next'
import { CaseStudyHeader } from '@/components/case-study-header'
import { CaseStudyNav } from '@/components/case-study-nav'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'E-Commerce Growth Case Study',
  description: 'How a rebuilt Shopify storefront and a cleaner ad account doubled online revenue for a small artisan jewelry brand.',
  alternates: { canonical: '/case-study/pura-utz' },
}

const frameworks = [
  {
    number: '01',
    title: 'Make the store easier to buy from',
    eyebrow: 'Storefront and repeat buyers',
    items: [
      ['Post-purchase emails', 'I set up automated emails after each order and built landing pages that matched where each customer came from, so a first-time buyer had a reason to come back.'],
      ['Collections people can follow', 'Dozens of product categories had never been mapped. I rebuilt them as clean, linked collections, so a shopper who liked one piece could find the next one without hunting.'],
      ['Early ad tests', 'I ran the first Google Shopping and Instagram tests with broad audiences. On a small budget, that kept the cost per acquisition low instead of spending on narrow guesses.'],
    ],
  },
  {
    number: '02',
    title: 'Make mobile shopping faster',
    eyebrow: 'Page speed and product pages',
    items: [
      ['Image weight', 'Product photos were heavy enough that mobile pages crawled. I compressed over 1,200 product images, and the storefront started loading at a normal speed.'],
      ['Variant cleanup', 'Every product had many variants, and each one repeated the same photos and copy. I rebuilt those pages so shoppers saw one clear product with its options, not a wall of near-identical listings.'],
      ['Checkout friction', 'I mapped the path from product page to payment and tightened the steps where buyers were dropping off. Cart abandonment came down from 68% to 53%.'],
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
        <h1>A small jewelry brand, rebuilt to sell <em>on repeat.</em></h1>
        <p className="ai-lead">Pura Utz makes hand-beaded glass jewelry with a collective of Mayan artisans in Guatemala. A team of one or two handled design, production and community work, so the store always came last. I took over the storefront, paid ads and daily admin, and rebuilt the buying experience from the first product page to the second order.</p>
      </header>

      <section id="overview" className="ai-summary ai-section">
        <p className="ai-label">Brand profile</p>
        <div>
          <p><strong>Brand:</strong> Pura Utz</p>
          <p><strong>Platform:</strong> Shopify</p>
          <p><strong>Niche:</strong> Hand-beaded glass jewelry and accessories</p>
          <p>I worked with the brand in two stages. First I fixed the store basics: collections, checkout and repeat buyers. Then I rebuilt the ad account that was supposed to be driving sales. Online revenue doubled, Meta ads went from losing money to a 3.5x return, and conversion moved from 1.8% to 2.9%.</p>
        </div>
      </section>

      <section id="challenge" className="ai-section pura-longform">
        <p className="ai-label">The challenge</p>
        <div className="ai-copy">
          <p>With a team this small, the store was always the last thing on the list. Two problems stood out at different stages.</p>
          <ul>
            <li><strong>The basics:</strong> Collections were unorganized, checkout was leaking buyers, and marketing was a set of scattered social posts that never turned into steady monthly orders.</li>
            <li><strong>The catalog:</strong> Every product had many variants, and the photos were so heavy that mobile pages crawled. Browsing felt like work.</li>
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

      <section id="results" className="ai-results ai-section"><p className="ai-label">The results &amp; performance metrics</p><div className="pura-table-wrap"><table><thead><tr><th>Metric</th><th>Before</th><th>After</th><th>Net Impact</th></tr></thead><tbody><tr><td>Online Store Revenue</td><td>Baseline</td><td>2x Baseline</td><td>+100%</td></tr><tr><td>Meta Blended ROAS</td><td>Below 1.1x (Losing Money)</td><td>3.5x Sustained ROAS</td><td>Profitable at Scale</td></tr><tr><td>E-Commerce Conversion Rate</td><td>1.8%</td><td>2.9%</td><td>+1.1 Points</td></tr><tr><td>Cart Abandonment Rate</td><td>68%</td><td>53%</td><td>15 Points Recovered</td></tr></tbody></table></div></section>

      <section id="takeaways" className="ai-section pura-longform"><p className="ai-label">Key takeaways</p><div className="ai-copy"><ol><li><strong>The second order is the cheapest revenue.</strong> Post-purchase emails and landing pages that matched where each buyer came from did more for the month than any single campaign.</li><li><strong>Ads only worked once the store did.</strong> Rebuilding the storefront first meant the new campaign structure had something to scale. ROAS went from below 1.1x to 3.5x.</li><li><strong>One owner for the whole buying journey.</strong> Email, ads and store layout sat with one person, so a fix in one place did not get undone in another. That freed the founding team to put their time into the artisan network.</li></ol></div></section>

      <section className="ai-section pura-tools"><p className="ai-label">Tools used</p><div className="ai-copy"><ul><li><strong>E-Commerce Platform:</strong> Shopify (Liquid Theme Framework)</li><li><strong>Paid Media &amp; Tracking:</strong> Meta Ads Manager, Google Ads, GA4</li><li><strong>Email &amp; Retention:</strong> Automated post-purchase flows</li><li><strong>Creative Production:</strong> Canva</li></ul></div></section>

      <CtaSection kicker="Need clearer growth operations?" title={<>Let&apos;s improve<br /><em>the path to purchase.</em></>} />
    </main>
      <SiteFooter />
    </>
  )
}
