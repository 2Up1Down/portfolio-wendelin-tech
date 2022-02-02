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
    <section className="bg-gray-50">
      <div className="container h-screen grid place-items-center background-image-wrapper ">
        <div className="flex flex-col items-center text-center content-section">
          <div className="max-w-lg mb-4 ">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>

          <h2 className="max-w-sm text-text-light mb-10 leading-6">
            {subtitle}
          </h2>
          <div className="flex gap-8">
            <ArrowLink url={primaryButtonUrl} size="large">
              {primaryButtonText}
            </ArrowLink>
            <ArrowLink
              url={secondaryButtonUrl}
              variant="primary-light"
              size="large"
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
          background-size: contain;
        }

        .content-section {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
