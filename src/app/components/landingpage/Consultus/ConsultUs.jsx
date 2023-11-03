import React, { useContext, useEffect, useState } from "react";
import Button from "../../common/Button";
import Link from "next/link";
import Modals from "../../common/Modals";
import RippleEffect from "../../common/RippleEffect";
import { ModalContext } from "../../hooks/modalContext";

import AOS from "aos";
import "aos/dist/aos.css";
const ConsultUs = ({ backgroundColor, color }) => {
  let { modalOpen } = useContext(ModalContext);

  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init({
        offset: 0,
        duration: 500,
        once: true,
        easing: "ease",
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
    <div data-aos="fade-up">
      <div
        className="py-14 text-center"
        style={{ backgroundColor: backgroundColor }}
      >
        <div>
          <h1
            className="text-5xl Montserrat font-bold leading-[130%] w-7/12 mx-auto consult-us-width"
            style={{ color: color }}
            data-aos="fade-up"
          >
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="mt-10" data-aos="fade-up">
          <div className="inline-block primary-color" onClick={modalOpen}>
            <Button
              fontFamily="Poppins"
              fontWeight="500"
              padding="7px 22px"
              Color="#FFFFFF"
              fontSize="16px"
              name="Consult with us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
