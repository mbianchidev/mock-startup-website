import type { Metadata } from 'next'
import { LegalDocument } from '@/components/LegalDocument'

export const metadata: Metadata = {
  title: 'Terms — Matteo',
  description: 'Plain-language terms for using the Matteo portfolio website.',
}

const sections = [
  {
    title: 'Using the site',
    paragraphs: [
      <>You may browse, share links, inspect the source, and enjoy or ignore the startup parody.</>,
      <>Do not attempt to disrupt the site, misuse its content, or impersonate Matteo using material found here.</>,
    ],
  },
  {
    title: 'Accuracy and satire',
    paragraphs: [
      <>The site mixes real professional evidence with clearly satirical product language. Linked repositories and external records are provided so important claims can be inspected.</>,
      <>Content may change as projects, roles, and public work evolve.</>,
    ],
  },
  {
    title: 'External services',
    paragraphs: [
      <>External links and embeds are governed by the terms of their respective providers. This site is not responsible for their availability or content.</>,
    ],
  },
  {
    title: 'No warranty',
    paragraphs: [
      <>The website is provided as-is. Reasonable care is taken, but uninterrupted availability and complete accuracy are not guaranteed.</>,
    ],
  },
  {
    title: 'Liability',
    paragraphs: [
      <>To the extent permitted by law, Matteo is not liable for indirect loss resulting solely from using or being unable to use this website.</>,
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      <>Questions about these terms can be sent to <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.</>,
    ],
  },
]

export default function TermsPage() {
  return (
    <LegalDocument
      path="/terms"
      title="Terms that fit on one reasonable page."
      description="The rules for using this website, separating the product joke from the inspectable work beneath it."
      summary="Short version: browse responsibly, treat real evidence as real and satire as satire, and do not make the website your lawyer’s problem."
      effectiveDate="July 13, 2026"
      sections={sections}
    />
  )
}
