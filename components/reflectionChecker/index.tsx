"use client";
import { useContractReads } from "wagmi";
import { abi } from "../../assets/tokenABI";
import { useState } from "react";
import { formatEther, isAddress } from "viem";

import styles from "./reflectionchecker.module.css";

const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";
let reflections: number | null;

const tokenContract = {
  address: "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E" as `0x${string}`,
  abi: abi,
};

export default function ReflectionChecker() {
  const [address, setAddress] = useState<string | null>(
    "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
  );
  const [balance, setBalance] = useState<number | null>(null);
  const [totalReflections, setTotalReflections] = useState<number | null>(null);
  const [totalSupply, setTotalSupply] = useState<number | null>(null);

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...tokenContract,
        functionName: "totalFees",
      },
      {
        ...tokenContract,
        functionName: "totalSupply",
      },
      {
        ...tokenContract,
        functionName: "balanceOf",
        args: [address as `0x${string}`],
      },
    ],
    enabled: address != null && isAddress(address),
    onSuccess(data) {
      setTotalReflections(data[0].result ? Number(formatEther(data[0].result)) : null);
      setTotalSupply(data[1].result ? Number(formatEther(data[1].result)) : null);
      setBalance(data[2].result ? Number(formatEther(data[2].result)) : null);
    },
  });

  if (totalReflections != null && totalSupply != null && balance != null) {
    reflections = Math.round((balance / totalSupply) * totalReflections);
  } else {
    reflections = null;
  }

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
        reflections != undefined ? "Reflections: " + reflections?.toLocaleString() + " EARN" : ""
      }`}</div>
    </div>
  );
}
