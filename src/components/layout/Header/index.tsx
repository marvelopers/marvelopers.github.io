import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "src/images/blog_logo.png";
import * as S from "./styles";
import { Category } from "src/model/category";

const NavMap = {
  [Category.Front]: "Front-end",
  [Category.Script]: "JS/TS",
  [Category.React]: "React",
  [Category.Marketing]: "Marketing",
  [Category.Essay]: "Essay",
};

const Header = () => {
  const route = Object.keys(NavMap);
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={"/"}>
            <a>
              <Image src={Logo} alt="marveloper Logo" />
            </a>
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
