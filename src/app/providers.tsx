"use client";
import { WagmiConfig } from "wagmi";
import { useEffect, useState } from "react";
import getWagmiConfig from "./config";

const dAppInfo = {
  appName: "EARN Website",
};

export function Providers({ children }: { children: React.ReactNode }) {
  const myWagmiConfig = getWagmiConfig(process.env.NEXT_PUBLIC_TESTNET as string);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={myWagmiConfig.config}>
      <div style={{ flexGrow: 1 }}>{children}</div>
    </WagmiConfig>
  );
}
