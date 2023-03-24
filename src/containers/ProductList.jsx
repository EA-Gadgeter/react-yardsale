import React from "react";

import ProductItem from "../components/ProductItem";

import "../styles/ProductList.scss";

const ProductList = () => {
  return (
    <section className="ProductList">
        <div className="cards-container">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </div>
    </section>
  );
};

export default ProductList;