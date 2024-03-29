import React from "react";

const truncateAndAddReadMore = (paragraph) => {
  const maxLength =  190;
  const truncatedParagraph = paragraph.length > maxLength ? paragraph.substring(0, maxLength) + " ... " : paragraph;
  const shouldShowReadMore = paragraph.length > maxLength;

  return (
    <p className="text-sm leading-6 font-normal text-custom-gray">
      {truncatedParagraph}
      {shouldShowReadMore && <span className="font-bold text-custom-orange">Read more</span>}
    </p>
  );
}

export const DescriptionSection = ({ product }) => {
  return (
    <div className="mt-12">
      <span className="text-base font-bold leading-5 text-custom-dark-gray">Description</span>
      <div className="mt-2">{truncateAndAddReadMore(product.information)}</div>
    </div>
  );
};
