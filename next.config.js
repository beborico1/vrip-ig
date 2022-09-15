/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "drive.google.com",
      "play-lh.googleusercontent.com"
    ],
  },
}

module.exports = nextConfig
