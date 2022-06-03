import Link from 'next/link';
import Image from 'next/image';
import BlogLogo from 'src/images/blog_logo.png';
import { Nav } from 'src/model/layout';
import * as S from './styles';

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
        <S.Logo href="/">
          <Image src={BlogLogo} alt="logo" width={160} height={24} />
        </S.Logo>
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
