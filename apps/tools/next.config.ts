/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tools',
  transpilePackages: ["@serp-tools/ui"],
  trailingSlash: true,
  assetPrefix: '/serp-tools',
};

export default nextConfig;

// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

// export default (phase: string) => {
//   const isDev = phase === PHASE_DEVELOPMENT_SERVER
//   /**
//    * @type {import('next').NextConfig}
//    */
//   const nextConfig = {
//     output: 'export',
//     basePath: '/tools',
//     transpilePackages: ["@serp-tools/ui"],
//     trailingSlash: true,
//     assetPrefix: isDev ? undefined : 'https://ra-jeeves.github.io/serp-tools',
//   }

//   return nextConfig
// }
