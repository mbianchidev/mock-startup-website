'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Footer() {
  const [currentYear, setCurrentYear] = useState('2025')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            <Link href="/">Matte⚙️</Link>
          </div>
          <p>Transforming businesses since 2015</p>
        </div>
        <div className="footer-links">
          <div className="link-column">
            <h3>Product</h3>
            <Link href="/#features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/roadmap">Roadmap</Link>
          </div>
          <div className="link-column">
            <h3>Company</h3>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <a href="https://blog.mb-consulting.dev" target="_blank" rel="noopener noreferrer">
              Blog
            </a>
            <Link href="/press">Press</Link>
          </div>
          <div className="link-column">
            <h3>Resources</h3>
            <Link href="/documentation">Documentation</Link>
            <Link href="/support">Support</Link>
            <Link href="/about#community">Community</Link>
            <a href="mailto:info@mb-consulting.dev">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; <span id="current-year">{currentYear}</span> Matteo. All rights reserved.</p>
        <p className="copilot-credit">Vibe coded with 💙 and GitHub Copilot</p>
        <p className="footer-links link-column">
          <Link href="/privacy">Privacy</Link> | <Link href="/terms">Terms of Service</Link>
        </p>
        <div className="social-icons">
          <a href="https://mbianchidev.bsky.social" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-bluesky" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/mbianchidev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/mbianchidev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}