import { WorkInProgress } from '@/components/WorkInProgress'
import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Press — Matteo',
  description: 'Speaker material, public sessions, media contact, and presentation resources.',
  path: '/press/',
})

export default function PressPage() {
  return <WorkInProgress page="Press" />
}
