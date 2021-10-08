import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
// import PersonIcon from "@mui/icons-material/Person";

import "./UserInput.css";

const UserInput = (props) => {
  const [inputValue, setValue] = useState(0);

  function inputHandler(event) {
    // event.preventDefault();
    setValue((prev) => event.target.value);
    props.onAdd(inputValue);
  }

  return (
    <div>
      <SectionTitle title={props.title} />
      <div className="input-box">
        <input
          type="number"
          // step="0.01"
          // step={props.title === "Bill" && 0.01}
          // dir="rtl"
          onChange={inputHandler}
          value={inputValue}
        />
        <span className="unit">{props.title === "Bill" ? "$" : "P"}</span>
      </div>
    </div>
  );
};

// the position of module
// Number of people can only be interger

export default UserInput;
