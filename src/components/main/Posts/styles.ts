import styled from '@emotion/styled';
import { SCREEN_OFFSET, MAX_SCREEN_OFFSET } from 'styles/layout';

export const Posts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;

  @media screen and (min-width: ${SCREEN_OFFSET}px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 6rem 3rem;
  }

  @media screen and (min-width: ${MAX_SCREEN_OFFSET}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 3.2rem;
  }
`;
