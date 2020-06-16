import React, {useContext} from "react";
import styled from "styled-components";
import {Context} from "../../context";


const ModalWindow = styled.div`
    z-index: 9999;
    position: absolute;  
    height: 90%;
    background: #fff;
    border-bottom: 2px solid #dcdcdc;
    .modalBack {
       margin: 10px 0 30px;
       cursor:pointer;
       opacity: 0.6;
       display: flex;
       flex-direction: row;
       align-items: center;
    }
    .modalBack p {
        margin:0;
        padding: 0 10px;
    }
    .modalText {        
       transition: all 0.3s ease-in-out;
       background: #fff;
       padding: 20px 37px; 
    }
    .modalShowing-true {
        display: block
        opacity: 1;
        pointer-events: showing;
    }
    .modalShowing-false {
        display:none;
        opacity:0;
    }
    p {
        line-height: 23px;
    }
   
`;

const Modal = () => {
    const {modal, changeModal} = useContext(Context);
    return (
        <ModalWindow>
            <div className={`modalText modalShowing-${modal}`} >
                <div onClick={() => changeModal()} className='modalBack'>
                        <svg className="bi bi-chevron-left" width="1em" height="1em" viewBox="0 0 16 16"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <p>Вернуться</p>
                </div>
                <p>"Casual!" - это свободный и динамичный стиль, причем он используется не только в одежде!
                    На рабочем месте это правильное распределение пространства, удобная деревянная мебель, натуральные ткани,
                    а дома, в вашей квартире - это, в первую очередь, удобство и уют и много свободного пространства.
                </p>
                <p>Ad, aliquam asperiores corporis deserunt dicta dolorum eius et fuga harum ipsa libero magni maiores
                    necessitatibus nihil nisi nostrum, optio quibusdam quisquam quos ratione, saepe similique tempore
                    vel veritatis voluptatem!
                </p>
                <p>Accusamus alias aliquid asperiores atque beatae cum dignissimos dolor fugiat inventore ipsam modi
                    neque obcaecati odio officiis pariatur quibusdam quidem repellat repellendus rerum sapiente tempore
                    veritatis, voluptatum. Deleniti, dignissimos, quas.
                </p>
            </div>
        </ModalWindow>
    )
};
export default Modal
