// next.config.js
const { version } = require('./package.json');

/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || ''

const nextConfig = {
  // Export as a fully static site for GitHub Pages
  output: 'export',
  trailingSlash: true,
  // Allow hosting under a subpath like /mock-startup-website
  ...(basePath && { basePath, assetPrefix: basePath }),
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  publicRuntimeConfig: {
    version,
  },
  // NOTE: headers() and redirects() don't work with static export (output: 'export')
  // For static hosting, we implement:
  // - Security headers via HTML meta tags in layout.tsx
  // - Redirects via individual redirect pages (e.g., /gh, /linkedin, etc.)
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // -- Internal stuff --

      // -- External stuff --

      // Dev community profiles
      {
        source: '/gh',
        destination: 'https://github.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/github',
        destination: 'https://github.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/so',
        destination: 'https://stackoverflow.com/users/7410528/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/cncf',
        destination: 'https://community.cncf.io/u/m9crwf/#/about',
        permanent: false,
        basePath: false
      },
      // Resume
      {
        source: '/resume',
        destination: '/static/Matteo_Bianchi_resume.pdf',
        permanent: false,
      },
      // Social media
      {
        source: '/tg',
        destination: 'https://t.me/mbianchidev_bot',
        permanent: false,
        basePath: false
      },
      {
        source: '/telegram',
        destination: 'https://t.me/mbianchidev_bot',
        permanent: false,
        basePath: false
      },
      {
        source: '/li',
        destination: 'https://www.linkedin.com/in/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/x',
        destination: 'https://twitter.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/bsky',
        destination: 'https://mbianchidev.bsky.social',
        permanent: false,
        basePath: false
      },
      {
        source: '/mastodon',
        destination: 'https://hachyderm.io/@mbianchidev',
        permanent: false,
        basePath: false
      },
      // Blogs and articles
      {
        source: '/blog',
        destination: 'https://blog.mb-consulting.dev',
        permanent: false,
        basePath: false
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/devto',
        destination: 'https://dev.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/nl',
        destination: 'https://funews.substack.com/',
        permanent: false,
        basePath: false
      },
      {
        source: '/newsletter',
        destination: 'https://funews.substack.com/',
        permanent: false,
        basePath: false
      },
      // Mentoring
      {
        source: '/mentor',
        destination: 'https://mentors.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/mentorship',
        destination: 'https://mentors.to/mbianchidev',
        permanent: false,
        basePath: false
      },
      // Public speaking
      {
        source: '/sessionize',
        destination: 'https://sessionize.com/mbianchidev/',
        permanent: false,
        basePath: false
      },
      {
        source: '/speakerdeck',
        destination: 'https://speakerdeck.com/mbianchidev',
        permanent: false,
        basePath: false        
      },
      // Achievements and certifications
      {
        source: '/badges',
        destination: 'https://www.credly.com/users/mbianchidev/badges',
        permanent: false,
        basePath: false
      },
      {
        source: '/credly',
        destination: 'https://www.credly.com/users/mbianchidev/badges',
        permanent: false,
        basePath: false
      },
      // Bookings
      {
        source: '/bookings',
        destination: 'https://cal.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/book15',
        destination: 'https://cal.com/mbianchidev/intro',
        permanent: false,
        basePath: false
      },
      {
        source: '/book30',
        destination: 'https://cal.com/mbianchidev/chat',
        permanent: false,
        basePath: false
      },
      {
        source: '/book60',
        destination: 'https://cal.com/mbianchidev/1-1-session',
        permanent: false,
        basePath: false
      },
      {
        source: '/secret',
        destination: 'https://cal.com/mbianchidev/secret',
        permanent: false,
        basePath: false
      },
      // Referral links
      {
        source: '/ib',
        destination: 'https://ibkr.com/referral/matteo953',
        permanent: false,
        basePath: false
      },
      {
        source: '/mentorcruise',
        destination: 'http://mentorcruise.com/referrals/ELUv37rO1sSaC861SLnRDxwewvJxzpiR0Buq0S0M',
        permanent: false,
        basePath: false
      },
      // Future links for future projects
      {
        source: '/tw',
        destination: 'https://www.twitch.tv/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/yt',
        destination: 'https://youtube.com/mbianchidev',
        permanent: false,
        basePath: false
      },
      {
        source: '/discord',
        destination: '/work-in-progress', //'https://discord.gg/mbianchidev',
        permanent: false,
        basePath: false
      },
      // Every other link
      {
        source: '/all-links',
        destination: 'https://linktr.ee/mbianchidev',
        permanent: false,
        basePath: false
      },
    ]
  },
  images: {
    // For static export, Next/Image must be unoptimized
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'googlecloudplatform.github.io',
      },
      {
        protocol: 'https',
        hostname: 'repository-images.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'devstats.me',
      },
      {
        protocol: 'https',
        hostname: 'sessionize.com',
      }
    ]
  }
};

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(self), microphone=(self), geolocation=(self), midi=(self), payment=(self), sync-xhr=(self), accelerometer=(self), gyroscope=(self), magnetometer=(self), usb=(self)'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://stats.g.doubleclick.net https://vitals.vercel-insights.com https://www.mb-consulting.dev https://mb-consulting.dev https://*.fontawesome.com; child-src 'self' blob: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://ajax.googleapis.com https://cdnjs.cloudflare.com https://www.google.com https://www.gstatic.com https://apis.google.com https://vercel.live https://*.vercel.com https://*.vercel-scripts.com https://kit.fontawesome.com https://sessionize.com https://*.sessionize.com; worker-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data:; img-src 'self' blob: data: http://localhost:3000 https://*.googletagmanager.com https://*.google-analytics.com https://stats.g.doubleclick.net https://assets.vercel.com https://cdn.worldvectorlogo.com https://upload.wikimedia.org https://cdn.prod.website-files.com https://github.com https://raw.githubusercontent.com https://googlecloudplatform.github.io https://repository-images.githubusercontent.com https://devstats.me https://sessionize.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://*.fontawesome.com; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://kit.fontawesome.com https://*.fontawesome.com; frame-src https://www.gstatic.com https://www.google.com https://accounts.google.com https://docs.google.com https://content.googleapis.com https://vercel.live https://sessionize.com; object-src 'none';`
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: `https://www.mb-consulting.dev https://mb-consulting.dev`,
  },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none'
  },
  {
    key: 'X-Download-Options',
    value: 'noopen'
  },
];

module.exports = nextConfig