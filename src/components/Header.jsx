import React from "react";

import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
        {/*Imagen del menu, principal mente para mobile*/}
        <img src="../icons/icon_menu.svg" alt="menu-icon" className="menu" />

        <div className="nav-bar-left">
            <img src="../logos/logo_yard_sale.svg" alt="logo" className="logo" />

            {/*Dividimos la barra en 2 partes, la derecha y la izquierda
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
                <li className="nav-bar-email">example@gmail.com</li>
                <li className="nav-shopping-cart">
                    <img src="../icons/icon_shopping_cart.svg" alt="shopping cart" />
                    {/*Colocamos el numero en un div por separado, para poder crear el circulo que
                    lo contiene en el estilo*/}
                    <div>2</div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;