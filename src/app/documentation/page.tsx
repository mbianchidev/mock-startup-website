import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Documentation - Matteo Platform',
  description: 'Guides, tutorials, and API references.'
}

export default function DocumentationPage() {
  return <WorkInProgress page="Documentation" />
}
