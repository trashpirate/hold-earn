import { NextResponse } from "next/server";
import { formatEther } from "viem";

import { abi } from "../../../assets/tokenABI";
const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";

import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

// Force this route to be dynamic and not cached by ISR
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Create client outside the function to reuse it
const client = createPublicClient({ 
  chain: mainnet, 
  transport: http(`https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`) 
}) 

export async function GET() {
  try {
    // Check if API key is available
    if (!process.env.ALCHEMY_API_KEY) {
      console.error('ALCHEMY_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'API configuration error' }, 
        { status: 500 }
      );
    }

    const data = await client.readContract({
      address: TOKEN_ADDRESS,
      abi: abi,
      functionName: "balanceOf",
      args: ["0x000000000000000000000000000000000000dEaD"],
    });

    const burned = Number(formatEther(data));
    const circulating_supply = 1000000000 - burned;

    // Debug: Log to verify function is actually running
    console.log(`[${new Date().toISOString()}] API called - Burned: ${burned}, Circulating: ${circulating_supply}`);

    // Add cache headers to refresh every 5 minutes
    return NextResponse.json(circulating_supply, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=60',
        'CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=60',
        'Vercel-CDN-Cache-Control': 'public, max-age=60, stale-while-revalidate=60',
        'X-Generated-At': new Date().toISOString(), // Debug header
      }
    });
  } catch (error) {
    console.error('Error fetching circulating supply:', error);
    return NextResponse.json(
      { error: 'Failed to fetch circulating supply' }, 
      { status: 500 }
    );
  }
}
