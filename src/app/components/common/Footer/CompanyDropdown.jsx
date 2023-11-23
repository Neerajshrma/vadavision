"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const CompanyDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        Company
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
          className="z-10 bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="ml-2 py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                href="/privacy-policy"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%]  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-condition"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%]  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%]  dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyDropdown;
