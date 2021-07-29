import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const inCart = list.some((item) => item.id === product.id);

  if (!inCart) {
    list.push(product);
    localStorage.setItem("cart", JSON.stringify(list));
    dispatch(addToCart(product));
  } else {
    toast.warning("Item já adicionado");
  }
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();

  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));

  dispatch(removeFromCart(list));
};
