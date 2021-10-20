import React from "react";
import "./Button.css";

// Handle the status of button, if clicked, change the color
const Button = (props) => {
  function handleClick(event) {
    const { value } = event.target;
    props.onSelected(value);
  }

  return (
    <button
      name={props.id}
      value={props.value}
      onClick={handleClick}
      className="btn"
      style={{
        backgroundColor: props.active && "hsl(172, 67%, 45%)",
        color: props.active && "hsl(183, 100%, 15%)",
      }}
    >
      {props.value}%
    </button>
  );
};

export default Button;
