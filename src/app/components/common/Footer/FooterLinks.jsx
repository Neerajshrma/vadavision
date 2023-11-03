import React from "react";
import { GoChevronDown } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import SocialMediaDropdown from "./SocialMediaDropdown";
import Button from "../Button";
const FooterLinks = () => {
  return (
    <div>
      <div className="responsive-footer flex justify-between">
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Services
          </h1>
          <ul className="pt-3">
            {/* <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Web Development
              </li>
            </a> */}
            <Link href="/mobile-hybrid-app-development-agency">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link w-[200px]">
                App Development
              </li>
            </Link>
            <Link href="/top-ui-ux-design-agency">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                UI/UX Design
              </li>
            </Link>
          </ul>
          <h1 className="Montserrat text-white font-semibold pb-4 text-base leading-[24px]">
            Our Product
          </h1>
          <div>
            <span className="text-[#E6E6E6] pr-2">golegal.ly</span>
            <span className="font-Poppins bg-[#3A9AFC3] text-xs	rounded-lg p-[4px] text-[#E6E6E6] text-base border border-red-500">
              Coming Soon
            </span>
          </div>
        </div>
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Company
          </h1>
          <ul className="pt-3">
            <Link href="/privacy-policy">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                Privacy Policy
              </li>
            </Link>
            <Link href="/terms-condition">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                Help & Support
              </li>
            </Link>
            {/* <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Portfolio
              </li>
            </a>
            <a href="">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base">
                Blogs
              </li>
            </a> */}
            <Link href="/contact-us">
              <li className="my-5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="footer-link-width">
          <h1 className="Montserrat text-white font-semibold text-base leading-[24px]">
            Our Social Media
          </h1>
          <ul className="mt-3">
            <a href="https://www.instagram.com/vadavision/  " target="_blank">
              <li className="flex gap-2 items-center">
                <div className="text-black bg-white p-[3px] rounded-full">
                  <AiFillInstagram size={20} />
                </div>
                <div className="mt-4 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                  Instagram
                </div>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/vadavision/"
              target="_blank"
            >
              <li className="flex gap-2 items-center">
                <div className="text-black bg-white p-[3px] rounded-full">
                  <BiLogoLinkedin size={20} />
                </div>
                <div className="mt-3 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                  LinkedIn
                </div>
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090359760736&mibextid=ZbWKwL"
              target="_blank"
            >
              <li className="flex gap-2 items-center">
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
      </div>
      <div className="mobile-footer">
        <div>
          <ServicesDropdown />
        </div>
        <div>
          <CompanyDropdown />
        </div>
        <div>
          <SocialMediaDropdown />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
