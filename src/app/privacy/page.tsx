import { LegalDocument } from '@/components/LegalDocument'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Privacy — Matteo',
  description: 'A plain-language privacy policy for the Matteo static website.',
  path: '/privacy/',
})

const sections = [
  {
    title: 'What this site collects',
    paragraphs: [
      <>This static website does not maintain a user database, account system, or first-party analytics profile.</>,
      <>If you email Matteo, the message naturally contains the contact information and content you choose to send.</>,
    ],
  },
  {
    title: 'Cookies and external resources',
    paragraphs: [
      <>The site does not intentionally set first-party tracking cookies.</>,
      <>Fonts, images, code-hosting assets, and optional embeds are served by external providers. Those providers may receive normal request metadata such as your IP address and browser headers under their own policies.</>,
    ],
  },
  {
    title: 'How direct messages are used',
    paragraphs: [
      <>Information sent by email or booking tools is used to respond, coordinate a conversation, or provide the service you requested. It is not sold.</>,
    ],
  },
  {
    title: 'Retention and deletion',
    paragraphs: [
      <>Messages are kept only as long as they remain useful for the conversation, professional relationship, or legal obligations. You may request deletion by contacting the address below.</>,
    ],
  },
  {
    title: 'External links',
    paragraphs: [
      <>Links may lead to GitHub, LinkedIn, Cal.com, Sessionize, Speaker Deck, and other external services. Their privacy practices are outside this site’s control.</>,
    ],
  },
  {
    title: 'Your rights and contact',
    paragraphs: [
      <>You may ask what information was received directly from you, request correction, or request deletion where applicable.</>,
      <>Contact <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a> for privacy questions.</>,
    ],
  },
  {
    title: 'Changes',
    paragraphs: [
      <>Material changes will be published on this page with a new effective date. No twenty-page cookie banner will be deployed to announce them.</>,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <LegalDocument
      path="/privacy"
      title="Privacy without the surveillance novella."
      description="A plain-language account of what this static site does, what external services may see, and how direct messages are handled."
      summary="Short version: no user accounts, no first-party analytics database, no intentional tracking cookies, and no sale of personal data."
      effectiveDate="July 13, 2026"
      sections={sections}
    />
  )
}
