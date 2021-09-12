import React from "react";
import Button from "./Button";
import styled from "styled-components";

const GreenupItemStyle = styled.div`
  padding: 0;
  width: 100%;
  cursor: pointer;
  margin: 10px 0 25px 0;
  .item-block {
    border: 2px solid #f2f2f2;
    display: inline-block;
    width: 100%;
    position: relative;
    height:400px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.25),
        0 5px 5px rgba(0, 0, 0, 0.22);
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    .overlay {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: rgb(63,94,251);
      background: radial-gradient(circle, rgba(63,94,251,0) 0%, rgba(0,0,0,0.6068802521008403) 100%);
    }
    .item-inner__header {
      position: absolute;
      top: 10px;
      left: 10px;
        font-size: 23px;
        font-weight: 700;
        max-width: 250px;
        line-height: 30px;
        color: #fff;
        margin-left: 20px;
      }
      .item-inner__btn {
        position: absolute;
      bottom: 15px;
      right: 10px;
        margin-right: 20px;
        .button {
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
        }
      }
  }
  @media only screen and ( max-width: 768px){
    width: 90%;
    margin-bottom: 10px;
    .item-block {
      .item-inner {
      .item-inner__header {
        font-size: 20px;
        max-width: 180px;
        text-align: left;
        margin-left: 10px;
      }
      .item-inner__btn {
        margin-right: 10px;
        .button {
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
        }
      }
    }
    }
    
 }
`;

function GreenupItem({
  heading = "Your Categories",
  titleButton = "Your Text",
  linkImg = "link",
  linkCollection = "link",
}) {
  return (
    <GreenupItemStyle>
      <div className="item-block">
        <a href={linkCollection}>
          <img src={linkImg} />
          <div className="overlay"></div>
          <div className="item-inner__header">{heading}</div>
          <div className="item-inner__btn">
              <Button btnLink={linkCollection} btnText={titleButton} isEx={true} />
            </div>
        </a>
      </div>
    </GreenupItemStyle>
  );
}

export default GreenupItem;
