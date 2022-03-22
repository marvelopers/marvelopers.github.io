import path from 'path';

export const getSlug = (node, getNode) => 'slug';

export const getDate = (node, getNode) => 'date';

export const createMarkdown = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  const slug = getSlug(node, getNode);
  console.log('THIS IS SLUG', slug);
  createNodeField({ name: `slug`, value: slug, node });

  const date = getDate(node, getNode);
  createNodeField({ name: `date`, value: date, node });

  if (!slug || !date) {
    throw 'NO slug or date!!';
  }
};

export default createMarkdown;
