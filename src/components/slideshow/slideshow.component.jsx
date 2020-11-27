import React, { useState, useEffect, useCallback } from "react";

import Slide from "../../components/slide/slide.component";

import pic1 from "../slide/test1.jpg";
import pic2 from "../slide/test2.jpg";
import pic3 from "../slide/test3.jpg";

import "./slideshow.styles.scss";

const pictures = [pic1, pic2, pic3];

const SlideShow = () => {
  const [show, setShow] = useState(0);
  const shiftSlide = useCallback(
    (increment) => {
      if (show + increment === 3) {
        setShow(0);
      } else if (show + increment === -1) {
        setShow(2);
      } else {
        setShow(show + increment);
      }
    },
    [show]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      shiftSlide(1);
    }, 8000);
    return () => clearInterval(interval);
  }, [shiftSlide]);

  return (
    <div className="slideshow-container">
      {pictures.map((pic, idx) => {
        return <Slide picNo={pic} key={idx} id={idx} show={show} />;
      })}

      <div className="prev" onClick={() => shiftSlide(-1)}>
        &#9668;
      </div>
      <div className="next" onClick={() => shiftSlide(1)}>
        &#9658;
      </div>
      <div className="bottom">&#9660;</div>
    </div>
  );
};

export default SlideShow;
