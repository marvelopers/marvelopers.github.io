import { css } from "@emotion/react"

export const Widths = {
  Site: "1024px",
  Mobile: "320px", // iphone5
  Tablet: "768px", // ipad
  Desktop: "1024px",
  Content: "800px",
}

export const SCREEN_OFFSET = 1024
export const TABLET_SCREEN_OFFSET = 720
export const PHONE_SCREEN_OFFSET = 428

export const FixedStyle = css`
  position: fixed;
  width: 100%;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    max-width: ${SCREEN_OFFSET}px;
  }
`
