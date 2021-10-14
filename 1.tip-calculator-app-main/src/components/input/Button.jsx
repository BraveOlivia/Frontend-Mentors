import React, { useState } from "react";
import "./Button.css";

// Handle the status of button, if clicked, change the color
const Button = (props) => {
  const [isCustom, setIsCustom] = useState(false);

  function handleClick(event) {
    const { value } = event.target;
    props.onSelected(value);

    if (value === "Custom") {
      setIsCustom(true);
    }
  }

  if (!isCustom) {
    return (
      <button
        name={props.id}
        value={props.value}
        onClick={handleClick}
        className="btn"
        style={{
          backgroundColor: props.active && "hsl(172, 67%, 45%)",
        }}
      >
        {props.value}
        {props.id !== "6" && "%"}
      </button>
    );
  } else {
    return <input className="btn" type="number" />;
  }
};

export default Button;
