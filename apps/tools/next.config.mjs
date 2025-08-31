/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tools',
  transpilePackages: ["@serp-tools/ui"],
};

export default nextConfig;
