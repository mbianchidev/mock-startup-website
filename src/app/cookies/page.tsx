import Link from 'next/link'
import { LegalDocument } from '@/components/LegalDocument'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Cookie Policy — Matteo',
  description: 'The cookies and browser storage used by the Matteo website.',
  path: '/cookies/',
})

const sections = [
  {
    title: 'Current cookie status',
    paragraphs: [
      <>The application code for <strong>mbianchi.dev</strong> does not set or read cookies. It also does not use local storage, session storage, IndexedDB, or another browser store to identify visitors.</>,
      <>There are no advertising, personalization, or social-media tracking cookies on the site, and no cookie is required to browse its pages.</>,
    ],
  },
  {
    title: 'Vercel Web Analytics',
    paragraphs: [
      <>The site uses Vercel Web Analytics for anonymous, aggregate page-view statistics. Vercel states that this service does not use third-party cookies. Instead, it creates a hash from the incoming request and automatically discards the visitor session after 24 hours.</>,
      <>The analytics integration is described in more detail in the <Link href="/privacy">Privacy Policy</Link> and Vercel’s <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Web Analytics privacy documentation</a>.</>,
    ],
  },
  {
    title: 'Vercel Speed Insights',
    paragraphs: [
      <>Vercel Speed Insights measures page performance through browser APIs and sends anonymous Web Vitals data to Vercel. The site does not use cookies or browser storage to operate this integration.</>,
      <>The performance data involved is listed in the <Link href="/privacy">Privacy Policy</Link> and Vercel’s <a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" rel="noopener noreferrer">Speed Insights privacy documentation</a>.</>,
    ],
  },
  {
    title: 'External websites',
    paragraphs: [
      <>This site links to external services including GitHub, LinkedIn, Cal.com, Sessionize, and Speaker Deck. Those providers may use cookies after you navigate to their domains. Their controls and policies apply there; this site cannot read those cookies.</>,
    ],
  },
  {
    title: 'Your controls',
    paragraphs: [
      <>Because the current site does not use optional cookies, it does not display a consent banner. Blocking or deleting cookies in your browser will not prevent the site’s core pages from working.</>,
      <>If optional cookies or comparable browser storage are introduced later, this page will be updated and any required choice will be presented before they are used.</>,
    ],
  },
  {
    title: 'Contact and changes',
    paragraphs: [
      <>Questions about this policy can be sent to <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.</>,
      <>Material changes will be published on this page with a new effective date.</>,
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalDocument
      path="/cookies"
      title="Cookies, minus the crumbs."
      description="What this site stores in your browser, what its measurement tools do instead, and when a consent choice would appear."
      summary="Short version: this site currently sets no cookies and uses no browser storage. Vercel provides anonymous analytics and performance measurement without third-party cookies."
      effectiveDate="August 8, 2026"
      sections={sections}
    />
  )
}
