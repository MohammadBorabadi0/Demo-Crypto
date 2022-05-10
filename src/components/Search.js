import React, { useEffect, useRef } from "react";

// Icons
import { AiOutlineSearch } from "react-icons/ai";

// Context
import { useFilter } from "../Provider/context/filter_context";

const Search = () => {
  const { updateFilter, filters } = useFilter();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
      <div className="flex items-center w-fit bg-gray-800 text-sm md:text-base rounded-full px-4 py-1.5 md:py-2 text-white">
        <input
          type="text"
          placeholder="Search name or symbol"
          name="search"
          className="focus:outline-none bg-transparent"
          ref={inputRef}
          value={filters.search}
          onChange={updateFilter}
        />
        <span>
          <AiOutlineSearch size="20px" />
        </span>
      </div>
  );
};

export default Search;
