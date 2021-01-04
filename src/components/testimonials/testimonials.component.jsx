import * as React from "react";
import { useEffect, useState } from "react";

import "./testimonials.scss";

import { Hero } from "./testimonials.styles.js";

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
    <div>
      <Hero>
        <img
          src="https://picsum.photos/1600/1900"
          alt="test"
          className="parallax"
          style={{
            transform: `translateY(${offset * 0.5}px)`,
          }}
        />
        <div className="text-wrapper">
          <h1 className="headline">Parallax</h1>
          <h2 className="sub-headline">Scrolling effect</h2>
        </div>
      </Hero>
    </div>
  );
}
