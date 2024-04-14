const path = require('path');

/** @type {import('next').NextConfig} */
const corsOrigins = process.env.NODE_ENV === "production" ? 'https://dashboard.edmas.app' : 'http://localhost:3000/'

const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: corsOrigins },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  webpack: (config, { isServer }) => {
    // Add this to resolve aliases
    config.resolve.alias['@'] = path.resolve(__dirname, './src');

    // A fix for 'fs' module not found error during the build. Remove if not necessary.
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
}

module.exports = nextConfig
