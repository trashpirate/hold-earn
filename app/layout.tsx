"use client";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { WagmiConfig, configureChains, createConfig, mainnet } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

const globalFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// export const metadata: Metadata = {
//   title: "BUY, HOLD, EARN, BURN",
//   description: "BuyHoldEarn Website",
//   applicationName: "BuyHoldEarn Website",
//   twitter: {
//     card: "summary_large_image",
//     site: "@site",
//     creator: "@creator",
//     images: "https://buyholdearn.com/logo.jpg",
//   },
//   openGraph: {
//     type: "website",
//     url: "https://buyholdearn.com",
//     title: "BUY, HOLD, EARN, BURN",
//     description: "BuyHoldEarn Website",
//     siteName: "BUY, HOLD, EARN, BURN",
//     images: [
//       {
//         url: "https://buyholdearn.com/logo.png",
//       },
//     ],
//   },
// };

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`,
      }),
    }),
  ]
);
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>BUY HOLD EARN BURN</title>
      <meta name="description" content="Buy, Hold, Earn, Burn" key="desc" />
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content="buyholdearn" key="twhandle" />
      <meta property="og:title" content="Buy, Hold, Earn, Burn" key="ogtitle" />
      <meta property="og:site_name" content="Buy, Hold, Earn, Burn" key="ogsitename" />
      <meta property="og:description" content="Buy, Hold, Earn, Burn" key="ogdesc" />
      <meta property="og:url" content="https://buyholdearn.com/" key="ogurl" />
      <meta
        property="og:image"
        content="http://buyholdearn.com/wp-content/uploads/2023/10/cropped-photo_2023-10-04_12-47-31.jpg"
        key="ogimage"
      />
      <meta
        property="og:image:url"
        content="http://buyholdearn.com/wp-content/uploads/2023/10/cropped-photo_2023-10-04_12-47-31.jpg"
      />
      <meta property="og:image:type" content="image/png" />

      <WagmiConfig config={config}>
        <body className={globalFont.className}>{children}</body>
      </WagmiConfig>
    </html>
  );
}
