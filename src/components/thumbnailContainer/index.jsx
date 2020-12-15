import React from 'react';
import styled from "styled-components";
import Thumbnail from '../thumbnail';

// slug, title
const ThumbnailContainer = ({ slug, title }) => {

  return (
    <StyleUl>
      {/* Thumnail map */}
      <Thumbnail title={<>여기는 두 줄짜리 제목입니다. 이렇게하면 두 줄이됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
      <Thumbnail title={<>여기에 내용을 치면 됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
      <Thumbnail title={<>여기에 내용을 치면 됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
      <Thumbnail title={<>여기에 내용을 치면 됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
      <Thumbnail title={<>여기에 내용을 치면 됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
      <Thumbnail title={<>여기에 내용을 치면 됩니다. < span role="img" aria-label="Party popper emojis">🎉🎉🎉</span> </>} />
    </StyleUl>
  )
}

export default ThumbnailContainer;

const StyleUl = styled.ul`
  /* width: 290px;
  height: 270px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 5px 12px;
  margin: 15px 10px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .title{
    font-size: 18px;
  }
  .date{
    font-size: 14px;
  }
`;