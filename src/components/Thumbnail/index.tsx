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
};
const Thumbnail = ({ frontmatter }: DataProps) => {
  const { title, date } = frontmatter;

  const category = frontmatter.category as Nav;

  return (
    <S.Thumbnail key={title}>
      <Link to={title}>
        {/* <img src={ImgMap[category]} alt="img" /> */}
        <img alt="img" />
        <S.TextBox>
          <h2>{title}</h2>
          <p>{date}</p>
        </S.TextBox>
      </Link>
    </S.Thumbnail>
  );
};

export default Thumbnail;
