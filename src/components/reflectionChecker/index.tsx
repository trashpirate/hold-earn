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
        fromBlock: "0x1174868",
        fromAddress: account,
        excludeZeroValue: true,
        contractAddresses: [TOKEN_ADDRESS],
        category: [AssetTransfersCategory.ERC20],
      });
      let totalOutSum: number = 0;
      let tax = 0.98;
      if (account == "0x0cf66382d52C2D6c1D095c536c16c203117E2B2f") {
        tax = 1;
      }
      for (let tx of outData.transfers) {
        if (tx.value != null) {
          totalOutSum += tx.value / tax;
          // console.log("out: " + tx.value);
        }
      }
      // console.log("total out: " + totalOutSum);

      const inData = await alchemy.core.getAssetTransfers({
        fromBlock: "0x1174868",
        toAddress: account,
        excludeZeroValue: true,
        contractAddresses: [TOKEN_ADDRESS],
        category: [AssetTransfersCategory.ERC20],
      });
      let totalInSum: number = 0;
      for (let tx of inData.transfers) {
        if (tx.value != null) {
          totalInSum += tx.value;
          // console.log("in: " + tx.value);
        }
      }
      // console.log("total in: " + totalInSum);
      const pureBalance = totalInSum - totalOutSum;
      console.log("pure balance: " + pureBalance);

      const accData = await alchemy.core.getTokenBalances(account, [TOKEN_ADDRESS]);
      const balanceBigint = accData.tokenBalances[0].tokenBalance;
      let reflect: number | null = null;
      if (balanceBigint != null) {
        const balance = Number(formatEther(BigInt(balanceBigint)));
        // console.log("balance: " + balance);
        reflect = balance - pureBalance;
        if (reflect < 0) reflect = 0;
        // console.log("reflections: " + reflect);
      }
      setReflections(reflect);
    }
    if (isAddress(address as string)) {
      getReflections(address as string);
    }
  }, [address]);

  return (
    <div className=" bg-white/5 p-4 rounded-lg  h-fit">
      <h3 className="font-bold text-lg">EARN Reflection Checker</h3>
      <form >
        <input
          className='w-full h-8 p-2 indent-1 border-gray-300 rounded-md text-black'
          type="string"
          placeholder="Enter wallet address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </form>

      <div className="h-8">{`${
        reflections != null ? "Reflections: " + reflections?.toLocaleString() + " EARN" : ""
      }`}</div>
    </div>
  );
}
