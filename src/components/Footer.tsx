import Link from 'next/link'
import styles from './SiteShell.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.footerLogo}>
            Matteo
          </Link>
          <p>
            Human infrastructure for teams that want the systems and the story
            to be equally good.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerColumn} role="navigation" aria-label="Product">
            <h3>Product</h3>
            <Link href="/#features">Features</Link>
            <Link href="/#integrations">Integrations</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/roadmap">Roadmap</Link>
          </div>
          <div className={styles.footerColumn} role="navigation" aria-label="Company">
            <h3>Company</h3>
            <Link href="/portfolio">Open source</Link>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/customers">Customers</Link>
          </div>
          <div className={styles.footerColumn} role="navigation" aria-label="Resources">
            <h3>Resources</h3>
            <Link href="/blog">Blog</Link>
            <Link href="/documentation">Documentation</Link>
            <Link href="/press">Press</Link>
            <Link href="/support">Support</Link>
            <Link href="/status">Status</Link>
          </div>
          <div className={styles.footerColumn} role="navigation" aria-label="Contact">
            <h3>Open a ticket</h3>
            <a href="https://github.com/mbianchidev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mbianchidev" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://cal.com/mbianchidev/intro" target="_blank" rel="noopener noreferrer">
              Book a demo
            </a>
            <a href="mailto:info@mb-consulting.dev">Contact</a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Matteo. No vendor lock-in.</p>
        <p>Designed as a product. Operated as a human.</p>
        <p className={styles.legalLinks}>
          <Link href="/privacy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">Terms of Service</Link>
        </p>
      </div>
    </footer>
  )
}