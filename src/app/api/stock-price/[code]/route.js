import stockPrices from "@/app/utils/stock-price";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { code } = params;

  const stockPrice = stockPrices[code];

  if (!stockPrice) {
    return NextResponse.json({ message: "Code not found" }, { status: 404 });
  }

  return NextResponse.json(stockPrice, { status: 200 });
}
