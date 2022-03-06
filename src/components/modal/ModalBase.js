import React from "react";
import Portal from "../Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children }) => {
  return (
    <CSSTransition in={visible} unmountOnExit timeout={500} classNames="zoom">
      {(status) => (
        <Portal
          overlay={true}
          visible={status !== "exited"}
          onClose={onClose}
          containerClassName="fixed z-999 inset-0 flex items-center justify-center"
          bodyClassName="bg-white rounded-lg p-4 content"
          bodyStyle={{transition: "all 500ms"}}
        >
          {children}
        </Portal>
      )}
    </CSSTransition>
  );
};

export default ModalBase;
