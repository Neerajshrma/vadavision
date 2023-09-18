import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";


const RecentArticles = () => {
  return (
    <>
      <div className="px-40 responsive-width mobile-width pt-10">
        <h1 className="w-[50%] text-2xl   text-[#DD4242] font-bold font-Montserrat">
        Recent Articles
        </h1>
      </div>

      <div className="flex flex-row">
        <div className="mt-5 w-7/12 px-40 pb-12 responsive-width mobile-width">
          <p className="mt-2 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          Here’s what we've been up to recently.
          </p>
        </div>

        <div className="flex flex-row-reverse pb-8 px-40 text-white">
          <div className="pt-5">
            <AiOutlineArrowRight
              style={{
                color: "#DD4242",
              }}
            />
          </div>

          <div className=" pr-1 m-4 text-[#DD4242]">View all</div>
        </div>
      </div>
    
    </>
  )
}

export default RecentArticles