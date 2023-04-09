/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["mysql2"]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'alex-chernetsky.imgix.net',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
