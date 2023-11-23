import React from "react";
import { GoChevronDown } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";
import ServicesDropdown from "./ServicesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import SocialMediaDropdown from "./SocialMediaDropdown";
import Button from "../Button";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";

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
              <li className="my-2.5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link inline-block">
                App Development
              </li>
            </Link>
            <Link href="/top-ui-ux-design-agency">
              <li className="my-2.5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link inline-block">
                UI/UX Design
              </li>
            </Link>
          </ul>
          <h1 className="mt-2.5  Montserrat text-white font-semibold pb-4 text-base leading-[24px] ">
            Our Product
          </h1>
          <div className="mt-2">
            <span className="text-[#E6E6E6] pr-2">golegal.ly</span>
            <span className="font-Poppins bg-[#3A9AFC3] text-xs	rounded-lg py-[3px] break-line px-1 text-[#E6E6E6] text-base border border-red-500">
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
              <li className="my-2.5 inline-block Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                Privacy Policy
              </li>
            </Link>
            <Link href="/terms-condition">
              <li className="my-2.5 inline-block Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
                Term & Conditions
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
              <li className="my-2.5 inline-block Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link">
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
                <div className="text-black bg-white w-[26px] h-[26px] rounded-full">
                  <div className="flex justify-center items-center w-full h-full">
                    {/* <AiFillInstagram size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 512 512"
                    >
                      <path d="M110 1.5C81.3 5.8 58.6 17.2 37.9 37.9 16.6 59.2 5 83 1.1 112.9c-1.5 11.7-1.5 274.5 0 286.2 3.9 29.9 15.5 53.7 36.8 75 21.3 21.3 45.1 32.9 75 36.8 11.7 1.5 274.5 1.5 286.2 0 29.9-3.9 53.7-15.5 75-36.8 21.3-21.3 32.9-45.1 36.8-75 1.5-11.7 1.5-274.5 0-286.2-3.9-29.9-15.5-53.7-36.8-75C452.8 16.6 429 5 399.1 1.1 386.3-.6 121.3-.2 110 1.5zm299.7 45.2c11.3 3.9 13.8 5.2 23.1 11.6 14.8 10.2 26.5 26.1 32.4 44l3.3 10.2V256c0 137.3-.1 143.8-1.9 149.5-6.7 21.7-18.3 37.8-35.4 49.4-7.4 5-13.8 7.9-24.2 11.2l-7.5 2.4h-287l-10.2-3.3c-28-9.2-47.6-29.7-56.9-59.7-1.8-5.7-1.9-12.2-1.9-149.5s.1-143.8 1.9-149.5c7.1-22.8 19.5-39.4 38-51 7.8-4.9 21.2-10.1 29.5-11.5 2.5-.4 68.3-.7 146.1-.6l141.5.1 9.2 3.2z" />
                      <path d="M388 86.4c-7.1 1.6-11.2 3.8-16 8.7-6.5 6.7-8.5 12-8.5 22.4 0 7.8.4 9.7 2.7 14 5.5 10.4 14.8 16.5 26.4 17.3 8.5.5 13-.7 20.1-5.5 19.9-13.4 17.6-43.9-4-54.2-7.4-3.5-13.3-4.3-20.7-2.7zM239.6 129.1c-48.3 6.7-89.5 40.3-104.5 85.5-5.1 15.4-6.5 24.3-6.5 41.4 0 17.1 1.4 26 6.5 41.5 12.1 36.2 43.3 67.3 79.7 79.5 15.2 5 24.2 6.4 41.2 6.4 17 0 26-1.4 41.2-6.4 36.4-12.2 67.6-43.3 79.7-79.5 5.1-15.5 6.5-24.4 6.5-41.5 0-22.4-4.3-40.7-14-59-18.5-34.7-50.3-58.6-88.9-66.5-9.6-2-31.4-2.8-40.9-1.4zm42.1 45.8c10.7 3.5 13.6 4.9 21.8 10.4 16.8 11.3 28.1 27 34.6 47.7 2 6.5 2.4 9.6 2.4 23 0 16.5-1.2 22.6-7.1 35.7-7.4 16.8-24.9 34.3-41.8 41.8-13 5.8-19.1 7-35.6 7s-22.6-1.2-35.6-7c-16.9-7.5-34.4-25-41.8-41.8-5.9-13.1-7.1-19.2-7.1-35.7 0-13.4.4-16.5 2.4-23 3.4-10.8 6.4-17.1 12.1-25.4 11.3-16.4 27.1-27.7 46.5-33.4 9.9-2.9 11.4-3.1 26.5-2.7 11.9.3 14.6.7 22.7 3.4z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2.5 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link inline-block">
                  Instagram
                </div>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/company/vadavision/"
              target="_blank"
            >
              <li className="flex gap-2 items-center">
                <div className="text-black bg-white w-[26px] h-[26px] rounded-full">
                  <div className="flex justify-center items-center w-full h-full">
                    {/* <FaLinkedinIn size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 512 512"
                    >
                      <path d="M57.5 1.9C45.4 4.9 37.5 9.5 28 19c-8.8 8.8-13.1 15.8-16.8 27.2-2.6 8.2-2.3 26.3.5 35.3 6.6 20.8 24.9 38.1 45.4 43 8.2 1.9 22.8 1.9 30.4 0 21.7-5.5 40.5-24.3 46-46 1.9-7.6 1.9-22.2 0-30.4-7.8-33-43-54.4-76-46.2zm27.7 30.9c6.2 2.7 13.4 9.5 16.6 15.7 2.3 4.4 2.7 6.2 2.7 14.5 0 11.1-2.1 16.7-9 23.5-6.8 6.9-12.4 9-23.5 9-8.3 0-10.1-.4-14.5-2.7-6.2-3.2-12.9-10.3-15.8-16.6-3.2-6.9-3-19.8.3-26.7 4.2-8.8 13.2-16.2 22.5-18.6 5-1.3 15.7-.4 20.7 1.9zM340 160.1c-13.5 2.3-29.3 7.3-42.5 13.5-.6.2-1.9-1.5-3-3.8-1.1-2.4-3.5-5.3-5.4-6.6l-3.4-2.2h-52.6c-50.7 0-52.7.1-55.9 2-1.8 1.1-4.1 3.4-5.2 5.2-2 3.3-2 5.4-2 168.4v165.1l2.3 3.4c4.7 7.1 3.3 6.9 60.7 6.9 51.5 0 51.5 0 55.4-2.3 2.1-1.2 4.7-3.8 5.7-5.7 1.8-3.3 1.9-7.8 1.9-95.2 0-64.1.3-93.3 1.1-97 4.2-19.8 23.2-34.2 42.8-32.5 16.9 1.4 29.7 11 36.3 27.5l2.3 5.7.5 95.2c.5 94.3.5 95.2 2.6 98 4.7 6.4 3.6 6.3 60.2 6.3 49 0 51.4-.1 55.1-2 2.7-1.3 4.6-3.3 6-6.4l2.2-4.4-.4-107.9c-.3-105.7-.3-108-2.4-117.1-13.3-58-53.6-99-110.3-112.4-9.8-2.3-42.5-3.4-52-1.7zm50.5 32.3c35.8 9.4 66.6 38.3 78.4 73.4 5.7 16.8 5.4 11.7 5.8 117.9l.4 98.3H409v-79.8c0-44.2-.5-83.8-1-88.9-5.1-48.8-56.7-78.3-100.5-57.4-16.2 7.7-26.2 17.6-34 33.6-7.7 15.7-7.5 13.5-7.5 108.5v84h-66V191h65.8l.3 7.9c.3 6.1.9 8.6 2.5 10.7 3.6 4.9 7 6.7 12.3 6.8 4.4.1 5.7-.5 13.7-6 23.6-16.3 40.9-21.5 68.9-21 14.5.3 18.5.7 27 3zM15.9 163.2c-1.9 1.3-4.2 3.9-5.1 5.8C9.1 172.3 9 182.4 9 336.3 9 498.5 9 500.1 11 504c1.3 2.6 3.4 4.7 6 6 3.8 1.9 5.8 2 55.2 2 57.2 0 55.8.2 60.5-6.9l2.3-3.4V336.8c0-179.2.4-167.3-5.5-172.8l-2.7-2.5-53.7-.3-53.7-.2-3.5 2.2zM105 336.5V482H39V191h66v145.5z" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2.5 mb-3 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link inline-block">
                  LinkedIn
                </div>
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090359760736&mibextid=ZbWKwL"
              target="_blank"
            >
              <li className="flex gap-2 items-center">
                <div className="text-black bg-white w-[26px] h-[26px] rounded-full">
                  <div className="flex justify-center items-center w-full h-full">
                    {/* <BiLogoFacebook size={20} /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 512 512"
                    >
                      <path d="M262.3 1.5C241.2 5.3 224 14.7 209 30.6c-11.4 12.1-18.4 24.8-23.2 42-2.1 7.6-2.2 9.8-2.6 64.1l-.3 56.2-33.9.3c-32.2.3-34 .4-36.6 2.3-1.5 1.1-3.5 3.6-4.5 5.5-1.8 3.2-1.9 6.8-1.9 55s.1 51.8 1.9 55c1 1.9 3 4.4 4.5 5.5 2.6 1.9 4.4 2 36.7 2.3l33.9.3v90.1c0 88.1 0 90.3 2 94.3 1.3 2.7 3.4 4.9 5.9 6.3l4 2.3 52.5-.3c51.5-.3 52.5-.3 55.3-2.4 1.5-1.2 3.7-3.6 4.8-5.5 2-3.3 2-5.5 2.3-94.2l.3-90.7h32.8c32.4 0 32.8 0 36.1-2.2 1.8-1.3 4.1-3.4 5.1-4.8 2.3-3.3 22.3-103.1 21.5-107.3-.8-4.1-4-8.2-8-10.1-3-1.4-8.7-1.6-45.5-1.6H310v-67H395.7l3.4-2.3c7-4.7 6.9-3.4 6.9-60.1 0-49.8 0-51.1-2.1-55.3-1.4-3-3.3-5-6-6.3-3.7-1.9-6.1-2-66.1-1.9-46.4.1-64.1.4-69.5 1.4zM376 63v32.9l-42.7.3c-47.5.3-47.2.3-51.3 7.1-1.9 3.1-2 5.4-2 56 0 58.1-.2 56.3 6.2 60.9l3.3 2.3 41.3.3c38.1.3 41.2.4 41.2 2-.1.9-2.9 15.6-6.3 32.7l-6.3 31-34.9.5c-34.7.5-35 .5-38.3 2.8-6.6 4.7-6.2-1.1-6.2 99.2v91h-67V300.8l-2.2-3.9c-1.4-2.5-3.7-4.6-6.3-5.9-3.9-1.9-6.2-2-36.3-2H136v-66h32.2c30 0 32.4-.1 36.3-2 2.2-1.1 4.9-3.4 6-5.2 1.9-3.2 2-5.8 2.5-67.8l.5-64.5 2.7-8.1c7.5-22 24.7-37.9 47.3-43.5 6.2-1.6 13.1-1.8 59.8-1.8L376 30v33z" />
                    </svg>
                  </div>
                </div>
                <div className="my-2.5 Montserrat font-normal text-[#E6E6E6] leading-[32px] text-base footer-link inline-block">
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
