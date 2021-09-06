import React from 'react'
import styled from "styled-components";
import AboutPic from '../assets/images/about-us.png'
import Button from './Button';
import PText from './PText';

const AboutUsStyle = styled.div`
    background-image: url(${AboutPic});
    background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
    height: 640px;
    margin-bottom: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .about__info{
       width: 50%;
       margin: 5rem 2rem;
       h1 {
           color: rgb(20, 122, 64);
        font-size: 30px;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0px;
        line-height: 1.2;
        margin-bottom: 2rem;
       }
       .para p {
        color: rgb(66, 66, 66);
        font-size: 17px;
        line-height: 2;
        margin-bottom: 2rem;
       }
    }
    @media only screen and (max-width: 768px){
        .about__info{
       width: 90%;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       h1 {
        text-align: center;
       }
       .para p {
        text-align: center;
       }
    }
    }
`;

function AboutUs() {
    return (
       <AboutUsStyle>
           <div className="container">
                <div className="about__info">
                    <h1>Giới thiệu về GreenUP</h1>
                    <PText>GreenUP tin rằng phong cách sống xanh – sống lành mạnh không chỉ là một trào lưu nhất thời mà là một xu thế tất yếu.
                    Con người tìm đến thực phẩm xanh – sạch là nhu cầu tất yếu trong xã hội hiện đại ngày nay. Đây chính là động lực thúc đẩy GreenUP phát triển nông sản bền vững, kiến tạo giá trị những giá trị mang tính cộng đồng.</PText>
                    <Button btnText="Chúng tôi là ai" btnLink="#"/>
                </div>
           </div>
       </AboutUsStyle>
    )
}

export default AboutUs
