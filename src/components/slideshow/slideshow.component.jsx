import React, { useState } from "react";

import Slide from "../../components/slide/slide.component";

import pic1 from "../slide/1.jpg";
import pic2 from "../slide/2.jpg";
import pic3 from "../slide/3.jpg";

import "./slideshow.styles.scss";

const pictures = [pic1, pic2, pic3];

const SlideShow = () => {
  const [show, setShow] = useState(0);

  const plusSlide = () => {
    setShow((prevState) => {
      return (prevState + 1) % 3;
    });
  };

  const minusSlide = () => {
    setShow((prevState) => {
      return (prevState - 1) % 3;
    });
  };

  console.log(show);

  return (
    <div className="slideshow-container">
      {pictures.map((pic, idx) => {
        return <Slide picNo={pic} key={idx} id={idx} show={show} />;
      })}

      <div className="prev" onClick={plusSlide}>
        &#10094;
      </div>
      <div className="next" onClick={minusSlide}>
        &#10095;
      </div>
    </div>
  );
};

export default SlideShow;
