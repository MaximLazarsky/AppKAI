import { FC } from "react";
import { StyledButton } from "./style";

const Button: FC<React.HTMLProps<HTMLDivElement>> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
export default Button;
