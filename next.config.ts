import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // basePath: "/stock-of-valve",
  reactStrictMode: true,
  // distDir: "dist",
};

module.exports = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

// export default nextConfig;

module.exports = nextConfig;
