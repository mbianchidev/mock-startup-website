import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Support - Matteo Platform',
  description: 'Help, troubleshooting, and contact options.'
}

export default function SupportPage() {
  return <WorkInProgress page="Support" />
}
