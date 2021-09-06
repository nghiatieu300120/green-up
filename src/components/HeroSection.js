import React from "react";
import styled from "styled-components";
import Banner from "../assets/images/banner-home.gif";
import PText from "./PText";
import {ImQuotesLeft} from 'react-icons/im'

const AboutSectionStyles = styled.div`
  padding: 0;
  .hero__quote {
      margin: 5rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    svg {
        width: 50px;
        fill: rgb(20, 122, 64, 0.5);
    }
    .para p {
      color: rgb(20, 122, 64, 0.5);
      font-size: 21px;
      font-style: italic;
      text-align: center;
      letter-spacing: 2px;
      line-height: 1.6;
      font-family: 'Montserrat', sans-serif;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__quote {
      margin: 3rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    .para p {
      font-size: 16px;
      font-style: italic;
      letter-spacing: 2px;
      line-height: 1.6;
     
    }
  }
  }
`;

function HeroSection() {
  return (
    <AboutSectionStyles>
      <div className="hero__image">
        <img src={Banner} />
      </div>
      <div className="hero__quote">
        <ImQuotesLeft />
        <PText>
          Cung cấp các sản phẩm nông sản chất lượng cao và an toàn vì sức khoẻ
          cộng đồng và chất lượng cuộc sống cho thế hệ tương lai
        </PText>
      </div>
    </AboutSectionStyles>
  );
}

export default HeroSection;
