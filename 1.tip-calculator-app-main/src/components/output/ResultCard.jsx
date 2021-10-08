import React from "react";
import ResultCard from "./ResultBar";
import "./ResultCard.css";

const SectionTitle = (props) => {
  return (
    <div>
      <ResultCard title="Tip Amount" tip={props.tipAmount} />
      <ResultCard title="Total" tip={props.total} />
      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default SectionTitle;
