"use client";
import { useContractReads } from "wagmi";
import { abi } from "../../assets/tokenABI";
import { useEffect, useState } from "react";
import { formatEther, isAddress } from "viem";

import styles from "./reflectionchecker.module.css";
import { Alchemy, AssetTransfersCategory, AssetTransfersParams, Network } from "alchemy-sdk";

const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";
let reflections: number | null;

const tokenContract = {
  address: "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E" as `0x${string}`,
  abi: abi,
};

const config = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: process.env.NEXT_PUBLIC_TESTNET == "true" ? Network.ETH_GOERLI : Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

export default function ReflectionChecker() {
  const [address, setAddress] = useState<string | null>(
    "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
  );
  const [reflections, setReflections] = useState<number | null>(null);

  useEffect(() => {
    async function getReflections(account: string) {
      const outData = await alchemy.core.getAssetTransfers({
        fromBlock: "0x117486C",
        fromAddress: account,
        excludeZeroValue: true,
        contractAddresses: [TOKEN_ADDRESS],
        category: [AssetTransfersCategory.ERC20],
      });
      let totalOutSum: number = 0;
      for (let tx of outData.transfers) {
        if (tx.value != null) totalOutSum += tx.value;
      }

      const inData = await alchemy.core.getAssetTransfers({
        fromBlock: "0x117486C",
        toAddress: account,
        excludeZeroValue: true,
        contractAddresses: [TOKEN_ADDRESS],
        category: [AssetTransfersCategory.ERC20],
      });
      let totalInSum: number = 0;
      for (let tx of inData.transfers) {
        if (tx.value != null) totalInSum += tx.value;
      }
      const pureBalance = totalInSum - totalOutSum;

      const accData = await alchemy.core.getTokenBalances(account, [TOKEN_ADDRESS]);
      const balanceBigint = accData.tokenBalances[0].tokenBalance;
      let reflect: number | null = null;
      if (balanceBigint != null) {
        const balance = Number(formatEther(BigInt(balanceBigint)));
        reflect = balance - pureBalance;
      }
      setReflections(reflect);
    }
    if (isAddress(address as string)) {
      getReflections(address as string);
    }
  }, [address]);

  return (
    <div className={styles.container}>
      <h3>EARN Reflection Checker</h3>
      <form className={styles.form}>
        <input
          type="string"
          placeholder="Enter wallet address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </form>

      <div className={styles.reflections}>{`${
        reflections != null ? "Reflections: " + reflections?.toLocaleString() + " EARN" : ""
      }`}</div>
    </div>
  );
}
