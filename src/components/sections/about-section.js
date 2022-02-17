import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import SocialMedia from "../common/social-media";

const AboutMeSection = ({ title, description, image, socialMedia }) => {
  return (
    <section className="bg-gray-light" id="about">
      <div className="area-about grid-cols-full-width pt-12 md:grid md:py-0">
        <div className="grid-about self-center px-4 pb-12 md:pb-0">
          <div className="mb-8">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="mb-8 max-w-lg">
            {description &&
              documentToReactComponents(description.json, renderTitleOptions())}
          </div>
          <SocialMedia accounts={socialMedia} />
        </div>
        {/* inspired by https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js */}
        <div
          className="grid-media h-80 bg-primary-light bg-cover bg-center bg-no-repeat md:min-h-[700px]"
          style={{ backgroundImage: `url(${image.url})` }}
        />
      </div>
    </section>
  );
};

export default AboutMeSection;
