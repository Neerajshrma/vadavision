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
        <div onClick={openModal}>
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

            </RippleEffect>
        

            <Modals isOpen={modalIsOpen} onClose={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
