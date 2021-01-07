import * as React from "react";
import { useEffect, useState } from "react";

import { Hero, ImageContainer } from "./testimonials.styles.js";
import Image from "../../assets/testim.jpg";

export default function Testimonials() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Hero>
      <ImageContainer
        src={Image}
        alt="test"
        width="2173px"
        style={{
          transform: `translateY(${offset * 0.5 - 1600}px)`,
        }}
      />
    </Hero>
  );
}

// <div className="text-wrapper">
//           <h1 className="headline">Parallax</h1>
//           <h2 className="sub-headline">Scrolling effect</h2>
//         </div>
