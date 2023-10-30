
import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function modalOpen() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }

  return {
    isModalOpen,
    modalOpen,
    modalClose
  }
}

export default useModal;