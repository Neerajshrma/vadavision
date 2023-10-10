import React from "react";

const ProductUser = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div
          className="flex justify-end
        "
        >
          <img src="images/men1.png" alt="" />
        </div>

        <div
          className="flex 
        "
        >
          <img
            src="images/men3.png"
            alt=""
            style={{ marginLeft: "-160px", height: "200px" }}
          />
          <div
            className="flex flex-col justify-center text-4xl "
            style={{ paddingLeft: "480px", fontWeight: "600px" }}
          >
            Product Users
            <h1 className="text-xl flex justify-center">Everyone, </h1>
          </div>
        </div>
        <div
          className="flex justify-end
        "
        >
          <img src="images/men2.png" alt="" style={{height:'230px'}} />
        </div>
      </div>
    </>
  );
};

export default ProductUser;
