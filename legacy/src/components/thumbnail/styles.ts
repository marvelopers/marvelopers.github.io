import styled from '@emotion/styled';
import { TABLET_SCREEN_OFFSET } from 'src/styles/layout';

export const Thumbnail = styled.li`
  /* 레이아웃 카드 3개 width: 310px; height: 329px; */
  /* 레이아웃 카드 4개 */
  width: 229px;
  height: 270px;
  letter-spacing: -0.025rem;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 5px 12px;
  margin: 20px 8px;
  a {
    text-decoration: none;
  }
  .img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    background: #e8e8e8;
  }

  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: calc(100vw / 2 - 16px);
    height: calc(100vw * 0.587);
  }
`;

export const TextBox = styled.div`
  padding: 14px;
  height: 52%;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.49;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    color: #929292;
    position: absolute;
    bottom: calc(27%);
    font-size: 12px;
  }

  @media (max-width: calc(${TABLET_SCREEN_OFFSET})) {
    h2 {
      font-size: 17px;
      line-height: 1.47;
    }
  }
`;

export const Tags = styled.div`
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  bottom: calc(12%);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;
  width: calc(100% - 20px);
  span {
    color: #4a154b;
    margin-right: 4px;
  }
`;
