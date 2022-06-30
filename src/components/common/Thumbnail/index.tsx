import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import front from 'src/images/front.png';
import script from 'src/images/script.png';
import marketing from 'src/images/marketing.png';
import react from 'src/images/react.png';
import essay from 'src/images/essay.png';
import { FrontMeta, Nav } from 'src/model/layout';
import * as S from './styles';

const ImgMap = {
  [Nav.Front]: front,
  [Nav.Script]: script,
  [Nav.React]: react,
  [Nav.Marketing]: marketing,
  [Nav.Essay]: essay,
};

interface ThumbnailProps {
  post: FrontMeta;
}

const Thumbnail = ({ post }: ThumbnailProps) => {
  const { title, category, date, tags, slug } = post;
  return (
    <Link href={`/posts/${slug}`}>
      <S.Thumbnail>
        <Image
          src={ImgMap[category]}
          alt="img"
          style={{
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
          }}
        />
        <S.TextBox>
          <h2>{title}</h2>
          <p>{date}</p>
          <div>
            {tags.map((tag) => (
              <span key={tag}>{tag} </span>
            ))}
          </div>
        </S.TextBox>
      </S.Thumbnail>
    </Link>
  );
};
export default Thumbnail;
