import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import App from "./App.tsx";
// 0. Setup queryClient
const queryClient = new QueryClient();
// "aa28a706001a4a45950809e3299187cd";

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = "3b28982f42a9f6f561519f3c4ec28f6e";
// 2. Create wagmiConfig
const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
