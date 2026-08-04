import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Internals — Matteo',
  description: 'How Matteo combines platform engineering, Solutions Engineering, AI automation, software, open source, and technical education.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
