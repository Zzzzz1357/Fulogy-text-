import React from "react";
import Burger from "./Burger";

const Navbar = () => {

    return (
        <header className="App-header">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt=""/>
                </a>
                <div className="navBurger">
                    <div className="cartCount">1</div>
                    <img className="cart" src={process.env.PUBLIC_URL + '/img/cart.svg'} alt=""/>
                    <Burger/>
                </div>
            </div>
        </header>
    )
};
export default Navbar
