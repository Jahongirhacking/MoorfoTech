import PropTypes from "prop-types";
import { useEffect, useCallback } from "react";

const Modal = ({ children, setShowModal }) => {
  const closeModal = useCallback(() => {
    document.body.style.overflowY = "auto";
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }, [closeModal]);
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  setShowModal: PropTypes.func,
};

export default Modal;
