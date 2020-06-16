import React, {useContext} from "react";
import styled from "styled-components";
import {Context} from "../../context";

const SwitchLight = styled.div`
    img {
        width: 100%;
    }
    .custom-radio {
    position: absolute;
    opacity: 0;
  }

  .custom-radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    height: 90px;
    width: 130px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;
  }
  .custom-radio+label span {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center;
    color: #fff;
  }

  .custom-radio+label::before {
    content: '';
    width: 1.2em;
    height: 1.2em;
    border: 1px solid #adb5bd;
    border-radius: 20%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    position: absolute;
    background: #fff;
    top: 4px;
    right: -2px;
  }

  .custom-radio:not(:disabled):not(:checked)+label:hover::before {
    border-color: #b3d7ff;
  }

  .custom-radio:not(:disabled):active+label::before {
    background-color: #b3d7ff;
    border-color: #b3d7ff;
  }

  .custom-radio:focus+label::before {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .custom-radio:focus:not(:checked)+label::before {
    border-color: #80bdff;
  }
   .custom-radio:checked+label {
        transform: scale(1.1);
        box-shadow: 0 3px 3px rgba(0,0,0,0.1);
        box-shadow: 0 0px 5px rgba(0,0,0,0.4);
   }
  .custom-radio:checked+label::before {
    border-color: #00b6fe;
    background-color: #00b6fe;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;

const Description = () => {

    const {changeSlide} = useContext(Context);
    const {changeModal} = useContext(Context);

    return (
        <div className="description">
            <table>
                <tbody>
                    <tr>
                        <td>Класс:</td>
                        <td><span className="bdg-light">Standart</span></td>
                    </tr>
                    <tr>
                        <td>Потребляемая мощность:</td>
                        <td>59 Вт</td>
                    </tr>
                    <tr>
                        <td>Сила света:</td>
                        <td>3459 Люмен = 7.5 ламп накаливания по 40 Вт</td>
                    </tr>
                    <tr>
                        <td>Гарантия:</td>
                        <td>3 года</td>
                    </tr>
                    <tr>
                        <td>Монтаж:</td>
                        <td>Да</td>
                    </tr>
                    <tr>
                        <td>Итого сумма:</td>
                        <td>2594 рубля</td>
                    </tr>
                </tbody>
            </table>

            <div className="info">
                <div onClick={ () => changeModal()} className="i">i</div>Выберите цвет свечения
            </div>

            <div className="switchLight">
                <SwitchLight>
                    <input onClick={ () => changeSlide('200%')} className="custom-radio" type="radio" id="color-1" name="color" value="indigo" />
                    <label htmlFor="color-1">
                        <span>Теплый</span>
                        <img src={process.env.PUBLIC_URL + '/img/slideshow/3.jpg'} alt=""/>
                    </label>

                </SwitchLight>

                <SwitchLight>
                    <input onClick={ () => changeSlide('100%')} className="custom-radio" type="radio" id="color-2" name="color" value="red" />
                    <label htmlFor="color-2">
                        <span>Дневной</span>
                        <img src={process.env.PUBLIC_URL + '/img/slideshow/2.jpg'} alt=""/>
                    </label>

                </SwitchLight>

                <SwitchLight>
                    <input onClick={() => changeSlide('0')} className="custom-radio" type="radio" id="color-3" name="color" value="yellow" />
                    <label htmlFor="color-3">
                        <span>Холодный</span>
                        <img src={process.env.PUBLIC_URL + '/img/slideshow/1.jpg'} alt=""/>
                    </label>

                </SwitchLight>
            </div>
        </div>
    )
};
export default Description
