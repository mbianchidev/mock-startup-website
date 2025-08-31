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
      }
    ]
  }
}

module.exports = nextConfig