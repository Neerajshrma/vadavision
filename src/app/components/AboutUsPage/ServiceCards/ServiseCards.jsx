import React from 'react'

const ServiseCards = () => {
  return (
    <>
      <div className="responsive-width pb-4 mobile-width px-40">
        <div className="mt-10 flex gap-3 items-center">
          <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
          >
            our services
          </div>
        </div>
      </div>

      <div className="px-40 responsive-width mobile-width">
        <h1 className="text-4xl hero-heading leading-[120%] font-bold text-white ">
          We offer the best services
        </h1>
      </div>

      <div className="mt-5 w-6/12 px-40 pb-10 responsive-width mobile-width">
        <p className="mt-4 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          We always try to implement our creative ideas at the highest level.
          You can see it by looking at our portfolio.
        </p>
      </div>
      <div className="flex flex-row-reverse pb-8 pl-40 px-40 text-white">
        <div className="pl-6 text-[#DD4242] border-b border-red-500 m-4 cursor-pointer">
          Next
        </div>
        <div className="border-b border-white-500 pr-6 m-4 cursor-pointer">
          Prev
        </div>
      </div>

      <div className="flex flex-row  px-40 responsive-width mobile-width ">
        <div className=" w-[25%] bg-[#2a2b2a] grid justify-items-center pt-10">
          <img src="images/iconbranding.svg" alt="" />
          <span className="pt-5 text-white">UI/UX and</span>
          <span className="text-white">Brand Identity</span>
          <div className="  pt-5 pb-20   ">
            <h3 className=" text-[#DD4242] border-b cursor-pointer	 border-red-500">
              READ MORE
            </h3>
          </div>
        </div>
        <div className="w-[25%] bg-[#181a18] grid justify-items-center pt-10">
          <img src="images/iconapp.svg" alt="" />
          <span className="pt-5 text-white">App</span>
          <span className="text-white">Development</span>
          <div className="  pt-5 pb-20   ">
            <h3 className=" text-[#DD4242] border-b cursor-pointer	 border-red-500">
              READ MORE
            </h3>
          </div>{" "}
        </div>

        <div className="w-[25%] bg-[#2a2b2a] grid justify-items-center pt-10">
          <img src="images/iconsocialmedia.svg" alt="" />
          <span className="pt-5 text-white">SEO & SMM</span>
          <span className="text-white ">Optimization</span>
          <div className="  pt-5 pb-20   ">
            <h3 className=" text-[#DD4242] border-b cursor-pointer	 border-red-500">
              READ MORE
            </h3>
          </div>{" "}
        </div>
        <div className="w-[25%] bg-[#181a18] grid justify-items-center pt-10">
          <img src="images/iconwebdev.svg" alt="" />
          <span className="pt-5 text-white">Web</span>
          <span className="text-white">Development</span>
          <div className="  pt-5 pb-20   ">
            <h3 className=" text-[#DD4242] border-b cursor-pointer	 border-red-500">
              READ MORE
            </h3>
          </div>{" "}
        </div>
      </div>
    </>
  )
}

export default ServiseCards