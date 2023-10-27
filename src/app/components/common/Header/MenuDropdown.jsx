"use client";
import React, { useState } from "react";
import Link from "next/link";

const MenuDropdown = ({ svgcolor }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="responsive-header text-end">
      <button
        id="dropdownDefaultButton"
        className="relative text-white px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={toggleDropdown}
      >
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-7.15256e-07 10.6001L18 10.6001M-7.15256e-07 1.0001L10.8 1.0001M-7.15256e-07 5.8001L7.2 5.8001"
            stroke={svgcolor}
            strokeWidth="1.4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownOpen ? "" : "hidden"
        } absolute text-start right-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="mt-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              href="/mobile-hybrid-app-development-agency"
              className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Mobile App
            </Link>
          </li>
          <li>
            <Link
              href="/top-ui-ux-design-agency"
              className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              UIUX
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Career
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDropdown;
