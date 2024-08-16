import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { FC } from "react";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId: import.meta.env.VITE_PROJECT_ID,
  metadata,
});

createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId: import.meta.env.VITE_PROJECT_ID,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

const WagmiLayer: FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => (
  <WagmiProvider config={config}>{children}</WagmiProvider>
);

export default WagmiLayer;
