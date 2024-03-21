import { NextResponse } from "next/server";
import { formatEther } from "viem";

import { abi } from "../../../assets/tokenABI";
const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
 
const client = createPublicClient({ 
  chain: mainnet, 
  transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`) 
}) 

export async function GET() {
  const data = await client.readContract({
    address: TOKEN_ADDRESS,
    abi: abi,
    functionName: "balanceOf",
    args: ["0x000000000000000000000000000000000000dEaD"],
  });

  const burned = Number(formatEther(data));
  const circulating_supply = 1000000000 - burned;

  return NextResponse.json(circulating_supply, { status: 200 });
}
