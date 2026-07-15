import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Press — Matteo',
  description: 'Speaker material, public sessions, media contact, and presentation resources.'
}

export default function PressPage() {
  return <WorkInProgress page="Press" />
}
