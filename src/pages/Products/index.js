import { useSelector } from "react-redux";
import { Product } from "../../components/Product";

export const Products = () => {
  const { products } = useSelector((store) => store);

  return (
    <>
      {products.map((item) => (
        <Product
          key={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
        />
      ))}
    </>
  );
};
