'use client'

import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import styles from './SiteShell.module.css'

const navItems = [
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#compatibility', label: 'Compatibility' },
  { href: '/#proof', label: 'Proof' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigationId = useId()

  useEffect(() => {
    document.documentElement.dataset.hydrated = 'true'

    return () => {
      delete document.documentElement.dataset.hydrated
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <span>Matteo</span>
          <small>human platform</small>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={isOpen}
          aria-controls={navigationId}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id={navigationId}
          className={`${styles.navList} ${isOpen ? styles.navOpen : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.mobileCtaItem}>
            <a
              href="https://cal.com/mbianchidev/intro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
            >
              Book a demo
            </a>
          </li>
        </ul>

        <a
          href="https://cal.com/mbianchidev/intro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.desktopCta}
        >
          Book a demo
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}
