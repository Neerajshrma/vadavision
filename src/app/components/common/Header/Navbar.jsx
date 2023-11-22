"use client";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Button from "../Button";
import RippleEffect from "../RippleEffect";
import Menu from "./Menu";
import MenuDropdown from "./MenuDropdown";
import { ModalContext } from "../../hooks/modalContext";
import { useRouter } from "next/router";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Navbar = ({
  color,
  backgroundColor,
  svgcolor,
  navItemColor,
  downdownColor,
}) => {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const { modalOpen } = useContext(ModalContext);
  const router = useRouter();

  const handleMenuClick = (menuName) => {
    setSelectedMenu(menuName);
    localStorage.setItem("activeMenu", menuName);
  };

  const handleServicesHover = () => {
    setIsServicesHovered(true);
  };

  const handleServicesLeave = () => {
    setIsServicesHovered(false);
  };

  const handleProjectsHover = () => {
    setIsProjectsHovered(true);
  };

  const handleProjectsLeave = () => {
    setIsProjectsHovered(false);
  };

  const handleCompanyHover = () => {
    setIsCompanyHovered(true);
  };

  const handleCompanyLeave = () => {
    setIsCompanyHovered(false);
  };

  useEffect(() => {
    const routeWithoutLeadingSlash = router.asPath.replace(/^\/+/, "");
    const menuName = routeWithoutLeadingSlash.split("/")[0];
    setSelectedMenu(menuName);
  }, [router.asPath]);

  return (
    <menu style={{ fontFamily: "Poppins" }}>
      <div className="nav-bar flex items-center gap-10 mt-2">
        <div
          className=""
          onMouseEnter={handleServicesHover}
          onMouseLeave={handleServicesLeave}
        >
          <div className="cursor-pointer projects-dropdown text-base font-normal text-black leading-[120%]">
            <div className="flex gap-1 items-center">
              <span
                className={selectedMenu === "Projects" ? "selected" : ""}
                style={{ color: navItemColor }}
              >
                Services
              </span>
              <span className="mt-[2px]" style={{ color: downdownColor }}>
                {isServicesHovered ? (
                  <HiChevronUp size={22} />
                ) : (
                  <HiChevronDown size={22} />
                )}
              </span>
            </div>
            <div
              className={`selected-border ${
                selectedMenu === "Projects" ? "selected" : ""
              }`}
            />
            {isServicesHovered && (
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <Link
                    href="/mobile-hybrid-app-development-agency"
                    className="flex items-center"
                  >
                <div
                  className={`p-4 text-[#ffffff] w-full hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "services" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("services")}
                >
                  
                    <div className="flex gap-3 items-center">
                      <div className="w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 512 512"
                          fill="#212a31"
                          className="mr-2"
                        >
                          <path d="M89.3 16.8c-7.3 2.6-13.6 8.1-17 15l-2.8 5.7-.3 173.1c-.2 168.2-.2 173.2 1.7 175.5 2.6 3.2 8.6 3.2 11.2 0 1.8-2.2 1.9-7.2 1.9-150.7V87h247v19.5c0 20.7.5 23.5 4.7 25.4 3.4 1.6 4.7 1.4 7.7-1l2.6-2V84.1c0-50.3 0-50.4-7.2-58.6-2.2-2.5-6.4-5.8-9.2-7.3l-5.1-2.7-115-.2c-108.5-.2-115.3-.2-120.2 1.5zM323.1 32c7.1 3.7 7.9 6.2 7.9 24.2V72H84V56.9c0-17.7 1.2-21.3 8.4-24.9 4-2 5.8-2 115.4-2 110 0 111.3 0 115.3 2z" />
                          <path d="M203.8 44.5c-3.7 2-4.7 6.9-2 10.4l1.9 2.6 22.6.3c21.6.2 22.8.1 24.7-1.8 3-3 2.7-8.3-.6-10.9-2.5-2-3.9-2.1-23.3-2.1-16 .1-21.2.4-23.3 1.5zM221.7 106.8c-1.9 2.1-46.7 114.3-46.7 117 0 5.1 7 8.7 11.4 5.8 1.8-1.1 7.6-14.8 25-58.4 12.4-31.3 22.6-58.1 22.6-59.5 0-5.7-8.5-9.1-12.3-4.9zM153.5 129c-1.1.4-9.8 8.6-19.2 18.2-14.5 14.6-17.3 17.9-17.3 20.4 0 2.4 2.9 5.9 17.8 21.2 19.1 19.7 20.2 20.4 25.6 16.1 1.9-1.5 2.6-2.9 2.6-5.7 0-3.3-1.2-4.8-14-17.6l-13.9-14.1 13.9-14.1c12.7-12.7 14-14.4 14-17.6 0-5.2-4.9-8.7-9.5-6.8zM256.3 129c-2.7 1.1-4.3 4-4.3 7.6 0 2.2 2.9 5.6 14 16.9l14.1 14.1-14.1 14.6c-15.2 15.9-16.2 17.7-11.5 22.3 4.9 5 6.3 4.1 25.7-15.3 15.9-15.9 17.8-18.1 17.8-21.1 0-2.9-1.9-5.3-16.2-20.3-14.5-15.2-19.9-19.9-22.5-19.7-.4 0-1.8.4-3 .9zM317.1 186.9c-1 1-2.1 3.9-2.4 6.7-.3 2.7-.9 7.4-1.2 10.5l-.7 5.5-6.3 2.8-6.3 2.7-8.8-6c-5.2-3.7-9.8-6.1-11.3-6.1-2 0-5.5 2.9-15.2 12.7-7 7.1-12.9 13.6-13.2 14.6-.9 2.6.5 5.5 6.7 13.2 3.1 3.8 5.6 7.4 5.6 8 0 .7-3.5 10.2-4.6 12.3 0 .1-4.6 1-10.2 2-14.8 2.7-14.2 1.6-14.2 24.2 0 22.8-.7 21.7 14.2 23.6 5.7.7 10.3 1.3 10.4 1.3.1.1 1.3 3 2.8 6.5l2.7 6.4-5.6 7.8c-5.8 8.2-7.1 11-6.1 14.1.3 1.1 6.2 7.4 12.9 14.1 15.2 15 14.9 14.9 26.9 5.7l8.5-6.5 5.9 2.6c3.2 1.4 6.2 3 6.5 3.6.4.5 1.2 5.1 1.9 10.1 1.7 11.3 3.5 13.7 10.5 13.7h4.5v17H73.3l-2.1 2.3c-2.2 2.3-2.2 2.9-2.2 31 0 26.2.2 29.1 2 34 2.7 7.3 7.9 13 14.8 16.4l5.7 2.8h232l5.3-2.4c3.1-1.4 7-4.3 9.6-7.2 7.5-8.4 7.6-8.9 7.6-54.1V393h5.9c9 0 10-1.2 11.7-14.5.8-6 1.5-10.9 1.7-11 5.5-2.5 12.1-4.6 13.2-4.2.7.3 4.4 2.8 8.2 5.5 3.7 2.7 7.8 5.3 9 5.6 3.6 1.1 7.4-1.7 19.2-14 13.7-14.5 13.6-14.4 4.7-25.8l-6.5-8.3 2.6-6.5 2.5-6.4 10-1.6c15.1-2.5 14.8-1.9 14.8-23.9 0-22.5.5-21.7-14.5-23.8l-10.7-1.6-2.5-6.3-2.5-6.3 6.1-9.1c5-7.3 6.1-9.7 5.6-11.7-.8-3.3-24-26.8-27.2-27.6-3-.7-5.2.5-13.5 7.1-3.7 3-7.1 5.4-7.6 5.4s-3.5-1.1-6.8-2.4l-5.9-2.4-1.7-10.2c-1-6.2-2.4-11-3.4-12.1-1.6-1.7-3.4-1.9-20.6-1.9-17 0-19 .2-20.7 1.9zm30.8 20.8c2 12.8 2.6 13.6 11.6 16.4 2.2.6 6.6 2.5 9.7 4 3.2 1.6 6.9 2.9 8.2 2.9 1.5 0 5.4-2.4 10.2-6.1l7.7-6.1 6 6 6.1 6.1-5.7 8.3c-3.1 4.6-5.7 9.1-5.7 10.1s1.3 4.3 2.9 7.5c1.6 3.1 3.7 8.3 4.7 11.6 1 3.2 2.7 6.4 3.9 7.2 1.1.7 6.2 1.8 11.3 2.5l9.2 1.2v17.4l-9.1 1.3c-5 .7-9.9 2-11 2.9-1.1.9-3.3 5.3-4.8 9.9-1.6 4.5-3.6 9.3-4.5 10.7-2.9 4.5-2.1 8.1 3.9 15.7 3 3.8 5.5 7.3 5.5 7.7 0 .4-2.7 3.3-5.9 6.5l-5.9 5.9-7.8-5.7c-4.3-3.1-8.8-5.6-10.1-5.6-1.2 0-5.3 1.5-9 3.4s-8.7 3.9-11 4.5c-6.3 1.7-8 4.5-8.8 15.1l-.7 9h-17.6l-.6-2.8c-.3-1.5-1-5.6-1.7-9.2-.6-3.5-1.5-7.2-1.9-8.1-.5-.9-4.3-2.8-8.3-4.2-4.1-1.5-9.8-3.8-12.7-5.1-6.3-2.9-7.7-2.6-15.8 4-3.1 2.6-6.3 4.9-7 5.2-1.4.5-12.2-9.5-12.2-11.3 0-.6 2-3.9 4.5-7.3 7.1-9.8 7.2-10.1 2.6-20.1-2.1-4.7-4.4-10.3-5-12.3-.7-2-1.9-4.2-2.6-4.8-.8-.7-5.7-1.7-10.7-2.4l-9.3-1.1-.3-8.7-.3-8.6 2.8-.6c1.5-.3 5.7-1 9.3-1.6 3.6-.7 7.3-1.9 8.2-2.7.9-.8 2.7-4.5 3.9-8.2 1.2-3.6 3.2-8.5 4.5-10.8 3.7-6.4 3.2-8.8-3.6-17.3l-6-7.5 6.1-6.1 6.1-6.2 7.5 5.4c4.1 2.9 8.4 5.6 9.4 5.9 1.2.4 4.2-.5 7.7-2.3 3.1-1.6 8.7-3.9 12.5-5.1 3.7-1.3 7.1-3.1 7.7-4 .7-1.4 3-16 3-19.3 0-.5 4-.8 8.9-.8h8.8l1.2 7.7zM331 448.4c0 22.5-.1 23.4-2.2 26.6-1.3 1.8-3.9 4.1-5.8 5.1-3.3 1.8-8.4 1.9-114.9 1.9-109.4 0-111.5 0-115.6-2-2.6-1.3-4.9-3.4-6.3-5.9-2.1-3.7-2.2-5.1-2.2-26.5V425h247v23.4z" />
                          <path d="M327.3 250.5c-10.7 3.3-21.4 13.1-25.4 23.3-1.8 4.5-2.3 7.7-2.4 15.2 0 8.7.3 10.1 3.2 16.2 12.2 25.8 44.8 31.3 64.8 11 20.7-21 11.1-57.3-17.4-65.6-6.5-1.9-17-2-22.8-.1zm24.5 17.2c5.6 3.4 10.7 11.2 11.7 17.8.9 6.4-1.7 14.6-6.2 19.6-3.5 3.9-8 6.9-10.3 6.9-.6 0-1-5.5-1-15.9v-16l-2.6-2c-3.6-2.8-6-2.6-9.5.8l-2.9 2.9v15.1c0 8.3-.3 15.1-.7 15.1-.3 0-2.5-1.1-4.8-2.4-13.2-7.8-15.2-28-3.8-38.8 7.9-7.5 20.8-8.9 30.1-3.1zM168.2 451.3c-4 4.3-1.9 10.7 4 12.2 1.3.3 18.2.5 37.6.3l35.4-.3 1.9-2.4c2.5-3 2.4-7.6-.1-10.1-1.9-1.9-3.3-2-39.3-2h-37.4l-2.1 2.3z" />
                        </svg>
                      </div>
                      <Menu
                        menuname="Mobile App"
                        color={color}
                        selected={
                          selectedMenu ===
                          "mobile-hybrid-app-development-agency"
                        }
                        onClick={() =>
                          handleMenuClick(
                            "mobile-hybrid-app-development-agency"
                          )
                        }
                      />
                    </div>
                </div>
                </Link>

                <Link
                    href="/top-ui-ux-design-agency"
                    className="flex items-center"
                  >
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white w-full hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "uiux" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  
                    <div className="flex gap-3 items-center">
                      <div className="w-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="22"
                          viewBox="0 0 512 512"
                          fill="#212a31"
                        >
                          <path d="M27.3 24.1c-7.1 2.7-15.5 10.6-19 17.7l-2.8 5.7v325l3.3 6.7c3.6 7.4 9.5 13.2 17 17l4.7 2.3 65.8.3 65.7.3v40.7l-17.2.4c-16.9.3-17.4.4-22.6 3.2-12.6 7-17.3 22.3-10.6 34.7 3.2 5.9 9.5 11.3 15.2 12.9 2.5.6 46.1 1 130.2 1 125.1 0 126.6-.1 131-2.1 5.5-2.5 10.5-7.1 13.3-12.4 1.6-3 2.2-5.8 2.2-11.5 0-6.4-.4-8.2-2.7-12.2-6.5-10.9-13.6-13.8-34-13.8H353v-41l64.3-.2 64.2-.3 5.7-2.7c10.5-4.9 17.7-14.3 19.8-25.9.7-3.7.9-59.2.8-163-.3-147.5-.4-157.7-2.1-161.9-3.9-10-13.9-19.3-23.7-22-2.2-.6-84.4-1-226.5-.9-221.1 0-223 0-228.2 2zm457.3 12.4c3 1.9 6 4.9 7.9 7.9l3 4.9.3 127.9.2 127.8-239.7-.2-239.8-.3v-254l2.2-4.2c2.6-4.8 8.6-10.2 13.4-11.9 2.7-1 52.7-1.2 225.5-1.1l222.1.2 4.9 3zM496 342.7c0 23.8-.2 27.2-1.9 30.8-2.2 4.9-6.2 9-11.6 11.9l-4 2.1-220 .3c-247.1.2-226.9.9-235-7.3-6.8-6.8-7.5-10.3-7.5-39.7V316h480v26.7zm-155 76.8V440H174v-41h167v20.5zm44.8 34.5c4.4 2.7 7.5 9.6 6.6 14.6-.8 4.4-4.8 9.2-9.1 11-2.7 1.2-24.8 1.4-127.5 1.4-119.1 0-124.5-.1-127.8-1.9-10.2-5.4-10.6-19.1-.8-25.1 3.2-2 5.3-2 129.3-2 124.7 0 126 0 129.3 2z" />
                          <path d="M298.6 93.2c-2.2 3.5-54.6 145.6-54.6 148.2 0 5.2 7.5 7.3 9.9 2.8 2.3-4.3 54.3-146 54.3-147.9.1-5.3-6.8-7.4-9.6-3.1zM414.6 114.2c-1.4 2-1.6 8.9-1.6 55 0 51.5.1 52.9 2 54.8 2.4 2.4 4.9 2.5 7.6.6 1.8-1.4 1.9-3.3 2.2-54.7.2-46.6.1-53.5-1.3-55.5-2-3.2-6.8-3.2-8.9-.2zM90 120c-2 2-2.1 2.9-1.8 39.3.3 36.6.3 37.3 2.6 41.5 7.4 13.8 22.7 21.3 37.4 18.3 10.4-2.2 18.7-8.4 23.6-17.6l2.7-5 .3-36c.2-19.8 0-37-.3-38.3-.9-3.4-4.8-4.9-7.9-2.8l-2.5 1.6-.3 36.3-.3 36.4-2.8 4.1c-4.1 6.3-9.7 9.5-17.2 10-8.2.5-12.8-1.1-18-6.2-6.2-6.2-6.5-8.5-6.5-47 0-33.5 0-33.5-2.2-35-3-2.1-4.4-2-6.8.4zM172 119.9c-.5 1.1-1 2.7-1 3.7 0 .9 5.2 11.3 11.6 23.2l11.6 21.5-2 4.3c-1.1 2.3-6.4 12.1-11.6 21.9-5.3 9.7-9.6 18.7-9.6 20 0 1.5 1 3.1 2.6 4.2 4.5 2.9 6.6.6 17-18.7 5.1-9.6 9.7-17.6 10.2-17.8.4-.1 5 7.7 10.2 17.4 10.4 19.2 12.5 21.7 16.9 19.3 1.5-.9 2.7-2.5 2.9-3.9.1-1.6-3.8-10-11.3-23.9-6.3-11.7-11.5-21.8-11.5-22.4 0-.6 5.2-10.7 11.5-22.4s11.5-22.2 11.5-23.2c0-3.1-2.9-5.2-6.4-4.9-2.9.3-3.6 1.3-13.1 19C206 147.5 201.3 156 201 156c-.3 0-4.8-8-10-17.7s-10.1-18.2-10.8-19c-2-2-7-1.6-8.2.6zM323 120c-2 2-2.1 2.9-1.8 38.8.3 35 .4 36.9 2.4 41.3 6.5 13.9 22.6 22.1 37.6 19 10.4-2.2 18.7-8.4 23.6-17.6l2.7-5v-75.9l-2.6-1.5c-2.4-1.3-2.9-1.3-5.3.2L377 121v34.3c0 21-.4 35.7-1.1 38-.6 2.1-2.6 5.6-4.5 7.7-4.8 5.2-10.6 7.4-18.8 6.8-8-.5-13.8-4.1-17.6-10.8l-2.5-4.5-.3-35.5c-.2-34.6-.3-35.5-2.3-37.3-2.8-2.2-4.4-2.2-6.9.3zM195.8 334c-15.2 4.6-17.5 26.2-3.6 34 14.1 8 30.4-4.2 27.4-20.5-1.8-9.5-14-16.5-23.8-13.5zm11.1 13.6c1.2 1.5 2.1 3.4 2.1 4.4 0 1-.9 2.9-2.1 4.4-4 5.1-12.9 2-12.9-4.6 0-6.5 8.8-9.4 12.9-4.2zM250.8 334c-7.8 2.3-12.8 9.5-12.8 18.1 0 15.5 18.2 24.2 30 14.2 8.4-7 9.3-19 2.2-26.7-5.1-5.5-12.7-7.6-19.4-5.6zm11.1 13.6c1.2 1.5 2.1 3.4 2.1 4.4 0 1-.9 2.9-2.1 4.4-4 5.1-12.9 2-12.9-4.6 0-6.5 8.8-9.4 12.9-4.2zM304.5 334.5c-7.5 2.6-13.6 13.1-11.9 20.3 2 8.4 6.7 13.2 14.6 15.2 14.6 3.7 27.3-11.7 20.9-25.5-2.2-4.8-5.4-7.9-10.3-10-4.5-1.8-8-1.9-13.3 0zm12 12.5c2.6 2.9 2.4 7.9-.4 10.2-5 3.9-12.1.9-12.1-5.2 0-6.2 8.4-9.5 12.5-5z" />
                        </svg>
                      </div>
                      <Menu
                        menuname="UI UX"
                        color={color}
                        selected={selectedMenu === "top-ui-ux-design-agency"}
                        onClick={() =>
                          handleMenuClick("top-ui-ux-design-agency")
                        }
                      />
                    </div>
                </div>
                </Link>
                

              </div>
            )}
          </div>
        </div>
        <div
          className=""
          onMouseEnter={handleProjectsHover}
          onMouseLeave={handleProjectsLeave}
        >
          <div className="projects-dropdown text-base font-normal text-black leading-[120%]">
            <div className="flex gap-1 items-center">
              <span
                className={selectedMenu === "Projects" ? "selected" : ""}
                style={{ color: navItemColor }}
              >
                Products
              </span>
              <span className="mt-[2px]" style={{ color: downdownColor }}>
                {isProjectsHovered ? (
                  <HiChevronUp size={22} />
                ) : (
                  <HiChevronDown size={22} />
                )}
              </span>
            </div>
            <div
              className={`selected-border ${
                selectedMenu === "Projects" ? "selected" : ""
              }`}
            />
            {isProjectsHovered && (
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "Resources" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("services")}
                >
                  <div className="">
                    <span className="text-black pr-2">golegal.ly</span>
                    <span className="inline-block font-Poppins bg-[#3A9AFC3] text-xs rounded-lg py-[3px] px-1 text-black text-base border border-red-500">
                      Soon
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className=""
          onMouseEnter={handleCompanyHover}
          onMouseLeave={handleCompanyLeave}
        >
          <div className="cursor-pointer projects-dropdown text-base font-normal text-black leading-[120%]">
            <div className="flex gap-1 items-center">
              <span
                className={selectedMenu === "Projects" ? "selected" : ""}
                style={{ color: navItemColor }}
              >
                Company
              </span>
              <span className="mt-[2px]" style={{ color: downdownColor }}>
                {isCompanyHovered ? (
                  <HiChevronUp size={22} />
                ) : (
                  <HiChevronDown size={22} />
                )}
              </span>
            </div>
            <div
              className={`selected-border ${
                selectedMenu === "Projects" ? "selected" : ""
              }`}
            />
            {isCompanyHovered && (
              <div className="bg-[#f7f7f7] company-dropdown absolute top-5 left-0 z-10 p-2">
                                  <Link href="/about-us">

                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                    <Menu
                      menuname="About Us"
                      color={color}
                      selected={selectedMenu === "about-us"}
                      onClick={() => handleMenuClick("about-us")}
                    />
                </div>
                </Link>

                <Link href="/contact-us">

                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("services")}
                >
                    <Menu
                      menuname="Contact Us"
                      color={color}
                      selected={selectedMenu === "contact-us"}
                      onClick={() => handleMenuClick("contact-us")}
                    />
                </div>
                </Link>
                <Link href="/career">

                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                    <Menu
                      menuname="Career"
                      color={color}
                      selected={selectedMenu === "Career"}
                      onClick={() => handleMenuClick("Career")}
                    />
                </div>
                </Link>

              </div>
            )}
          </div>
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
      <MenuDropdown svgcolor={svgcolor} />
      <style jsx>{`
        .selected-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${selectedMenu === "Projects"
            ? "#dd4242"
            : "transparent"};
          margin-bottom: -5px;
          transition: background-color 0.5s ease;
        }

        .selected:hover .selected-border,
        .hovered .selected-border {
          background-color: #dd4242;
        }

        .selected {
          font-weight: 500;
        }
      `}</style>
    </menu>
  );
};

export default Navbar;
