const metaConfig = require('./gatsby-meta-config');

module.exports = {
  // pathPrefix: "/",
  siteMetadata: metaConfig,
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-166868950-1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    // "gatsby-plugin-manifest",
    "gatsby-plugin-feed",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    // gatsby-remark-images 마크다운 문서 안에 이미지 파일 
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: metaConfig.title,
        short_name: metaConfig.title,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        theme_color: `#a2466c`,
        display: `standalone`, //`minimal-ui`
        icon: metaConfig.icon,
      },
    },
  ],
};
