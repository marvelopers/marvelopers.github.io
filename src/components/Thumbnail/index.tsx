import React from 'react';
import { Link, PageProps } from 'gatsby';
// import front from '../../images/front.png';
// import script from '../images/script.png';
// import marketing from '../images/marketing.png';
// import react from '../images/react.png';
// import essay from '../images/essay.png';
import { Nav } from '../../constants/layout';
import * as S from './styles';
import { Frontmatter } from '../../models/post';

// const ImgMap = {
//   [Nav.Front]: front,
//   [Nav.Script]: script,
//   [Nav.React]: react,
//   [Nav.Marketing]: marketing,
//   [Nav.Essay]: essay,
// };

type DataProps = {
  frontmatter: Frontmatter;
  slug: string;
};
const Thumbnail = ({ slug, frontmatter }: DataProps) => {
  const { title, date, category, tags = [] } = frontmatter;

  return (
    <S.Thumbnail key={slug}>
      <Link to={slug}>
        {/* <img src={ImgMap[category]} alt="img" /> */}
        <img alt="img" />
        <S.TextBox>
          <h2>{slug}</h2>
          <h2>{title}</h2>
          <p>{date}</p>
          <div>
            {tags.map((tag) => (
              <span>{tag} </span>
            ))}
          </div>
        </S.TextBox>
      </Link>
    </S.Thumbnail>
  );
};

export default Thumbnail;
