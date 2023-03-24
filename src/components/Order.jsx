import React from "react";

import "../styles/Order.scss";

const Order = () => {
  return (
    <div className="Order">
        <p>
            <span>04.25.21</span>
            <span>3 articles</span>
        </p>
        <p>
            $560.00
            <img src="../icons/flechita.svg" alt="" />
        </p>
    </div>
  )
}

export default Order;