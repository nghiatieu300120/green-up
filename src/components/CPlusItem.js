import React from "react";
import Button from "./Button";
import styled from "styled-components";
import "animate.css"

const CPlusItemStyle = styled.div`
  padding: 0;
  width: 100%;
  cursor: pointer;
  margin: 10px 0 25px 0;
  .item-blocks {
    border: 4px solid #fff;
    display: inline-block;
    width: 100%;
    border: 2px solid #f2f2f2;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    --animate-delay: 0.5s;
    animation-duration: 2s; /* don't forget to set a duration! */
    &:hover {
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.25),
        0 5px 5px rgba(0, 0, 0, 0.22);
    }
    img {
      width: 100%;
      height: 100%;
    }
    .item-inners {
      width: 100%;
      height: 100%;
      display: flex;
      background-color: #fff;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .item-inner__headers {
        font-size: 17px;
        font-weight: 700;
        /* max-width: 200px; */
        margin-top: 5px;
        color: var(--green-primary);
      }
      .item-inner__btns {
        margin-top: -5px;
        margin-bottom: 10px;
        .button {
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
    .item-blocks {
      img {
        height: 50%;
      }
      .item-inner__headers {
        font-size: 17px;
        max-width: 250px;
        text-align: center;
        margin-left: 10px;
      }
      .item-inner__btns {
        .button {
          border: none;
          border-radius: 10px;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

function CPlusItem({
  heading = "Your Categories",
  titleButton = "Your Text",
  color = "#fff",
  linkImg = "link",
  linkCollection = "link",
}) {
  return (
    <CPlusItemStyle>
      <div className="item-blocks animate__fadeInDown show-on-scroll">
        <a href={linkCollection}>
          <img src={linkImg} />
          <div className="item-inners">
            <div className="item-inner__headers" style={{ color: `${color}` }}>
              {heading}
            </div>
            <div className="item-inner__btns">
              <Button
                btnLink={linkCollection}
                btnText={titleButton}
                isEx={true}
              />
            </div>
          </div>
        </a>
      </div>
    </CPlusItemStyle>
  );
}

export default CPlusItem;
