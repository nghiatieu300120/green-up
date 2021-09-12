import React, { useState, Component } from "react";
import styled from "styled-components";
import CPlusItem from "./CPlusItem";
import Slider from "react-slick";
import "./CplusCollection.css";
import Button from "./Button";

const CPlusCollectionStyle = styled.div`
  width: 100%;
  margin-top: 30px;
  .container {
    max-width: 1400px;
  }
  .slick-slider .slick-slide {
    padding: 0 5px;
  }
  @media only screen and (max-width: 768px) {
    .slick-slider .slick-slide {
      padding: 0 20px;
    }
  }
`;

const CPlusItemLast = styled.div`
  padding: 0;
  width: 100%;
  cursor: pointer;
  /* border: 2px solid #f2f2f2; */
  height: 400px;
  display: block;
  margin: 10px 0 25px 0;

  .Cplus_all {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    h1 {
      color: var(--green-primary);
      font-size: 20px;
    }
    #Plus_Title_1 {
      font-weight: 300;
    }
    #Plus_Title_2 {
      font-weight: 700;
    }
    .button {
      border: none;
      border-radius: 10px;
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 1200px) {
    height: 355px;
  }
`;

export default class CPlusCollection extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 1,
      focusOnSelect: true,
      centerPadding: 0,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <CPlusCollectionStyle>
        <div className="container">
          <Slider {...settings}>
            <CPlusItem
              heading="CPLUS RAU MÁ"
              titleButton="SHOP NOW"
              color="#C2D059"
              linkImg="https://file.hstatic.net/200000349441/file/kv_rau_ma_84c9fc804148427d91a55615abb88f4b.jpg"
              linkCollection="https://order.greenup.com.vn/collections/rau-ma-vietgap"
            />
            <CPlusItem
              heading="CPLUS DETOX"
              titleButton="SHOP NOW"
              color="#224E7C"
              linkImg="https://file.hstatic.net/200000349441/file/kv_detox_ece03ef021e945a5a728ad6deafb68d4.jpg"
              linkCollection="https://order.greenup.com.vn/collections/thuc-uong-detox"
            />
            <CPlusItem
              heading="CPLUS SMOOTHIES"
              titleButton="SHOP NOW"
              color="#A6342E"
              linkImg="https://file.hstatic.net/200000349441/file/kv_smoothies_3787ef383f474f09a30906b197852c24.jpg"
              linkCollection="https://order.greenup.com.vn/collections/smoothies"
            />
            <CPlusItem
              heading="CPLUS JUICE"
              titleButton="SHOP NOW"
              color="#F1BA74"
              linkImg="https://file.hstatic.net/200000349441/file/kv_juice_97d667f4a48f47f795ce7cc6a74b1d3d.jpg"
              linkCollection="https://order.greenup.com.vn/collections/juice"
            />
            <CPlusItem
              heading="CPLUS FRUIT & SALAD"
              titleButton="SHOP NOW"
              color="#147A40"
              linkImg="https://file.hstatic.net/200000349441/file/z2694729378258_fcf3de77d57cb6b82e2c26cb4d6666f4_7da873a59be74a06b244951d68017f5d.jpg"
              linkCollection="https://order.greenup.com.vn/collections/salad"
            />
            <CPlusItemLast>
              <div className="Cplus_all">
                <h1 id="Plus_Title_1">HỆ THỨC UỐNG</h1>
                <h1 id="Plus_Title_2">NĂNG LƯỢNG CPLUS</h1>
                <div className="item-inner__btns">
                  <Button
                    btnLink="https://order.greenup.com.vn/collections/c"
                    btnText="SHOP NOW"
                    isEx={true}
                  />
                </div>
              </div>
            </CPlusItemLast>
          </Slider>
        </div>
      </CPlusCollectionStyle>
    );
  }
}
