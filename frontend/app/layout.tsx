"use client";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { darkTheme, getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, goerli, mainnet, optimism, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  const { chains, provider } = configureChains(
    [goerli],
    [
      alchemyProvider({ apiKey: "n47skukukkxpwhFSGnTCMWNkzkRLQdR1" }),
      publicProvider(),
    ],
  );

  const { connectors } = getDefaultWallets({
    appName: "RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <html data-theme="dracula">
      <head></head>
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={darkTheme({
            accentColor: "#bd93f9",
            accentColorForeground: "#282a36"
          })}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
