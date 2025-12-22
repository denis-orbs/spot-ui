import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    'pino',
    'thread-stream',
  ],
  transpilePackages: ['@orbs-network/spot-react', '@orbs-network/spot-sdk'],
  webpack: (config) => {
    config.resolve.alias['@orbs-network/spot-react'] = path.resolve(__dirname, '../../packages/spot-react/src');
    config.resolve.alias['@orbs-network/spot-sdk'] = path.resolve(__dirname, '../../packages/spot-sdk/src');
    return config;
  },
  turbopack: {
    resolveAlias: {
      '@orbs-network/spot-react': '../../packages/spot-react/src',
      '@orbs-network/spot-sdk': '../../packages/spot-sdk/src',
    },
  },
};

export default nextConfig;
