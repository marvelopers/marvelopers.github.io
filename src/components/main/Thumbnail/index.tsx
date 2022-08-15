import React, { ReactElement } from 'react';
import Image from 'next/image';
import front from 'src/images/front.png';
import script from 'src/images/script.png';
import programming from 'src/images/programming.png';
import essay from 'src/images/essay.png';
import { Category } from 'src/model/category';
import { Post } from 'src/model/posts';

import * as S from './styles';

export interface ThumbnailProps {
  post: Post;
}

const ImgMap = {
  [Category.Front]: front,
  [Category.Script]: script,
  [Category.Programming]: programming,
  [Category.Essay]: essay,
};

const Thumbnail = ({ post }: ThumbnailProps): ReactElement => (
  <S.Thumbnail key={post.slug}>
    <Image src={ImgMap[post.category] || programming} alt="img" />
    <S.TextBox>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <S.Tags>{/* {tags && tags.map((tag) => <span key={tag}>#{tag}</span>)} */}</S.Tags>
    </S.TextBox>
  </S.Thumbnail>
);

export default Thumbnail;
