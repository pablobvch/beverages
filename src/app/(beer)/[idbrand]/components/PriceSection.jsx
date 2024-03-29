import React from "react";

import { formatPriceInDollars } from "../../utils";

export const PriceSection = ({ product, stockPrice }) => {

  return (
    <>
      <div className="flex flex-row justify-between">
        <span className="text-2xl font-bold leading-8 text-custom-dark-gray-2">{product.brand}</span>
        <span className="text-2xl font-bold leading-8 text-custom-orange">{formatPriceInDollars(stockPrice.price)}</span>
      </div>
      <div className="flex flex-row justify-start">
        <span className="font-normal text-sm leading-5 text-custom-gray-2">Origin: {product.origin} | Stock: {stockPrice.stock}</span>
      </div>
    </>

  );
};
