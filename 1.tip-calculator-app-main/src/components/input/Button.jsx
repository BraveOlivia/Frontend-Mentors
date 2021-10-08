import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
  const [activeBtn, setActiveBtn] = useState(0);

  function handleClick(event) {
    setActiveBtn(props.id);
    props.onSelected(props.value);
    // event.preventDefault();
    console.log("activeBtn: " + activeBtn);
  }

  return (
    <button
      onClick={handleClick}
      className="btn"
      style={
        props.id === activeBtn ? { backgroundColor: "hsl(172, 67%, 45%)" } : {}
      }
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
