import type { MetadataRoute } from 'next'
import { getRobotsDisallowRoutes } from '@/lib/seoRoutes'
import { createSiteUrl, siteUrl } from '@/lib/siteMetadata'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: getRobotsDisallowRoutes(),
    },
    sitemap: createSiteUrl('/sitemap.xml').toString(),
    host: siteUrl.origin,
  }
}
