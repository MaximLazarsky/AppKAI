import { FC } from "react";
import * as styled from "./style";
const Container: FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  return <styled.Container>{children}</styled.Container>;
};
export default Container;
