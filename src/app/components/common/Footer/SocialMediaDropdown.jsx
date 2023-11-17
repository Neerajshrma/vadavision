"use client";
import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";

const SocialMediaDropdown = () => {
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
        Our Social Media
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
            className="ml-4 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <a href="https://www.instagram.com/vadavision/  " target="_blank">
              <li className="flex gap-2 items-center">
                <div className="text-black bg-white p-[3px] rounded-full">
                  <AiFillInstagram size={20} />
                </div>
                <div className="mt-3 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                  Instagram
                </div>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/vadavision/"
              target="_blank"
            >              <li className="flex gap-2 items-center">
                <div className="text-black bg-white p-[3px] rounded-full">
                  <BiLogoLinkedin size={20} />
                </div>
                <div className="mt-3 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                  LinkedIn
                </div>
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090359760736&mibextid=ZbWKwL"
              target="_blank"
            >              <li className="flex gap-2 items-center">
                <div className="text-black bg-white p-[3px] rounded-full">
                  <BiLogoFacebook size={20} />
                </div>
                <div className="my-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                  Facebook
                </div>
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SocialMediaDropdown;
