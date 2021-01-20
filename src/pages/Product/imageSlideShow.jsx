import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ImageSlideShow({ images }) {
  return (
    <div className="slide-container">
      <Fade autoplay={false}>
        {images.map((i) => (
          <div key={i.id} className="each-fade">
            <img src={i.photo} alt="" />
          </div>
        ))}
      </Fade>
    </div>
  );
}
