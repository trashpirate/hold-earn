import { NextResponse } from "next/server";


export async function GET() {
  const total_supply = 1000000000;

  // Add cache headers since this is a static value
  return NextResponse.json(total_supply, { 
    status: 200,
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=3600'
    }
  });
}
