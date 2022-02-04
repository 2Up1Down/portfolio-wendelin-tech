import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import Image from "next/image";
import SocialMedia from "../common/social-media";

const AboutMeSection = ({ title, description, image }) => {
  return (
    <section className="bg-gray-light">
      <div className="grid grid-cols-full-width grid-area">
        <div className="grid-text pl-4 self-center py-32">
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
          <div className="relative w-full min-h-full">
            <Image
              src={image.url}
              alt={image.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .grid-area {
          grid-template-areas: ". text text text text text . . . media media media media media";
        }

        .grid-text {
          grid-area: text;
        }

        .grid-media {
          grid-area: media;
        }
      `}</style>
    </section>
  );
};

export default AboutMeSection;
