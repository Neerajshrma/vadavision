import React from "react";
import Button from "../../common/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <menu style={{ fontFamily: "Poppins" }}>
      <div className="nav-bar flex gap-10 items-center">
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-white text-base font-normal leading-[120%]"
        >
          <Link href="/homepage">Home</Link>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-white text-base font-normal leading-[120%]"
        >
          <Link href="/uiuxpage">UI/UX</Link>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-white text-base font-normal leading-[120%]"
        >
          <Link href="/aboutuspage">About Us</Link>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-white text-base font-normal leading-[120%]"
        >
          {" "}
          <Link href="/contactuspage">Contact US</Link>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="text-white text-base font-normal leading-[120%]"
        >
          <Link href="/">Career</Link>
        </div>
        <Button
          fontFamily="Poppins"
          fontWeight="500"
          padding="8px 24px"
          Color="#FFFFFF"
          fontSize="14px"
          backgroundColor="#DD4242"
          name="GET IN TOUCH"
        />
      </div>
      <div className="responsive-header">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white px-4 py-2.5 text-center inline-flex items-center"
          type="button"
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
              stroke="#333542"
              strokeWidth="1.4"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm font-normal leading-[120%] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Company
              </a>
            </li>
          </ul>
        </div>
      </div>
    </menu>
  );
};

export default Navbar;
