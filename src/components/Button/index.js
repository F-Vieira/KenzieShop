import { Btn } from "./styles";

export const Button = ({ children, ...rest }) => {
  return <Btn {...rest}>{children}</Btn>;
};
