/* eslint-disable @typescript-eslint/no-var-requires */
const metaConfig = require('./gatsby-meta-config');

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

module.exports = {
  // pathPrefix: "/",
  siteMetadata: metaConfig,
  plugins: [
    `gatsby-plugin-ts`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        typeCheck: process.env.NODE_ENV !== 'production',
        tsLoader: {
          logLevel: 'warn',
        },
        forkTsCheckerPlugin: {
          eslint: true,
        },
        fileName: `types/graphql-types.ts`,
        codegen: true,
        codegenDelay: 250,
        alwaysCheck: false,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
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
              maxWidth: 712,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-emoji`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-166868950-1',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  title: node.frontmatter.title,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Marveloper's RSS Feed",
          },
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
        display: `standalone`, //`minimal-ui`
        icon: metaConfig.icon,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-remark-images', //마크다운 문서 안에 이미지 파일
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        // components: path.join(__dirname, "src/components"),
        // layouts: path.join(__dirname, "src/layouts"),
        // templates: path.join(__dirname, "src/templates"),
        // types: path.join(__dirname, "src/types"),
        src: path.join(__dirname, 'src'),
        // pages: path.join(__dirname, "src/pages"),
      },
    },
  ],
};
