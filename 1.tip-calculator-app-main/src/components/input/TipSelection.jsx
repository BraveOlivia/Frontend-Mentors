import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const TipSelection = (props) => {

  function handleTip(tip) {
    props.onTipSelection(tip);
  }
  return (
    <div>
      <SectionTitle title="Select Tip %" />
      <Button id="1" value="5" onSelected={handleTip} />
      <Button id="2" value="10" onSelected={handleTip} />
      <Button id="3" value="15" onSelected={handleTip} />
      <Button id="4" value="25" onSelected={handleTip} />
      <Button id="5" value="50" onSelected={handleTip} />
      <Button id="6" value="Custom" onSelected={handleTip} />
    </div>
  );
};

export default TipSelection;
