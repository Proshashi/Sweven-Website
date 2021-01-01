import React from "react";
import Rodal from "rodal";
import "./Modal.css";

const Modal = (props) => {
  const { visible, content } = props;

  return (
    <Rodal
      visible={visible}
      onClose={props.hide}
      showCloseButton={true}
      className="__sweven_modal"
      animation="zoom"
      width={500}
      closeOnEsc={true}
    >
      <div>{content}</div>
    </Rodal>
  );
};

export default Modal;
