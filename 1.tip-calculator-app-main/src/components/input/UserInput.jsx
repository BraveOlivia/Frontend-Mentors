import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

import "./UserInput.css";

const UserInput = (props) => {
  const [invalidInput, setInvalid] = useState(false);

  function inputHandler(event) {
    const { name, value } = event.target;
    props.onAdd(value); // Can't use {inputValue} here

    if (name === "Number of People" && value === "0") {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }

  return (
    <div>
      <SectionTitle title={props.title} invalid={invalidInput} />

      <div className="input-box">
        <input
          name={props.title}
          type="number"
          onChange={inputHandler}
          value={props.value}
          placeholder="0"
        />
        <span className="unit">{props.title === "Bill" ? "$" : "P"}</span>
      </div>
    </div>
  );
};

export default UserInput;
