"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HeaderSection } from ".";
import { convertToKebabCase, formatPriceInDollars } from "../../utils";
import { LuPlus } from "react-icons/lu";
import { FaRegImage } from "react-icons/fa";

export const ProductSelector = ({ products, selectedCategory, loadingImages, imageSources }) => {

  return (
    <div className="mt-8">
      <HeaderSection text="Populer" />
      {selectedCategory !== "Whine" ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center">
          {products.map((product, index) =>
            product.skus.map((sku) => {
              return (
                <div
                  key={sku.code}
                  className="flex flex-col bg-white rounded-custom-product"
                >
                  <span className="text-base mt-4 ml-2">{product.brand}</span>
                  {loadingImages ? (
                    <h1
                      className={`antialiased animate-pulse bg-gray-200 w-full`}
                    >
                      &nbsp;
                    </h1>
                  ) : (
                    <div className="flex justify-center">
                      {imageSources[index] ? (
                        <Image
                          src={imageSources[index]}
                          alt={`image of ${sku.code}`}
                          width={122}
                          height={122}
                          className="rounded-custom-product"
                        />
                      ) : (
                        <div className="w-[122px] h-[122px] flex flex-col items-center justify-center">
                          <FaRegImage size={25} className="opacity-50"/>
                          <span className="opacity-50">Image not found</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex flex-row justify-between">
                    <span>{formatPriceInDollars(sku.price)}</span>
                    <Link href={`${product.id}-${convertToKebabCase(product.brand)}`}>
                      <LuPlus
                        color="white"
                        size={40}
                        className="bg-custom-orange rounded-custom-plus"
                      />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="text-base font-bold">No data found</span>
        </div>
      )}
    </div>
  );
};
