import path from 'path';

export const crateBlogPost = async ({ graphql, actions }) => {
  const { data } = await graphql(`
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          category
          date
          title
        }
        slug
      }
    }
  }
  `);

  if (!data) {
    throw Error('NO DATA');
  }

  // Create blog posts pages.
  const posts = data.allMarkdownRemark.edges.map((e) => e.node);

  posts.forEach((post) => {
    const { slug, date } = post.fields;

    actions.createPage({
      path: slug,
      component: path.resolve(`src/templates/blog-post.tsx`),
      context: {
        slug: slug,
        date: date,
      },
    });
  });
};
