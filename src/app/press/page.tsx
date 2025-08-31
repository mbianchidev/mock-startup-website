import type { Metadata } from 'next'
import { WorkInProgress } from '@/components/WorkInProgress'

export const metadata: Metadata = {
  title: 'Press - Matteo Platform',
  description: 'Media resources, press kit, and coverage.'
}

export default function PressPage() {
  return <WorkInProgress page="Press" />
}
