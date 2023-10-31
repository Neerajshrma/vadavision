import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
import Link from "next/link";
import Modals from "../../common/Modals";
import RippleEffect from "../../common/RippleEffect";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ConsultUs = ({ backgroundColor, color }) => {
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
    <div>
      <div
        className="py-14 text-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <div>
          <h1
            className="text-5xl Montserrat font-bold leading-[130%] w-7/12 mx-auto consult-us-width"
            style={{ color: color }} data-aos='fade-up'
          >
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="mt-10" data-aos='fade-up'>
            <div className="inline-block" onClick={openModal}>
              <Button
                fontFamily="Poppins"
                fontWeight="500"
                padding="7px 22px"
                Color="#FFFFFF"
                fontSize="16px"
                backgroundColor="#DD4242"
                name="Consult with us"
              />
            </div>
          
          <Modals isOpen={modalIsOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
