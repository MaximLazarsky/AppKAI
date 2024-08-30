import { useWeb3Modal } from "@web3modal/wagmi/react";
import { FC } from "react";
import { useAccount } from "wagmi";
import Container from "../../ui/container/Container";
import { StyledW3MButtonWrapper } from "./style";

const Header: FC = () => {
  const { open } = useWeb3Modal();
  const { address, status } = useAccount();

  const contentForButton: {
    [key in
      | "disconnected"
      | "connected"
      | "reconnecting"
      | "connecting"]: React.ReactNode;
  } = {
    connected: <>{address}</>,
    connecting: <>Connecting…</>,
    disconnected: <>Connect wallet</>,
    reconnecting: <>{address}</>,
  };
  return (
    <Container>
      <StyledW3MButtonWrapper>
        <button
          onClick={() => {
            open();
          }}
        >
          {contentForButton[status]}
        </button>
      </StyledW3MButtonWrapper>
    </Container>
  );
};

export default Header;
