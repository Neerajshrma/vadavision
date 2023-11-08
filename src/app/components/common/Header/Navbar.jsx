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

const Navbar = ({ color, backgroundColor, svgcolor,navItemColor,downdownColor }) => {
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
              <span className={selectedMenu === "Projects" ? "selected" : ""} style={ {color:navItemColor}}>
                Services
              </span>
              <span className="mt-[2px]"style={ {color:downdownColor}}>
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
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "services" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("services")}
                >
                  <Link href="/mobile-hybrid-app-development-agency">
                    <Menu
                      menuname="Mobile App"
                      color={color}
                      selected={
                        selectedMenu === "mobile-hybrid-app-development-agency"
                      }
                      onClick={() =>
                        handleMenuClick("mobile-hybrid-app-development-agency")
                      }
                    />
                  </Link>
                </div>
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "uiux" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href="/top-ui-ux-design-agency">
                    <Menu
                      menuname="UI UX"
                      color={color}
                      selected={selectedMenu === "top-ui-ux-design-agency"}
                      onClick={() => handleMenuClick("top-ui-ux-design-agency")}
                    />
                  </Link>
                </div>
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
                  }`}
                  onClick={() => handleMenuClick("My Proj")}
                >
                  <Link href="">
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
              <span className={selectedMenu === "Projects" ? "selected" : ""}style={ {color:navItemColor}}>
                Products
              </span>
              <span className="mt-[2px]"style={ {color:downdownColor}}>
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
              <span className={selectedMenu === "Projects" ? "selected" : ""}style={ {color:navItemColor}}>
                Company
              </span>
              <span className="mt-[2px]"style={ {color:downdownColor}}>
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
              <div className="bg-[#f7f7f7] dropdown-content absolute top-5 left-0 z-10 p-2">
                <div
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
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
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
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
                  className={`p-4 text-[#8d9dab] hover:bg-white hover:text-black hover:rounded-lg text-normal ${
                    selectedMenu === "My Proj" ? "selected" : ""
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
