import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    BUILD_DATE: new Date().toISOString().slice(0, 10),
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
