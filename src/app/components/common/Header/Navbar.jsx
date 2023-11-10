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

const Navbar = ({ color, backgroundColor, svgcolor, navItemColor, downdownColor }) => {
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
              <span className={selectedMenu === "Projects" ? "selected" : ""} style={{ color: navItemColor }}>
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
              className={`selected-border ${selectedMenu === "Projects" ? "selected" : ""
                }`}
            />
            {isServicesHovered && (
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "services" ? "selected" : ""}`}
                  onClick={() => handleMenuClick("services")}
                >
                  <Link href="/mobile-hybrid-app-development-agency" className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                      fill="black"
                      className="mr-2"
                    >
                      <path d="M89.3 16.8c-7.3 2.6-13.6 8.1-17 15l-2.8 5.7-.3 173.1c-.2 168.2-.2 173.2 1.7 175.5 2.6 3.2 8.6 3.2 11.2 0 1.8-2.2 1.9-7.2 1.9-150.7V87h247v19.5c0 20.7.5 23.5 4.7 25.4 3.4 1.6 4.7 1.4 7.7-1l2.6-2V84.1c0-50.3 0-50.4-7.2-58.6-2.2-2.5-6.4-5.8-9.2-7.3l-5.1-2.7-115-.2c-108.5-.2-115.3-.2-120.2 1.5zM323.1 32c7.1 3.7 7.9 6.2 7.9 24.2V72H84V56.9c0-17.7 1.2-21.3 8.4-24.9 4-2 5.8-2 115.4-2 110 0 111.3 0 115.3 2z" />
                      <path d="M203.8 44.5c-3.7 2-4.7 6.9-2 10.4l1.9 2.6 22.6.3c21.6.2 22.8.1 24.7-1.8 3-3 2.7-8.3-.6-10.9-2.5-2-3.9-2.1-23.3-2.1-16 .1-21.2.4-23.3 1.5zM221.7 106.8c-1.9 2.1-46.7 114.3-46.7 117 0 5.1 7 8.7 11.4 5.8 1.8-1.1 7.6-14.8 25-58.4 12.4-31.3 22.6-58.1 22.6-59.5 0-5.7-8.5-9.1-12.3-4.9zM153.5 129c-1.1.4-9.8 8.6-19.2 18.2-14.5 14.6-17.3 17.9-17.3 20.4 0 2.4 2.9 5.9 17.8 21.2 19.1 19.7 20.2 20.4 25.6 16.1 1.9-1.5 2.6-2.9 2.6-5.7 0-3.3-1.2-4.8-14-17.6l-13.9-14.1 13.9-14.1c12.7-12.7 14-14.4 14-17.6 0-5.2-4.9-8.7-9.5-6.8zM256.3 129c-2.7 1.1-4.3 4-4.3 7.6 0 2.2 2.9 5.6 14 16.9l14.1 14.1-14.1 14.6c-15.2 15.9-16.2 17.7-11.5 22.3 4.9 5 6.3 4.1 25.7-15.3 15.9-15.9 17.8-18.1 17.8-21.1 0-2.9-1.9-5.3-16.2-20.3-14.5-15.2-19.9-19.9-22.5-19.7-.4 0-1.8.4-3 .9zM317.1 186.9c-1 1-2.1 3.9-2.4 6.7-.3 2.7-.9 7.4-1.2 10.5l-.7 5.5-6.3 2.8-6.3 2.7-8.8-6c-5.2-3.7-9.8-6.1-11.3-6.1-2 0-5.5 2.9-15.2 12.7-7 7.1-12.9 13.6-13.2 14.6-.9 2.6.5 5.5 6.7 13.2 3.1 3.8 5.6 7.4 5.6 8 0 .7-3.5 10.2-4.6 12.3 0 .1-4.6 1-10.2 2-14.8 2.7-14.2 1.6-14.2 24.2 0 22.8-.7 21.7 14.2 23.6 5.7.7 10.3 1.3 10.4 1.3.1.1 1.3 3 2.8 6.5l2.7 6.4-5.6 7.8c-5.8 8.2-7.1 11-6.1 14.1.3 1.1 6.2 7.4 12.9 14.1 15.2 15 14.9 14.9 26.9 5.7l8.5-6.5 5.9 2.6c3.2 1.4 6.2 3 6.5 3.6.4.5 1.2 5.1 1.9 10.1 1.7 11.3 3.5 13.7 10.5 13.7h4.5v17H73.3l-2.1 2.3c-2.2 2.3-2.2 2.9-2.2 31 0 26.2.2 29.1 2 34 2.7 7.3 7.9 13 14.8 16.4l5.7 2.8h232l5.3-2.4c3.1-1.4 7-4.3 9.6-7.2 7.5-8.4 7.6-8.9 7.6-54.1V393h5.9c9 0 10-1.2 11.7-14.5.8-6 1.5-10.9 1.7-11 5.5-2.5 12.1-4.6 13.2-4.2.7.3 4.4 2.8 8.2 5.5 3.7 2.7 7.8 5.3 9 5.6 3.6 1.1 7.4-1.7 19.2-14 13.7-14.5 13.6-14.4 4.7-25.8l-6.5-8.3 2.6-6.5 2.5-6.4 10-1.6c15.1-2.5 14.8-1.9 14.8-23.9 0-22.5.5-21.7-14.5-23.8l-10.7-1.6-2.5-6.3-2.5-6.3 6.1-9.1c5-7.3 6.1-9.7 5.6-11.7-.8-3.3-24-26.8-27.2-27.6-3-.7-5.2.5-13.5 7.1-3.7 3-7.1 5.4-7.6 5.4s-3.5-1.1-6.8-2.4l-5.9-2.4-1.7-10.2c-1-6.2-2.4-11-3.4-12.1-1.6-1.7-3.4-1.9-20.6-1.9-17 0-19 .2-20.7 1.9zm30.8 20.8c2 12.8 2.6 13.6 11.6 16.4 2.2.6 6.6 2.5 9.7 4 3.2 1.6 6.9 2.9 8.2 2.9 1.5 0 5.4-2.4 10.2-6.1l7.7-6.1 6 6 6.1 6.1-5.7 8.3c-3.1 4.6-5.7 9.1-5.7 10.1s1.3 4.3 2.9 7.5c1.6 3.1 3.7 8.3 4.7 11.6 1 3.2 2.7 6.4 3.9 7.2 1.1.7 6.2 1.8 11.3 2.5l9.2 1.2v17.4l-9.1 1.3c-5 .7-9.9 2-11 2.9-1.1.9-3.3 5.3-4.8 9.9-1.6 4.5-3.6 9.3-4.5 10.7-2.9 4.5-2.1 8.1 3.9 15.7 3 3.8 5.5 7.3 5.5 7.7 0 .4-2.7 3.3-5.9 6.5l-5.9 5.9-7.8-5.7c-4.3-3.1-8.8-5.6-10.1-5.6-1.2 0-5.3 1.5-9 3.4s-8.7 3.9-11 4.5c-6.3 1.7-8 4.5-8.8 15.1l-.7 9h-17.6l-.6-2.8c-.3-1.5-1-5.6-1.7-9.2-.6-3.5-1.5-7.2-1.9-8.1-.5-.9-4.3-2.8-8.3-4.2-4.1-1.5-9.8-3.8-12.7-5.1-6.3-2.9-7.7-2.6-15.8 4-3.1 2.6-6.3 4.9-7 5.2-1.4.5-12.2-9.5-12.2-11.3 0-.6 2-3.9 4.5-7.3 7.1-9.8 7.2-10.1 2.6-20.1-2.1-4.7-4.4-10.3-5-12.3-.7-2-1.9-4.2-2.6-4.8-.8-.7-5.7-1.7-10.7-2.4l-9.3-1.1-.3-8.7-.3-8.6 2.8-.6c1.5-.3 5.7-1 9.3-1.6 3.6-.7 7.3-1.9 8.2-2.7.9-.8 2.7-4.5 3.9-8.2 1.2-3.6 3.2-8.5 4.5-10.8 3.7-6.4 3.2-8.8-3.6-17.3l-6-7.5 6.1-6.1 6.1-6.2 7.5 5.4c4.1 2.9 8.4 5.6 9.4 5.9 1.2.4 4.2-.5 7.7-2.3 3.1-1.6 8.7-3.9 12.5-5.1 3.7-1.3 7.1-3.1 7.7-4 .7-1.4 3-16 3-19.3 0-.5 4-.8 8.9-.8h8.8l1.2 7.7zM331 448.4c0 22.5-.1 23.4-2.2 26.6-1.3 1.8-3.9 4.1-5.8 5.1-3.3 1.8-8.4 1.9-114.9 1.9-109.4 0-111.5 0-115.6-2-2.6-1.3-4.9-3.4-6.3-5.9-2.1-3.7-2.2-5.1-2.2-26.5V425h247v23.4z" />
                      <path d="M327.3 250.5c-10.7 3.3-21.4 13.1-25.4 23.3-1.8 4.5-2.3 7.7-2.4 15.2 0 8.7.3 10.1 3.2 16.2 12.2 25.8 44.8 31.3 64.8 11 20.7-21 11.1-57.3-17.4-65.6-6.5-1.9-17-2-22.8-.1zm24.5 17.2c5.6 3.4 10.7 11.2 11.7 17.8.9 6.4-1.7 14.6-6.2 19.6-3.5 3.9-8 6.9-10.3 6.9-.6 0-1-5.5-1-15.9v-16l-2.6-2c-3.6-2.8-6-2.6-9.5.8l-2.9 2.9v15.1c0 8.3-.3 15.1-.7 15.1-.3 0-2.5-1.1-4.8-2.4-13.2-7.8-15.2-28-3.8-38.8 7.9-7.5 20.8-8.9 30.1-3.1zM168.2 451.3c-4 4.3-1.9 10.7 4 12.2 1.3.3 18.2.5 37.6.3l35.4-.3 1.9-2.4c2.5-3 2.4-7.6-.1-10.1-1.9-1.9-3.3-2-39.3-2h-37.4l-2.1 2.3z" />    </svg>
                    <Menu
                      menuname="Mobile App"
                      color={color}
                      selected={selectedMenu === "mobile-hybrid-app-development-agency"}
                      onClick={() => handleMenuClick("mobile-hybrid-app-development-agency")}
                    />
                  </Link>
                </div>

                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "uiux" ? "selected" : ""
                    }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href="/top-ui-ux-design-agency" className="flex items-center">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 512 512"
                  fill="black"
                  className="mr-2"
                >
                  <path d="M7.4 10.7c-1.2.2-3.2 1.5-4.5 2.9L.5 16.2.2 70.3c-.2 39.5.1 54.9.9 57 2.6 6.1-16.4 5.7 254.9 5.7s252.3.4 254.9-5.7c.8-2.1 1.1-17.5.9-57l-.3-54.3-2.8-2.7-2.7-2.8-248.3-.1c-136.5-.1-249.2.1-250.3.3zM492 71.5V113H20V30h472v41.5z" />
                  <path d="M422.3 37.8c-13.7 4.9-22 17.4-21.1 32 1.2 20.4 20.9 34.1 41 28.3l4.8-1.3 5.6 5.1c4.7 4.4 6.1 5.1 9.6 5.1 7.8 0 12.5-8.6 8.2-15-1-1.4-3.3-4.2-5.2-6.2-3.4-3.6-3.5-3.8-2.4-8 2.5-9.7 1.9-17.6-1.8-24.8-6.8-13.1-24.6-20.2-38.7-15.2zm16.8 20.5c6.2 4.2 7.1 12.4 1.8 17.6-9.6 9.6-25.1-2.3-18.2-14 1.9-3.2 6.5-5.8 10.4-5.9 1.4 0 4.1 1 6 2.3zM96.1 83.1c-5 4.9-3.8 12.4 2.4 15.4 2.9 1.3 15.6 1.5 107.9 1.5 112.6 0 109.9.1 112.6-5 2.3-4.2 1.5-9.2-1.9-12.2L314 80H99.2l-3.1 3.1zM341.9 82.9c-7.5 7.6.4 20.1 10.2 16.1 4.1-1.7 5.9-4.7 5.9-9.6 0-8.5-10-12.5-16.1-6.5zM8 148.3c-2.4.8-4.1 2.3-5.2 4.7C1.1 156.3 1 163.3 1 256s.1 99.7 1.8 103c1.1 2.4 2.8 3.9 5.2 4.7 5.1 1.7 304.9 1.7 310 0 2.4-.8 4.1-2.3 5.2-4.7 1.7-3.3 1.8-10.3 1.8-103s-.1-99.7-1.8-103c-1.1-2.4-2.8-3.9-5.2-4.7-5.1-1.7-304.9-1.7-310 0zm297 99.9c0 50.9-.4 80.8-.9 80.3-.6-.6-18.4-24.2-39.6-52.5-21.2-28.3-39.6-52-40.8-52.7-2.7-1.5-7.2-1.6-9.6-.3-1 .5-16.3 20.3-34 43.9l-32.3 43-7.6-8.8c-4.3-4.8-14.7-17-23.2-26.9-16.1-18.8-19.8-21.8-25-20.7-3.4.8-6.9 4.5-43 46.5-13.9 16.2-25.9 30.2-26.7 31-1.1 1.2-1.3-12-1.3-81.3V167h284v81.2zm-77.7 11.3L235 270h-32.2l2.4-3.3c1.4-1.7 4.9-6.5 7.9-10.5 2.9-3.9 5.6-7.2 5.9-7.2.3.1 4 4.8 8.3 10.5zm-112.5 42.9c11.1 12.9 20.2 23.7 20.2 24 0 .4-3 4.7-6.7 9.6l-6.8 9H79.7c-32.1 0-41.8-.3-41.5-1.2.5-1.5 55.1-64.8 55.9-64.8.3 0 9.7 10.5 20.7 23.4zM269.5 316c10.8 14.4 19.8 26.7 20.2 27.5.4 1.3-8.9 1.5-71.2 1.5-57 0-71.5-.3-70.9-1.3.4-.6 4.6-6.3 9.2-12.5l8.4-11.2h24.7c21.4 0 25.1-.2 28.1-1.8 4.8-2.3 6.6-6.3 5.1-11.2-1.9-6.5-3.6-7-24.1-7-9.9 0-18-.2-18-.5s1.5-2.6 3.3-5l3.2-4.4 31.2-.1H250l19.5 26z" />
                  <path d="M126.3 180.9c-9.2 3.2-16 9.5-20.5 18.9-7.3 15.2-1.7 34.5 12.5 43.6 7 4.5 11.4 5.7 19.5 5.7 26.4-.1 43-27.6 31-51.4-2.9-5.7-10.2-12.5-16.6-15.5-7.5-3.4-18.4-4-25.9-1.3zm18.8 20.3c7.5 4.2 10.1 15.1 5.1 21.7-6.5 8.8-21 8.1-25.9-1.2-7.1-13.6 7.5-28 20.8-20.5zM345 148.3c-2.4.8-4.1 2.3-5.2 4.7-1.7 3.3-1.8 10.3-1.8 102.6 0 68.1.3 100.1 1.1 102.2.6 1.7 2.3 3.9 3.7 4.9 2.6 1.7 7 1.8 82.2 1.8 75 0 79.7-.1 82.3-1.8 1.6-1 3.2-2.9 3.7-4.3 1.6-4.1 1.3-202.3-.3-205.4-.7-1.4-2.8-3.3-4.7-4.2-3.2-1.7-9.1-1.8-80.5-1.7-56.9 0-77.9.3-80.5 1.2zM492 256v89l-66.7-.2-66.8-.3-.3-87.5c-.1-48.1 0-88.1.3-88.8.3-.9 14.7-1.2 67-1.2H492v89z" />
                  <path d="M374.9 186.9c-5.1 5.1-3.3 13.7 3.3 16 2 .7 18.3 1.1 47 1.1 48.8 0 49.7-.1 52.2-6.2 1.9-4.4 1-8.3-2.6-11.3l-3-2.5h-94l-2.9 2.9zM376.8 225.5c-3.4 1.9-4.8 4.4-4.8 8.7 0 4.1 2 7.1 5.7 8.7 2.1.8 15.5 1.1 49.1.9l46.2-.3 2.6-2.7c3.7-3.7 3.7-9.9 0-13.6l-2.6-2.7-46.8-.2c-39.8-.2-47.1 0-49.4 1.2zM378 265.1c-6.1 2.4-8 10.5-3.6 15.6l2.4 2.8 47.6.3 47.5.3 3.1-2.8c2.4-2.2 3.2-3.8 3.3-6.5.1-4.2-2.4-8.5-5.9-9.8-3.4-1.3-91.1-1.2-94.4.1zM376.8 305.6c-8.5 4.6-5.1 18.4 4.5 18.4 4.3 0 9.2-3.8 10-7.7.8-4.4-1.7-9.2-5.7-10.8-4.3-1.8-5.4-1.8-8.8.1zM416 305.1c-6.5 2.6-8.1 11-3.1 16l2.9 2.9h56l3-2.5c3.6-3 4.5-6.9 2.6-11.3-2.3-5.7-5.1-6.2-33.6-6.1-14 0-26.4.5-27.8 1zM6.3 380.2c-5.2 2.5-5.3 3.5-5.3 59.7 0 58.3 0 57.9 6.4 60.6 3 1.3 15.2 1.5 80.8 1.5 71.6 0 77.6-.1 80.8-1.8 1.9-.9 4-2.8 4.7-4.2 1.6-3.1 1.9-106.4.4-110.3-.6-1.4-2-3.5-3.2-4.6-2.3-2.1-2.4-2.1-82.3-2-54.3 0-80.8.4-82.3 1.1zM155 440.5V482H21v-83h134v41.5zM192.9 381.9l-2.9 2.9v110.9l2.6 2.6c1.4 1.5 4 2.9 5.8 3.2 1.7.3 71.6.4 155.3.3l152.3-.3 2.7-2.8 2.8-2.7.3-53.8c.1-29.5 0-54.8-.3-56-.3-1.3-1.8-3.5-3.2-4.8l-2.6-2.4H195.8l-2.9 2.9zM492 440.5V482H210v-83h282v41.5z" />
                  <path d="M240.3 431.9c-8.3 5.1-4.5 18.1 5.3 18.1 5 0 9.4-4.5 9.4-9.5 0-4.7-1.3-7.1-5-9-3.8-2-5.8-1.9-9.7.4zM279.3 431.5c-6.4 2.7-7.6 11-2.4 15.7l3.1 2.8h175.2l2.9-2.9c5.2-5.3 3.3-13.5-3.8-16.2-1.4-.5-36.7-.9-87.1-.9-69.7.1-85.3.3-87.9 1.5z" />
                </svg>
                    <Menu
                      menuname="UI UX"
                      color={color}
                      selected={selectedMenu === "top-ui-ux-design-agency"}
                      onClick={() => handleMenuClick("top-ui-ux-design-agency")}
                    />
                  </Link>
                </div>
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "My Proj" ? "selected" : ""
                    }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href=""className="flex items-center">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 512 512"
                  fill="black"
                  className="mr-2"

                >
                  <path d="M96 17.3c-4.9 1.6-13.3 10.2-14.8 15.3-.9 3.2-1.2 35.2-1.2 135.3v131.2l2.5 2.4c3.2 3.3 7.8 3.3 11 0l2.5-2.4V96h320v203.1l2.5 2.4c3.2 3.3 7.8 3.3 11 0l2.5-2.4V167.9c0-100.1-.3-132.1-1.2-135.3-1.6-5.5-9.9-13.8-15.4-15.4-5.6-1.6-314.1-1.6-319.4.1zm317.5 17.2c2.5 2.4 2.5 2.4 2.5 24V80H96V58.5c0-21.6 0-21.6 2.5-24l2.4-2.5h310.2l2.4 2.5z" />
                  <path d="M114.5 50.5c-5 4.9-1.5 13.5 5.5 13.5 4.1 0 8-3.9 8-8s-3.9-8-8-8c-1.9 0-4 .9-5.5 2.5zM146.5 50.5c-5 4.9-1.5 13.5 5.5 13.5 4.1 0 8-3.9 8-8s-3.9-8-8-8c-1.9 0-4 .9-5.5 2.5zM178.5 50.5c-5 4.9-1.5 13.5 5.5 13.5 4.1 0 8-3.9 8-8s-3.9-8-8-8c-1.9 0-4 .9-5.5 2.5zM290.5 50.5c-1.6 1.5-2.5 3.6-2.5 5.5s.9 4 2.5 5.5l2.4 2.5h50.9c48.5 0 51.1-.1 53.3-1.9 3.3-2.7 3.3-9.5 0-12.2-2.2-1.8-4.8-1.9-53.3-1.9h-50.9l-2.4 2.5zM32 65.3c-4.9 1.6-13.3 10.2-14.8 15.3-1.7 5.8-1.8 296.8 0 302.5 1.6 5.5 7.3 11.8 13.2 14.5l5.1 2.4h441l5.1-2.4c5.9-2.7 11.6-9 13.2-14.5 1.8-5.7 1.7-296.7 0-302.5-1.6-5.5-9.9-13.8-15.4-15.4-2.3-.7-9.2-1.2-15.3-1.2-10.5 0-11.3.1-13.6 2.5-3.3 3.2-3.3 7.8 0 11 2.3 2.4 3.1 2.5 13.5 2.5s11.2.1 13.5 2.5l2.5 2.4V320H32V84.9l2.5-2.4C36.8 80.1 37.6 80 48 80s11.2-.1 13.5-2.5c3.3-3.2 3.3-7.8 0-11-2.3-2.4-2.9-2.5-14.2-2.4-6.5.1-13.4.6-15.3 1.2zm448 292.2c0 21.6 0 21.6-2.5 24l-2.4 2.5H36.9l-2.4-2.5c-2.5-2.4-2.5-2.4-2.5-24V336h448v21.5z" />
                  <path d="M236.3 353.2c-1.2.6-2.7 2.3-3.4 3.9-1.5 3.7.4 8.7 3.8 10 3.3 1.2 37.9 1.2 40.3-.1 2.5-1.3 4.1-6.5 3-9.4-1.9-5.1-4-5.6-23.5-5.5-10.4 0-18.9.5-20.2 1.1zM275.1 129.7c-1.6 1.3-8.6 21.4-26.6 75.3-13.5 40.4-24.5 74.5-24.5 75.8 0 5.7 8.3 9.2 12.9 5.4 1.6-1.2 8.6-21.3 26.6-75.2 13.5-40.4 24.5-74.5 24.5-75.8 0-5.7-8.3-9.2-12.9-5.5zM163.3 181.5c-14.4 12.1-26.2 22.6-26.7 24-.6 1.6-.6 3.4 0 5 .5 1.4 12.1 11.8 26.7 24 22 18.2 26.4 21.5 29.1 21.5 4.4 0 7.6-3.5 7.6-8.2 0-3.5-.8-4.3-21.2-21.3-11.7-9.8-21.3-18.1-21.3-18.5 0-.4 8.8-8 19.5-16.9 10.7-8.9 20.3-17.1 21.3-18.3 2.5-2.9 2.2-7.4-.8-10.3-5-5.1-6.2-4.4-34.2 19zM314.5 162.5c-2.7 2.6-3.3 7.1-1.2 9.7.6.9 10.2 9.1 21.2 18.3 11 9.1 20 17 20 17.5s-9 8.4-20 17.5c-11 9.2-20.6 17.4-21.2 18.3-2.1 2.6-1.5 7.1 1.2 9.7 4.9 5 6.1 4.4 34.5-19.1 16.6-13.8 26.3-22.6 26.6-24 .4-1.3.4-3.5 0-4.7-.3-1.5-10.1-10.3-26.6-24-28.4-23.6-29.5-24.3-34.5-19.2zM206.9 416.9c-1.4 1.1-4.3 5-6.5 8.7-2.1 3.7-7.2 10.3-11.3 14.6l-7.3 7.8h-8.5c-4.7 0-10.3.5-12.4 1.2-5.5 1.6-11.8 7.3-14.5 13.2-2.1 4.4-2.4 6.6-2.4 16.9 0 11.2.1 11.9 2.5 14.2l2.4 2.5h214.2l2.4-2.5c2.4-2.3 2.5-3.1 2.5-13.6 0-14.4-1.1-18.1-7.5-24.4-6-6.1-10.1-7.5-21.4-7.5h-8.2l-5.1-4.8c-6-5.5-12.7-14.1-15.6-19.7-2.7-5.4-5.6-7.8-9.4-7.8-3.5 0-7.8 4-7.8 7.4 0 2.9 4.3 10.9 9.9 18.3l5 6.6H204.1l5-6.6c5.6-7.4 9.9-15.4 9.9-18.3 0-2.7-3.9-6.9-7-7.6-1.8-.4-3.4 0-5.1 1.4zm142.6 49.6c2.1 2 2.5 3.4 2.5 8v5.5H160v-5.5c0-4.6.4-6 2.5-8l2.4-2.5h182.2l2.4 2.5z" />
                </svg>
                    <Menu
                      menuname="Web Development"
                      color={color}
                      selected={selectedMenu === "top-ui-ux-design-agency"}
                      onClick={() => handleMenuClick("top-ui-ux-design-agency")}
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className=""
          onMouseEnter={handleProjectsHover}
          onMouseLeave={handleProjectsLeave}
        >
          <div className="cursor-pointer projects-dropdown text-base font-normal text-black leading-[120%]">
            <div className="flex gap-1 items-center">
              <span className={selectedMenu === "Projects" ? "selected" : ""} style={{ color: navItemColor }}>
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
              className={`selected-border ${selectedMenu === "Projects" ? "selected" : ""
                }`}
            />
            {isProjectsHovered && (
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "Resources" ? "selected" : ""
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
              <span className={selectedMenu === "Projects" ? "selected" : ""} style={{ color: navItemColor }}>
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
              className={`selected-border ${selectedMenu === "Projects" ? "selected" : ""
                }`}
            />
            {isCompanyHovered && (
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "My Proj" ? "selected" : ""
                    }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href="/about-us">
                    <Menu
                      menuname="About Us"
                      color={color}
                      selected={selectedMenu === "about-us"}
                      onClick={() => handleMenuClick("about-us")}
                    />
                  </Link>
                </div>
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "My Proj" ? "selected" : ""
                    }`}
                  onClick={() => handleMenuClick("services")}
                >
                  <Link href="/contact-us">
                    <Menu
                      menuname="Contact Us"
                      color={color}
                      selected={selectedMenu === "contact-us"}
                      onClick={() => handleMenuClick("contact-us")}
                    />
                  </Link>
                </div>
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${selectedMenu === "My Proj" ? "selected" : ""
                    }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href="/career">
                    <Menu
                      menuname="Career"
                      color={color}
                      selected={selectedMenu === "Career"}
                      onClick={() => handleMenuClick("Career")}
                    />
                  </Link>
                </div>
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
