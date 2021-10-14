import React from "react";
import "./SectionTitle.css";

const SectionTitle = (props) => {
  return (
    <h5 className="section-title">
      {props.title}
      {props.invalid && <span className="invalid-alert">Can't be zero</span>}
    </h5>
  );
};

export default SectionTitle;
