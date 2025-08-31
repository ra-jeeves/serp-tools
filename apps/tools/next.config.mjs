/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tools',
  transpilePackages: ["@serp-tools/ui"],
  trailingSlash: true,
};

export default nextConfig;
