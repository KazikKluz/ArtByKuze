import React, { useState } from "react";

import Slide from "../../components/slide/slide.component";

import "./slideshow.styles.scss";

const SlideShow = () => {
  const [show, setShow] = useState(1);
  console.log(show);

  const plusSlide = () => {
    setShow(2);
  };

  return (
    <div className="slideshow-container">
      <Slide picNo={show} />

      <div className="prev" onClick={plusSlide}>
        &#10094;
      </div>
      <div className="next" onClick="plusSlides(1)">
        &#10095;
      </div>
    </div>
  );
};

export default SlideShow;
