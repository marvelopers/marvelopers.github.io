/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const nodes = require("./gatsby/nodes");
const pages = require("./gatsby/pages")
// const sourceNodes = require("./gatsby/source-nodes")

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    nodes.createMarkdown({ node, actions, getNode })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  return pages.crateBlogPost({ graphql, actions })
}

// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
//   sourceNodes.createSeriesNode({ actions, createNodeId, createContentDigest })
//   sourceNodes.createVideoNode({ actions, createNodeId, createContentDigest })
// }



////////////////////////////////////////////////////////////////////////////////////


// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// const { redirectTable } = require('./gatsby-meta-config')

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

//   return graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 category
//               }
//             }
//           }
//         }
//       }
//     `
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog posts pages.
//     const posts = result.data.allMarkdownRemark.edges.filter(
//       ({ node }) => !!node.frontmatter.category
//     )

//     posts.forEach((post, index) => {
//       const previous = index === posts.length - 1 ? null : posts[index + 1].node
//       const next = index === 0 ? null : posts[index - 1].node

//       createPage({
//         path: post.node.fields.slug,
//         component: blogPostTemplate,
//         context: {
//           slug: post.node.fields.slug,
//           previous,
//           next,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField, createRedirect } = actions

//   if (redirectTable) {
//     redirectTable.forEach(({ fromPath, toPath }) =>
//       createRedirect({
//         fromPath,
//         toPath,
//         isPermanent: true,
//         redirectInBrowser: true,
//       })
//     )
//   }

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }


////////////////////////////////////////////////////////////////////////////////////

// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Define a template for blog post
//   // const blogPost = path.resolve(`./src/templates/blog-post.js`)
//   const blogPost = path.resolve(`./src/templates/blog-post.js`)

//   // Get all markdown blog posts sorted by date
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: ASC }
//           limit: 1000
//         ) {
//           nodes {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your blog posts`,
//       result.errors
//     )
//     return
//   }

//   const posts = result.data.allMarkdownRemark.nodes

//   // Create blog posts pages
//   // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
//   // `context` is available in the template as a prop and as a variable in GraphQL

//   if (posts.length > 0) {
//     posts.forEach((post, index) => {
//       const previousPostId = index === 0 ? null : posts[index - 1].id
//       const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

//       createPage({
//         path: post.fields.slug,
//         component: blogPost,
//         context: {
//           id: post.id,
//           previousPostId,
//           nextPostId,
//         },
//       })
//     })
//   }
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }

//     type Author {
//       name: String
//       summary: String
//     }

//     type Social {
//       twitter: String
//     }

//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }

//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }

//     type Fields {
//       slug: String
//     }
//   `)
// }
