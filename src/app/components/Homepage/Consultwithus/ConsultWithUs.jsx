"use client";
import React, { useContext, useEffect, useState } from "react";
import RippleEffect from "../../common/RippleEffect";
import Modals from "../../common/Modals";
import Button from "../../common/Button";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { ModalContext } from "../../hooks/modalContext";

const ConsultWithUs = () => {
  let { modalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
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
        <div className="w-7/12 full-width-responsive"data-aos="fade-up">
          <h1 className="Montserrat font-bold leading-[130%] text-4xl text-white consult-us-heading">
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="w-4/12 full-width-responsive" >
          <div data-aos="fade-up" className="flex border-l border-[#DD4242] consult-btn">
            <div data-aos="fade-up" className="border-l-2 border-[#DD4242] h-14 consult-btn"></div>
            <p data-aos="fade-up" className="Montserrat font-medium leading-[22px] pl-8 consult-btn text-basi text-white description">
              Looking for skilled and reliable professionals who understand your
              challenges? Reach out; we{"'"}d love to chat and assist you.
            </p>
          </div>
          <div className="pt-10 h-16 border-l border-[#DD4242] consult-btn">
            <div className="pl-8 consult-btn"data-aos="fade-up">
              <RippleEffect>
                <div onClick={modalOpen}>
                  <Button
                    fontFamily="Poppins"
                    fontWeight="600"
                    padding="7px 22px"
                    Color="#FFFFFF"
                    fontSize="12px"
                    backgroundColor={"#DD4242"}
                    name="Consult With Us"
                  />
                </div>
              </RippleEffect>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultWithUs;
