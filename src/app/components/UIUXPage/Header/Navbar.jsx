import Link from "next/link";
import React from "react";
import Menu from "../../common/Header/Menu";
import RippleEffect from "../../common/RippleEffect";
import Button from "../../common/Button";
import MenuDropdown from "../../common/Header/MenuDropdown";

const Navbar = () => {
  return (
    <menu style={{ fontFamily: "Poppins" }}>
      <div className="nav-bar flex gap-10 items-center">
        <div>
          <Link href="/landingpage">
            <Menu menuname="Mobile App" color="#fff" />
          </Link>
        </div>
        <div>
          <Link href="/uiuxpage">
            <Menu menuname="UI UX" color="#fff" />
          </Link>
        </div>
        <div>
          <Link href="/aboutus">
            <Menu menuname="About Us" color="#fff" />
          </Link>
        </div>
        <div>
          <Link href="/contactus">
            <Menu menuname="Contact Us" color="#fff" />
          </Link>
        </div>
        <div>
          <Link href="/landingpage">
            <Menu menuname="Career" color="#fff" />
          </Link>
        </div>
        <div>
          <Link href="/contactus">
            <RippleEffect>
              <Button
                fontFamily="Poppins"
                fontWeight="500"
                padding="7px 22px"
                Color="#FFFFFF"
                fontSize="12px"
                backgroundColor="#DD4242"
                name="GET IN TOUCH"
              />
            </RippleEffect>
          </Link>
        </div>
      </div>
      <MenuDropdown svgcolor={"#fff"} />
    </menu>
  );
};

export default Navbar;
