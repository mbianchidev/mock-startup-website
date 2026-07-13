import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Matteo Platform',
  description: 'Transparent pricing for the Matteo platform and engineering services.'
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
