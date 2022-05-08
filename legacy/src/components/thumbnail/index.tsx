import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import {
  MarkdownRemarkFrontmatter,
  MarkdownRemarkFields,
} from 'src/types/graphql-types';
import front from 'src/images/front.png';
import script from 'src/images/script.png';
import marketing from 'src/images/marketing.png';
import react from 'src/images/react.png';
import essay from 'src/images/essay.png';
import { Nav } from '../layout/Header';
import * as S from './styles';

export interface Props {
  frontmatter: MarkdownRemarkFrontmatter;
  fields: MarkdownRemarkFields;
}

const ImgMap = {
  [Nav.Front]: front,
  [Nav.Script]: script,
  [Nav.React]: react,
  [Nav.Marketing]: marketing,
  [Nav.Essay]: essay,
};

const Thumbnail = ({ frontmatter, fields }: Props): ReactElement => {
  if (!frontmatter || !fields) return <></>;
  const { title, tags } = frontmatter;
  const { slug, date } = fields;

  const category = frontmatter.category as Nav;

  return (
    <S.Thumbnail key={slug}>
      <Link to={slug}>
        <img src={ImgMap[category]} alt="img" />
        <S.TextBox>
          <h2>{title}</h2>
          <p>{date}</p>
          <S.Tags>
            {tags && tags.map((tag) => <span key={tag}>#{tag}</span>)}
          </S.Tags>
        </S.TextBox>
      </Link>
    </S.Thumbnail>
  );
};

export default Thumbnail;
