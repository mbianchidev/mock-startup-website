// next.config.js

/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_BASE_PATH || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath && { basePath, assetPrefix: basePath }),
  images: {
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
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },
}

module.exports = nextConfig
