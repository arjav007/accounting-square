// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Allow next/image to use local /public images (default)
  images: {
    // Add external domains here if needed, e.g.:
    // domains: ['example.com'],
  },
}

export default nextConfig
