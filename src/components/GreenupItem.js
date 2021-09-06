import React from "react";
import Button from "./Button";
import styled from "styled-components";

const GreenupItemStyle = styled.div`
  margin: 0 10px;
  padding: 0;
  width: 33%;
  cursor: pointer;
  .item-block {
    border: 4px solid #fff;
    border-radius: 10px;
    display: inline-block;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    img {
      width: 100%;
      height:350px;
      border-radius: 10px 10px 0 0;
    }
    .item-inner {
      width: 100%;
      height: 100px;
      display: flex;
      background-color: #fff;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .item-inner__header {
        font-size: 23px;
        font-weight: 700;
        max-width: 200px;
        line-height: 30px;
        color: var(--green-primary);
        margin-left: 20px;
      }
      .item-inner__btn {
        margin-right: 20px;
        .button {
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
        }
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
          <div className="item-inner">
            <div className="item-inner__header">{heading}</div>
            <div className="item-inner__btn">
              <Button btnLink={linkCollection} btnText={titleButton} />
            </div>
          </div>
        </a>
      </div>
    </GreenupItemStyle>
  );
}

export default GreenupItem;
