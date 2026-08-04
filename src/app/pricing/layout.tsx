import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Matteo',
  description: 'Full-time hiring plus selective Kubernetes, open-source strategy, mentorship, training, and speaking engagements.'
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
