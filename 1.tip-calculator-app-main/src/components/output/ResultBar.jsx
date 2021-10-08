import React from "react";
import ResultTitle from "./ResultTitle";

const ResultBar = (props) => {
  return (
    <div className="row">
      <div className="column">
        <ResultTitle title={props.title} />
      </div>
      <div className="column tip-figure">
        <h2>${props.tip}</h2>
      </div>
    </div>
  );
};

export default ResultBar;
