import { css } from "@emotion/react";

export const SCREEN_OFFSET = 720;
export const BANNER_WIDTH_OFFSET = 375;
export const IPHONE_SE = 320;
export const SMALL_PHONE = 360;
export const FixedStyle = css`
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    max-width: ${SCREEN_OFFSET}px;
  }
`;
