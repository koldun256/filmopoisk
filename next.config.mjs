/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  assetPrefix: "./",
};

export default nextConfig;
