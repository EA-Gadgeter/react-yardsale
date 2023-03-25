import React from "react";

import OrderItem from "../components/OrderItem";

import "@styles/MyOrder.scss";

import flechita from "@icons/flechita.svg";

const MyOrder = () => {
  return (
    <aside className="MyOrder">
        <div className="title-container">
            <img src={flechita} alt="arrow" className="arrow" />
            <p className="title">Shopping cart</p>
        </div>

        <div className="my-order-content">
            <OrderItem />

            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>
                    $0
                </p>
            </div>
        </div>
        <button className="primary-button">Checkout</button>
    </aside>
  )
}

export default MyOrder;