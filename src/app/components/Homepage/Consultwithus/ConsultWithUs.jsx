"use client"
import React, { useState } from "react";
import Button from "../../common/Button";
import Link from "next/link";
import RippleEffect from "../../common/RippleEffect";
import Modals from "../../common/Modals";
const ConsultWithUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="bg-black px-40 responsive-width py-20">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div className="w-7/12 full-width-responsive">
          <h1 className="Montserrat font-bold leading-[130%] text-4xl text-white consult-us-heading">
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="w-4/12 full-width-responsive">
          <div className="flex border-l border-[#DD4242] consult-btn">
            <div className="border-l-2 border-[#DD4242] h-14 consult-btn"></div>
            <p className="Montserrat font-medium leading-[22px] pl-8 consult-btn text-basi text-white description">
              Looking for skilled and reliable professionals who understand your
              challenges? Reach out; we{"'"}d love to chat and assist you.
            </p>
          </div>
          <div className="pt-10 h-16 border-l border-[#DD4242] consult-btn">
            <div className="pl-8 consult-btn">
            <RippleEffect>
            <button
              onClick={openModal}
              className="bg-[#DD4242] text-white font-bold py-2 px-4 rounded"
            >
              Consult With US
            </button>
            </RippleEffect>
        

            <Modals isOpen={modalIsOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultWithUs;
