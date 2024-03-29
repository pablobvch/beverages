"use client"

import React, { useEffect, useState } from 'react';
import { WelcomeMessage, SearchBar, CategorySelector, ProductSelector, TopNavigation } from "./components";
import { getProducts } from '../api';

export default function HomePage() {

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [products, setProducts] = useState(null)
  const [imageSources, setImageSources] = useState([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const _products = await getProducts();
      setProducts(_products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const checkImages = async () => {
      const sources = await Promise.all(
        products.map(async (product) => {
          try {
            const response = await fetch(product.image, { method: "HEAD" });
            return response.ok ? product.image : null;
          } catch (error) {
            return null;
          }
        })
      );
      setImageSources(sources);
      setLoadingImages(false);
    };

    if (products){
      checkImages();
    }

  }, [products]);

  return (
    <>
      <TopNavigation />
      <WelcomeMessage />
      {products ? (
        <div>
          <SearchBar />
          <CategorySelector
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductSelector
            products={products}
            selectedCategory={selectedCategory}
            loadingImages={loadingImages}
            imageSources={imageSources}
          />
        </div>
      ) : (
        <h1 className={`antialiased animate-pulse bg-gray-200 w-full`}>
          &nbsp;
        </h1>
      )}
      {/* <div>Here Footer</div> */}
    </>
  );
}
