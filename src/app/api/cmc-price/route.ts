import { NextResponse } from "next/server";
import axios from 'axios';

const ETH_ID = 1027;
const BNB_ID = 1839;

async function getTokenPrice(coinId: number) {
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

export async function GET() {
  const price = await getTokenPrice(BNB_ID);
  // const price = 1;
  return NextResponse.json(price, { status: 200 });
}