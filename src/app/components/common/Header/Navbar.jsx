"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Button from "../Button";
import RippleEffect from "../RippleEffect";
import Menu from "./Menu";
import MenuDropdown from "./MenuDropdown";
import { ModalContext } from "../../hooks/modalContext";
import { useRouter } from 'next/router';


const Navbar = ({ color, backgroundColor, svgcolor }) => {
  const [selectedMenu, setSelectedMenu] = useState("");

  const { modalOpen } = useContext(ModalContext);
  const router = useRouter();


  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
    localStorage.setItem("activeMenu", menuName);
  };

  useEffect(() => {
    const routeWithoutLeadingSlash = router.asPath.replace(/^\/+/, ''); 
    const menuName = routeWithoutLeadingSlash.split('/')[0];
    setSelectedMenu(menuName);
  }, [router.asPath]);

  return (
    <menu style={{ fontFamily: "Poppins" }}>
      <div className="nav-bar flex gap-10 items-center">
        <div>
          <Link href="/mobile-hybrid-app-development-agency">
            <Menu
              menuname="Mobile App"
              color={color}
              selected={selectedMenu === "mobile-hybrid-app-development-agency"}
              onClick={() => handleMenuClick("mobile-hybrid-app-development-agency")}
            />
          </Link>
        </div>
        <div>
          <Link href="/top-ui-ux-design-agency">
            <Menu
              menuname="UI UX"
              color={color}
              selected={selectedMenu === "top-ui-ux-design-agency"}
              onClick={() => handleMenuClick("top-ui-ux-design-agency")}
            />
          </Link>
        </div>
        <div>
          <Link href="/about-us">
            <Menu
              menuname="About Us"
              color={color}
              selected={selectedMenu === "about-us"}
              onClick={() => handleMenuClick("about-us")}
            />
          </Link>
        </div>
        <div>
          <Link href="/contact-us">
            <Menu
              menuname="Contact Us"
              color={color}
              selected={selectedMenu === "contact-us"}
              onClick={() => handleMenuClick("contact-us")}
            />
          </Link>
        </div>
        <div>
          <Link href="/career">
            <Menu
              menuname="Career"
              color={color}
              selected={selectedMenu === "Career"}
              onClick={() => handleMenuClick("Career")}
            />
          </Link>
        </div>
        <div>
          <RippleEffect>
            <div className="get-in-touch-btn" onClick={modalOpen}>
              <Button
                fontFamily="Poppins"
                fontWeight="600"
                padding="7px 22px"
                Color="#FFFFFF"
                fontSize="12px"
                name="GET IN TOUCH"
                backgroundColor={backgroundColor}
              />
            </div>
          </RippleEffect>
        </div>
      </div>
      {/* <button
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
        </div> */}
      <MenuDropdown svgcolor={svgcolor} />
    </menu>
  );
};

export default Navbar;
