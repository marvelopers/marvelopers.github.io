import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby"
import essay from '../../images/essay.png';
import front from '../../images/front.png';
import web from '../../images/web.png';
import script from '../../images/script.png';
import marketing from '../../images/marketing.png';
import react from '../../images/react.png';


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
  return (
    <StyleLi key={slug}>
      <Link to={slug}>
        {category === 'web' ? < img src={web} alt="" className="img" /> :
          category === 'front' ? < img src={front} alt="" className="img" /> :
            category === 'script' ? < img src={script} alt="" className="img" /> :
              category === 'react' ? < img src={react} alt="" className="img" /> :
                category === 'marketing' ? < img src={marketing} alt="" className="img" /> :
                  < img src={essay} alt="" className="img" />}
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
  /* 레이아웃 카드 3개 */
  width: 310px;
  height: 329px;
  /* 레이아웃 카드 4개 */
  width: 229px;
  height: 270px;
  letter-spacing: -0.1px;
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
    width: 229px;
    background : #e8e8e8;
  }
  .info{
    padding: 14px;
    height: 52%;
    position: relative;
    /* border: 1px solid #E8E8E8; */
  }
  .title{
    font-size: 18px;
    font-weight: 700;
    line-height: 1.49;
  }
  .date{
    color: #929292;
    position: absolute;
    bottom: 40px;
    font-size: 12px;
  }
  .tag{
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    bottom: 20px;
  }
  span{
    color: #4A154B;
    margin-right: 4px;
  }
`;