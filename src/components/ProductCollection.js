import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import SectionTitle from "./SectionTitle";
import products from '../assets/data/productdata';

const ProductCollectionStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .section-title h2 {
    color: var(--green-primary);
  }

  .collection-product {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    .section-title h2 {
      font-size: 30px;
      margin-bottom: 20px;
      
    }
  }
`;

function ProductCollection() {
    const showItem = products.map((product, index) => {
        return (
            <ProductItem name={product.name} 
                        price={product.price} 
                        star={product.star} 
                        image={product.image}
                        link={product.link}
                        review={product.review}
            />
        )
    })

  return (
    <ProductCollectionStyle>
      <SectionTitle heading="SẢN PHẨM NỔI BẬT" subheading=" " />
      <div className="container">
        <div className="collection-product">
            {showItem}
        </div>
      </div>
    </ProductCollectionStyle>
  );
}

export default ProductCollection;
