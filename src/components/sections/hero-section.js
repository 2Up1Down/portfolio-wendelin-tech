import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import ArrowLink from "../common/arrow-link";

const HeroSection = ({
  title = {},
  subtitle = "",
  backgroundImage = {},
  primaryButtonText = "",
  primaryButtonUrl = "",
  secondaryButtonText = "",
  secondaryButtonUrl = "",
}) => {
  return (
    <section className="bg-gray-50 ">
      <div className="background-image-wrapper container grid h-screen place-items-center ">
        <div className="content-section flex flex-col items-center text-center">
          <div className="mb-4 max-w-lg font-normal">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>

          <h2 className="text-text-light mb-10 max-w-sm leading-6">
            {subtitle}
          </h2>
          <div className="flex gap-8 font-normal">
            <ArrowLink url={primaryButtonUrl} size="large" direction="none">
              {primaryButtonText}
            </ArrowLink>
            <ArrowLink
              url={secondaryButtonUrl}
              variant="primary-light"
              size="large"
              direction="north-east"
            >
              {secondaryButtonText}
            </ArrowLink>
          </div>
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
          -moz-background-size: auto 70%;
          -webkit-background-size: auto 70%;
          -o-background-size: auto 70%;
          background-size: auto 70%;
          background-attachment: fixed;
        }

        .content-section {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
