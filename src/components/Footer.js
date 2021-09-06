import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";
import { AiFillHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import iconCall from "../assets/images/icon-call.png";

const FooterStyle = styled.div`
  background-color: var(--green-primary);
  padding-top: 5rem;
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
      }
      .footer__col1 {
        margin-bottom: 2rem;
        width: 50%;
        .customer__service {
          img {
            width: 30px;
          }
          h2 a {
            font-size: 1.5rem;
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
              heading="Giới thiệu"
              links={[
                {
                  title: "Về GreenUP",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "Câu chuyện thức uống",
                  path: "/about",
                },
                {
                  type: "Link",
                  title: "Trang trại GreenUP",
                  path: "/projects",
                },
                {
                  type: "Link",
                  title: "Tin tức khuyến mãi",
                  path: "/contact",
                },
                {
                  type: "Link",
                  title: "Tin tức",
                  path: "/contact",
                },
                {
                  type: "Link",
                  title: "Tuyển dụng",
                  path: "/contact",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="Sản phẩm"
              links={[
                {
                  title: "Nông sản GreenUP",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "Đặc sản GreenUP",
                  path: "/about",
                },
                {
                  type: "Link",
                  title: "C+ Rau Má Mix",
                  path: "/projects",
                },
                {
                  type: "Link",
                  title: "C+ Detox",
                  path: "/contact",
                },
                {
                  type: "Link",
                  title: "C+ Smoothies",
                  path: "/contact",
                },
                {
                  type: "Link",
                  title: "Fruit & Salad",
                  path: "/contact",
                },
                {
                  type: "Link",
                  title: "Nguyên liệu dinh dưỡng",
                  path: "/contact",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="Healthy Lifestyle"
              links={[
                {
                  title: "Kiến thức thực phẩm",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "Cẩm nang Ăn Sống Khoẻ",
                  path: "/about",
                },
                {
                  type: "Link",
                  title: "Công thức C+",
                  path: "/projects",
                },
                {
                  type: "Link",
                  title: "Khác",
                  path: "/contact",
                },
              ]}
            />
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="Cộng đồng"
              links={[
                {
                  title: "Facebook",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "Instagram",
                  path: "/about",
                },
                {
                  type: "Link",
                  title: "Tiktok",
                  path: "/projects",
                },
                {
                  type: "Link",
                  title: "Group",
                  path: "/contact",
                },
              ]}
            />
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__col2">
            <h1>
              CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN CÔNG NGHỆ NÔNG SẢN SẠCH
              GREENUP (GREENUP., JSC)
            </h1>
            <ul className="footer__address">
              <li>
                <AiFillHome />
                <span>
                  Chi nhánh HCM: 21 Hoa Đào, phường 02, quận Phú Nhuận
                </span>
              </li>
              <li>
                <AiFillHome />
                <span>
                  Chi nhánh Hà Nội: 285 Xã Đàn, phường Nam Đồng, Đống Đa
                </span>
              </li>
              <li>
                <AiOutlinePhone />
                <span>
                  Liên hệ: <a href="tel:0329773377">0329 773 377</a>
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
            <h1>CHĂM SÓC KHÁCH HÀNG</h1>
            <div class="customer__service">
              <img src={iconCall}></img>
              <h2>
                <a href="tel:0329773377">0329 773 377</a>
              </h2>
            </div>
          </div>
          <div className="footer__col1">
            <FooterCol
              heading="CÁC ĐIỀU KHOẢN"
              links={[
                {
                  title: "Chính sách bảo mật thông tin",
                  path: "/",
                  type: "Link",
                },
                {
                  type: "Link",
                  title: "Liên hệ",
                  path: "/about",
                },
                {
                  type: "Link",
                  title: "Chính sách vận chuyển",
                  path: "/projects",
                },
                {
                  type: "Link",
                  title: "Hướng dẫn mua hàng",
                  path: "/contact",
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
