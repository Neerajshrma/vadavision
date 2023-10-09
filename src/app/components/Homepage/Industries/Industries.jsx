import React from "react";
import { MdContentPasteSearch } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { AiOutlineShop } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuCalculator } from "react-icons/lu";

const Industries = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-8">
        <div className="py-5 industries-width min-w-[180px]">
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
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="py-5 industries-width min-w-[180px]">
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
              Upgrade Your HR Game Online! We{"'"}re IT experts creating
              customized HR websites. Our focus? User-friendly designs, secure
              platforms, and easy communication tools. Streamline your HR
              processes with us, making your workplace run smoother and smarter!
            </p>
          </div>
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="py-5 industries-width min-w-[180px]">
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
              Boost Your Retail Presence Online! As IT specialists, we craft
              tailor-made retail websites. Expect user-friendly designs, secure
              platforms, and seamless shopping experiences. Elevate your retail
              business with us, making online sales smooth and successful!
            </p>
          </div>
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="py-5 industries-width min-w-[180px]">
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
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="py-5 industries-width min-w-[180px]">
          <div className="flex items-center gap-2">
            <div className="text-[#DD4242]">
              <LuCalculator scale={26} />
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
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* <div className="py-5 industries-width min-w-[180px]">
          <div className="flex items-center gap-2">
            <div>
              <svg
                width="28"
                height="25"
                viewBox="0 0 32 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 3.93702C1.11421 3.11318 2.49919 2.625 4 2.625H28C29.5008 2.625 30.8858 3.11319 32 3.93703C31.9997 1.76262 30.209 0 28 0H4C1.79102 0 0.000263851 1.76262 0 3.93702Z"
                  fill="#DD4242"
                />
                <path
                  d="M0 9.18702C1.11421 8.36318 2.49919 7.875 4 7.875H28C29.5008 7.875 30.8858 8.36319 32 9.18703C31.9997 7.01262 30.209 5.25 28 5.25H4C1.79102 5.25 0.000263851 7.01262 0 9.18702Z"
                  fill="#DD4242"
                />
                <path
                  d="M10.6667 10.5C11.6485 10.5 12.4444 11.2835 12.4444 12.25C12.4444 14.183 14.0363 15.75 16 15.75C17.9637 15.75 19.5556 14.183 19.5556 12.25C19.5556 11.2835 20.3515 10.5 21.3333 10.5H28C30.2091 10.5 32 12.2629 32 14.4375V24.0625C32 26.2371 30.2091 28 28 28H4C1.79086 28 0 26.2371 0 24.0625V14.4375C0 12.2629 1.79086 10.5 4 10.5H10.6667Z"
                  fill="#DD4242"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-semibold leading-[54px] text-2xl">
                Finance
              </h1>
            </div>
          </div>
          <div>
            <p className="text-[#C1C1C1] Montserrat font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur asafd consectetur asafd
            </p>
          </div>
          <div className="cursor-pointer flex gap-2 items-center">
            <button className="text-base text-[#DD4242] font-semibold leading-[27px]">
              See More
            </button>
            <span className="">
              <svg
                width="13"
                height="12"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999999 7.99997L12.86 7.99997L9.23 12.36C9.06026 12.5642 8.9786 12.8275 9.00298 13.0919C9.02736 13.3563 9.15578 13.6002 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.63997C15.8036 7.59224 15.8337 7.54211 15.86 7.48997C15.86 7.43997 15.86 7.40997 15.93 7.35997C15.9753 7.24531 15.9991 7.12326 16 6.99997C15.9991 6.87668 15.9753 6.75463 15.93 6.63997C15.93 6.58997 15.93 6.55997 15.86 6.50997C15.8337 6.45783 15.8036 6.40769 15.77 6.35997L10.77 0.35997C10.676 0.247087 10.5582 0.156307 10.4252 0.0940852C10.2921 0.0318637 10.1469 -0.000269378 10 -3.09467e-05C9.76635 -0.000487736 9.53991 0.0808874 9.36 0.229969C9.25874 0.313918 9.17504 0.417019 9.11369 0.533367C9.05233 0.649714 9.01454 0.77702 9.00246 0.907997C8.99039 1.03897 9.00427 1.17105 9.04331 1.29665C9.08236 1.42225 9.1458 1.53892 9.23 1.63997L12.86 5.99997L0.999999 5.99997C0.734782 5.99997 0.480428 6.10533 0.292892 6.29286C0.105356 6.4804 -6.35255e-07 6.73475 -6.12069e-07 6.99997C-5.88883e-07 7.26519 0.105356 7.51954 0.292892 7.70708C0.480428 7.89461 0.734783 7.99997 0.999999 7.99997Z"
                  fill="#DD4242"
                />
              </svg>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Industries;
