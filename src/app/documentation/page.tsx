import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Documentation — Matteo',
  description: 'Guides, source, field notes, and the distributed Matteo documentation system.'
}

export default function DocumentationPage() {
  return <WorkInProgress page="Documentation" />
}
