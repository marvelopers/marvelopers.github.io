import styled from "@emotion/styled";
import { GREY_4, PURPLE } from "styles/colors";

export const Thumbnail = styled.li`
  width: 30rem;
  height: 32rem;
  letter-spacing: -0.025rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 5px 12px;
  cursor: pointer;

  span {
    max-height: 16.8rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const TextBox = styled.div`
  padding: 1.4rem;
  height: 52%;
  position: relative;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.49;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    color: ${GREY_4};
    position: absolute;
    bottom: calc(27%);
    font-size: 12px;
  }
`;

export const Tags = styled.div`
  position: absolute;
  bottom: calc(12%);
  width: calc(100% - 20px);
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: normal;

  span {
    color: ${PURPLE};
    margin-right: 4px;
  }
`;
