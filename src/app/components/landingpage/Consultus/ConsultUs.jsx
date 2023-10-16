import React, { useState } from "react";
import Button from "../../common/Button";
import Link from "next/link";
import Modals from "../../common/Modals";
import RippleEffect from "../../common/RippleEffect";

const ConsultUs = ({ backgroundColor, color }) => {
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
            style={{ color: color }}
          >
            Consult with us for your business assistance.{" "}
          </h1>
        </div>
        <div className="mt-10">
        <RippleEffect>
            <button
              onClick={openModal}
              className="bg-[#DD4242] text-white font-bold py-2 px-4 rounded"
            >
              Get In Touch
            </button>
            </RippleEffect>
        

            <Modals isOpen={modalIsOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
