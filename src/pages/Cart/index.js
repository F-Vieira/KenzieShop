import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { Product } from "../../components/Product";
import { clearCartThunk } from "../../store/modules/cart/thunk";
import formatValue from "../../utils/formatValue";

import { ContainerCart } from "./styles";

export const Cart = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const [clear, setClear] = useState(false);
  const totalItems = cart.length;

  const totalPrice = cart.reduce((acc, cur) => cur.price + acc, 0);

  const handleClearCart = () => {
    dispatch(clearCartThunk());
    localStorage.clear();
    setClear(true);
    toast.success("Compra realizada com sucesso");
  };

  return (
    <ContainerCart>
      <section>
        <h2>Total do Carrinho</h2>
        <p>
          Total de produtos: <span>{totalItems}</span>
        </p>
        <p>
          Valor Total: <span>{formatValue(totalPrice)}</span>
        </p>
        {cart.length > 0 && (
          <Button onClick={handleClearCart}>Finalizar Carrinho</Button>
        )}
      </section>
      <section>
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
        {clear && <h1>Carrinho Vazio</h1>}
      </section>
    </ContainerCart>
  );
};
