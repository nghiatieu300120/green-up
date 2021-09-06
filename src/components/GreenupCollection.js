import React from 'react'
import styled from 'styled-components';
import GreenupItem from './GreenupItem';

const GreenupCollectionStyle = styled.div`
    width: 100%;
    .greenup-collection{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media only screen and ( max-width: 768px){
        margin-left: 5px;
            margin-right: 5px;
        .greenup-collection{
            flex-direction: column;
           
        }
    }
`;

function GreenupCollection() {
    return (
        <GreenupCollectionStyle>
            <div className="greenup-collection">
                <GreenupItem 
                    heading="NÔNG SẢN HỮU CƠ GREENUP"
                    titleButton="SHOP NOW"
                    linkImg="https://file.hstatic.net/200000349441/file/nongsanhuuco_08d6e04965364caa953b2a9c3007ae1f.jpg"
                    linkCollection="#"
                />
                
                <GreenupItem 
                    heading="ĐẶC SẢN HỮU CƠ GREENUP"
                    titleButton="SHOP NOW"
                    linkImg="https://file.hstatic.net/200000349441/file/dacsangreenup_23ea0aac4a714faaa65886baee6f23cb.jpg"
                    linkCollection="#"
                />
                <GreenupItem 
                    heading="NGUYÊN LIỆU DINH DƯỠNG GREENUP"
                    titleButton="SHOP NOW"
                    linkImg="https://file.hstatic.net/200000349441/file/nguyenlieudinhduong_f3d87fc7c0784e6bbf4d0287f466f2c8.jpg"
                    linkCollection="#"
                />                                
            </div>
        </GreenupCollectionStyle>
    )
}

export default GreenupCollection
