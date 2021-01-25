import React, { useState } from "react";
import ArtistVideoData from "./artistVideoData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./slideShow.scss";

const ArtistSlideShow = ({ slides }) => {
  
  
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {ArtistVideoData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <iframe
                src={slide.video}
                alt="travel image"
                className="image"
                width="1020"
                height="630"
                modestbranding
                frameborder="0"
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen 
                marginheight="0"
                marginwidth="0"
                rel="0"
                controls="0"
                loop="1"
                scrolling="auto"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ArtistSlideShow;
