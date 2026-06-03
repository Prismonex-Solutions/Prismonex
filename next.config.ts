import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the floating dev-tools indicator (the "N" badge) during local dev.
  devIndicators: false,
};

export default nextConfig;
