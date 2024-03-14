import { NextResponse } from "next/server";
import axios from 'axios';
import { TokenBalancesOptionsDefaultTokens } from "alchemy-sdk";

const TOKEN_ID = 29772;

type TokenStats = {
  price: number
  marketcap: number
}

async function getTokenQuotes(coinId: number) {
  try {
    const responseQuotes = await axios.get(
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
    const jsonQuotes = responseQuotes.data.data[coinId.toString()];

    const tokenStats = {
      price: jsonQuotes.quote.USD.price,
      volume: jsonQuotes.quote.USD.volume_24h,
      marketcap: jsonQuotes.self_reported_market_cap,
      circulatingSupply: jsonQuotes.self_reported_circulating_supply,

    }

    return tokenStats;
  } catch (ex) {
    // error
    console.log(ex);
    return undefined;
  }
}


export async function GET() {

  return NextResponse.json(await getTokenQuotes(TOKEN_ID), { status: 200 });
}
