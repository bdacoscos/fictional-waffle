import React from "react";
import "./style.css";

const Button = props => {
  return (
    <>
      <button
        className={props.altClass || 'waffle--button'}
        type="button"
        alt={props.altText}
        onClick={props.onClick}
      >
        <span className>{props.buttonText}</span>
      </button>
    </>
  );
};

export default Button;
