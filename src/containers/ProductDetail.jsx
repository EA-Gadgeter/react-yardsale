import React from "react";

import ProductInfo from "../components/ProductInfo";

import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <aside className="product-detailed">
        <div className="product-detailed-close">
            <img src="../icons/icon_close.png" alt="close" />
            <ProductInfo />
        </div>
    </aside>
  );
};

export default ProductDetail;