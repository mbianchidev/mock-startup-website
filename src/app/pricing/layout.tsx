import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Matteo',
  description: 'Transparent advisory, delivery, and full-time engagement options.'
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
