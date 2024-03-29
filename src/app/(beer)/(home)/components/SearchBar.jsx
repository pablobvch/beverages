import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const SearchBar = () => {
  return (
    <div className="relative mt-6 pb-2">
      <input
        type="text"
        placeholder="Search burger, pizza, drink or etc..."
        className="bg-white h-12 pl-10 rounded-xl text-sm focus:outline-none focus:border-blue-300 w-full"
      />
      <div className="absolute left-3 top-3">
        <FaSearch size={24} color="#C4C4C4"/>
      </div>
    </div>
  );
};
