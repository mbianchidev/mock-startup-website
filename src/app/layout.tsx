import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  applicationName: 'Matteo',
  title: 'Matteo — The Human Platform',
  description: 'Matteo Bianchi is a Senior Engineer across platforms, solutions, software, and AI, combining deep engineering with customer insight, open source, and technical communication.',
  appleWebApp: {
    capable: true,
    title: 'Matteo',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(self), microphone=(self), geolocation=(self), midi=(self), payment=(self), sync-xhr=(self), accelerometer=(self), gyroscope=(self), magnetometer=(self), usb=(self)',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-DNS-Prefetch-Control': 'on'
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="value: default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev https://*.fontawesome.com; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com https://*.vercel-scripts.com https://kit.fontawesome.com https://sessionize.com https://*.sessionize.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net https://assets.vercel.com https://cdn.worldvectorlogo.com https://upload.wikimedia.org https://cdn.prod.website-files.com https://github.com https://raw.githubusercontent.com https://googlecloudplatform.github.io https://repository-images.githubusercontent.com https://devstats.me https://sessionize.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://*.fontawesome.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://kit.fontawesome.com https://*.fontawesome.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live https://sessionize.com; object-src 'none';" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}