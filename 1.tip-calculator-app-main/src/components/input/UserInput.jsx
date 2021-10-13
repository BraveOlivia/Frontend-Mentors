import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

import "./UserInput.css";

const UserInput = (props) => {
  const [inputValue, setValue] = useState(0);

  function inputHandler(event) {
    setValue((prev) => event.target.value);
    props.onAdd(inputValue);
    props.onClicked(props.id);
  }

  return (
    <div>
      <SectionTitle title={props.title} />
      <div className="input-box">
        <input type="number" onChange={inputHandler} value={inputValue} />
        <span className="unit">{props.title === "Bill" ? "$" : "P"}</span>
      </div>
    </div>
  );
};

// the position of module
// Number of people can only be interger

export default UserInput;
