'use client'

import { useEffect, useState } from 'react'

type Section = { id: string; label: string }

export function CaseStudyNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-140px 0px -60% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="cs-subnav" aria-label="Case study sections">
      <div className="container cs-subnav-inner">
        <p className="cs-subnav-label">On this page</p>
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} aria-current={active === section.id ? 'true' : undefined}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
