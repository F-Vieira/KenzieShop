import { Btn } from "../Button/styles";
import { ContainerItem } from "./styles";

export const Product = ({ img, name, price }) => {
  return (
    <ContainerItem>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>R$ {price}</p>
      <Btn>Adicionar no Carrinho</Btn>
    </ContainerItem>
  );
};
