import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Pricing — Matteo',
  description: 'Full-time hiring plus selective Kubernetes, open-source strategy, mentorship, training, and speaking engagements.',
  path: '/pricing/',
})

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
