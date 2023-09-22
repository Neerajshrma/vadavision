import React from "react";
import { GoChevronDown } from "react-icons/go";

const FooterLinks = () => {
  return (
    <div>
      <div className="responsive-footer flex justify-between">
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Service
          </h1>
          <ul>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Web Development
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                App Development
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                UI/UX Design
              </li>
            </a>
          </ul>
        </div>
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Company
          </h1>
          <ul>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Service
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Privacy Policy
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Help & Support
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Portfolio
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Blogs
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Contact Us
              </li>
            </a>
          </ul>
        </div>
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Our Social Media
          </h1>
          <ul>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Dribbble
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Behance
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Medium
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Instagram
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Facebook
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Twitter
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="mobile-footer">
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
            type="button"
          >
            Services
            <span className="inline-block">
              <GoChevronDown size="25px" />
            </span>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
            type="button"
          >
            Company
            <span className="inline-block">
              <GoChevronDown size="25px" />
            </span>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="Montserrat text-white px-4 py-2.5 inline-flex items-center"
            type="button"
          >
            Our Social Media
            <span className="inline-block">
              <GoChevronDown size="25px" />
            </span>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-[#111319] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Medium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Montserrat text-[#E6E6E6] block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
