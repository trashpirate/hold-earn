import { NextResponse } from "next/server";
import { formatEther } from "viem";
import { publicClient } from "../../../utils/client";
import {Alchemy, Network} from 'alchemy-sdk';
import axios from 'axios';

import { abi } from "../../../assets/tokenABI";

const TOKEN_ADDRESS = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";
const PAIR_ADDRESS = "0x32558f1214bd874c6cbc1ab545b28a18990ff7ee";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const ETH_ID = 1027;

async function getEthPrice(coinId: number) {
  try {
    const response = await axios.get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_CMC_API_KEY, // Replace with your CoinMarketCap API key
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

// async function getPrice() {
//       const data = await alchemy.core.getTokenBalances(PAIR_ADDRESS, [TOKEN_ADDRESS, WETH]);
//       if (data != undefined) {
//         let earn_res = data.tokenBalances[0].tokenBalance;
//         let weth_res = data.tokenBalances[1].tokenBalance;

//         if (earn_res != null && weth_res != null) {
//           const ethPrice = await getEthPrice(ETH_ID);
//           const price = Number(formatEther(BigInt(earn_res))) / Number(formatEther(BigInt(weth_res))) * ethPrice;
//           return price;
//         }
//         return undefined;
//       }
//       else {
//         return undefined;
//       }
// }
    

export async function GET() {
  const tokenData = await publicClient.readContract({
    address: TOKEN_ADDRESS,
    abi: abi,
    functionName: "balanceOf",
    args: [PAIR_ADDRESS],
  });
  const tokenLP = Number(formatEther(tokenData));

  const wethata = await publicClient.readContract({
    address: WETH,
    abi: abi,
    functionName: "balanceOf",
    args: [PAIR_ADDRESS],
  });

  const wethLP = Number(formatEther(wethata));

  const ethPrice = await getEthPrice(ETH_ID);
  const price = wethLP / tokenLP  * ethPrice;

  return NextResponse.json(price, { status: 200 });
}
