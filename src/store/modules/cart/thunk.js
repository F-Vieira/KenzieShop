import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  dispatch(removeFromCart("lista"));
};
