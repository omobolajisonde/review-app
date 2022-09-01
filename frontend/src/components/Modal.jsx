import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

import "./Modal.scss";

const Backdrop = ({ modalHandler }) => {
  return (
    <div
      className="modal__backdrop"
      onClick={modalHandler.bind("_", false)}
    ></div>
  );
};

const Overlay = ({ modalHandler }) => {
  useEffect(() => {
    const overlay = document.querySelector(".modal__overlay");
    setTimeout(() => {
      overlay.style.transform = "translate(-50%, -50%) scale(1)";
    }, 1);
  }, []);
  return (
    <div className="modal__overlay">
      <button onClick={modalHandler.bind("_", false)}>
        <FaTimes />
      </button>
      <h2>Your feedback has been recorded. 🥂</h2>
      <p>
        Thanks for taking your time to give a review about our store, it will go
        a long way in helping us improve on our short comings and bring you
        better services.
      </p>
    </div>
  );
};

const Modal = ({ modalHandler }) => {
  useEffect(() => {
    const escCloseModalHandler = function (event) {
      if (event.key === "Escape") {
        modalHandler(false);
      }
    };
    window.addEventListener("keydown", escCloseModalHandler);
    return () => {
      window.removeEventListener("keydown", escCloseModalHandler);
    };
  }, [modalHandler]);

  return (
    <>
      <Overlay modalHandler={modalHandler} />
      <Backdrop modalHandler={modalHandler} />
    </>
  );
};

export default Modal;
