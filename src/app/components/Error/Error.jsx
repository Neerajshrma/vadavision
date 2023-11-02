import React from "react";
import Image from "next/image";
import errorimage from "../../../../public/images/error.png";
const Error = () => {
  return (
    <>
         <div className="min-h-screen flex items-center justify-center relative" style={{ backgroundImage: `url('/images/error.png')`, backgroundColor:'black', backgroundSize: 'cover', backgroundPosition: 'center' }}>
 
 <div className="text-center mb-20 ">
     <div className="absolute top-4 lg:top-12 right-4 lg:right-44 text-white text-lg lg:text-xl font-light lg:pr-10 lg:pt-8">
         +91 62 8000 7001
     </div>

     <h1 className="text-white text-6xl lg:text-7xl font-bold">OMG !</h1>
     <h1 className="text-white text-4xl lg:text-5xl font-bold ">You broke the site!</h1>
     <h1 className="text-[#A9AFC3] text-lg lg:text-xl font-light">
         Don’t worry. It’s just 404 page not found.
     </h1>
 </div>
</div>
    </>
  );
};

export default Error;
