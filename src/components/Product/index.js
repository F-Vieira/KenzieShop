import { Btn } from "../Button/styles";
import { ContainerItem } from "./styles";

export const Product = ({ product, isRemovable = false }) => {
  const { img, name, price } = product;

  return (
    <ContainerItem>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>R$ {price}</p>
      {isRemovable ? (
        <Btn>Adicionar no Carrinho</Btn>
      ) : (
        <Btn>Adicionar no Carrinho</Btn>
      )}
    </ContainerItem>
  );
};
