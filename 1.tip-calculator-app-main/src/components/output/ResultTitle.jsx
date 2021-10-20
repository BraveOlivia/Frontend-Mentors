import React from "react";
import "./ResultTitle.css";

const ResultTitle = (props) => {
  return (
    <div>
      <h5 className="result-title">{props.title}</h5>
      <p className="description">/ person</p>
    </div>
  );
};

export default ResultTitle;
