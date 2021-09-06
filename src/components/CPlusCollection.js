import React from 'react'
import styled from 'styled-components';
import CPlusItem from './CPlusItem';

const CPlusCollectionStyle = styled.div`
    width: 100%;
    .cplus-collection{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media only screen and ( max-width: 768px){
        margin-left: 5px;
            margin-right: 5px;
        .cplus-collection{
            flex-direction: column;
           
        }
    }
`;

function CPlusCollection() {
    return (
        <CPlusCollectionStyle>
            <div className="cplus-collection">
                {/* <CPlusItem 
                    heading="NÔNG SẢN HỮU CƠ GREENUP"
                    titleButton="SHOP NOW"
                    color = "#fff"
                    linkImg="https://file.hstatic.net/200000349441/file/nongsanhuuco_08d6e04965364caa953b2a9c3007ae1f.jpg"
                    linkCollection="#"
                /> */}
                </div>
        </CPlusCollectionStyle>
    )
}


export default CPlusCollection
