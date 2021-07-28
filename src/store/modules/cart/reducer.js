import { ADD_CART, REMOVE_CART } from "./actionsTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return state;

    case REMOVE_CART:
      return state;

    default:
      return state;
  }
};

export default cartReducer;
