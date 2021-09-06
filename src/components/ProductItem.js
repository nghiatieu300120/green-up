import React from "react";
import styled from "styled-components";
import ActiveC from "../assets/images/product/activec+.jpg";
import { AiOutlineStar } from "react-icons/ai";

const ProductItemStyle = styled.div`
  padding: 0;
  margin-right: 5px;
  margin-bottom: 10px;
  width: 230px;
  .product__wrapper {
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    .img__product {
      width: 100%;
    }
    .product__details {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      h2 {
        font-size: 15px;
        color: var(--green-primary);
        text-transform: uppercase;
        margin-top: 5px;
      }
      .product__review {
        display: flex;
        justify-content: center;
        align-items: center;
        .starBarBadge {
          margin-top: 5px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .starBar svg {
            fill: #f7d805;
            width: 15px;
            height: 15px;
          }
        }
        p {
          color: rgb(163, 163, 163);
          font-size: 12px;
          margin-left: 9px;
        }
      }

      .product__price h2 {
        margin-top: 5px;
        font-size: 15px;
        color: var(--green-primary);
        letter-spacing: 2px;
      }
    }
  }
  @media only screen and (max-width: 1333px) {
    margin: 0 20px;
  }
  @media only screen and (max-width: 768px) {
    width: 150px;
    margin: 5px;
    .product__wrapper {
      height: 250 px;
    }
  }
`;

function ProductItem({
  name = "Product Name",
  price = "10.000đ",
  star = 5,
  review = 10,
  image = ActiveC,
  link = "#",
}) {
  return (
    <ProductItemStyle>
      <a href={link}>
        <div className="product__wrapper">
          <div className="img__product">
            <img src={image}></img>
          </div>
          <div className="product__details">
            <h2>{name}</h2>
            <div className="product__review">
              <div className="starBarBadge">
                <div className="starBar">
                  <AiOutlineStar />
                </div>
                <div className="starBar">
                  <AiOutlineStar />
                </div>
                <div className="starBar">
                  <AiOutlineStar />
                </div>
                <div className="starBar">
                  <AiOutlineStar />
                </div>
                <div className="starBar">
                  <AiOutlineStar />
                </div>
              </div>
              <p>({review})</p>
            </div>

            <div className="product__price">
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      </a>
    </ProductItemStyle>
  );
}

export default ProductItem;
