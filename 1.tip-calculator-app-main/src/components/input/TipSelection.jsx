import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const TipSelection = (props) => {
  const [activeBtn, setActiveBtn] = useState(0);

  function handleTip(tip) {
    props.onSelected(tip);
  }

  function handleActive(event) {
    const { name, value } = event.target;
    setActiveBtn(name);

    console.log(name, value);
  }

  return (
    <div>
      <SectionTitle title="Select Tip %" />

      <div onClick={handleActive}>
        <Button
          id="1"
          value="5"
          onSelected={handleTip}
          active={activeBtn === "1" ? true : false}
        />
      </div>
      <div onClick={handleActive}>
        <Button
          id="2"
          value="10"
          onSelected={handleTip}
          active={activeBtn === "2" ? true : false}
        />
      </div>
      <div onClick={handleActive}>
        <Button
          id="3"
          value="15"
          onSelected={handleTip}
          active={activeBtn === "3" ? true : false}
        />
      </div>
      <div onClick={handleActive}>
        <Button
          id="4"
          value="25"
          onSelected={handleTip}
          active={activeBtn === "4" ? true : false}
        />
      </div>
      <div onClick={handleActive}>
        <Button
          id="5"
          value="50"
          onSelected={handleTip}
          active={activeBtn === "5" ? true : false}
        />
      </div>
      <div onClick={handleActive}>
        <Button id="6" value="Custom" onSelected={handleTip} />
      </div>
    </div>
  );
};

export default TipSelection;
