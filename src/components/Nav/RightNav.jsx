import React from "react";
import styled from "styled-components";



const RightNav = ({open}) => {

    const Nav = styled.nav`
        width: 320px;
        height: 100%;
        color: #fff;
        position: fixed;
        top: 70px;
        right: 0;
        background: #212121;
        transform: ${ ({open}) => open ? 'translateX(0%)' : 'translateX(100%)' };
        transition: all 300ms ease-in-out;
        z-index: 1000;
        
        ul {
            list-style: none;
            width: 100%;
            padding: 0;
        }
        ul li {
            border-top: 2px solid #282828;
            border-bottom: 1px solid #101010;
            background: #212121;
            text-align: center;
            padding: 20px;
            cursor: pointer;
            transition: all 0.3s;            
        }
        ul li:hover {            
        background: #272727;
        }        
    `;

    return (
        <Nav open={open}>
            <ul>
                <li>Обучающее видео</li>
                <li>Оформление заказа</li>
                <li>Оплата</li>
                <li>Доставка</li>
                <li>Гарантия</li>
                <li>Возврат</li>
                <li>Контакты</li>
                <li>Партнерам</li>
            </ul>
        </Nav>
    )
};
export default RightNav
