import React from "react";
import "../../../dist/bundle.min.css"

const Button = props => {
  return (
    <button
      className="button"
      type="button"
      alt={props.altText}
      onClick={props.onClick}
    >
      <span>&hearts;{' '} {props.buttonText}</span>
    </button>
  );
};

export default Button;
