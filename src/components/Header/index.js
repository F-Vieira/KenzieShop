import { useHistory } from "react-router-dom";
import { ContainerHeader } from "./styles";

export const Header = () => {
  const history = useHistory();

  return (
    <ContainerHeader>
      <nav>
        <ul>
          <li>Home</li>
          <li>Cart</li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
