import React from "react";
// import ReactDom from "react-dom";

export default function TextArea(props) {
  return (
    <input
      type="text"
      name={props.name}
      className="form-control"
      placeholder={props.placeholder}
      onKeyPress={props.onKeyPress}
    />
  );
}
