import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Support — Matteo',
  description: 'GitHub issues, direct support, and human contact options.'
}

export default function SupportPage() {
  return <WorkInProgress page="Support" />
}
