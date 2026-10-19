import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { SocialLinks } from '@/components/social-links'
import { site } from '@/lib/site'

type CtaSectionProps = {
  kicker: string
  title: ReactNode
  secondary?: { label: string; href: string }
}

export function CtaSection({ kicker, title, secondary = { label: 'About me', href: '/about' } }: CtaSectionProps) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <p className="label cta-kicker">{kicker}</p>
        <h2 id="cta-title">{title}</h2>
        <div className="btn-row">
          <Link className="btn btn-accent" href="/contact">
            Contact me <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link className="btn btn-ghost-light" href={secondary.href}>
            {secondary.label} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <dl className="cta-meta">
          <div><dt className="label">Location</dt><dd>{site.location}</dd></div>
          <div><dt className="label">Elsewhere</dt><dd><SocialLinks /></dd></div>
          <div><dt className="label">Availability</dt><dd><span className="status-dot" aria-hidden="true" /> Taking new projects</dd></div>
        </dl>
      </div>
    </section>
  )
}
