import React, { useContext } from "react";

import AppContext from "../context/AppContext";

import OrderItem from "../components/OrderItem";

import "@styles/MyOrder.scss";

import flechita from "@icons/flechita.svg";

const MyOrder = () => {
    const { state: { cart } } = useContext(AppContext);

    const totalPrice = () => {
        const reducer = (accumulator, currentValue)  => accumulator + currentValue.price;

        const newPrice = cart.reduce(reducer, 0);

        return newPrice;
    };

  return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={flechita} alt="arrow" className="arrow" />
            <p className="title">Shopping cart</p>
        </div>

        <div className="my-order-content">
            {cart.map((product, index) => {
                return <OrderItem key={index} indexValue={index} product={product}/>
            })}
            
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>
                    ${totalPrice()}
                </p>
            </div>
        </div>
        <button className="primary-button">Checkout</button>
    </aside>
  )
}

export default MyOrder;