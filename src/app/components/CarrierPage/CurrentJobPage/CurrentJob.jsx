"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import useScripts from "../../hooks/UseScripts";


const CurrentJob = () => {

  useScripts([
    'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.0/embed_jobs.5a71e72320d517a462350c6022ccfe36.js'
  ], () => {
    rec_embed_js.load({
      widget_id:"rec_job_listing_div",
      page_name:"Careers",
      source:"CareerSite",
      site:"https://vadavision.zohorecruit.in",
      empty_job_msg:"No current Openings"
    });
  });

  return (
    <>
      <div className="responsive-width px-40">
        <div
          style={{ fontFamily: "Montserrat" }}
          className="responsive-width pb-4"
        >
          <div className="mt-10   flex gap-3 items-center">
            <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="creative-idea text-sm uppercase  font-normal leading-[150%] text-[#A9AFC3]"
            >
              a few words
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between pb-10 ">
          <div className="flex text-4xl  hero-heading leading-[120%] font-bold text-white  ">
            <h1 className="currentJobResponsive">Current Job Openings</h1>
          </div>
        </div>
        <div className="space-y-4 pb-10">
          <div className="embed_jobs_head embed_jobs_with_style_3">
            <div className="embed_jobs_head2">
              <div className="embed_jobs_head3">
                <div id="rec_job_listing_div"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentJob;
