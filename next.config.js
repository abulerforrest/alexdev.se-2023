/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  swcMinify: true,
  output: "export",
  images: {
    loader: "custom",
    unoptimized: false,
    loaderFile: "./src/loader.ts",
  },
};

module.exports = nextConfig;
