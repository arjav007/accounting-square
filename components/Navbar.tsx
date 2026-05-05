'use client'
// components/Navbar.tsx
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image' // <-- Added Image import for your new logo
import { useRouter, usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'Services',    anchor: 'services' },
  { label: 'How It Works',     anchor: 'process' },
  { label: 'Our Team',    anchor: 'team' },
  { label: 'Our Promise', anchor: 'promise' },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const router   = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [router])

  const scrollTo = useCallback((anchor: string) => {
    setMenuOpen(false)
    const el = document.getElementById(anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      // If on contact page, go home then scroll
      window.location.href = `/#${anchor}`
    }
  }, [])

  // Ripple on btn-primary / nav-cta
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.btn-primary, .btn-next, .nav-cta') as HTMLElement | null
      if (!btn) return
      const r = btn.getBoundingClientRect()
      const sz = Math.max(r.width, r.height) * 2
      const rip = document.createElement('span')
      rip.className = 'btn-ripple'
      rip.style.cssText = `width:${sz}px;height:${sz}px;left:${e.clientX - r.left - sz / 2}px;top:${e.clientY - r.top - sz / 2}px`
      btn.appendChild(rip)
      rip.addEventListener('animationend', () => rip.remove())
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        {/* Updated Logo Section */}
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Image 
            src="/Accsquare.svg" 
            alt="Accounting Square Logo" 
            width={180} 
            height={35} 
            priority 
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(({ label, anchor }) => (
            <li key={anchor}>
              <a href={`#${anchor}`} onClick={(e) => { e.preventDefault(); scrollTo(anchor) }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">
              Start a Conversation
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          id="navHamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} id="navMobileMenu">
        {NAV_LINKS.map(({ label, anchor }) => (
          <a key={anchor} href={`#${anchor}`} onClick={(e) => { e.preventDefault(); scrollTo(anchor) }}>
            {label}
          </a>
        ))}
        <div className="nav-mobile-divider" />
        <Link href="/contact" onClick={() => setMenuOpen(false)}>
          <em>Start a Conversation</em>
        </Link>
      </div>
    </>
  )
}