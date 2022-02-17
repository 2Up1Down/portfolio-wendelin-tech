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
    <section className="text-white" id="portfolio">
      <div className="area-portfolio grid lg:grid-cols-full-width">
        <div className="grid-lside hidden bg-primary lg:block" />

        <div className="grid-title bg-primary px-4">
          <div className="max-w-xl border-b-2 pt-16 opacity-20" />
          <div className="pb-8 pt-16">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
        </div>

        <div className="grid-text bg-primary px-4">
          {/*Height media query is a terrible work around, as absolute images don't occupy any space, but absolute images are needed for the slider*/}
          {/*TODO come up with a cleaner implementation*/}
          <div className="relative h-[28rem] sm:h-[24rem] lg:h-[28rem]">
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

        <div className="grid-ctrl flex justify-start gap-8 bg-primary pl-4 pt-12 pb-4 sm:pb-8 md:pb-32">
          <ButtonSlider direction="prev" onClick={prevSlide} />
          <SliderIndicators
            total={projects.length}
            activeIndicator={slideIndex}
            onClick={moveIndicator}
          />
          <ButtonSlider direction="next" onClick={nextSlide} />
        </div>

        <div className="grid-image justify-self-stretch">
          <div className="relative aspect-video w-full">
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
