import { NextResponse } from "next/server";
import axios from 'axios';
import { flamelingTokens, FlamelingToken } from "@/assets/flamelingTokens";
import { createPublicClient, formatEther, http } from "viem";
import { bsc } from "viem/chains";
import { wbnbABI } from "@/assets/wbnbABI";
import { usdtABI } from "@/assets/usdtbnbABI";
import { flamelingABI } from "@/assets/flamelingTokenABI";

const WBNB = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const USDT = "0x55d398326f99059fF775485246999027B3197955";

// Create client outside functions to reuse it
const client = createPublicClient({
    chain: bsc,
    transport: http(`https://bnb-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`)
})

const BNB_ID = 1839;

async function getBNBPrice(coinId: number) {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY, // Replace with your CoinMarketCap API key
          ["Content-Type"]: "application/json",
        },
        params: {
          id: coinId, // Change to the token symbol you want
        },
      }
    );

    // success
    const json = response.data.data[coinId.toString()];
    return json.quote.USD.price;
  } catch (ex) {
    // error
    console.log(ex);
    return undefined;
  }
}

async function getBNBUSDTPrice() {

    let price: number | undefined = undefined;
    const data = await client.multicall({
        contracts: [
            {
                address: WBNB as `0x${string}`,
                abi: wbnbABI,
                functionName: "balanceOf",
                args: ["0x36696169c63e42cd08ce11f5deebbcebae652050" as `0x${string}`],
            },
            {
                address: USDT as `0x${string}`,
                abi: usdtABI,
                functionName: "balanceOf",
                args: ["0x36696169c63e42cd08ce11f5deebbcebae652050" as `0x${string}`],
            }
        ]

    });

    if (data[0].status == "success" && data[1].status == "success") {
        const bnbBalance = Number(formatEther(data[0].result));
      const usdtBalance = Number(formatEther(data[1].result));
      // console.log(bnbBalance)
      // console.log(usdtBalance)
        price = usdtBalance / bnbBalance;
    }
    return price;

}


async function getFlamelingTokenPrice(tokenContract: string, pair: string) {

    let price: number | undefined = undefined;
    const data = await client.multicall({
        contracts: [
            {
                address: WBNB as `0x${string}`,
                abi: wbnbABI,
                functionName: "balanceOf",
                args: [pair as `0x${string}`],
            },
            {
                address: tokenContract as `0x${string}`,
                abi: flamelingABI,
                functionName: "balanceOf",
                args: [pair as `0x${string}`],
            }
        ]

    });

    if (data[0].status == "success" && data[1].status == "success") {
        const nativeBalance = Number(formatEther(data[0].result));
        const tokenBalance = Number(formatEther(data[1].result));
        if (tokenBalance > 0) { price = nativeBalance / tokenBalance; }
    }
    return price;

}


export async function GET() {
  try {
    // Check if API keys are available
    if (!process.env.ALCHEMY_API_KEY || !process.env.CMC_API_KEY) {
      console.error('Required environment variables are not set');
      return NextResponse.json(
        { error: 'API configuration error' }, 
        { status: 500 }
      );
    }

    // const bnbdexPrice = await getBNBUSDTPrice();
    // console.log(bnbdexPrice)
    const bnbPrice = await getBNBPrice(BNB_ID);
    
    if (!bnbPrice) {
      throw new Error('Failed to fetch BNB price');
    }
    
    // console.log(bnbPrice)
    const newTokenData = new Map(flamelingTokens);
    let jsonObject: { [key: string]: number } = {};
    
    for (let [key, value] of newTokenData) {
      const tokenPrice = await getFlamelingTokenPrice(value.contract, value.pair);
      if (tokenPrice !== undefined) {
            const mc = tokenPrice * bnbPrice * 1000000000
            jsonObject[key] = mc;
        }
    }
    
    const json = JSON.stringify(jsonObject);

    // Add cache headers to refresh every 5 minutes
    return NextResponse.json(json, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Error fetching flameling token prices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch flameling token prices' }, 
      { status: 500 }
    );
  }
}