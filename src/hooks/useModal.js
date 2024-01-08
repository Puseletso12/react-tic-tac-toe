import { useState } from "react";

export const useModal = () => {
  //INITIALIZE OUR MODAL CONTENT
  const [modal, setModal] = useState(false);
  const [modalContent, setModalcontent] = useState("I AM A MODAL");

  //HANDLE MODAL CONTENT
  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalcontent(content);
    }
  };
  return { modal, modalContent, handleModal };
};