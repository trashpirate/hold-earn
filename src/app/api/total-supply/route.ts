import { NextResponse } from "next/server";


export async function GET() {
  
  const total_supply = 1000000000;

  return NextResponse.json(total_supply, { status: 200 });
}
