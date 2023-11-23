"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";


const OurProducts = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        Our Product
        <span className="inline-block">
          {isDropdownOpen ? (
            <GoChevronUp size="25px" />
          ) : (
            <GoChevronDown size="25px" />
          )}
        </span>
      </button>
      {isDropdownOpen && (
        <div
          id="dropdown"
          className="z-10 bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700"
        >
          <ul
            className="ml-2 py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <div className="mt-2">
            <span className="text-[#E6E6E6] pl-4 pr-3">golegal.ly</span>
            <span className="font-Poppins bg-[#3A9AFC3] text-xs	rounded-lg py-[3px] break-line px-1 text-[#E6E6E6] text-base border border-red-500">
              Coming Soon
            </span>
          </div>
            
          </ul>
        </div>
      )}
    </div>
    </>
  )
      }


export default OurProducts;