import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import SliderProjects from "../slider/slider-projects";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const PortfolioSection = ({
  title,
  projectsCollection,
  labelTechnologies,
  labelServices,
}) => {
  const projects = projectsCollection.items;

  return (
    <section className="bg-primary text-white">
      <div className="grid grid-cols-full-width grid-area">
        <div className="grid-text px-4 pb-8 self-center md:pb-0">
          <div className="max-w-xl border-b-2 pt-16 opacity-20" />
          <div className="mb-8 pt-16">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <SliderProjects
            projects={projects}
            labelServices={labelServices}
            labelTechnologies={labelTechnologies}
          />
        </div>
        <div className="grid-media bg-white" />
      </div>
    </section>
  );
};

export default PortfolioSection;
