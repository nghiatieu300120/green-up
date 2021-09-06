import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import NavTop from "../components/NavTop";
import Logo from "./../assets/images/logo.png";

const NavMenuStyle = styled.div`
  z-index: 100;
  width: 100%;
  background: var(--white);
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  ul {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      margin: 0.5rem;
    }
    a {
      font-family: "Noto Sans", sans-serif;
      padding: 1rem 0.5rem;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--green-primary);
      text-transform: uppercase;
      outline: none;
      transform: perspective(1px) translateZ(0);
      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        right: 50%;
        bottom: 0;
        background: var(--green-primary);
        height: 2px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      &:hover:before,
      &:focus:before,
      &:active:before {
        left: 0;
        right: 0;
      }
    }
    .active {
      color: var(--white);
    }
  }
  .logo-wrapper {
    max-width: 120px;
    padding: 5px;
    img {
      width: 90%;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    left: 1rem;
    top: 5.5rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateX(calc(-100% - var(--left)));
    }
    .mobile-menu-icon {
      display: block;
      svg {
        fill: var(--green-primary);
        width: 40px;
      }
    }
    .navItems {
      --left: 100rem;
      transition: 0.3s ease transform;
      background-color: var(--green-primary);
      padding: 2rem;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .closeNavIcon {
        display: block;
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }

      li {
          margin-bottom: 2rem;
        a {
          padding: 1rem 0.8rem;
          font-size: 2rem;
          font-weight: 500;
          color: var(--white);
        }
      }
    }
  }
`;

function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyle>
      <NavTop content="Miễn phí giao hàng với giá trị trên 300k" />
      <div className="container">
        <div className="nav-bar">
          <div
            className="mobile-menu-icon"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            <MdMenu />
          </div>
          <div className="logo-wrapper">
            <NavLink to="/" exact>
              <img src={Logo}></img>
            </NavLink>
          </div>
          <ul className={!showNav ? "navItems hide-item" : "navItems"}>
            <div
              className="closeNavIcon"
              onClick={() => setShowNav(!showNav)}
              role="button"
              onKeyDown={() => setShowNav(!showNav)}
              tabIndex={0}
            >
              <MdClose />
            </div>
            <li>
              <a href="https://order.greenup.com.vn/">Sản phẩm</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Nông sản GreenUP</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Đặc sản GreenUP</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Thức uống C+</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Nguyên liệu dinh dưỡng</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Hệ thống cửa hàng</a>
            </li>
            <li>
              <a href="https://order.greenup.com.vn/">Về chúng tôi</a>
            </li>
          </ul>
        </div>
      </div>
    </NavMenuStyle>
  );
}

export default NavMenu;
