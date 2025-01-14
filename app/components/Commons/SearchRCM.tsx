"use client";
import { useState, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

const Search = ({ searchKey }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchKey(searchQuery);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-wrap border-[2px] items-center rounded-lg px-2 py-2 w-[90%] md:w-3/4 outline-none focus-within:border-[#F97316]"
    >
      <div className="flex items-center">
        <FiSearch />
      </div>
      <input
        type="text"
        placeholder="Search for job..."
        className="text-[16px] md:text-[20px] leading-[140%] w-full flex-1 text-[#333333] be-vietnam-pro-regular px-1 outline-none border-r-[1px] bg-[transparent]"
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-3 bg-[#F97316] text-[13px] md:text-[20px] leading-[30px] md:leading-[38px] tracking-[1.2%] be-vietnam-pro-regular rounded-lg text-white hover:text-[#F97316]"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
