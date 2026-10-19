'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const isActive = (href: string) =>
    pathname === href || (href === '/work' && pathname.startsWith('/case-study'))

  return (
    <header className="site-header" id="top">
      <nav className="site-nav container" aria-label="Main navigation">
        <Link className="wordmark" href="/" onClick={closeMenu}>
          Divine Jude<span>.</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(event) => { if (event.key === 'Escape') closeMenu() }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} aria-current={isActive(link.href) ? 'page' : undefined}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact" onClick={closeMenu}>
            <span className="status-dot" aria-hidden="true" />
            Available for work
          </Link>
        </div>
      </nav>
    </header>
  )
}
