import React from "react";
import OrderItem from "../components/OrderItem";

import "../styles/Checkout.scss";
import Menu from "../components/Menu";

const Checkout = () => {
  return (
    <div className="Checkout">
        <div className="my-order-container">
            <h1 className="title">My order</h1>
            <div className="my-order-content">
                <div className="order">
                    <p>
                        <span>04.25.21</span>
                        <span>3 articles</span>
                    </p>
                    <p>
                        $560.00
                    </p>
                </div>
            </div>
            <OrderItem />
        </div>
    </div>
  )
}

export default Checkout;