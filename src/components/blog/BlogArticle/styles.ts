import styled from "@emotion/styled";
import { GREY_1, GREY_3, PURPLE } from "styles/colors";

export const Article = styled.article`
  margin: 0px auto;
`;

export const Title = styled.h1`
  color: ${GREY_1};
  font-size: 3.2rem;
`;

export const Date = styled.p`
  color: ${GREY_3};
  font-size: 1.4rem;
`;

export const Content = styled.main`
  word-break: break-word;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    line-height: 1.4rem;
    letter-spacing: -0.025em;
    font-weight: 700;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.4rem;
  }

  h1 > a,
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* content */
  img {
    border-radius: 3px;
    display: block;
    max-width: 100%;
  }

  p {
    line-height: 1.5rem;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 2rem 0;
    padding: 0;
  }
  p + p {
    margin-top: -1rem;
  }

  b {
    line-height: 1.4rem;
    letter-spacing: -0.025em;
    font-weight: 600;
    font-size: 1.4rem;
    display: block;
  }
  p > b {
    padding-top: 1rem;
  }
  li > b {
    padding-bottom: 8px;
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    padding-left: 1rem;
    margin-bottom: 2rem;
    list-style: square;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    line-height: 1.5;
    padding-left: 0;
    margin-bottom: calc(2rem / 2);
  }

  ul li {
    list-style: square;
  }

  ol li {
    list-style: decimal;
  }

  ol span,
  li > p > span {
    display: block;
    padding-bottom: calc(1rem / 4);
  }

  ol > p,
  li > p {
    margin-bottom: calc(2rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 1rem;
    margin-top: calc(2rem / 2);
  }

  blockquote {
    color: ${PURPLE};
    margin-left: 4px;
    margin-right: 2rem;
    padding: 0 0 0 1.5rem;
    border-left: 4px solid inherit;
    font-size: 1.2rem;
    font-style: italic;
    margin-bottom: 2rem;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  /* Link */

  a {
    color: inherit;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  hr {
    height: 1px;
    border: 1px solid #e8e8e8;
    background: #e8e8e8;
    margin: 20px 0;
  }

  .gatsby-highlight {
    color: ${GREY_1};
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;

export const Aside = styled.section``;
