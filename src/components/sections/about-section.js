import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import SocialMedia from "../common/social-media";

const AboutMeSection = ({ title, description, image }) => {
  return (
    <section className="bg-gray-light">
      <div className="pt-12 md:py-0 md:grid grid-cols-full-width area-about">
        <div className="grid-about px-4 pb-8 self-center md:pb-0">
          <div className="mb-8">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="mb-8">
            {description &&
              documentToReactComponents(description.json, renderTitleOptions())}
          </div>
          <SocialMedia />
        </div>
        {/* inspired by https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js */}
        <div
          className="grid-media bg-primary-light bg-no-repeat bg-cover bg-center h-80 md:min-h-[700px]"
          style={{ backgroundImage: `url(${image.url})` }}
        />
      </div>
    </section>
  );
};

export default AboutMeSection;
