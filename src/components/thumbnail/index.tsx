import React from 'react';
import { Link } from 'gatsby';
import front from 'src/images/front.png';
import script from 'src/images/script.png';
import marketing from 'src/images/marketing.png';
import react from 'src/images/react.png';
import essay from 'src/images/essay.png';
import { Nav } from '../layout/Header';
import * as S from './styles';

export interface ThumbnailType {
  title: string;
  slug: string;
  meta?: string;
  excerpt?: string;
  category: Nav;
  tags: string[];
}

const ImgMap = {
  [Nav.Front]: front,
  [Nav.Script]: script,
  [Nav.React]: react,
  [Nav.Marketing]: marketing,
  [Nav.Essay]: essay,
};

const Thumbnail = ({ title, slug, meta, category, tags }: ThumbnailType) => {
  return (
    <S.Thumbnail key={slug}>
      <Link to={slug}>
        <img src={ImgMap[category]} alt="img" />
        <S.TextBox>
          <h2>{title}</h2>
          <p>{meta}</p>
          <S.Tags>
            {tags && tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </S.Tags>
        </S.TextBox>
      </Link>
    </S.Thumbnail>
  );
};

export default Thumbnail;
