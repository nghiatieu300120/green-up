import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavTopStyle = styled.div`
    padding: 0;
    margin: 0;
    background-color: var(--green-primary);
    height: 30px;
    width: 100%;
    .nav-top {
        font-size: 13px;
    }
    .nav-top__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;

        .add-on-link {
           display: flex;
           justify-content: center;
           align-items: center;
           a {
               margin-right: 20px;
               cursor: pointer;
           }
        }
    }

    @media only screen and (max-width: 768px){
        .nav-top__row {
            flex-direction: column;
            justify-content: center;
            .add-on-link {
            display: none;
        }
        }
        
    }
`;
function NavTop({content}) {
    return (
        <NavTopStyle>
            <div className="nav-top">
                <div className="container">
                    <div className="nav-top__row">
                        <p>{content}</p>
                        <div className="add-on-link">
                    
                                    <NavLink
                                        to="/"
                                        target="__blank"
                                    >Tra cứu đơn hàng</NavLink>
                                
                               
                                    <NavLink
                                        to="/"
                                        target="__blank"
                                    >Khuyến mãi</NavLink>
                               
                                    <NavLink
                                        to="/"
                                        target="__blank"
                                    >Liên hệ</NavLink>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </NavTopStyle>
    )
}

export default NavTop
