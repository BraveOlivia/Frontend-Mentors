import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [isActive, setActive] = useState(false);

  function handleClick(event) {
    setActive((prev) => !prev);
    props.onSelected(isActive);
  }

  // function onClick(event) {}

  return (
    <button
      onClick={handleClick}
      className="btn"
      style={isActive ? { backgroundColor: "hsl(172, 67%, 45%)" } : {}}
    >
      {props.value}
    </button>
  );
};

// When selected, change the color
// pass value to app

// Enable user to define a customed tip

// only one button can be selected at a time

export default Button;
