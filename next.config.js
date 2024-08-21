/** @type {import('next').NextConfig} */
const nextConfig = {experimental: {
    serverActions: true,
  },
  output: "export",  // <=== enables static exports
  }

module.exports = nextConfig
