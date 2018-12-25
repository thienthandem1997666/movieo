import React from "react";
function Modal(props) {
  return (
    <div className="modal--wrapper">
      {props.header ? <div className="modal--header" /> : null}
      <div className="modal--content">{props.content}</div>
      {props.footer ? <div className="modal--footer" /> : null}
    </div>
  );
}
export default Modal;
