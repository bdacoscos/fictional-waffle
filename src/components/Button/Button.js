import React from "react";
import "./button.css";

const Button = props => {
  return (
    <button
      className="button"
      type="button"
      alt={props.altText}
      onClick={props.onClick}
    >
      <span>{props.buttonText}</span>
    </button>
  );
};

export default Button;
