"use client";
import { useContractReads } from "wagmi";
import { abi } from "../../assets/tokenABI";
import { useState } from "react";
import { formatEther } from "viem";
import styles from "./tokeninfo.module.css";

const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";

const tokenContract = {
  address: "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E" as `0x${string}`,
  abi: abi,
};

export default function TokenInfo() {
  const [burnBalance, setBurnBalance] = useState<number | null>(null);
  const [totalReflections, setTotalReflections] = useState<number | null>(null);

  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...tokenContract,
        functionName: "totalFees",
      },
      {
        ...tokenContract,
        functionName: "balanceOf",
        args: ["0x000000000000000000000000000000000000dEaD"],
      },
    ],
    watch: true,
    onSuccess(data) {
      setTotalReflections(Number(data[0].result));
      setBurnBalance(data[1].result ? Number(formatEther(data[1].result)) : null);
    },
  });

  return (
    <div className={styles.container}>
      <div>{`Tokens Burned: ${
        isLoading || burnBalance == null ? "Loading..." : burnBalance?.toLocaleString()
      } EARN`}</div>
      <div>{`Total Reflections: ${
        isLoading || totalReflections == null ? "Loading..." : totalReflections
      } EARN`}</div>
    </div>
  );
}
