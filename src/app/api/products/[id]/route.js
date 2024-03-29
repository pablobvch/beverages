import { NextResponse, NextRequest } from "next/server";

import products from "@/app/utils/products";

import stockPrices from "@/app/utils/stock-price";

const findProductById = (id) => products.find((product) => product.id === Number(id));

export async function GET(request, { params }) {
  const { id } = params;

  const product = findProductById(id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const stockPriceFromFirst = stockPrices[product.skus[0].code]

  return NextResponse.json( {...product, stockPriceFromFirst} , { status: 200 });
}
