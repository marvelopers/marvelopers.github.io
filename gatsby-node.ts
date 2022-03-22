import type { GatsbyNode } from 'gatsby';
import path from 'path';
import { createMarkdown } from './gatsby/nodes';
import { crateBlogPost } from './gatsby/pages';

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    createMarkdown({ node, actions, getNode });
  }
};

exports.createPages = async ({ graphql, actions }) =>
  crateBlogPost({ graphql, actions });
