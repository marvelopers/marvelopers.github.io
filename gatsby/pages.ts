import path from 'path';

export const crateBlogPost = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            body
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
  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);
  const posts = result.data.allMdx.edges.map((post) => post.node);

  posts.forEach((post) => {
    const { fields, frontmatter } = post;

    actions.createPage({
      path: decodeURI(fields.slug),
      component: blogPostTemplate,
      context: {
        slug: fields.slug,
        date: frontmatter.date,
      },
    });
  });
};
