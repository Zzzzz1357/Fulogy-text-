import React from "react";
import styled from "styled-components";

const SecondaryMeny = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 0 37px;
    font-size: 1rem;
    margin-bottom: 100px;
    div {
        width: 140px;
        height: 60px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-right: 2px solid #dcdcdc;
        border-bottom: 4px solid #00b6ff;
        transition: all 0.3s;
    }
    div:hover, div.active{
        background: #00b6ff;
        color: #fff;
    }
    div:nth-child(1){    
        border-left: 2px solid #dcdcdc;
    }
`;

const SecMenu = () => {
    return (
        <SecondaryMeny>
            <div>Вариант кухни</div>
            <div>Размеры</div>
            <div>Сенсор</div>
            <div>Питающий кабель</div>
            <div>Блок питания</div>
            <div className="active">Цвет свечения</div>
            <div>Монтаж</div>
            <div>Корзина</div>
        </SecondaryMeny>
    )
};
export default SecMenu
