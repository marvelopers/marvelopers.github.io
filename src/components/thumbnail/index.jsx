import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby"
import front from '../../images/front.png'

// slug, title
const Thumbnail = ({ slug, title }) => {

  return (
    <StyleLi>
      <Link to={slug}>
        <img src={front} alt="" className="img" />
        <div className="info">
          <h2 className="title">{title}</h2>
          <p className="date">2020.12.15</p>
          <div className="tag"><span>#react #react #react #react</span></div>
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
  }
`;