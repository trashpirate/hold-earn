import { NextRequest, NextResponse } from "next/server";
import { formatEther, isAddress, getAddress } from "viem";
import { Alchemy, AssetTransfersCategory, Network } from "alchemy-sdk";

const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";
const BUYHOLDEARN_WALLET = getAddress("0x0cf66382d52C2D6c1D095c536c16c203117E2B2f");
const DEAD_WALLET = getAddress("0x000000000000000000000000000000000000dEaD");

// Create Alchemy instance outside the function to reuse it
const config = {
  apiKey: process.env.ALCHEMY_API_KEY, // Note: No NEXT_PUBLIC_ prefix for server-side
  network: process.env.TESTNET === "true" ? Network.ETH_GOERLI : Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

async function calculateReflections(account: string) {
  try {
    // Get outgoing transfers
    const outData = await alchemy.core.getAssetTransfers({
      fromBlock: "0x1174868",
      fromAddress: account,
      excludeZeroValue: true,
      contractAddresses: [TOKEN_ADDRESS],
      category: [AssetTransfersCategory.ERC20],
    });

    let totalOutSum: number = 0;
    let tax: number;
    
    for (let tx of outData.transfers) {
      if (tx.value !== null && tx.to !== null) {
        if (getAddress(account) === BUYHOLDEARN_WALLET || getAddress(tx.to) === BUYHOLDEARN_WALLET) {
          tax = 1;
        } else {
          tax = 0.98;
        }
        totalOutSum += tx.value / tax;
      }
    }

    // Get incoming transfers
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
      }
    }

    const pureBalance = totalInSum - totalOutSum;

    // Get current balance
    const accData = await alchemy.core.getTokenBalances(account, [TOKEN_ADDRESS]);
    const balanceBigint = accData.tokenBalances[0].tokenBalance;
    
    if (balanceBigint != null) {
      const balance = Number(formatEther(BigInt(balanceBigint)));
      let reflections = balance - pureBalance;
      if (reflections < 0) reflections = 0;
      
      return {
        reflections,
        balance,
        pureBalance,
        totalInSum,
        totalOutSum
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error calculating reflections:', error);
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.ALCHEMY_API_KEY) {
      console.error('ALCHEMY_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'API configuration error' }, 
        { status: 500 }
      );
    }

    // Get address from query parameters
    const { searchParams } = new URL(request.url);
    const address = searchParams.get('address');

    // Validate address
    if (!address) {
      return NextResponse.json(
        { error: 'Address parameter is required' }, 
        { status: 400 }
      );
    }

    if (!isAddress(address)) {
      return NextResponse.json(
        { error: 'Invalid Ethereum address' }, 
        { status: 400 }
      );
    }

    // Calculate reflections
    const result = await calculateReflections(address);
    
    if (result === null) {
      return NextResponse.json(
        { error: 'Unable to fetch balance data' }, 
        { status: 404 }
      );
    }

    // Add cache headers (cache for 1 minute since balance can change)
    return NextResponse.json(result, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=60'
      }
    });

  } catch (error) {
    console.error('Error in reflections API:', error);
    return NextResponse.json(
      { error: 'Failed to calculate reflections' }, 
      { status: 500 }
    );
  }
}