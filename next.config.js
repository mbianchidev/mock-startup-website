// next.config.js

const pathRedirects = require('./src/data/redirects.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return pathRedirects
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
