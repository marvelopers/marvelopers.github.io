import { createMarkdown } from './gatsby/nodes';
import { crateBlogPost } from './gatsby/pages';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx') {
    createMarkdown({ node, actions, getNode });
  }
};

exports.createPages = async ({ graphql, actions }) =>
  crateBlogPost({ graphql, actions });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [
        new TsconfigPathsPlugin({
          configFile: path.resolve('tsconfig.json'),
        }),
      ],
    },
  });
};
