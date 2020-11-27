import React from "react";

import "./slide.styles.scss";

const Slide = ({ picNo, show, id }) => {
  return (
    <div
      style={id === show ? { display: "block" } : { display: "none" }}
      className="fade"
    >
      <div className="slide">
        <div
          className="backgroundImage"
          style={{ backgroundImage: `url(${picNo})` }}
        />
      </div>
    </div>
  );
};

export default Slide;
