import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root to this folder; a stray lockfile in the parent directory
    // otherwise makes Next.js infer the wrong workspace root.
    root: __dirname,
  },
};

export default nextConfig;
