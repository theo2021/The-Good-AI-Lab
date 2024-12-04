/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/The-Good-AI-Lab' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/The-Good-AI-Lab' : '',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json'
    })
    return config
  },
  experimental: {
    turbo: {
      rules: {
        resolveExtensions: [
            '.mdx',
            '.tsx',
            '.ts',
            '.jsx',
            '.js',
            '.mjs',
            '.json',
          ],
      }
    }
  }
}

export default nextConfig 
