import React from "react";
import Link from "next/link";
import { MdNorthEast } from "react-icons/md";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const HeroSection = ({
  title = {},
  subtitle = "",
  buttonText = "",
  backgroundImage = {},
}) => {
  return (
    <div className="bg-gray-50">
      <div className="container h-screen grid place-items-center background-image-wrapper">
        <div className="flex flex-col items-center text-center content-section">
          <h1 className="max-w-lg mb-4 ">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </h1>

          <h2 className="max-w-sm text-text-light mb-10 leading-6">
            {subtitle}
          </h2>
          <Link href={"/"}>
            <a className="text-primary-light text-lg flex border-b-primary-light border-b-2 place-items-center">
              <span className="pr-1">{buttonText}</span>
              <MdNorthEast size={16} />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .background-image-wrapper {
          position: relative;
        }

        .background-image-wrapper:before {
          content: " ";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0.2;
          background-image: url(${backgroundImage.url});
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }

        .content-section {
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
