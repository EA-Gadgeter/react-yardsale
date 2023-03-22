import React from "react";

const ProductInfo = () => {
  return (
    <React.Fragment>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        <div className="products-info">
            <p>$35,00</p>
            <p>Bike</p>
            <p>
                With its funcional and practical design, this bike also fullfills a decorative function,
                adding personality an a retro-vintage aesthetic to your house
            </p>
            <button className="primary-button add-to-cart-button">
                <img src="../icons/bt_add_to_cart.svg" alt="add to cart" />
                Add to cart
            </button>
        </div>
    </React.Fragment>
  );
};

export default ProductInfo;