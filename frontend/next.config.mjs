/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        resolveExtensions: [
          ".mdx",
          ".tsx",
          ".ts",
          ".jsx",
          ".js",
          ".mjs",
          ".json",
        ],
      },
    },
  },
};

export default nextConfig;
