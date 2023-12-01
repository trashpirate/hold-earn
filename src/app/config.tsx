import { configureChains, createConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export default function getWagmiConfig(useTest: string) {
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet],
    [
      jsonRpcProvider({
        rpc: (chain) => ({
          http: `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
        }),
      }),
    ]
  );
  const wagmiConfig = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
  });

  return { config: wagmiConfig, chains: chains };
}
