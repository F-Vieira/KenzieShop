import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { ContainerHeader } from "./styles";

export const Header = () => {
  const [inCart, setInCart] = useState(false);
  const history = useHistory();
  const { cart } = useSelector((store) => store);

  const totalItems = cart.length;

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
          <li onClick={handleHome}>Home</li>
          <li onClick={handleCart}>
            Cart
            <span>{totalItems}</span>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
