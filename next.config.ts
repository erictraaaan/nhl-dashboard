import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // Match any image URL on the domain
        hostname: "assets.nhle.com",
        // Match any image URL with a specific path
      }
    ]
  }
};

export default nextConfig;
