import type { Metadata } from 'next'
import {
  siteConfig,
  socialImages,
  type SocialImageKey,
} from '@/lib/siteConfig'

export const siteUrl = siteConfig.url

export function getBasePath() {
  const configuredBasePath = process.env.NEXT_BASE_PATH?.trim()

  if (!configuredBasePath || configuredBasePath === '/') {
    return ''
  }

  return `/${configuredBasePath.replace(/^\/|\/$/g, '')}`
}

function normalizePath(pathname: string) {
  const basePath = getBasePath()
  const pathWithoutBase =
    basePath && (pathname === basePath || pathname.startsWith(`${basePath}/`))
      ? pathname.slice(basePath.length)
      : pathname

  return pathWithoutBase.startsWith('/') ? pathWithoutBase : `/${pathWithoutBase}`
}

export function createSiteUrl(pathname: string) {
  return new URL(normalizePath(pathname), siteUrl)
}

export function createAbsoluteImageUrl(pathname: string) {
  const imageUrl = createSiteUrl(pathname)

  if (imageUrl.origin !== siteUrl.origin) {
    throw new Error(`Social preview images must use the production origin: ${pathname}`)
  }

  return imageUrl
}

export function resolveSocialImage(image: SocialImageKey, imageAlt?: string) {
  const selectedImage = socialImages[image]

  return {
    url: createAbsoluteImageUrl(selectedImage.src),
    width: selectedImage.width,
    height: selectedImage.height,
    alt: imageAlt ?? selectedImage.alt,
    type: selectedImage.type,
  }
}

interface PageMetadata {
  title: string
  description: string
  path: string
  image?: SocialImageKey
  imageAlt?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  image = 'profile',
  imageAlt,
}: PageMetadata): Metadata {
  const canonical = createSiteUrl(path)
  const socialImage = resolveSocialImage(image, imageAlt)

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
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: socialImage.url,
          alt: socialImage.alt,
        },
      ],
    },
  }
}

interface ArticleMetadata extends PageMetadata {
  publishedTime: string
  modifiedTime?: string
  authors: string[]
  tags: string[]
}

export function createArticleMetadata({
  title,
  description,
  path,
  image = 'profile',
  imageAlt,
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: ArticleMetadata): Metadata {
  const metadata = createPageMetadata({
    title,
    description,
    path,
    image,
    imageAlt,
  })

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      ...(modifiedTime ? { modifiedTime } : {}),
      authors,
      tags,
    },
  }
}
