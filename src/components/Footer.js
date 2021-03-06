import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import { AiFillHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import iconCall from "../assets/images/icon-call.png";

const FooterStyle = styled.div`
  background-color: var(--green-primary);
  padding: 2rem;
  .footer__links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 5rem;
  }
  .footer__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3rem;
    .footer__col1 .customer__service {
      margin-top: 2rem;
      display: flex;
      justify-content: left;
      align-items: center;
      img {
        width: 40px;
        margin-right: 10px;
      }
      h2 a {
        font-size: 2rem;
        font-weight: 700;
        
      }
    }
  }
  .footer__col1 {
    width: auto;
  }
  .footer__col2 {
    width: 50%;
    h1 {
      margin-bottom: 2rem;
    }
    .footer__address {
      font-size: 14px;
      li {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        margin-bottom: 1rem;
        svg {
          width: 20px;
          margin-right: 7px;
        }
      }
    }
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .footer__links {
      flex-wrap: wrap;
      gap: 0rem;
      margin-bottom: 1rem;
      .footer__col1 {
        margin-bottom: 2rem;
        width: 50%;
      }
    }
    .footer__info {
      flex-wrap: wrap;
      gap: 0rem;
      .footer__col2 {
        width: 100%;
        text-align: left;
        margin-top: 0;
        margin-bottom: 2rem;
        h1 {
          font-size: 16px;
        }
      }
      .footer__col1 {
        margin-bottom: 2rem;
        width: 50%;
        h2 , h1{
          font-size: 16px;
        }
        .customer__service {
          img {
            width: 30px;
          }
          h2 a {
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
    .copyright {
      .footer__links {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__links">
          <div className="footer__col1">
            <FooterCol
              heading="Gi???i thi???u"
              links={[
                {
                  title: "V??? GreenUP",
                  path: "/ve-green-up",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "C??u chuy???n th???c u???ng",
                  path: "/cau-chuyen-thuc-uong",
                },
                {
                  type: "Link",
                  title: "Trang tr???i GreenUP",
                  path: "/trang-trai-green-up",
                },
                {
                  type: "External",
                  title: "Tin t???c khuy???n m??i",
                  path: "https://order.greenup.com.vn/blogs/khuyen-mai",
                },
                {
                  type: "External",
                  title: "Tin t???c",
                  path: "https://order.greenup.com.vn/blogs/news",
                },
                {
                  type: "External",
                  title: "Tuy???n d???ng",
                  path: "https://order.greenup.com.vn/blogs/tuyen-dung",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="S???n ph???m"
              links={[
                {
                  title: "N??ng s???n GreenUP",
                  path: "https://order.greenup.com.vn/collections/rau-cu-qua-tuoi-vietgap",
                  type: "External",
                },
                {
                  type: "External",
                  title: "?????c s???n GreenUP",
                  path: "https://order.greenup.com.vn/collections/trai-cay-huu-co",
                },
                {
                  type: "External",
                  title: "C+ Rau M?? Mix",
                  path: "https://order.greenup.com.vn/collections/rau-ma-vietgap",
                },
                {
                  type: "External",
                  title: "C+ Detox",
                  path: "https://order.greenup.com.vn/collections/thuc-uong-detox",
                },
                {
                  type: "External",
                  title: "C+ Juice",
                  path: "https://order.greenup.com.vn/collections/juice",
                },
                {
                  type: "External",
                  title: "C+ Smoothies",
                  path: "https://order.greenup.com.vn/collections/smoothies",
                },
                {
                  type: "External",
                  title: "C+ Fruit & Salad",
                  path: "https://order.greenup.com.vn/collections/salad",
                },
                {
                  type: "External",
                  title: "Nguy??n li???u dinh d?????ng",
                  path: "https://order.greenup.com.vn/collections/nguyen-lieu-dinh-duong",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="Healthy Lifestyle"
              links={[
                {
                  title: "Ki???n th???c th???c ph???m",
                  path: "https://order.greenup.com.vn/blogs/kien-thuc-thuc-pham",
                  type: "External",
                },
                {
                  type: "External",
                  title: "C???m nang ??n S???ng Kho???",
                  path: "https://order.greenup.com.vn/blogs/cam-nang-an-song-khoe",
                },
                {
                  type: "External",
                  title: "C??ng th???c C+",
                  path: "https://order.greenup.com.vn/blogs/cong-thuc-c",
                },
                {
                  type: "External",
                  title: "Kh??c",
                  path: "https://order.greenup.com.vn/blogs/news",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="C???ng ?????ng"
              links={[
                {
                  title: "Facebook",
                  path: "https://www.facebook.com/GreenUP.ThucPhamXanh",
                  type: "External",
                },
                {
                  type: "External",
                  title: "Instagram",
                  path: "https://www.instagram.com/",
                },
                {
                  type: "External",
                  title: "Tiktok",
                  path: "https://www.tiktok.com/en/",
                },
                {
                  type: "External",
                  title: "Group",
                  path: "https://www.facebook.com/GreenUP.ThucPhamXanh",
                },
              ]}
            />
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__col2">
            <h1>
              C??NG TY C??? PH???N ?????U T?? V?? PH??T TRI???N C??NG NGH??? N??NG S???N S???CH
              GREENUP (GREENUP., JSC)
            </h1>
            <ul className="footer__address">
              <li>
                <AiFillHome />
                <span>
                  Chi nh??nh HCM: 21 Hoa ????o, ph?????ng 02, qu???n Ph?? Nhu???n
                </span>
              </li>
              <li>
                <AiFillHome />
                <span>
                  Chi nh??nh H?? N???i: 285 X?? ????n, ph?????ng Nam ?????ng, ?????ng ??a
                </span>
              </li>
              <li>
                <AiOutlinePhone />
                <span>
                  Li??n h???: <a href="tel:0329773377">0329 773 377</a>
                </span>
              </li>
              <li>
                <AiOutlineMail />
                <span>
                  Email:{" "}
                  <a href="mailto:sale@greenup.com.vn">sale@greenup.com.vn</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="footer__col1">
            <h1>CH??M S??C KH??CH H??NG</h1>
            <div class="customer__service">
              <img src={iconCall}></img>
              <h2>
                <a href="tel:0329773377">0329 773 377</a>
              </h2>
            </div>
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="C??C ??I???U KHO???N"
              links={[
                {
                  title: "Ch??nh s??ch b???o m???t th??ng tin",
                  path: "https://order.greenup.com.vn/pages/chinh-sach-bao-mat",
                  type: "External",
                },
                {
                  type: "External",
                  title: "C??c c??u h???i th?????ng g???p",
                  path: "https://order.greenup.com.vn/pages/cau-hoi-thuong-gap",
                },
                {
                  type: "External",
                  title: "Ch??nh s??ch giao h??ng",
                  path: "https://order.greenup.com.vn/pages/chinh-sach-giao-hang",
                },
                {
                  type: "External",
                  title: "H?????ng d???n mua h??ng",
                  path: "https://order.greenup.com.vn/pages/huong-dan-doi-tra-va-mua-hang",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
