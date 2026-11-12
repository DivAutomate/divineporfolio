import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { CtaSection } from '@/components/cta-section'
import { ProjectCard } from '@/components/project-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { engagements, projects, services, site, stats } from '@/lib/site'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-eyebrow label">
            <span>Virtual assistant · Operations partner</span>
            <span>{site.location}</span>
          </div>
          <div className="hero-grid">
            <div>
              <h1 id="hero-title">Work off your plate. <em>Systems in place.</em></h1>
              <p className="hero-lead">I&apos;m Divine, an operations partner for busy teams. I run executive support, project coordination, and lead generation, then set up simple systems so the work stays handled.</p>
              <div className="btn-row">
                <Link className="btn btn-primary" href="/contact">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></Link>
                <Link className="btn btn-secondary" href="/work">See my work</Link>
              </div>
            </div>
            <img className="hero-portrait" src={site.portrait} alt="Divine Jude smiling in a black shirt" width={260} height={260} fetchPriority="high" />
          </div>
        </section>

        <section className="container" aria-label="Results at a glance">
          <ul className="stats">
            {stats.map((stat) => (
              <li key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></li>
            ))}
          </ul>
        </section>

        <section className="section container" aria-labelledby="services-title">
          <div className="section-head">
            <h2 id="services-title">How I can <em>help</em></h2>
            <p className="label">Six ways to get time back</p>
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

        <section className="section container" id="pricing" aria-labelledby="pricing-title">
          <div className="section-head">
            <h2 id="pricing-title">Ways to <em>work together</em></h2>
            <p className="label">Flat monthly retainers</p>
          </div>
          <ul className="pricing-grid">
            {engagements.map((engagement) => (
              <li className="pricing-card" key={engagement.name}>
                <p className="label">{engagement.name}</p>
                <p className="pricing-price">
                  <strong>{engagement.price}</strong>
                  <span>{engagement.cadence}</span>
                </p>
                <p className="pricing-scope">{engagement.scope}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section container" id="work" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">Selected <em>work</em></h2>
            <Link className="text-link" href="/work">View all {projects.length} case studies <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </section>

        <section className="section container" aria-labelledby="about-title">
          <div className="about-split">
            <div className="portrait-panel">
              <img src={site.portrait} alt="" loading="lazy" decoding="async" width={300} height={300} />
            </div>
            <div className="about-split-copy">
              <p className="label">About me</p>
              <h2 id="about-title">Calm, organized, and <em>easy to work with.</em></h2>
              <p>I help founders, executives, and small teams turn scattered tasks into clear routines. Some weeks that means running an inbox. Other weeks it means coordinating vendors, researching prospects, or fixing a store&apos;s product pages.</p>
              <p>Whatever the task, the goal is the same: fewer loose ends, clearer handoffs, and more time for the work only you can do.</p>
              <Link className="text-link" href="/about">More about me <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <CtaSection kicker="Ready when you are" title={<>Let&apos;s take work<br /><em>off your plate.</em></>} secondary={{ label: 'View portfolio', href: '/work' }} />
      </main>
      <SiteFooter />
    </>
  )
}
