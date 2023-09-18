import React from 'react'


const AllArticles = () => {
  return (
<>

<div className="px-40 responsive-width mobile-width pt-10">
        <h1 className="w-[50%] text-2xl   text-[#DD4242] font-bold font-Montserrat">
        All Articles
        </h1>
      </div>

      <div className="flex flex-row">
        <div className="mt-5 w-7/12 px-40 pb-12 responsive-width mobile-width">
          <p className="mt-2 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
          </p>
        </div>

        
      </div>
      <div className="text-center text-2xl p-3 ">
            <button className="bg-[#DD4242] text-white px-4 py-2">More Blogs
</button>
        </div>

</>
  )
}

export default AllArticles