import React, { useEffect } from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { AiOutlineShop } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuCalculator } from "react-icons/lu";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Industries = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 500,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="mt-10"data-aos='fade-right'>
      <div className="flex flex-wrap gap-8 industries-we-work" >
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <MdContentPasteSearch size={24} />
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                Content Generation
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              Upgrade your content with our tech expertise! We leverage AI and
              OpenAI API to craft smart, engaging, and automated content
              solutions tailored just for your business.
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <TiGroup size={24} />
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                Human Resources
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              We{"'"}re IT experts creating customized HR websites. Our focus?
              User-friendly designs, secure platforms, and easy communication
              tools. Trust us to streamline your HR processes!
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <AiOutlineShop size={24} />
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                Retail
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              Improve your online store with us! Our IT team creates easy,
              secure, and successful retail websites, ensuring seamless shopping
              experiences.
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <BiSolidShoppingBags size={24} />
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                E-commerce
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              Boost Your Online Shop with Us! We create easy and secure
              eCommerce websites. Enjoy smooth shopping and grow your online
              business with our help.
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24.000000pt"
                height="24.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#DD4242"
                  stroke="#DD4242"
                >
                  <path
                    d="M1345 5106 c-81 -21 -144 -56 -212 -119 -84 -79 -130 -171 -143 -289
                    -6 -48 -10 -603 -10 -1335 l0 -1253 -77 0 c-95 0 -160 -27 -215 -88 -50 -55
                    -70 -105 -71 -177 0 -61 26 -139 60 -177 15 -17 15 -19 0 -36 -33 -36 -60
                    -116 -60 -174 0 -56 -1 -58 -28 -58 -15 0 -58 -9 -95 -21 -232 -71 -404 -251
                    -464 -485 -24 -94 -26 -241 -4 -334 58 -248 272 -453 526 -504 66 -14 185 -16
                    806 -16 816 0 793 -2 874 70 105 92 125 249 44 358 l-24 33 34 56 c19 31 34
                    65 34 74 0 40 11 49 60 49 l47 0 6 -93 c14 -222 141 -416 338 -515 144 -73
                    128 -72 1005 -72 745 0 784 1 858 20 226 57 405 235 461 455 13 51 15 221 15
                    1248 0 1308 3 1242 -61 1371 -79 159 -205 268 -373 323 -76 24 -96 26 -318 31
                    l-238 4 0 382 c0 521 0 520 -208 741 -70 75 -189 202 -265 283 -145 155 -208
                    205 -297 237 -53 19 -86 20 -1005 22 -737 1 -961 -1 -1000 -11z m1945 -480 l0
                    -335 26 -20 c26 -20 38 -21 329 -21 l303 0 6 -31 c3 -17 6 -197 6 -400 l0
                    -369 -467 0 c-536 -1 -575 -5 -711 -70 -69 -33 -101 -56 -166 -123 -93 -94
                    -137 -168 -166 -283 -19 -74 -20 -114 -20 -1106 l0 -1028 -74 0 c-66 0 -75 3
                    -89 23 -13 20 -12 25 10 57 35 52 56 133 48 188 -7 46 -36 114 -61 142 -11 13
                    -8 22 16 58 60 90 60 217 -1 301 l-29 41 29 41 c100 138 28 351 -138 407 -24
                    9 -177 12 -513 12 l-478 0 2 1318 3 1317 23 43 c43 80 122 142 207 163 17 4
                    452 7 968 8 l937 1 0 -334z m368 -12 c100 -106 182 -195 182 -198 0 -3 -88 -6
                    -195 -6 l-195 0 0 212 c0 178 2 210 13 198 8 -8 95 -101 195 -206z m891 -1324
                    c184 -24 343 -160 395 -339 14 -49 16 -184 16 -1227 0 -1141 -1 -1174 -20
                    -1236 -51 -167 -187 -290 -358 -327 -69 -14 -1535 -16 -1613 -1 -159 29 -304
                    153 -363 308 -21 57 -21 58 -24 1227 -2 790 1 1186 8 1221 40 194 201 344 400
                    373 78 12 1469 12 1559 1z m-2432 -1360 c66 -40 62 -136 -7 -183 -22 -16 -79
                    -17 -643 -17 l-619 0 -34 34 c-28 28 -34 41 -34 78 0 44 18 76 55 96 14 8 207
                    11 635 12 592 0 616 -1 647 -20z m-24 -369 c60 -23 87 -87 63 -146 -28 -66
                    -27 -66 -503 -62 -416 3 -430 4 -498 26 -57 19 -99 24 -222 28 l-153 5 0 43
                    c0 46 27 90 64 105 29 12 1218 12 1249 1z m-953 -333 c374 -136 478 -596 199
                    -880 -295 -301 -807 -146 -895 272 -59 279 118 552 403 625 81 21 210 13 293
                    -17z m-704 -73 c-25 -30 -50 -64 -56 -75 -8 -16 -21 -20 -57 -20 l-47 0 44 46
                    c40 41 132 104 153 104 4 0 -13 -25 -37 -55z m1684 10 c13 -11 29 -35 37 -53
                    18 -42 4 -92 -34 -122 -24 -19 -40 -20 -273 -20 l-246 0 -23 50 c-12 28 -43
                    77 -67 110 l-45 61 315 -3 c298 -3 315 -4 336 -23z m-1825 -307 c-4 -29 -9
                    -56 -12 -60 -2 -5 -31 -8 -64 -8 l-60 0 7 38 c14 78 18 82 80 82 l56 0 -7 -52z
                    m1822 -74 c15 -12 34 -37 42 -57 12 -32 11 -40 -5 -74 -33 -67 -58 -73 -303
                    -73 l-214 0 7 53 c3 28 6 80 6 115 l0 63 219 -3 c205 -3 221 -4 248 -24z
                    m-1827 -174 c4 -14 10 -42 14 -62 l7 -38 -56 0 c-51 0 -56 2 -66 28 -6 15 -13
                    44 -16 65 l-6 38 58 -3 c53 -3 59 -5 65 -28z m1829 -206 c31 -22 52 -75 45
                    -113 -3 -16 -19 -42 -36 -58 l-29 -28 -347 -3 -347 -3 52 53 c28 29 67 79 87
                    111 l37 57 257 0 c222 0 261 -2 281 -16z m-1718 -65 c6 -12 30 -42 53 -67 l41
                    -45 -60 32 c-55 29 -125 83 -125 96 0 3 18 5 40 5 30 0 42 -5 51 -21z"
                  />
                  <path
                    d="M1585 4065 c-14 -13 -25 -36 -25 -50 0 -14 11 -37 25 -50 l24 -25
                    696 0 696 0 24 25 c14 13 25 36 25 50 0 14 -11 37 -25 50 l-24 25 -696 0 -696
                    0 -24 -25z"
                  />
                  <path
                    d="M3225 4065 c-14 -13 -25 -36 -25 -50 0 -14 11 -37 25 -50 23 -24 30
                    -25 145 -25 115 0 122 1 145 25 14 13 25 36 25 50 0 14 -11 37 -25 50 -23 24
                    -30 25 -145 25 -115 0 -122 -1 -145 -25z"
                  />
                  <path
                    d="M1610 3707 c-13 -7 -31 -25 -40 -40 -13 -24 -13 -30 0 -54 25 -44 54
                    -53 183 -53 135 0 182 13 193 54 11 44 -4 76 -41 92 -44 18 -259 19 -295 1z"
                  />
                  <path
                    d="M2163 3713 c-27 -5 -63 -48 -63 -74 0 -10 11 -31 24 -46 l24 -28 656
                    -3 c556 -2 661 0 690 12 38 16 53 48 42 92 -14 54 -18 54 -713 53 -351 -1
                    -648 -4 -660 -6z"
                  />
                  <path
                    d="M1883 3438 c-25 -12 -41 -47 -45 -98 -3 -30 -8 -36 -38 -44 -53 -15
                    -124 -92 -138 -148 -31 -121 2 -223 92 -284 19 -13 69 -37 113 -54 159 -64
                    193 -96 193 -190 0 -99 -48 -143 -155 -143 -68 0 -107 16 -163 69 -43 41 -55
                    42 -87 9 -54 -53 -17 -126 90 -176 33 -16 67 -29 76 -29 12 0 18 -13 22 -47
                    12 -111 132 -112 144 -1 5 43 8 46 45 57 49 15 112 71 141 125 18 34 22 57 22
                    141 0 84 -4 107 -22 140 -42 78 -94 114 -250 174 -100 39 -133 72 -133 135 0
                    107 122 148 266 90 60 -24 67 -25 89 -10 28 18 39 48 31 82 -7 28 -63 59 -136
                    75 -46 10 -50 13 -50 39 0 41 -18 76 -47 89 -28 13 -31 13 -60 -1z"
                  />
                  <path
                    d="M2955 3101 c-51 -23 -118 -98 -133 -149 -17 -55 -15 -395 2 -443 20
                    -56 61 -103 118 -135 l53 -29 188 0 c186 0 189 0 208 24 25 30 24 62 -1 94
                    -20 26 -21 26 -196 29 l-176 3 -29 33 -29 32 0 176 0 176 29 29 29 29 752 0
                    752 0 29 -29 29 -29 0 -179 c0 -168 -1 -181 -21 -202 -11 -12 -32 -26 -46 -32
                    -14 -5 -210 -9 -453 -9 -401 0 -429 -1 -451 -18 -33 -27 -30 -78 5 -109 l27
                    -23 433 0 c477 0 498 2 569 61 21 17 50 54 65 83 27 50 27 54 27 241 0 131 -4
                    201 -13 227 -22 62 -67 114 -123 142 l-53 26 -775 0 c-731 0 -778 -2 -816 -19z"
                  />
                  <path
                    d="M2910 2199 c-14 -6 -36 -20 -48 -32 -47 -44 -52 -66 -52 -244 0 -189
                    8 -218 70 -260 31 -22 43 -23 209 -23 202 0 229 8 269 76 21 37 22 48 20 216
                    -3 193 -6 203 -72 252 -25 19 -43 21 -199 23 -101 1 -182 -2 -197 -8z m320
                    -274 l0 -135 -135 0 -135 0 0 135 0 135 135 0 135 0 0 -135z"
                  />
                  <path
                    d="M3573 2189 c-24 -12 -52 -37 -65 -57 -22 -35 -23 -48 -23 -207 0
                    -191 8 -217 75 -262 31 -22 43 -23 210 -23 167 0 179 1 210 23 70 47 75 61 78
                    239 4 187 -6 230 -66 276 -35 27 -37 27 -206 30 -158 2 -174 1 -213 -19z m335
                    -266 l3 -133 -136 0 -135 0 0 135 0 136 133 -3 132 -3 3 -132z"
                  />
                  <path
                    d="M4265 2196 c-37 -16 -70 -52 -84 -89 -6 -16 -11 -98 -11 -184 0 -137
                    3 -162 20 -197 38 -77 51 -81 260 -84 171 -2 187 -1 218 18 18 11 41 34 52 52
                    19 31 20 47 18 218 -3 209 -7 222 -84 260 -35 18 -60 20 -200 20 -110 -1 -168
                    -5 -189 -14z m325 -271 l0 -135 -135 0 -135 0 0 135 0 135 135 0 135 0 0 -135z"
                  />
                  <path
                    d="M2917 1526 c-21 -8 -47 -22 -59 -33 -43 -39 -48 -63 -48 -246 0 -164
                    1 -176 23 -207 47 -71 60 -75 245 -78 158 -3 169 -2 211 20 83 43 86 53 86
                    266 0 180 -1 188 -23 220 -42 59 -70 66 -242 69 -114 2 -165 -1 -193 -11z
                    m313 -281 l0 -135 -135 0 -135 0 0 135 0 135 135 0 135 0 0 -135z"
                  />
                  <path
                    d="M3597 1526 c-90 -33 -109 -74 -115 -241 -6 -165 7 -230 52 -274 45
                    -44 80 -51 246 -51 131 0 150 2 190 23 33 16 51 34 68 67 20 40 22 58 22 199
                    0 179 -13 223 -78 263 -34 21 -50 23 -192 26 -114 1 -165 -2 -193 -12z m311
                    -278 l-3 -133 -132 -3 -133 -3 0 136 0 135 135 0 136 0 -3 -132z"
                  />
                  <path
                    d="M4345 1536 c-5 -2 -22 -7 -37 -10 -39 -9 -98 -64 -119 -111 -17 -37
                    -19 -76 -19 -481 l0 -440 26 -52 c30 -61 94 -108 160 -118 25 -3 86 -4 137 -2
                    130 6 195 43 232 130 13 32 15 104 15 488 0 423 -1 453 -19 488 -42 83 -93
                    105 -246 109 -66 1 -124 1 -130 -1z m233 -168 c19 -19 17 -847 -2 -874 -12
                    -16 -29 -20 -110 -22 -91 -4 -96 -3 -121 22 l-25 25 0 419 c0 312 3 421 12
                    430 8 8 50 12 123 12 73 0 115 -4 123 -12z"
                  />
                  <path
                    d="M2931 891 c-46 -12 -83 -41 -103 -82 -15 -28 -18 -62 -18 -205 0
                  -161 1 -173 23 -204 49 -72 58 -75 261 -75 l183 0 37 29 c61 46 68 74 64 270
                  -3 160 -4 173 -26 204 -41 57 -70 65 -237 68 -82 2 -165 -1 -184 -5z m297
                  -283 l-3 -133 -132 -3 -133 -3 0 136 0 135 135 0 136 0 -3 -132z"
                  />
                  <path
                    d="M3611 891 c-44 -12 -81 -40 -105 -81 -16 -26 -21 -58 -24 -146 -7
                    -171 3 -238 41 -281 49 -56 77 -63 250 -63 139 0 157 2 197 22 33 17 51 35 68
                    68 20 40 22 58 22 199 0 177 -12 217 -76 261 -34 23 -46 24 -188 27 -83 1
                    -166 -2 -185 -6z m297 -283 l-3 -133 -132 -3 -133 -3 0 136 0 135 135 0 136 0
                    -3 -132z"
                  />
                  <path
                    d="M935 1118 c-28 -15 -45 -38 -45 -62 0 -14 -11 -26 -31 -35 -16 -7
                    -42 -31 -57 -54 -22 -33 -27 -52 -27 -101 1 -99 38 -144 155 -190 75 -29 90
                    -43 90 -81 0 -61 -63 -74 -125 -25 -45 36 -84 38 -113 7 -42 -45 -21 -106 51
                    -147 29 -16 55 -41 65 -61 33 -64 117 -59 136 8 7 21 20 36 38 44 95 39 130
                    200 65 298 -22 33 -45 49 -117 83 -91 43 -104 55 -93 84 6 16 38 16 149 -1 37
                    -6 43 -4 63 20 11 15 21 36 21 46 0 27 -47 77 -81 84 -22 5 -34 15 -41 36 -6
                    16 -23 36 -39 44 -33 18 -38 18 -64 3z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                Accounting
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              Level Up Your Accounting Online! We create easy-to-use websites
              for accountants. Safe, smooth, and efficient. Let{"'"}s enhance
              your accounting business online!
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
        <div className="py-5 industries-width min-w-[240px]">
          <div className="flex items-center gap-2">
            <div>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24.000000pt"
                height="24.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#DD4242"
                  stroke="none"
                >
                  <path
                    d="M2032 5023 c-10 -10 -111 -157 -222 -326 -221 -335 -227 -349 -175
                    -394 23 -20 37 -23 116 -23 l89 0 0 -510 0 -511 25 -24 c24 -25 26 -25 215
                    -25 189 0 191 0 215 25 l25 24 0 511 0 510 89 0 c80 0 93 3 117 23 51 44 45
                    58 -181 402 -115 174 -216 320 -226 326 -27 14 -65 11 -87 -8z m171 -392 c64
                    -99 117 -182 117 -185 0 -3 -20 -6 -45 -6 -55 0 -90 -15 -104 -47 -8 -16 -11
                    -179 -11 -523 l0 -500 -80 0 -80 0 0 501 c0 361 -3 506 -12 522 -19 36 -40 46
                    -96 47 -30 0 -52 4 -50 8 7 18 233 362 238 362 3 0 58 -81 123 -179z"
                  />
                  <path
                    d="M3350 4920 c-41 -14 -68 -32 -107 -74 -73 -78 -87 -129 -81 -295 4
                    -111 7 -132 30 -177 15 -27 33 -56 42 -63 14 -12 13 -16 -9 -45 -47 -62 -59
                    -104 -64 -239 l-6 -129 -70 -22 c-141 -45 -250 -112 -364 -220 -173 -167 -270
                    -374 -287 -616 -21 -287 110 -590 338 -779 94 -79 264 -164 383 -192 125 -30
                    305 -30 429 0 225 54 441 203 563 388 l36 53 302 0 c365 0 379 3 466 89 73 74
                    89 122 89 276 0 128 -16 194 -58 245 l-29 35 24 32 c48 63 63 123 63 253 0
                    134 -14 193 -61 252 -25 32 -27 38 -13 49 9 7 27 36 42 63 24 46 27 64 30 181
                    4 150 -4 192 -51 263 l-33 49 28 34 c47 55 61 122 56 267 -3 103 -8 136 -25
                    174 -29 63 -93 123 -159 148 -53 19 -74 20 -752 20 -657 -1 -700 -2 -752 -20z
                    m1467 -160 c51 -31 63 -65 63 -180 0 -113 -13 -156 -58 -187 -25 -17 -70 -18
                    -706 -21 -669 -3 -679 -2 -721 18 -61 30 -75 65 -75 187 0 116 16 159 70 185
                    32 17 88 18 715 18 657 0 681 -1 712 -20z m11 -575 c46 -39 54 -70 50 -195
                    l-3 -112 -37 -34 -38 -34 -493 0 -493 0 -52 25 c-95 46 -219 76 -335 82 l-109
                    6 4 103 c3 111 17 145 69 171 18 10 187 13 716 13 l691 0 30 -25z m-1300 -441
                    c153 -31 276 -98 387 -209 89 -88 141 -167 181 -275 114 -303 40 -621 -194
                    -842 -317 -299 -803 -283 -1099 36 -116 125 -179 257 -204 426 -44 302 109
                    615 381 777 152 91 366 125 548 87z m1289 -119 c50 -30 63 -68 63 -185 0 -115
                    -12 -149 -63 -180 -30 -18 -52 -20 -288 -20 l-256 0 -12 39 c-20 69 -98 214
                    -148 275 -26 32 -54 67 -62 78 -14 19 -7 19 360 16 351 -3 376 -4 406 -23z
                    m-7 -563 c54 -27 70 -69 70 -187 0 -118 -16 -160 -70 -187 -31 -16 -67 -18
                    -292 -18 -142 0 -258 2 -258 3 0 2 9 39 21 83 12 48 23 128 26 202 l6 122 231
                    0 c200 0 236 -2 266 -18z"
                  />
                  <path
                    d="M3344 3600 c-32 -13 -54 -50 -54 -90 0 -34 -3 -37 -43 -47 -158 -43
                    -249 -239 -176 -384 43 -86 126 -136 280 -170 52 -11 113 -29 136 -40 98 -47
                    104 -152 12 -199 -121 -62 -292 -14 -324 92 -21 67 -91 90 -135 43 -69 -74 48
                    -254 198 -302 51 -16 52 -17 52 -55 0 -78 83 -116 135 -63 18 17 25 35 25 63
                    0 37 2 40 33 46 51 10 129 51 165 87 54 54 76 105 75 179 -1 158 -101 251
                    -322 301 -53 12 -113 30 -133 40 -69 35 -83 104 -36 165 29 36 77 54 145 54
                    75 0 128 -29 163 -90 33 -56 65 -74 109 -59 59 21 67 79 23 150 -39 60 -104
                    115 -166 138 -49 18 -51 21 -54 59 -5 60 -59 102 -108 82z"
                  />
                  <path
                    d="M1818 2270 c-148 -26 -225 -64 -682 -329 -181 -105 -333 -191 -337
                    -191 -5 0 -26 31 -48 69 -65 110 -125 147 -225 139 -42 -3 -80 -20 -201 -88
                    -83 -46 -166 -100 -185 -120 -59 -60 -75 -150 -41 -225 22 -48 746 -1329 772
                    -1367 24 -34 113 -78 157 -78 57 0 100 18 257 109 187 108 210 134 210 244 0
                    67 -3 77 -47 156 -27 45 -46 86 -44 90 3 3 38 24 78 45 l74 39 564 -151 c311
                    -83 594 -158 630 -166 138 -33 312 -12 440 53 32 16 428 257 881 536 889 546
                    908 559 943 662 52 150 17 308 -88 401 -112 98 -258 115 -448 51 -121 -39
                    -148 -54 -691 -371 -398 -231 -556 -318 -581 -318 -1 0 8 33 22 73 29 88 26
                    159 -11 240 -56 122 -131 172 -323 216 -164 37 -312 83 -572 175 -114 41 -231
                    81 -260 90 -67 19 -183 27 -244 16z m291 -202 c365 -127 531 -181 661 -213 80
                    -20 162 -40 183 -46 49 -13 113 -71 128 -116 22 -68 -8 -157 -67 -194 -73 -45
                    -116 -39 -515 71 -119 33 -226 60 -239 60 -58 0 -92 -82 -52 -129 27 -32 546
                    -174 741 -202 107 -15 259 -7 331 19 83 29 117 48 605 333 248 144 492 282
                    543 307 180 85 322 91 397 16 67 -67 73 -200 12 -269 -35 -39 -1693 -1055
                    -1767 -1083 -87 -32 -203 -39 -295 -18 -38 9 -329 86 -646 171 -317 85 -584
                    155 -594 155 -10 0 -61 -25 -112 -55 -52 -30 -97 -55 -101 -55 -8 0 -435 753
                    -440 774 -3 15 713 433 810 473 156 63 239 63 417 1z m-1527 -285 c29 -33 752
                    -1318 756 -1343 5 -33 -7 -42 -160 -129 -130 -72 -157 -81 -177 -58 -26 32
                    -761 1341 -761 1357 0 9 8 24 18 32 33 30 267 157 288 158 11 0 28 -8 36 -17z"
                  />
                  <path
                    d="M458 1605 c-38 -21 -54 -75 -33 -114 44 -86 165 -58 165 38 0 32 -6
                    44 -31 65 -34 29 -61 32 -101 11z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-xl">
                Finance
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-base">
              We create user-friendly websites for finance. Enjoy safe data
              handling and efficient tools. Boost your finance business online
              with us for easy client interactions and growth.{" "}
            </p>
          </div>
          {/* <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2240/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Industries;
