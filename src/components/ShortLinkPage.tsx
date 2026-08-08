import type { Metadata } from 'next'
import RedirectPage from '@/components/RedirectPage'
import pathRedirects from '@/data/redirects.json'

interface ShortLinkPageProps {
  source: string
}

const redirectsBySource = new Map(
  pathRedirects.map((redirect) => [redirect.source, redirect])
)

export const shortLinkMetadata: Metadata = {
  title: 'Redirecting — Matteo',
  description: 'Following a Matteo Bianchi short link.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: null,
  twitter: null,
}

export default function ShortLinkPage({ source }: ShortLinkPageProps) {
  const redirect = redirectsBySource.get(source)

  if (!redirect) {
    throw new Error(`Unknown short-link source: ${source}`)
  }

  return (
    <RedirectPage
      destination={redirect.destination}
      title="the requested destination"
      description={`Following ${redirect.source}`}
    />
  )
}
