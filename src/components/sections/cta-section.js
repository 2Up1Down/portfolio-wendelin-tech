import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import Button from "../common/button";

const CtaSection = ({ title, description, buttonText, buttonUrl, image }) => {
  return (
    <section className="background-image-wrapper grid min-h-screen place-items-center bg-gray-light">
      <div className="content-section container max-w-md">
        <div className="pb-8 pt-16">
          {title && documentToReactComponents(title.json, renderTitleOptions())}
        </div>
        <div className="pb-8">{description}</div>
        <Button url={buttonUrl} variant="accent">
          {buttonText}
        </Button>
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
          opacity: 4%;
          background-image: url(${image.url});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          filter: blur();
        }

        .content-section {
          position: relative;
        }
      `}</style>
    </section>
  );
};

export default CtaSection;
