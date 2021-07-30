import { ADD_CART, CLEAR_CART, REMOVE_CART } from "./actionsTypes";

export const addToCart = (product) => ({ type: ADD_CART, product });
export const removeFromCart = (list) => ({ type: REMOVE_CART, list });
export const clearCart = (cart) => ({ type: CLEAR_CART, cart });
