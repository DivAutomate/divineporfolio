import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'

export function CaseStudyHeader() {
  return (
    <>
      <SiteNav />
      <div className="case-back container">
        <Link href="/work"><ArrowLeft size={15} aria-hidden="true" /> All work</Link>
      </div>
    </>
  )
}
