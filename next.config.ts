// next.config.ts 

// If this file is .js, delete the 1st import line.
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // ⬅️ the host in your src URL
        pathname: '/**',      // keep /** unless you want to restrict paths
      },
    ],
    //—or, using the simpler syntax—
    // domains: ['i.ibb.co'],
  },
};

export default nextConfig;
