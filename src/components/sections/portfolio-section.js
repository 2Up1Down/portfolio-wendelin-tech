import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { renderTitleOptions } from "../../styles/contentful-rich-text";
import ButtonSlider from "../slider/button-slider";
import SliderIndicators from "../slider/slider-indicators";
import SlideText from "../slider/slide-text";
import SlideImage from "../slider/slide-image";

const PortfolioSection = ({
  title,
  projectsCollection,
  labelTechnologies,
  labelServices,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const projects = projectsCollection.items;
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
    <section className="text-white">
      <div className="grid lg:grid-cols-full-width area-portfolio">
        <div className="grid-lside bg-primary hidden lg:block" />

        <div className="grid-title bg-primary px-4">
          <div className="max-w-xl border-b-2 pt-16 opacity-20" />
          <div className="pb-8 pt-16">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
        </div>

        <div className="grid-text bg-primary pl-4">
          <div className="relative h-96">
            {projects.map((project, index) => (
              <SlideText
                key={project.sys.id}
                index={index}
                project={project}
                labelServices={labelServices}
                labelTechnologies={labelTechnologies}
                active={slideIndex === index}
              />
            ))}
          </div>
        </div>

        <div className="grid-ctrl bg-primary pl-4 pt-8 pb-16 flex gap-8 justify-center lg:justify-start">
          <ButtonSlider direction="prev" onClick={prevSlide} />
          <SliderIndicators
            total={projects.length}
            activeIndicator={slideIndex}
            onClick={moveIndicator}
          />
          <ButtonSlider direction="next" onClick={nextSlide} />
        </div>

        <div className="grid-image justify-self-stretch">
          <div className="relative w-full aspect-video">
            {projects.map((project, index) => (
              <SlideImage
                key={index}
                project={project}
                active={slideIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
