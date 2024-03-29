"use client";
import React, { useEffect, useState } from "react";

import { DescriptionSection, ImageContainer, PriceSection, ProductTopNavigation, SizeSection } from "./components";
import { getProductById, getStockPrice } from "../api";

const ProductPage = ({ params }) => {
  const { idbrand } = params;

  const id = idbrand.split("-")[0];

  const [product, setProduct] = useState(null);
  const [selectedSkuCode, setSelectedSkuCode] = useState(null)
  const [stockPrice, setStockPrice] = useState(null)
  const [imageSource, setImageSource] = useState([]);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    const fetchProductById = async () => {
      const product = await getProductById(id);
      setProduct(product);
      setSelectedSkuCode(product.skus[0].code)
      setStockPrice(product.stockPriceFromFirst)
    };

    fetchProductById();
  }, [id]);

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(product.image, { method: "HEAD" });
        const source = response.ok ? product.image : null;
        setImageSource(source);
        setLoadingImage(false);
      } catch (error) {
        console.log(error);
        setImageSource(null);
        setLoadingImage(false);
      }
    };

    if (product) {
      checkImage();
    }
  }, [product]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fetchStockPrice = async () => {
        if (selectedSkuCode) {
          const stockPrice = await getStockPrice(selectedSkuCode);
          setStockPrice(stockPrice);
        }
      };

      if(selectedSkuCode){
        fetchStockPrice(selectedSkuCode);
      }

    },  5000);

    return () => clearInterval(intervalId);
  }, [product, selectedSkuCode]);

  useEffect(()=>{
    const fetchStockPrice = async () => {
      if (selectedSkuCode) {
        const stockPrice = await getStockPrice(selectedSkuCode);
        setStockPrice(stockPrice);
      }
    };

    fetchStockPrice(selectedSkuCode)
  },[selectedSkuCode])

  if (!product) {
    return (
      <h1 className={`antialiased animate-pulse bg-gray-200 w-full`}>&nbsp;</h1>
    );
  }

  return (
    <>
      <ProductTopNavigation />
      <ImageContainer
        loadingImage={loadingImage}
        imageSource={imageSource}
        selectedSkuCode={selectedSkuCode}
      />
      <div className="bg-white rounded-custom-container mt-2 pt-12 px-6">
        <PriceSection product={product} stockPrice={stockPrice} />
        <DescriptionSection product={product} />
        <SizeSection
          product={product}
          selectedSkuCode={selectedSkuCode}
          setSelectedSkuCode={setSelectedSkuCode}
        />
        {/* <div>Here Product Footer</div> */}
      </div>
    </>
  );
};

export default ProductPage