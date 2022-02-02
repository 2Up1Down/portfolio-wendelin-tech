import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const WhatIDoSection = ({ title, description }) => {
  return (
    <section className="bg-primary">
      <div className="container h-screen grid place-items-center">
        <div className="max-w-lg text-gray-light text-left">
          <div className="text-text-light mb-6">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div>
            {description &&
              documentToReactComponents(description.json, renderTitleOptions())}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
