import React from "react";
import ResultCard from "./ResultBar";
import "./ResultCard.css";

const SectionTitle = (props) => {
  function resetHandler() {
    props.onReset();
  }

  return (
    <div className="center">
      <ResultCard title="Tip Amount" tip={props.tipAmount} />
      <ResultCard title="Total" tip={props.total} />
      <button className="reset-btn" onClick={resetHandler}>
        RESET
      </button>
    </div>
  );
};

export default SectionTitle;
