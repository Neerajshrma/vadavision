import React, {createContext} from "react";
import useModal from "./useModal";
import { useExitIntent } from 'use-exit-intent';
import Modals from "../common/Modals";


let ModalContext;
let { Provider } = (ModalContext = createContext());

let ModalProvider = ({ children }) => {
  let { isModalOpen, toggleModal } = useModal();
  const { registerHandler } = useExitIntent()


  registerHandler({
    id: 'openModal',
    handler: () => {toggleModal()}
  });

  return (
    <Provider value={{ isModalOpen, toggleModal }}>
      <Modals />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };