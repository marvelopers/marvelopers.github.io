import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import front from 'src/images/front.png';
import script from 'src/images/script.png';
import marketing from 'src/images/marketing.png';
import react from 'src/images/react.png';
import essay from 'src/images/essay.png';
import { Nav } from 'src/model/layout';
import * as S from './styles';

const ImgMap = {
  [Nav.Front]: front,
  [Nav.Script]: script,
  [Nav.React]: react,
  [Nav.Marketing]: marketing,
  [Nav.Essay]: essay,
};

interface ThumbnailProps {
  category: Nav;
  title: string;
}

const Thumbnail = ({ title, category }: ThumbnailProps) => (
  <ul>
    <S.Thumbnail>
      {/* <Link href={`/${category}`}> */}
      <Image
        src={ImgMap[category]}
        alt="img"
        style={{
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
      />
      <S.TextBox>
        {/* <h1>{slug}</h1> */}
        <h2>{title}</h2>
        {/* 
          <p>{date}</p>
          <div>
            {tags.map((tag) => (
              <span key={tag}>{tag} </span>
            ))}
          </div> */}
      </S.TextBox>
      {/* </Link> */}
    </S.Thumbnail>
  </ul>
);

export default Thumbnail;
