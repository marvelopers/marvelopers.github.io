import path from 'path';

export const crateBlogPost = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
              date
            }
            frontmatter {
              category
              date
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw Error(result.errors);
  }

  // Create blog posts pages.
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const posts = result.data.allMdx.edges.map((e) => e.node);

  posts.forEach((post) => {
    const { fields, frontmatter } = post;
    const { date } = frontmatter;

    createPage({
      path: fields.slug,
      component: blogPostTemplate,
      context: {
        slug: fields.slug,
        date: date,
      },
    });
  });
};
