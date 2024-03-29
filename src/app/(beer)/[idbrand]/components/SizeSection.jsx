import React from "react";

const Button = ({ sku, selectedSkuCode, setSelectedSkuCode }) => (
  <button
    className={`border border-solid rounded-2xl ${
      sku.code === selectedSkuCode
        ? "border-custom-orange"
        : "border-custom-gray-2"
    }  px-3 py-1.5 mr-4`}
    onClick={() => {
      setSelectedSkuCode(sku.code);
    }}
  >
    <span
      className={`text-sm font-normal leading-5 ${
        sku.code === selectedSkuCode
          ? "text-custom-orange"
          : "text-custom-gray-2"
      } `}
    >
      {sku.name}
    </span>
  </button>
);

export const SizeSection = ({
  product,
  selectedSkuCode,
  setSelectedSkuCode,
}) => {
  return (
    <div className="mt-6">
      <span className="font-bold text-base leading-5 text-custom-dark-gray">
        Size
      </span>
      <div>
        <div className="flex flex-row justify-start mt-3">
          {product.skus.map((sku) => (
            <Button
              key={sku.code}
              sku={sku}
              selectedSkuCode={selectedSkuCode}
              setSelectedSkuCode={setSelectedSkuCode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
