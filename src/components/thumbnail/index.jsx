import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby"
import essay from '../../img/essay.png';
import front from '../../img/front.png';
import js from '../../img/js.png';
import ts from '../../img/ts.png';
// import marketing from '../../img/marketing.png';
import react from '../../img/react.png';


// export interface PostItemType {
//   title: ReactNode
//   slug: string
//   meta?: ReactNode
//   excerpt?: string
// }
// export interface P {
//   posts: PostItemType[]
// }

// slug, title

// console.log(thumbnailImg);

const Thumbnail = ({ title, slug, meta, category, tags }) => {

  console.log('META', meta);
  console.log('tags', tags);
  return (
    <StyleLi key={slug}>
      <Link to={slug}>
        {category === 'essay' ? < img src={essay} alt="" className="img" /> :
          category === 'front' ? < img src={front} alt="" className="img" /> :
            category === 'react' ? < img src={react} alt="" className="img" /> :
              category === 'js' ? < img src={js} alt="" className="img" /> :
                < img src={ts} alt="" className="img" />}
        <div className="info">
          <h2 className="title">{title}</h2>
          <p className="date">{meta}</p>
          <div className="tag">
            {tags && tags.map((tag) => (<span>#{tag}</span>))}
          </div>
        </div>
      </Link>
    </StyleLi>
  )
}

export default Thumbnail;

const StyleLi = styled.li`
  width: 304px;
  height: 329px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.068) 0px 5px 12px;
  margin: 20px 8px;
  a{
    text-decoration: none;
  }
  .img{
    border-top-left-radius :5px;
    border-top-right-radius :5px;
    /* height: 164px; */
    width: 304px;
    background : #e8e8e8;
  }
  .info{
    padding: 20px;
    height: 47%;
    position: relative;
  }
  .title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.49;
  }
  .date{
    font-size: 14px;
    color: #929292;
    position: absolute;
    bottom: 42px;
  }
  .tag{
    font-size: 14px;
    position: absolute;
    bottom: 20px;
  }
  span{
    color: #4A154B;
    margin-right: 4px;
  }
`;