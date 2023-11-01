import React from "react";
import Image from "next/image";
import flowchat from "../../../../../public/images/flowchat.png";
const UserFlow = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Montserrat" }}
        className="px-40 responsive-width mobile-width pt-10"
      >
        <div className="text-3xl font-bold pt-14">User Flow</div>
        <div>
        {/* <img
                src="images/flowchat.png"
                alt=""
              /> */}
                        <Image src={flowchat} alt="" />

        </div>
      </div>
    </>
  );
};

export default UserFlow;
