import Link from 'next/link';
import BlogLogo from 'src/images/blog_logo.png';
import * as S from './styles';

export const enum Nav {
  Front = 'front',
  Script = 'script',
  React = 'react',
  Marketing = 'marketing',
  Essay = 'essay',
}

const NavMap = {
  [Nav.Front]: 'Front-end',
  [Nav.Script]: 'JS/TS',
  [Nav.React]: 'React',
  [Nav.Marketing]: 'Marketing',
  [Nav.Essay]: 'Essay',
};

const Header = () => {
  const route = Object.keys(NavMap);
  return (
    <S.Header>
      <S.Wrapper>
        <Link href="/">
          <S.Logo src={BlogLogo} alt="logo" />
        </Link>
        <nav>
          <S.Categories>
            {route.map((item) => (
              <Link href={`/${item}`} key={item}>
                <li>{NavMap[item as Nav]}</li>
              </Link>
            ))}
          </S.Categories>
        </nav>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
