/* eslint-disable @typescript-eslint/no-var-requires */
// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const TsconfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin")
const path = require("path")

const nodes = require("./gatsby/nodes")
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

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      plugins: [
        new TsconfigPathsWebpackPlugin({
          configFile: path.resolve(__dirname, "./tsconfig.json"),
        }),
      ],
    },
  })
}
