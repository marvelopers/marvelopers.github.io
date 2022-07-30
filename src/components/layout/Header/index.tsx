import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "src/images/blog_logo.png";
import * as S from "./styles";

export enum Nav {
  Front = "front",
  Script = "script",
  React = "react",
  Marketing = "marketing",
  Essay = "essay",
}

const NavMap = {
  [Nav.Front]: "Front-end",
  [Nav.Script]: "JS/TS",
  [Nav.React]: "React",
  [Nav.Marketing]: "Marketing",
  [Nav.Essay]: "Essay",
};

const Header = () => {
  const route = Object.keys(NavMap);
  return (
    <S.Header>
      <S.Wrapper>
        <S.Logo>
          <Link href={"/"}>
            <Image src={Logo} alt="marveloper Logo" />
          </Link>
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
