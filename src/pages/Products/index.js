import { useSelector } from "react-redux";
import { Product } from "../../components/Product";
import { ContainerProducts } from "./styles";
export const Products = () => {
  const { products } = useSelector((store) => store);

  return (
    <ContainerProducts>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ContainerProducts>
  );
};
