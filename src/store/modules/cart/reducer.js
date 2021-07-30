import { ADD_CART, CLEAR_CART, REMOVE_CART } from "./actionsTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { list } = action;
      return list;

    case CLEAR_CART:
      const { cart } = action;
      return cart;

    default:
      return state;
  }
};

export default cartReducer;
