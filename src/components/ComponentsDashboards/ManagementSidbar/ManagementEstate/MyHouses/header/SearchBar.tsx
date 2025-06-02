import { Input } from "@heroui/react";
import React from "react";
// import { Input } from '@/components/ui/input'

const SearchBar = ({titleplace}) => {
  return (
    <div className="flex flex-col items-start w-[100%]">
      <label htmlFor="search" className="text-xs mr-5 text-gray-500">
        جستجو:
      </label>

      <Input
        id="search"
        type="text"
        placeholder={titleplace}        className=" dark:bg-gray-800 max-md:w-full px-4 py-2 rounded-2xl text-subText placeholder:text-subText text-sm md:min-w-[300px]"
      />
    </div>
  );
};

export default SearchBar;
