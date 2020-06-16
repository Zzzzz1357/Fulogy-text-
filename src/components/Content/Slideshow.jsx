import React, {useContext} from "react";
import styled from "styled-components";
import {Context} from "../../context";


const Slides = styled.div`
    display: flex;
    flex-direction: row-reverse;
    transition: all 0.3s ease-in-out;
    transform: translateX( ${ ({slide}) => `${slide}` } );
`;

const Switch = styled.div`
    padding: 5px;
    input[type=radio] {
        display: none;
    }
  .radio+label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s;    
  }

  .radio+label::before {
    content: '';
    border: 1px solid #fff;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    background: transparent;
    width: 10px;
    height: 10px;
    position: relative;
    border-radius: 2px;
  }
  .radio:checked+label::before {
    border-color: #fff;
    background: #fff;}
`;
const Trigger = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    
    .trig {
        border-radius: 50%;
        border: 2px solid #fff6;
        margin: 10px 7px;
        bottom: 0;
        height: 10px;
        width: 10px;
    }
    .trig.active {
        background-color: #fff;
    }
`;


const Slideshow = () => {

    const {changeSlide, slide, active} = useContext(Context);

    return (
            <div className="slideshow">
                <Slides slide={slide}>
                    <img src={process.env.PUBLIC_URL + '/img/slideshow/3.jpg'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/img/slideshow/2.jpg'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/img/slideshow/1.jpg'} alt=""/>
                </Slides>
                <Trigger active={active}>

                    <Switch>
                        <input onClick={ () => changeSlide('200%')} className="radio" type="radio" id="color-4" name="color" value="200%" />
                        <label htmlFor="color-4"></label>
                    </Switch>
                    <Switch>
                        <input onClick={ () => changeSlide('100%')} className="radio" type="radio" id="color-5" name="color" value="100%" />
                        <label htmlFor="color-5"></label>
                    </Switch>
                    <Switch>
                        <input onClick={() => changeSlide('0')} className="radio" type="radio" id="color-6" name="color" value="0" />
                        <label htmlFor="color-6"></label>
                    </Switch>



                    {/*<div onClick={() => changeSlide('0')} className={active} />*/}
                    {/*<div onClick={() => changeSlide('100%')} className={active} />*/}
                    {/*<div onClick={() => changeSlide('200%')} className={active} />*/}
                </Trigger>
            </div>
    )
};
export default Slideshow
