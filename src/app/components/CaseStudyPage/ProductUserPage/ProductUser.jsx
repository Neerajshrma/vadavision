import React from "react";

const ProductUser = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-5 md:px-20 lg:px-40 responsive-width mobile-width pt-10"
      >
        <div className="flex justify-center md:justify-end">
          <img src="images/men1.png" alt="" />
        </div>

        <div className="flex flex-col md:flex-row">
          <img
            src="images/men3.png"
            alt=""
            style={{ marginLeft: "0", height: "200px" }}
            className="md:ml-0 md:mr-4 lg:mr-10"
          />
          <div
            className="flex flex-col md:pl-4 lg:pl-10 justify-center text-4xl "
            style={{ paddingLeft: "0", fontWeight: "600" }}
          >
            Product Users
            <h1 className="text-xl flex justify-center">Everyone, </h1>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src="images/men2.png" alt="" style={{ height: "230px" }} />
        </div>
      </div>
    </>
  );
};

export default ProductUser;
