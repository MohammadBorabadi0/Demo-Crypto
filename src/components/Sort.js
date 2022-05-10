import React from "react";
import { useFilter } from "../Provider/context/filter_context";

const sortOptions = [
  { name: "Default" },
  { name: "Highest" },
  { name: "Lowest" },
  { name: "Max-Change" },
  { name: "Min-Change" },
];

const Sort = () => {
  const { sort, updateSort } = useFilter();

  return (
    <>
      <div className="hidden md:flex items-center lg:gap-4">
        {sortOptions.map((item, index) => (
          <button
            key={index}
            className={`${
              item.name.toLowerCase() === sort && "bg-blue-700 text-white"
            } px-2 py-1 rounded-xl font-semibold text-sm lg:text-base`}
            onClick={updateSort}
          >
            {item.name}
          </button>
        ))}
      </div>
      <select
        value={sort}
        onChange={updateSort}
        className="flex md:hidden border border-gray-800 text-sm md:text-base font-semibold rounded-sm p-1 focus:outline-none focus:border-2 focus:border-gray-800"
      >
        {sortOptions.map((item, index) => (
          <option value={item.name.toLowerCase()} key={index} className='font-semibold'>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Sort;
