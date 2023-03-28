import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export default function SearchBox({ onSearch }) {
  return (
    <div
      className=" flex justify-center items-center h-12"
    >
      <div className="relative">
        {/* input search */}
        <input
          type="text"
          placeholder="Search"
          className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
          onChange={(event) => onSearch(event.target.value)}
        />
        {/* icon search */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
}
