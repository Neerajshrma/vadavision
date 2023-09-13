import React from 'react'

const OurWorkCulture = () => {
  return (
    <>
     <div className="responsive-width pb-4 mobile-width px-40">
        <div className="mt-10 flex gap-3 items-center">
          <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
          >
            a few words
          </div>
        </div>
      </div>

      <div className="px-40 responsive-width mobile-width">
        <span className="text-4xl hero-heading leading-[120%] font-bold text-white">
          Our Work
        </span>
      </div>
      <div className="px-40 responsive-width mobile-width">
        <span className="text-4xl hero-heading leading-[120%] font-bold text-white">
          Culture Company’s
        </span>
      </div>

      <div className="mt-5 w-6/12 px-40 pb-12 responsive-width mobile-width">
        <p className="mt-4 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          We always try to implement our creative ideas at the highest level.
          You can see it by looking at our portfolio.
        </p>
      </div>

      <div className=" flex w-[50%] px-40 responsive-width mobile-width ">
        <div className="flex flex-row">
          <div className="flex flex-col responsive-width mobile-width ">
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 pr-8 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex pb-4 items-center ">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
          </div>
          <div className="flex flex-col responsive-width mobile-width">
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
            <div className="flex  pb-4 items-center">
              <img className="h-5" src="images/check-circle.svg" alt="" />
              <span className="pl-2 font-semibold text-white">
                Modern Technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurWorkCulture