import { NextResponse } from "next/server";
import { formatEther } from "viem";
import { useContractReads } from "wagmi";
import { publicClient } from "./client";

import { abi } from "../../../assets/tokenABI";
const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";

export async function GET() {
  const data = await publicClient.readContract({
    address: TOKEN_ADDRESS,
    abi: abi,
    functionName: "balanceOf",
    args: ["0x000000000000000000000000000000000000dEaD"],
  });

  const burned = Number(formatEther(data));
  const circulating_supply = 1000000000 - burned;

  return NextResponse.json(circulating_supply, { status: 200 });
}
