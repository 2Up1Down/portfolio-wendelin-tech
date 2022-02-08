import React, { useState } from "react";
import SlideProject from "./slide-project";
import ButtonSlider from "./button-slider";
import SliderIndicators from "./slider-indicators";

const SliderProjects = ({ projects, labelTechnologies, labelServices }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const total = projects.length;

  const prevSlide = () => {
    const newIndex = slideIndex - 1;
    if (newIndex < 0) setSlideIndex(total - 1);
    else setSlideIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = slideIndex + 1;
    if (newIndex > total - 1) setSlideIndex(0);
    else setSlideIndex(newIndex);
  };

  const moveIndicator = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className=" h-[50rem]">
        {projects.map((project, index) => (
          <SlideProject
            key={project.sys.id}
            index={index}
            project={project}
            labelServices={labelServices}
            labelTechnologies={labelTechnologies}
            active={slideIndex === index}
          />
        ))}
      </div>
      <ButtonSlider direction="prev" onClick={prevSlide} />
      <ButtonSlider direction="next" onClick={nextSlide} />
      <SliderIndicators
        total={projects.length}
        activeIndicator={slideIndex}
        onClick={moveIndicator}
      />
    </div>
  );
};

export default SliderProjects;
