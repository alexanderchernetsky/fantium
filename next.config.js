/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
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
