import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Matteo - The Future of Innovation',
  description: 'The innovative platform that boosts productivity, scales with your needs, and simplifies complex workflows.',
  other: {
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(self), microphone=(self), geolocation=(self), midi=(self), payment=(self), sync-xhr=(self), accelerometer=(self), gyroscope=(self), magnetometer=(self), usb=(self)',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-DNS-Prefetch-Control': 'on'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com https://*.vercel-scripts.com https://kit.fontawesome.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net https://assets.vercel.com https://cdn.worldvectorlogo.com https://upload.wikimedia.org https://cdn.prod.website-files.com https://github.com https://raw.githubusercontent.com https://googlecloudplatform.github.io https://repository-images.githubusercontent.com https://devstats.me https://sessionize.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://kit.fontawesome.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live https://sessionize.com; object-src 'none';" />
        <script
          dangerouslySetInnerHTML={{
            __html: "window.FontAwesomeConfig={autoReplaceSvg:'nest',observeMutations:false};"
          }}
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>" />
        <script src="https://kit.fontawesome.com/77b2f5a2d5.js" crossOrigin="anonymous" data-auto-replace-svg="nest" defer></script>
      </head>
  <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}