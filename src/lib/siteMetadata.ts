import type { Metadata } from 'next'

export const siteUrl = new URL('https://mbianchi.dev')

interface PageMetadata {
  title: string
  description: string
  path: string
}

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const canonical = new URL(path, siteUrl)

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
    },
  }
}
