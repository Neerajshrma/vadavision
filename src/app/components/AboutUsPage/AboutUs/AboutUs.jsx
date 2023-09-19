import React from "react";

const AboutUs = () => {
  return (
    <div className="responsive-width mobile-width px-40">
      <div className="mt-10 flex gap-3 items-center">
        <div className="bg-[#A9AFC3] bg-responsive w-[50px] h-[1px]"></div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="creative-idea text-sm uppercase font-normal leading-[150%] text-[#A9AFC3]"
        >
          About us
        </div>
      </div>

      <div className="flex"
      >
        
          <div className="mt-5 w-1/2  ">
            <h1 className="text-5xl hero-heading leading-[120%] font-bold text-white">
              We are creative & strong team
            </h1>
            <p className="mt-8 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
              Our creative and professional agency has been developing products
              for 15 years. We are special.
            </p>
            <p className="mt-5 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
              We’ve got a lot of awards for our work and develop applications
              that became popular in the world. We try not to miss important
              details in each area.{" "}
            </p>
          </div>

          <div className=" px-40 pt-20 w-1/2 bg-cover " 
            
            style={{ backgroundImage: "url(images/bg-object5.png)" }}>
            <div className="w-[170px] h-[170px] border border-2 rounded-full border-[#DD4242] justify-items-center">
              
              <h1
                className="font-bold mt-3 text-center pt-6 text-white text-4xl leading-[100%] ml-3"
                style={{ fontFamily: "Mulish" }}
              >
                15
              </h1>
              <p className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text">
                Awards Winning
              </p>
            </div>
          </div>
        
      </div>





      <div className="flex">
      <div className=" px-40  pt-20 w-1/2">
          <div className="w-[170px] h-[170px] border border-2 rounded-full border-[#DD4242] justify-items-center">
            
            <h1
              className="font-bold mt-3 text-center pt-6 text-white text-4xl leading-[100%] ml-3"
              style={{ fontFamily: "Mulish" }}
            >
              9
            </h1>
            <p className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text">
            Years experience
            </p>
          </div>
        </div>
        
        <div className="mt-5 w-1/2 pt-10  pl-20 bg-cover"
          style={{ backgroundImage: "url(images/bg-object5.png)" }}>
          <h1 className="text-1xl hero-heading leading-[120%] font-semibold text-white">
          How our working day starts          </h1>
          <p className="mt-8 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          Every morning in our company begins with hot coffee and a stand-up. Discussion is an important thing in the development process.
          </p>
          <p className="mt-5 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          Thus new ideas and ingenious solutions are born. Then we get to work with renewed vigor and inspiration. We are never bored. {" "}
          </p>
        </div>

       
      
    </div>






      <div className="flex pb-10">
        
        <div className="mt-5 w-1/2 pt-12 ">
          <h1 className="text-1xl hero-heading pt-10 leading-[120%] font-semibold text-white">
          Individual approach
          </h1>
          <p className="mt-8 text-[#A9AFC3] font-light text-sm  mx-auto leading-[33px]">
          Every morning in our company begins with hot coffee and a stand-up.

          </p>
         
        </div>

        <div className=" px-40 pt-20 w-1/2 bg-cover"
          style={{ backgroundImage: "url(images/bg-object5.png)" ,paddingRight:'12px' }}>
          <div className="w-[180px] h-[180px] border border-2 item-center justify-center rounded-full border-[#DD4242] justify-items-center">
            
            <h1
              className="font-bold mt-3 text-center pt-8 text-white text-4xl leading-[100%] ml-3"
              style={{ fontFamily: "Mulish" }}
            >
              354
            </h1>
            <p className="Montserrat mt-3 text-center font-medium leading-[170%] text-[#A9AFC3] feature-text">
            Successful projects
            </p>
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default AboutUs;
