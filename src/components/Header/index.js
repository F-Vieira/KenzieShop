import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { ContainerHeader } from "./styles";

export const Header = () => {
  const { cart } = useSelector((store) => store);
  const [inCart, setInCart] = useState(false);

  const totalItems = cart.length;

  const history = useHistory();

  const handleHome = () => {
    history.push("/");
    setInCart(false);
  };
  const handleCart = () => {
    setInCart(true);
    history.push("/cart");
  };
  return (
    <ContainerHeader inCart={inCart}>
      <nav>
        <ul>
          <li onClick={handleHome}>KenzieShop</li>
          <li onClick={handleCart}>
            <FaShoppingCart />
            <span>{totalItems}</span>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
