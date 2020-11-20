import React from "react";

import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";

import "./slide.styles.scss";

const Slide = ({ picNo }) => (
  <div className="mySlides fade">
    <div className="slide">
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(pic${picNo}})` }}
      />
    </div>
  </div>
);

export default Slide;
