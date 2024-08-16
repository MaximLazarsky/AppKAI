import { FC } from "react";

const Button: FC<React.HTMLProps<HTMLDivElement>> = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};
export default Button;
