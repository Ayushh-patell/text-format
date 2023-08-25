import React from "react";

export default function Toast(props) {
  return (
    <div
      id="toast"
      className="toast toast-container position-fixed top-0 end-0 p-2 m-3 clr-mode-2"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{props.alert}</div>
      </div>
    </div>
  );
}
