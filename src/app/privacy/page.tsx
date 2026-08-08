import Link from 'next/link'
import { LegalDocument } from '@/components/LegalDocument'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Privacy — Matteo',
  description: 'How the Matteo website handles hosting data, anonymous measurement, and direct contact.',
  path: '/privacy/',
})

const sections = [
  {
    title: 'Scope and site operator',
    paragraphs: [
      <>This notice covers <strong>mbianchi.dev</strong> and the static pages served from that domain. Matteo Bianchi operates the site and can be reached at <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.</>,
      <>The website has no accounts, sign-in, comments, checkout, newsletter form, or application database containing visitor profiles.</>,
    ],
  },
  {
    title: 'Hosting and delivery data',
    paragraphs: [
      <>The site is built as a static export and hosted on Vercel. When your browser requests a page, Vercel receives the technical request data needed to deliver and protect it. That can include the IP address, requested URL, timestamp, referrer, user-agent, protocol, and request headers.</>,
      <>The application code does not copy those requests into its own database. Vercel processes infrastructure data under its <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">privacy notice</a> and its agreement with the site operator.</>,
    ],
  },
  {
    title: 'Anonymous audience measurement',
    paragraphs: [
      <>Vercel Web Analytics runs on every page to provide aggregate traffic statistics. The default integration records page views with data such as the route and URL, timestamp, referrer, filtered query parameters, coarse location, browser, operating system, device type, and analytics script version. No custom analytics events are configured.</>,
      <>Vercel states that Web Analytics data is not tied to an individual or IP address, does not use third-party cookies, and uses a request-derived visitor hash whose session is discarded after 24 hours. See Vercel’s <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Web Analytics privacy documentation</a>.</>,
    ],
  },
  {
    title: 'Anonymous performance measurement',
    paragraphs: [
      <>Vercel Speed Insights runs on each page load to measure real-user performance. It sends the route and URL, Web Vitals and their page attribution, network speed, browser, device type, operating system, country, SDK information, and server-received event time to Vercel.</>,
      <>Vercel states that these data points are anonymous, are not associated with an individual or IP address, and cannot reconstruct a browsing session across pages. See Vercel’s <a href="https://vercel.com/docs/speed-insights/privacy-policy" target="_blank" rel="noopener noreferrer">Speed Insights privacy documentation</a>.</>,
    ],
  },
  {
    title: 'Cookies and browser storage',
    paragraphs: [
      <>The website’s application code does not set or read cookies, local storage, session storage, or similar browser identifiers. The current Vercel Web Analytics integration does not use third-party cookies.</>,
      <>The separate <Link href="/cookies">Cookie Policy</Link> explains the current implementation and what changes would require a consent choice.</>,
    ],
  },
  {
    title: 'Messages and external services',
    paragraphs: [
      <>If you email Matteo, the message includes the address, contact details, and content you choose to provide. It is used to answer you, coordinate a conversation, or provide the service you requested; the website itself does not store the message.</>,
      <>Links can take you to services such as GitHub, LinkedIn, Cal.com, Sessionize, Speaker Deck, and other external websites. Once you follow a link, that provider’s privacy and cookie practices apply. Information you give those services is not automatically copied into this website.</>,
    ],
  },
  {
    title: 'Purposes, retention, and choices',
    paragraphs: [
      <>Technical request data is processed to deliver and secure the site. Aggregate analytics and performance data are used to understand which pages are useful and whether the site works well. This site does not run advertising, build cross-site profiles, or sell visitor data.</>,
      <>Vercel documents the 24-hour lifetime of the Web Analytics visitor session hash. Retention of aggregate analytics, performance, and infrastructure records is otherwise controlled through Vercel’s service and account settings; the application code creates no separate copy.</>,
      <>Direct messages can remain in the relevant email or scheduling service. You may ask for access, correction, or deletion of information you sent directly, subject to applicable obligations, by emailing <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.</>,
    ],
  },
  {
    title: 'Changes',
    paragraphs: [
      <>Material changes will be published here with a new effective date. If the site later introduces optional cookies or comparable browser storage, the policy and consent controls will be updated before that technology is used.</>,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalDocument
      path="/privacy"
      title="Privacy without the surveillance novella."
      description="A plain-language account of the data involved in serving, measuring, and contacting this static website."
      summary="Short version: no accounts or advertising profiles. Vercel handles hosting, anonymous page-view analytics, and anonymous performance metrics; direct contact stays with the service you use to send it."
      effectiveDate="August 8, 2026"
      sections={sections}
    />
  )
}
