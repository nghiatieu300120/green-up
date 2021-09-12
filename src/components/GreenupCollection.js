import React, { useState, Component } from "react";
import styled from "styled-components";
import GreenupItem from "./GreenupItem";
import Slider from "react-slick";
import "./CplusCollection.css";

const GreenupCollectionStyle = styled.div`
  width: 100%;

  .container {
    max-width: 1400px;
  }

  .slick-slider .slick-slide {
    padding: 0 5px;
  }
  @media only screen and (max-width: 768px) {
    .slick-slider .slick-slide {
     
    }
  }
`;

export default class GreenupCollection extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
      <GreenupCollectionStyle>
        <div className="container">
          <Slider {...settings}>
            <GreenupItem
              heading="NÔNG SẢN HỮU CƠ GREENUP"
              titleButton="SHOP NOW"
              linkImg="https://file.hstatic.net/200000349441/file/nongsanhuuco_08d6e04965364caa953b2a9c3007ae1f.jpg"
              linkCollection="https://order.greenup.com.vn/collections/rau-cu-qua-tuoi-vietgap"
            />

            <GreenupItem
              heading="ĐẶC SẢN HỮU CƠ GREENUP"
              titleButton="SHOP NOW"
              linkImg="https://file.hstatic.net/200000349441/file/dacsangreenup_23ea0aac4a714faaa65886baee6f23cb.jpg"
              linkCollection="https://order.greenup.com.vn/collections/trai-cay-huu-co"
            />
            <GreenupItem
              heading="NGUYÊN LIỆU DINH DƯỠNG GREENUP"
              titleButton="SHOP NOW"
              linkImg="https://file.hstatic.net/200000349441/file/nguyenlieudinhduong_f3d87fc7c0784e6bbf4d0287f466f2c8.jpg"
              linkCollection="https://order.greenup.com.vn/collections/nguyen-lieu-dinh-duong"
            />
          </Slider>
        </div>
      </GreenupCollectionStyle>
    );
  }
}
