import React from "react"
import styled from "@emotion/styled"
import { TABLET_SCREEN_OFFSET } from "../../styles/layout"

function Footer() {
  return (
    <StyledFooter>
      <div className="wrapper">
        © Copyright 2020 marveloper All rights reserved.
      </div>
      {/* git */}
      {/* contact */}
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  border-top: 1px solid #e8e8e8;
  .wrapper {
    margin: 30px auto;
    max-width: calc(1020px - (20px * 2));
    height: 40px;
  }
  @media (max-width: calc(${TABLET_SCREEN_OFFSET} - 1px)) {
    width: calc(100vw - 20px);
    margin: auto;
  }
`
