import { useState } from "react";

const initialState = {
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (product) => {
        setState(
            {
                ...state, 
                cart: [...state.cart, product],
            }
        )
    }

    const removeFromCart = (productIndex) => {
        setState({
            ...state, 
            cart: state.cart.filter((_, index) => index !== productIndex),
        });
    }

    return {
        state,
        addToCart,
        removeFromCart,
    };
};

export default useInitialState;