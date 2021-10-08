import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

const TipSelection = () => {

  // function handleClick(){

  // }

  return (
    <div>
      <SectionTitle title="Select Tip %" />
      <Button id="1" value="5%" />
      <Button id="2" value="10%" />
      <Button id="3" value="15%" />
      <Button id="4" value="25%" />
      <Button id="5" value="50%" />
      <Button id="6" value="Custom" />
    </div>
  );
};

export default TipSelection;
