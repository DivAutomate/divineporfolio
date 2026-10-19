'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#top" onClick={closeMenu}>
        Divine Jude<span className="dot">.</span>
      </a>
      <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => { if (event.key === 'Escape') closeMenu() }}>
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="/contact" onClick={closeMenu}>Contact</a>
        <a className="nav-availability" href="/contact" onClick={closeMenu}><span />Available for work</a>
      </div>
    </nav>
  )
}
