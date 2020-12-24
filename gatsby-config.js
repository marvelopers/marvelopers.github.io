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
              maxWidth: 720,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`, // heading태그에 link를 추가해주는 플러그인, presimjs 보다 먼저 위치해야 함.
          },
          {
            resolve: `gatsby-remark-prismjs`, // 코드 하이라이트 플러그인
            options: {
              showLineNumbers: true,
            },
          },
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
