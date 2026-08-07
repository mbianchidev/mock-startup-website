import { WorkInProgress } from '@/components/WorkInProgress'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Documentation — Matteo',
  description: 'Guides, source, field notes, and the distributed Matteo documentation system.',
  path: '/documentation/',
})

export default function DocumentationPage() {
  return <WorkInProgress page="Documentation" />
}
