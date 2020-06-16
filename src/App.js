import React, {useState} from 'react';
import Navbar from "./components/Nav/Navbar";
import Slideshow from "./components/Content/Slideshow";
import Description from "./components/Content/Description";
import {Context} from "./context";
import Modal from "./components/Content/modal";
import SecMenu from "./components/Nav/SecMenu";

function App() {
    const [modal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!modal);
        console.log(modal)
    };

    const [slide, setSlide] = useState('0');
    const [active, setActive] = useState('trig');
    const changeSlide = (value) => {
        setSlide(value);
    };
  return (
      <Context.Provider value={{slide, setSlide, active, changeSlide, modal, changeModal}}>
        <div className="App">
            <Navbar/>
            <div className="content">
                <Modal/>
                <Slideshow/>
                <Description/>
            </div>
            <SecMenu/>
        </div>
      </Context.Provider>
  );
}

export default App;
