import { useSelector } from "react-redux";
import { Product } from "../../components/Product";
import { ContainerCart } from "./styles";
export const Cart = () => {
  const { cart } = useSelector((store) => store);

  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc, cur) => cur.price + acc, 0);

  return (
    <ContainerCart>
      <section>
        <h2>Total do Carrinho</h2>
        <p>
          Total de produtos: <span>{totalItems}</span>
        </p>
        <p>
          Valor Total: <span>R$ {totalPrice}</span>
        </p>
      </section>
      <section>
        {cart.map((product) => (
          <Product key={product.id} product={product} isRemovable />
        ))}
      </section>
    </ContainerCart>
  );
};
