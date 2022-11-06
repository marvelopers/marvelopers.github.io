import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'src/images/blog_logo.png';
import { Category } from 'src/model/category';
import * as S from './styles';

const NavMap = {
  [Category.Front]: 'FRONTEND',
  [Category.Script]: 'JS/TS',
  [Category.Programming]: 'PROGRAMMING',
};

const Header = () => {
  const route = Object.keys(NavMap);
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={'/'}>
            <Image src={Logo} height={24} alt="marveloper Logo" />
          </Link>
        </S.Logo>
        <nav>
          <S.Categories>
            {route.map((item) => (
              <Link href={`/${item}`} key={item}>
                <li>{NavMap[item as Category]}</li>
              </Link>
            ))}
          </S.Categories>
        </nav>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
