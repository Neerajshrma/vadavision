"use client";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Link from "next/link";

const ServicesDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
          type="button"
          onClick={toggleDropdown}
        >
          Services
          <span className="ml-2 inline-block">
            {isDropdownOpen ? (
              <GoChevronUp size="25px" />
            ) : (
              <GoChevronDown size="25px" />
            )}
          </span>
        </button>
        <div
          id="dropdown"
          className={`z-10 ${
            isDropdownOpen ? "" : "hidden"
          } bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
        >
          <ul
            className="ml-2 py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                href="/"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-hybrid-app-development-agency"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                App Development
              </Link>
            </li>
            <li>
              <Link
                href="/top-ui-ux-design-agency"
                className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
