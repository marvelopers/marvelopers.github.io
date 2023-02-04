import styled from '@emotion/styled';
import { GREY_1, GREY_3, PURPLE } from 'styles/colors';

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
  letter-spacing: -0.02em;


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 140%;
    letter-spacing: -0.02em;
    font-weight: 700;
  }

  h1 {
    font-size: 2rem; //32px
    line-height: 140%;

  }

  h2 {
    margin-top: 1.5rem;    
    font-size: 1.5rem; //24px
    line-height: 140%;
  }

  h3 {
    margin-top: 1.375rem;  
    font-size: 1.375rem; //22px
    line-height: 140%;
  }

  h4 {
    margin-top: 1.25rem;    
    font-size: 1.25rem; //20px
    line-height: 140%;
  }

  h5 {
    margin-top: 1.25rem;    
    font-size: 1.125rem; //18px
    line-height: 140%;
  }

  h6 {
    margin-top: 1.125rem; 
    font-size: 1rem; //16px
    line-height: 140%;
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
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 150%;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
  }

  b {
    font-weight: 600;
    font-size: 1rem;
    line-height: 150%;
    display: block;
  }
  p > b {
    // padding-top: 1rem;
  }
  li > b {
    // padding-bottom: 8px;
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    margin-top: 1rem;
    padding: 0;
    padding-left: 1rem;
    // margin-bottom: 2rem;
    list-style: square;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    font-size: 1rem;
    line-height: 150%;
    padding-left: 0;
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
    // padding-bottom: calc(1rem / 4);
  }

  ol > p,
  li > p {
    // margin-bottom: calc(2rem / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 1rem;
    // margin-top: calc(2rem / 2);
  }

  blockquote {
    color: ${PURPLE};
    margin-left: 4px;
    margin-right: 2rem;
    padding: 0 0 0 1.5rem;
    border-left: 4px solid inherit;
    font-size: 1rem;
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
`;

export const Aside = styled.section``;
