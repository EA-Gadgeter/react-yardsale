import React from "react";
import OrderItem from "../components/OrderItem";

import AppContext from '../context/AppContext';

import "@styles/Checkout.scss";
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
            <div className="OrderItem">
                <figure>
                    <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="product bike" />
                </figure>
                <p>Bike</p>
                <p>$30.00</p>
            </div>
            <div className="OrderItem">
                <figure>
                    <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="product bike" />
                </figure>
                <p>Bike</p>
                <p>$30.00</p>
            </div>
            <div className="OrderItem">
                <figure>
                    <img 
                    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="product bike" />
                </figure>
                <p>Bike</p>
                <p>$30.00</p>
            </div>
        </div>
    </div>
  )
}

export default Checkout;