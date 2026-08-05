import { WorkInProgress } from '@/components/WorkInProgress'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Support — Matteo',
  description: 'GitHub issues, direct support, and human contact options.',
  path: '/support/',
})

export default function SupportPage() {
  return <WorkInProgress page="Support" />
}
