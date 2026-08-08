import type { MetadataRoute } from 'next'
import { getSortedPostsData } from '@/lib/markdown'
import { getPublicStaticRoutes } from '@/lib/seoRoutes'
import { createSiteUrl } from '@/lib/siteMetadata'

export const dynamic = 'force-static'

function reliableDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return undefined
  }

  const parsedDate = new Date(`${date}T00:00:00.000Z`)
  return Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== date
    ? undefined
    : parsedDate
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData()
  const latestPostDate = posts
    .map(({ date }) => reliableDate(date))
    .filter((date): date is Date => date !== undefined)
    .sort((left, right) => right.getTime() - left.getTime())[0]

  const staticRoutes = getPublicStaticRoutes().map((route) => ({
    url: createSiteUrl(route).toString(),
    ...(route === '/blog/' && latestPostDate ? { lastModified: latestPostDate } : {}),
  }))
  const blogRoutes = posts.map((post) => {
    const lastModified = reliableDate(post.date)

    return {
      url: createSiteUrl(`/blog/${post.slug}/`).toString(),
      ...(lastModified ? { lastModified } : {}),
    }
  })

  return [...staticRoutes, ...blogRoutes].sort((left, right) =>
    left.url.localeCompare(right.url)
  )
}
