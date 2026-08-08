import type { Metadata } from 'next'

export const siteUrl = new URL('https://mbianchi.dev')

function normalizePath(pathname: string) {
  const basePath = process.env.NEXT_BASE_PATH?.replace(/^\/?/, '/').replace(/\/$/, '')
  const pathWithoutBase =
    basePath && basePath !== '/' && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length)
      : pathname

  return pathWithoutBase.startsWith('/') ? pathWithoutBase : `/${pathWithoutBase}`
}

export function createSiteUrl(pathname: string) {
  return new URL(normalizePath(pathname), siteUrl)
}

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
  const canonical = createSiteUrl(path)

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
