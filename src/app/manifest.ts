import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Matteo — The Human Platform',
    short_name: 'Matteo',
    description: 'Platform engineering, cloud-native systems, open source, and technical storytelling.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0A0A0B',
    theme_color: '#00D9FF',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
