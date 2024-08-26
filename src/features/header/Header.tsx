import { FC } from "react";
import Container from "../../ui/container/Container";
import { StyledW3MButtonWrapper } from "./style";

const Header: FC = () => {
  return (
    <Container>
      <StyledW3MButtonWrapper>
        <w3m-button balance="hide"/>
      </StyledW3MButtonWrapper>
    </Container>
  );
};

export default Header;
