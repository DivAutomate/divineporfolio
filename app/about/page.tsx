import type { Metadata } from 'next'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { services, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Divine Jude is a virtual assistant and operations partner helping busy teams with executive support, project coordination, lead generation, and e-commerce growth.',
  alternates: { canonical: '/about' },
}

const principles = [
  { title: 'Understand the work first', text: 'Before changing anything, I learn how you already work, what matters most, and where time is being lost.' },
  { title: 'Keep it simple', text: 'Clear routines and familiar tools beat clever setups. If your team can’t use it easily, it isn’t finished.' },
  { title: 'Follow through', text: 'Small tasks closed on time build trust. I keep you updated, flag problems early, and finish what I start.' },
]

const experience = [
  { period: 'Enterprise', role: 'Project & operations coordinator', text: 'Ran 100+ multilingual projects at once for a global language services provider, across vendors, teams, and three timezones.' },
  { period: 'Executive support', role: 'Executive & personal assistant', text: 'Managed the inbox, calendar, travel, personal administration, and weekly reporting for a manufacturing General Manager.' },
  { period: 'E-commerce', role: 'Shopify SEO & performance marketing', text: 'Grew a small artisan brand’s organic traffic and ad returns while handling day-to-day store administration.' },
  { period: 'Others', role: 'Lead generation, CRM automation & invoice processing', text: 'Built outbound pipelines that turned 1,975+ prospects into 231 qualified leads, moved 2,000+ service sites from paper onto CRM routing, and cut invoice processing from 40 minutes to under 10.' },
]

const tools = [
  { name: 'Trello', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/trello/default.svg' },
  { name: 'Airtable', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/airtable/default.svg' },
  { name: 'Apollo', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/apollodotio/default.svg' },
  { name: 'GoHighLevel', src: '/images/gohighlevel.png' },
  { name: 'n8n', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/n8n/default.svg' },
  { name: 'Zapier', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/zapier/default.svg' },
  { name: 'Claude', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude/default.svg' },
  { name: 'ChatGPT', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/openai-chatgpt/mono.svg' },
  { name: 'LangChain', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/langchain/default.svg' },
  { name: 'Odoo', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/odoo/default.svg' },
  { name: 'ERPNext', src: 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/erpnext/default.svg' },
]

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="page-hero container">
          <p className="label">About me</p>
          <h1>Hi, I&apos;m <em>Divine.</em></h1>
          <p className="lead">A virtual assistant and operations partner for founders, executives, and small teams who have more to do than hours to do it in.</p>
        </header>

        <section className="container section-tight" aria-label="Profile">
          <div className="about-split">
            <div className="portrait-panel">
              <img src={site.portrait} alt="Divine Jude smiling in a black shirt" width={300} height={300} />
            </div>
            <div className="about-split-copy">
              <p>I&apos;ve spent the last few years inside other people&apos;s busy weeks. I&apos;ve run executive inboxes and calendars, coordinated global projects across timezones, researched and contacted thousands of prospects, and grown online stores through better SEO and ads.</p>
              <p>The common thread is organization. I like turning scattered tasks into clear routines, keeping information tidy, and making sure nothing slips through the cracks. When a task repeats often enough, I&apos;ll set up a simple automation, but only when it genuinely saves time.</p>
              <p>I work remotely from Nigeria with clients around the world, and I&apos;m comfortable adapting to your tools, your timezone, and the way your team already works.</p>
            </div>
          </div>
        </section>

        <section className="section container" aria-labelledby="principles-title">
          <div className="section-head">
            <h2 id="principles-title">How I <em>work</em></h2>
          </div>
          <ul className="services-grid three">
            {principles.map((item, index) => (
              <li className="service" key={item.title}>
                <span className="label">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container" aria-labelledby="services-title">
          <div className="section-head">
            <h2 id="services-title">What I <em>do</em></h2>
          </div>
          <ul className="services-grid">
            {services.map((service, index) => (
              <li className="service" key={service.title}>
                <span className="label">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title"><em>Experience</em></h2>
          </div>
          <ol className="timeline">
            {experience.map((item) => (
              <li key={item.role}>
                <span className="label">{item.period}</span>
                <div><h3>{item.role}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section container" aria-labelledby="tools-title">
          <div className="section-head">
            <h2 id="tools-title">Tools I <em>use</em></h2>
          </div>
          <ul className="tool-list">
            {tools.map((tool) => (
              <li key={tool.name}><img src={tool.src} alt="" width={24} height={24} loading="lazy" />{tool.name}</li>
            ))}
          </ul>
        </section>

        <CtaSection kicker="Let's work together" title={<>Tell me what&apos;s<br /><em>slowing you down.</em></>} secondary={{ label: 'View portfolio', href: '/work' }} />
      </main>
      <SiteFooter />
    </>
  )
}
