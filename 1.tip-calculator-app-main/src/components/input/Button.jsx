import React, { useState } from "react";
import "./Button.css";

// Handle the status of button, if clicked, change the color
const Button = (props) => {
  const [active, setActive] = useState(false);

  function handleClick(event) {
    setActive((prev) => !prev);
    props.onSelected(props.value);
    event.preventDefault();
  }

  return (
    <button
      onClick={handleClick}
      className="btn"
      style={active ? { backgroundColor: "hsl(172, 67%, 45%)" } : {}}
    >
      {props.value}%
    </button>
  );
};

// When selected, change the color
// pass value to app

// Enable user to define a customed tip

// only one button can be selected at a time

export default Button;
