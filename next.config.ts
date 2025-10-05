import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'recharts',
      'react-grid-layout',
      'socket.io-client',
    ],
  },

  // Webpack configuration for better bundle optimization
  webpack: (config, { isServer }) => {
    // Handle canvas for chart rendering
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }
    return config;
  },

  // Image optimization for dashboard exports
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  // Enable compression
  compress: true,

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
