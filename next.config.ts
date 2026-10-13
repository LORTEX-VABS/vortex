import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site lives at projects.vedantshukla.in/streamex-sdk. The hub project rewrites that path here.
  basePath: "/streamex-sdk",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/streamex-sdk",
  },
  
  webpack: (config) => {
    config.externals.push({
      'streamex-sdk': 'commonjs streamex-sdk',
    })

    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    })

    return config
  },

  async redirects() {
    // Someone opening this deployment's own URL at "/" lands on the site.
    return [{ source: "/", destination: "/streamex-sdk", basePath: false, permanent: false }];
  },
};

export default nextConfig;