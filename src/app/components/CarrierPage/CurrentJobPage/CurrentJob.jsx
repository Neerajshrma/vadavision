"use client";
import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

const questionsData = [
  {
    id: 1,
    designation: "UX Designer",
    place:'New York',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
  {
    id: 2,
    designation: "UX Designer",
    place:'Los Angeles, USA',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
  {
    id: 3,
    designation: "Copy Writer",
    place:'New York',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
  {
    id: 4,
    designation: "Front-End Designer",
    place:'San Fransisco, CA, USA',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
  {
    id: 5,
    designation: "Front-End Engineer",
    place:'San Fransisco, CA, USA',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
  {
    id: 6,
    designation: "Senior Back-end Developer",
    place:'New York, USA',
    info:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio non molestiae rerum, esse repellat voluptate. Iure perspiciatis, accusantium eum voluptate, laudantium magnam quam nam debitis aspernatur iusto eos, fuga earum."
  },
 
];

const CurrentJob = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };
  return (
    <>
      <div className="responsive-width mobile-width px-40">
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
            <h1 className="currentJobResponsive ">Current Job Openings</h1>
          </div>

          <div className="flex flex-row flex-wrap searchResponsive  ">
            <div className=" flex flex-row py-2 pl-4 bg-[#fff]">
              <img
                src="images/search.png"
                alt=""
                style={{ height: "15px", marginTop: "2px" }}
              />
              <input
                type="Search job Title"
                placeholder="Search job Title"
                className="pl-4 w-full flex flex-wrap text-sm border-none borderless"
              />
            </div>
            <div className="mobilesearchbutton">
            <button className="px-4 py-2  text-white bg-red-500">Search</button>

            </div>
          </div>

        </div>

        <div className="space-y-4 pb-10">
        {questionsData.map((item) => (

          <div className="flex flex-row justify-between bg-[#41464B]  border border-white-500	rounded-md currentjob	" onClick={() => toggleAccordion(item.id)}>
          

            <div className="flex flex-col space-y-2 py-2 pl-6 text-white 	">
              <h1 className="text-xl">{item.designation}</h1>
              <h5 style={{ fontSize: "10px" }}>{item.place}</h5>
              {openAccordion === item.id && (
              <div className="text-sm job-content">{item.info}</div>
            )}
            </div>
            <div className="pr-6 py-5">
            {openAccordion === item.id ? (
                                <BiChevronRight style={{ fontSize: "25px",color:'white' }} />


                ) : (
                  <BiChevronDown style={{ fontSize: "25px",color:'white' }} />

                )}
                    

            </div>
         
          </div>
                  ))}

        
        </div>
      </div>
    </>
  );
};

export default CurrentJob;
