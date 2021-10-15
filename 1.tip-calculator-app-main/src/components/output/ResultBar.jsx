import React from "react";
import ResultTitle from "./ResultTitle";

const ResultBar = (props) => {
  return (
    <div className="card_row">
      <div className="card_column">
        <ResultTitle title={props.title} />
      </div>
      <div className="card_column tip-figure">
        <h2>${props.tip}</h2>
      </div>
    </div>
  );
};

export default ResultBar;
