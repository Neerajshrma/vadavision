import React, { useEffect } from "react";
import FooterLinks from "./FooterLinks";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import Obfuscate from 'react-obfuscate';
 
const Footer = () => {
 
  return (
    <div className="bg-[#111319] pl-40 pr-6 responsive-width py-20 mobile-responisve">
      <div className="flex gap-2 flex-wrap justify-between">
        <div className="w-[42%] footer">
          <div className="flex gap-2 items-center cursor-pointer">
            <div>
              <svg
                width="38"
                height="25"
                viewBox="0 0 50 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.0631 5.50049L34.4927 8.56827L39.2315 13.7695L40.3191 12.4727H49.9826V5.50049H37.0631Z"
                  fill="#DD4242"
                />
                <path
                  d="M25.6752 19.0957H21.5391C20.3087 16.8804 17.9456 15.3774 15.2371 15.3774C11.2646 15.3774 8.03271 18.6093 8.03271 22.5818C8.03271 26.5544 11.2647 29.7862 15.2371 29.7862C17.9457 29.7862 20.3088 28.283 21.5391 26.0679H28.9302L31.7014 22.7591L26.9633 17.5578L25.6752 19.0957ZM15.237 25.1381C13.8274 25.1381 12.6807 23.9913 12.6807 22.5818C12.6807 21.1722 13.8274 20.0256 15.237 20.0256C16.6465 20.0256 17.7932 21.1722 17.7932 22.5818C17.7932 23.9913 16.6465 25.1381 15.237 25.1381Z"
                  fill="#DD4242"
                />
                <path
                  d="M40.9349 19.0663L27.1212 3.90237H13.5082C12.2733 1.7031 9.91946 0.213135 7.22295 0.213135C3.25041 0.213019 0.0185547 3.44499 0.0185547 7.41753C0.0185547 11.3901 3.25053 14.6219 7.22295 14.6219C9.9434 14.6219 12.316 13.1058 13.5418 10.8746H24.0411L37.8574 26.0415L49.9818 26.0296L49.975 19.0574L40.9349 19.0663ZM7.22307 9.97378C5.81352 9.97378 4.66682 8.8272 4.66682 7.41753C4.66682 6.0081 5.81352 4.86128 7.22307 4.86128C8.63262 4.86128 9.77932 6.0081 9.77932 7.41753C9.77932 8.82708 8.6325 9.97378 7.22307 9.97378Z"
                  fill="#DD4242"
                />
              </svg>
            </div>
            <div>
              <h1
                style={{ fontFamily: "Source Sans Pro" }}
                className="text-3xl text-[#DD4242] leading-[120%] font-bold"
              >
                Vada vision!
              </h1>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="Montserrat capitallize text-white text-5xl font-semibold leading-[68px] heading">
              {"Let'"}s Innovate, Create Fresh, New Experiences Together
            </h1>
          </div>
        </div>
        <div className="w-[55%] footer-links">
          <FooterLinks />
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-1">
            <span>
            <svg width="23" height="15" viewBox="0 0 513 342" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_301_989)">
              <path d="M17.3 -0.00585938H495.7V341.994H17.3V-0.00585938Z" fill="#181A93"/>
              <path d="M0 -0.00585938H513V113.994H0V-0.00585938Z" fill="#FFA44A"/>
              <path d="M0 227.994H513V341.994H0V227.994Z" fill="#1A9F0B"/>
              <path d="M0 113.994H513V227.994H0V113.994Z" fill="white"/>
              <path d="M256.5 205.194C275.388 205.194 290.7 189.882 290.7 170.994C290.7 152.106 275.388 136.794 256.5 136.794C237.612 136.794 222.3 152.106 222.3 170.994C222.3 189.882 237.612 205.194 256.5 205.194Z" fill="white"/>
              <path d="M256.5 216.594C231.4 216.594 210.9 196.094 210.9 170.994C210.9 145.894 231.4 125.394 256.5 125.394C281.6 125.394 302.1 145.894 302.1 170.994C302.1 196.094 281.6 216.594 256.5 216.594ZM256.5 205.194C274.7 205.194 290.7 189.194 290.7 170.994C290.7 152.794 274.8 136.794 256.5 136.794C238.2 136.794 222.3 152.794 222.3 170.994C222.3 189.194 238.3 205.194 256.5 205.194Z" fill="#181A93"/>
              <path d="M256.5 193.794C269.092 193.794 279.3 183.586 279.3 170.994C279.3 158.402 269.092 148.194 256.5 148.194C243.908 148.194 233.7 158.402 233.7 170.994C233.7 183.586 243.908 193.794 256.5 193.794Z" fill="#181A93"/>
              </g>
              <defs>
              <clipPath id="clip0_301_989">
              <rect width="513" height="342" fill="white" transform="translate(0 -0.00585938)"/>
              </clipPath>
              </defs>
            </svg>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-white Montserrat text-sm">
              Vadavision Private Limited(CRN: U62099CH2023PTC045004)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-white">
              <MdOutlineLocationOn size="18px" />
            </span>
            <span className="font-medium text-white Montserrat text-sm">
              Plot 337, Phase 2 Chandigarh, India, 160002
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4V20H22V4H2ZM9.981 13.7L12 15.267L14.019 13.7L19.4 18H4.6L9.981 13.7ZM4 15.919V9.044L8.357 12.433L4 15.919ZM15.643 12.433L20 9.045V15.919L15.643 12.433ZM20 6V6.511L12 12.733L4 6.511V6H20Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="font-medium text-white Montserrat text-sm">
              <Obfuscate email="info@vadavision.ca" />
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-white">
              <HiOutlinePhone size="18px" />
            </span>
            <span className="font-medium text-white Montserrat text-sm">
              <Obfuscate tel="+91 62 8000 7001" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
