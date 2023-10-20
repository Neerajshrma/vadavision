import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Link from "next/link";

const Header = ({ color, backgroundColor, svgcolor }) => {
  return (
    <header className="header px-40 mx-auto py-10 responsive-width">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <div>
            <svg
              width="40"
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
              {" "}
              <Link href="">Vada vision!</Link>
            </h1>
          </div>
        </div>
        <Navbar
          color={color}
          backgroundColor={backgroundColor}
          svgcolor={svgcolor}
        />
      </div>
    </header>
  );
};

export default Header;
