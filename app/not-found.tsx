import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-hero container">
        <p className="label">404</p>
        <h1>This page has <em>moved on.</em></h1>
        <p className="lead">The link is broken or the page no longer exists. Here are the two places worth starting from.</p>
        <div className="btn-row">
          <Link className="btn btn-primary" href="/">
            Back to home <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
          <Link className="btn btn-secondary" href="/work">
            See the case studies
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
