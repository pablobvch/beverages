import products from "@/app/utils/products";
import stockPrice from "@/app/utils/stock-price";

import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  return NextResponse.json(
    products.map((product) => ({
      id: product.id,
      brand: product.brand,
      image: product.image,
      skus: product.skus
        .slice(0, 1)
        .map((sku) => ({ code: sku.code, price: stockPrice[sku.code].price })),
    })),
    { status: 200 }
  );
}
