import { createPageMetadata } from '@/lib/siteMetadata'

export const metadata = createPageMetadata({
  title: 'A Note from Our CEO — Matteo',
  description: 'Matteo Bianchi’s candid story from learning to code at 15 through software engineering, DevOps, startups, open source, and GitHub.',
  path: '/about/',
})

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
