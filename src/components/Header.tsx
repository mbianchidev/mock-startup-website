'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NavItem } from '@/types'

const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  {
    href: '/#features',
    label: 'Features',
    dropdown: [
      { href: '/#integrations', label: 'Integrations' },
      { href: '/#cloud', label: 'Multi Cloud' },
      { href: '/#kubernetes', label: 'Multi Cluster' }
    ]
  },
  { href: '/pricing', label: 'Pricing' }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    setMounted(true)
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    if (mounted && isMobileMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    
    return () => document.body.classList.remove('menu-open')
  }, [isMobileMenuOpen, mounted])

  const toggleMobileMenu = () => {
    if (mounted) {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  }

  const closeMobileMenu = () => {
    if (mounted) {
      setIsMobileMenuOpen(false)
    }
  }

  const handleCtaClick = () => {
    window.open('https://mb-consulting.dev/book15', '_blank')
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">Matte⚙️</Link>
        </div>
        
        {mounted && isMobile && (
          <button
            className={`menu-toggle ${mounted && isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        
        <ul className={`nav-links ${mounted && isMobile && isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href} className={item.dropdown ? 'dropdown' : ''}>
              {item.dropdown ? (
                <>
                  <Link href={item.href} className="dropdown-toggle" onClick={closeMobileMenu}>
                    {item.label} <i className="fas fa-chevron-down" aria-hidden="true"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropdownItem) => (
                      <li key={dropdownItem.href}>
                        <Link href={dropdownItem.href} onClick={closeMobileMenu}>
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
          {mounted && isMobile && (
            <li className="mobile-cta-item">
              <button className="cta-button" onClick={handleCtaClick}>
                Get Started
              </button>
            </li>
          )}
        </ul>
        
        {mounted && !isMobile && (
          <button className="cta-button" onClick={handleCtaClick}>
            Get Started
          </button>
        )}
      </nav>
    </header>
  )
}