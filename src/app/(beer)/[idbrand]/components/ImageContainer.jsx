import React from "react";

import Image from "next/image";
import { FaRegImage } from "react-icons/fa";

export const ImageContainer = ({loadingImage, imageSource, selectedSkuCode})=>{
  {
    return loadingImage ? (
      <h1 className={`antialiased animate-pulse bg-gray-200 w-full`}>&nbsp;</h1>
    ) : (
      <div className="flex justify-center">
        {imageSource ? (
          <Image
            src={imageSource}
            alt={`image of ${selectedSkuCode}`}
            width={240}
            height={240}
            className="rounded-custom-product"
          />
        ) : (
          <div className="w-[240px] h-[240px] flex flex-col items-center justify-center">
            <FaRegImage size={25} className="opacity-50" />
            <span className="opacity-50">Image not found</span>
          </div>
        )}
      </div>
    );
  }
}