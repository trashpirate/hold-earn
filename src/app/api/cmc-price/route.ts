import { NextResponse } from "next/server";
import axios from 'axios';

// Force this route to be dynamic and not cached by ISR
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ETH_ID = 1027;
const BNB_ID = 1839;

async function getTokenPrice(coinId: number) {
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

export async function GET() {
  try {
    // Check if API key is available
    if (!process.env.CMC_API_KEY) {
      console.error('CMC_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'API configuration error' }, 
        { status: 500 }
      );
    }

    const price = await getTokenPrice(BNB_ID);
    
    if (price === undefined) {
      throw new Error('Failed to fetch token price from CMC');
    }
    
    // Add cache headers to refresh every 5 minutes
    return NextResponse.json(price, { 
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=300'
      }
    });
  } catch (error) {
    console.error('Error fetching CMC price:', error);
    return NextResponse.json(
      { error: 'Failed to fetch token price' }, 
      { status: 500 }
    );
  }
}