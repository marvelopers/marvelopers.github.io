import styled from "@emotion/styled"
import {
  SPACE_0,
  SPACE_1,
  SPACE_4,
  SPACE_6,
  SPACE_8,
  SPACE_12,
} from "../../styles/space"
import {
  LINE_HEIGHT_RELAXED,
  LINE_HEIGHT_TIGHT,
  BOLD,
  FONT_SIZE_1,
  FONT_SIZE_2,
  FONT_SIZE_3,
  FONT_SIZE_4,
  FONT_SIZE_5,
  FONT_SIZE_6,
} from "../../styles/size"
import { PURPLE } from "../../styles/colors"

export const Article = styled.article`
  margin: 0px auto;
  max-width: calc(1020px - (20px * 2));
  display: flex;
  justify-content: space-between;
  padding-top: ${SPACE_12};
`

export const Date = styled.p`
  font-size: ${FONT_SIZE_2};
`

export const Content = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    /* /* font-family: var(--font-heading); */
    margin-top: ${SPACE_12};
    margin-bottom: ${SPACE_6};
    line-height: ${LINE_HEIGHT_TIGHT};
    letter-spacing: -0.025em;
    font-weight: ${BOLD};
  }

  h1 {
    font-size: ${FONT_SIZE_6};
  }

  h2 {
    font-size: ${FONT_SIZE_5};
  }

  h3 {
    font-size: ${FONT_SIZE_4};
  }

  h4 {
    font-size: ${FONT_SIZE_3};
  }

  h5 {
    font-size: ${FONT_SIZE_2};
  }

  h6 {
    font-size: ${FONT_SIZE_1};
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
    line-height: ${LINE_HEIGHT_RELAXED};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: ${SPACE_0} ${SPACE_0} ${SPACE_8} ${SPACE_0};
    padding: ${SPACE_0};
  }

  ul,
  ol {
    margin-left: ${SPACE_0};
    margin-right: ${SPACE_0};
    padding: ${SPACE_0};
    padding-left: ${SPACE_4};
    margin-bottom: ${SPACE_8};
    list-style: square;
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: ${SPACE_0};
    margin-bottom: calc(${SPACE_8} / 2);
  }

  ul li {
    list-style: square;
  }

  ol li {
    list-style: decimal;
  }

  li > p {
    margin-bottom: calc(${SPACE_8} / 2);
  }

  li *:last-child {
    margin-bottom: ${SPACE_0};
  }

  li > ul {
    margin-left: ${SPACE_4};
    margin-top: calc(${SPACE_8} / 2);
  }

  blockquote {
    color: ${PURPLE};
    margin-left: ${SPACE_1};
    margin-right: ${SPACE_8};
    padding: ${SPACE_0} ${SPACE_0} ${SPACE_0} ${SPACE_6};
    border-left: ${SPACE_1} solid inherit;
    font-size: ${FONT_SIZE_2};
    font-style: italic;
    margin-bottom: ${SPACE_8};
  }

  blockquote > :last-child {
    margin-bottom: ${SPACE_0};
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
    margin-bottom: ${SPACE_8};
  }
`
