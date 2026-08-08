// next.config.js

const pathRedirects = require('./src/data/redirects.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  async redirects() {
    return pathRedirects
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

module.exports = nextConfig
