import React from 'react';
import { BlogLayout } from 'src/components/layout/Layout';
import { getPostBySlug } from 'src/utils/api';

const Post = () => <BlogLayout>PostsCategory 여기에 씁니다</BlogLayout>;
export default Post;

type Params = {
  params: {
    slug: string;
  };
};

Post.getStaticProps = async ({ params }: Params) => {
  console.log('QUERY', params.slug);
  const allPosts = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'category',
    'tags',
  ]);

  return {
    props: { allPosts },
  };
};
