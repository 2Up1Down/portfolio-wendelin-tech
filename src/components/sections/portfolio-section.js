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
      <div className="area-portfolio grid-cols-full-width bg-primary md:grid">
        <div className="grid-text bg-primary px-4 md:pr-16 lg:pr-4">
          <div className="pb-8 pt-16">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>

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

          <div className="flex justify-start gap-8 bg-primary pt-12 pb-4 sm:pb-8 md:pb-32">
            <ButtonSlider direction="prev" onClick={prevSlide} />
            <SliderIndicators
              total={projects.length}
              activeIndicator={slideIndex}
              onClick={moveIndicator}
            />
            <ButtonSlider direction="next" onClick={nextSlide} />
          </div>
        </div>

        <div className="grid-image flex flex-col justify-center justify-self-stretch bg-white">
          <div className="relative aspect-video w-full ">
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
