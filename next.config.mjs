/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
      },
      {
        protocol: "https",
        hostname: "jujaretechadvisors.com",
      },
    ],
  },
  // Enable Turbotrace for faster builds
  experimental: {
    turbotrace: {
      logLevel: "error",
      logDetail: true,
    },
  },
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Optimize loading of external images
  images: {
    domains: ["ucarecdn.com", "jujaretechadvisors.com"],
    // Enable blur-up placeholders for better UX
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Optimize font loading
  optimizeFonts: true,
  // Enable compression
  compress: true,
  // Enable production source maps for better debugging
  productionBrowserSourceMaps: true,
};

export default nextConfig;
