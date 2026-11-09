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
    const langCodes = [
      "hi",
      "en",
      "tr",
      "ru",
      "nl",
      "de",
      "fr",
      "es",
      "it",
      "pt",
      "ar",
      "kr",
      "zh",
      "ja",
      "pl",
      "sv",
      "fi",
      "no",
      "el",
    ];
    return [
      {
        source: "/ios",
        destination: "/app-store",
      },
      ...langCodes.map((code) => ({
        source: `/${code}/:slug*`,
        destination: `/blog/${code}/:slug*`,
      })),
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
