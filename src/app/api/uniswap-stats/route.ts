import { NextResponse } from "next/server";
import axios from 'axios';

const TOKEN_ID = 29772;


type TokenStats = {
  price: number
  marketcap: number
}

async function getTokenQuotes(coinId: number) {
  const subgraphURL = `https://gateway-arbitrum.network.thegraph.com/api/${process.env.NEXT_PUBLIC_UNISWAP_API_KEY}/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum`;
  const query = `{
  pairs(where: {id: "0x32558f1214bd874c6cbc1ab545b28a18990ff7ee"}) {
    token1Price
  }
}`;

  try {
    const response = await axios.post(
      subgraphURL,
      {
        query: query
      }
    );

    console.log(response.data.data.pairs[0].token1Price)
    

    // success
    const tokenStats = {}

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