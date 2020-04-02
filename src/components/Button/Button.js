import React from "react";

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
