/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  webpack5: true,
  webpack: (config, { defaultLoaders }) => {
    config.resolve.fallback = { fs: false };

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [defaultLoaders.babel, { loader: "@mdx-js/loader" }],
    });

    return config;
  },
});
