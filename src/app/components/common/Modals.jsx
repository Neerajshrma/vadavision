import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import Calender from "./Calender";
import PopUp from "./PopUp";
import { ModalContext } from "../hooks/modalContext";

const Modals = () => {
  let { isModalOpen, modalClose } = useContext(ModalContext);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full h-[100vh] flex items-center z-40 pt-10 justify-center bg-black bg-opacity-50 ${
          isModalOpen ? "" : "hidden"
        }`}
        onClick={modalClose}
      >
        <div onClick={e => e.stopPropagation()} className="w-[80%] relative bg-[#faf7f0] shadow-lg h-[90vh] no-scrollbar calender-popup">
          <div
            className="flex justify-end text-white p-2 absolute border border-white-800 rounded-full z-50 bg-black top-0 right-0 -mt-4 -mr-4 cursor-pointer text-3xl popup-cross-icon"
            onClick={modalClose}
          >
            <RxCross2 size={20} />
          </div>
          <div className="flex flex-wrap responsive-popup">
            <div className="w-[50%] min-w-[350px] pt-6 pl-6 calender-popup-content">
              <h1 className="text-4xl text-center font-bold pb-6">
                Talk To Our EXPERTS!
              </h1>
              <p className="px-2 pb-4 font-medium calender">
                Unlock the power of personalised solutions! Schedule a call with
                our Discovery Agent now and embark on a journey to fulfil your
                unique needs. Your success story begins here.
              </p>

              <Calender justifyContent="center" />
            </div>
            <div className="pb-4 w-[50%] min-w-[350px] calender-popup-content">
              <PopUp minWidth={"500px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;
