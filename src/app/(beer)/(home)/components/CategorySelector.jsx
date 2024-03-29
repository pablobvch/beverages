import Image from "next/image";
import React from "react";
import { HeaderSection } from ".";

const Button = ({ innerText, src, selectedCategory, onClick }) => (
  <button
    className={`flex flex-row justify-center h-12 ${
      selectedCategory === innerText
        ? "bg-custom-orange text-white"
        : "bg-white text-black"
    } rounded-xl items-center min-w-14 mr-0 sm:mr-2`}
    onClick={onClick}
  >
    {src ? (
      <>
        <div className="pl-4">
          <Image src={src} alt="icon image" width={20} height={20} />
        </div>
        <span className="pl-3 pr-10">{innerText}</span>
      </>
    ) : (
      <span>{innerText}</span>
    )}
  </button>
);

export const CategorySelector = ({selectedCategory, setSelectedCategory}) => {

  const handleClick = (innerText) => {
    setSelectedCategory(innerText);
  };

  return (
    <div className="mt-6">
      <HeaderSection text="Drink Category" onClick={() => alert("Hola")}/>
      <div className="flex flex-row justify-between sm:justify-start mt-4">
        <Button
          innerText="All"
          selectedCategory={selectedCategory}
          onClick={() => handleClick("All")}
        />
        <Button
          innerText="Beer"
          src="/products/Beer.png"
          selectedCategory={selectedCategory}
          onClick={() => handleClick("Beer")}
        />
        <Button
          innerText="Whine"
          src="/products/Wine-glass.png"
          selectedCategory={selectedCategory}
          onClick={() => handleClick("Whine")}
        />
      </div>
    </div>
  );
};