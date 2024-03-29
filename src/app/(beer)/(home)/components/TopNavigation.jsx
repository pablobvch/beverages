import React from 'react';
import Image from "next/image"

const HamburgerButton = () => {
    return (
      <button className="h-10 w-10 flex items-center justify-center bg-white rounded-xl">
        <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0  0  24  24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4  6h16M4  12h16M4  18h16" />
        </svg>
      </button>
    );
  };

export const TopNavigation = () => {
  return (
    <header className="h-12 flex items-center">
     <HamburgerButton/>
      <div className="flex-grow"></div>
      <div className="flex items-center">
        <Image className="h-10 w-10 rounded-full" alt="User Avatar" src="/products/avatar.jpg" width={40} height={40}/>
      </div>
    </header>
  );
};