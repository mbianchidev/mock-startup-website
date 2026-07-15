import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Internals — Matteo',
  description: 'Mission, operating principles, community work, and the many roles inside the Matteo human platform.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
