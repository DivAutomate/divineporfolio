import type { Metadata } from 'next'
import { CtaSection } from '@/components/cta-section'
import { ProjectCard } from '@/components/project-card'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { projects } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies in executive support, project management, lead generation, SEO, e-commerce, and operations by Divine Jude.',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main>
        <header className="page-hero container">
          <p className="label">Portfolio</p>
          <h1>Selected <em>work.</em></h1>
          <p className="lead">Real projects across executive support, project coordination, lead generation, e-commerce growth, and operations. Each one started with a messy problem and ended with a system the team could rely on.</p>
        </header>

        <section className="container section-tight" aria-label="Case studies">
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={index === 0} />)}
          </div>
        </section>

        <CtaSection kicker="Have something on your plate?" title={<>Let&apos;s find what<br /><em>you can hand off.</em></>} />
      </main>
      <SiteFooter />
    </>
  )
}
