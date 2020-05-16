import React from "react";
import "./styles.css";

const Button = props => {
  return (
    <button
      className="button"
      type="button"
      alt={props.altText}
      onClick={props.onClick}
    >
      <span>Text: {props.buttonText}</span>
    </button>
  );
};

export default Button;
