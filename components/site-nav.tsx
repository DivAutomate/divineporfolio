'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function SiteNav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      if (navRef.current?.contains(target) || buttonRef.current?.contains(target)) return
      setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    pathname === href || (href === '/work' && pathname.startsWith('/case-study'))

  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Main navigation">
        <Link className="wordmark" href="/" onClick={closeMenu}>
          Divine Jude<span>.</span>
        </Link>
        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div ref={navRef} className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
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
