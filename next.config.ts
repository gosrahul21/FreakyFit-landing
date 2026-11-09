import type { NextConfig } from "next";

const configuredTheme = (
  process.env.NEXT_PUBLIC_THEME ||
  process.env.THEME ||
  "dark"
).toLowerCase();

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    instantInsights: {
      validationLevel: "manual-warning",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_THEME: configuredTheme,
  },
  async rewrites() {
    return [
      {
        source: "/hi/:slug*",
        destination: "/blog/hi/:slug*",
      },
      {
        source: "/en/:slug*",
        destination: "/blog/en/:slug*",
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
