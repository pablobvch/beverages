import React from "react";
import Link from "next/link";

import { IoMdArrowBack } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

export const ProductTopNavigation = () => {
  return (
    <header className="h-10 flex flex-row justify-between items-center">
      <Link href={"/"}>
        <IoMdArrowBack size={40} className="rounded-xl" color="#323232" />
      </Link>
      <span className="font-dm-sans text-lg font-bold leading-7 text-custom-dark-gray">
        Detail
      </span>
      <BsThreeDots size={40} className="rounded-xl" color="#323232" />
    </header>
  );
};
