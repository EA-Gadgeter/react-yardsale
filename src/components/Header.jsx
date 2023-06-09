import React, { useState, useContext } from "react";

import AppContext from "../context/AppContext";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import MyOrder from "../containers/MyOrder";

import "@styles/Header.scss";

import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleOrder, setToggleOrder] = useState(false);

    const { state: { cart } } = useContext(AppContext);

    const handleToggleMenuMobile = () => {
        setToggleMenuMobile(!toggleMenuMobile);
        setToggleOrder(false);
    };

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
        setToggleOrder(false);
    };

    const handleToggleOrder = () => {
        setToggleOrder(!toggleOrder);
        setToggleMenu(false);
        setToggleMenuMobile(false);
    };

  return (
    <>
        <nav>
            {/*Imagen del menu, principal mente para mobile*/}
            <img src={menu} alt="menu-icon" className="menu" onClick={handleToggleMenuMobile}/>

            <div className="nav-bar-left">
                <img src={logo} alt="logo" className="logo" />

                {/*Dividimos la barra en 2 partes, la deºrecha y la izquierda
                usamos una lista y a ya que recordemos que nos llevaran a
                otras paginas*/}
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Clothes</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Furniture</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </div>

            {/*No es necesario ocupar <a></a> ya que no son cosas que nos redijiran*/}
            <div className="nav-bar-right">
                <ul>
                    <li className="nav-bar-email" onClick={handleToggleMenu}>
                        example@gmail.com
                    </li>
                    <li className="nav-shopping-cart" onClick={handleToggleOrder}>
                        <img src={shoppingCart} alt="shopping cart" />
                        {cart.length > 0 && <div>{cart.length}</div>}
                    </li>
                </ul>
            </div>
            {toggleMenu && <Menu />}
            {toggleOrder && <MyOrder setToggleOrder={setToggleOrder} />}
        </nav>
        {toggleMenuMobile && <MenuMobile />}
    </>
  )
}

export default Header;