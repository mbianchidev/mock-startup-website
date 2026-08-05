import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'Product Internals — Matteo',
  description: 'How Matteo combines platform engineering, Solutions Engineering, AI automation, software, open source, and technical education.',
  path: '/about/',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
