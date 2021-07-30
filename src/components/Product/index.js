import { useDispatch } from "react-redux";

import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunk";

import { Button } from "../Button";
import { ContainerItem } from "./styles";
import formatValue from "../../utils/formatValue";

export const Product = ({ product, isRemovable = false }) => {
  const { id, img, name, price } = product;
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addToCartThunk(product));
  const handleRemove = () => dispatch(removeFromCartThunk(id));

  const formatedPrice = formatValue(price);

  return (
    <ContainerItem>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{formatedPrice}</p>
      {isRemovable ? (
        <Button onClick={handleRemove}>Remover do Carrinho</Button>
      ) : (
        <Button onClick={handleAdd}>Adicionar no Carrinho</Button>
      )}
    </ContainerItem>
  );
};
