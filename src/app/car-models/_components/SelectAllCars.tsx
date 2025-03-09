import React from "react";
import { FaChevronDown } from "react-icons/fa6";
export default function SelectAllCars() {
  return (
    <div className="relative inline-block w-full">
      <select
        disabled
        className="bg-gray-100 py-2.5 pl-4 pr-20 text-black/85 appearance-none w-full rounded-md"
      >
        <option value="">All cars</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <FaChevronDown />
      </div>
    </div>
  );
}
