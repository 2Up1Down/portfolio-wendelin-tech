import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import Image from "next/image";
import SocialMedia from "../common/social-media";

const AboutMeSection = ({ title, description, image }) => {
  return (
    <section className="bg-gray-light">
      <div className="pt-12 md:py-0 md:grid grid-cols-full-width grid-area">
        <div className="grid-text px-4 pb-8 self-center md:pb-0">
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
        <div className="grid-media">
          <div className="relative w-full h-80 md:min-h-[700px]">
            <Image
              src={image.url}
              alt={image.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
