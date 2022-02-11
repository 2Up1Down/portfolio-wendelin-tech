import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import ButtonLink from "../common/button-link";

const CtaSection = ({ title, description, buttonText, buttonUrl, image }) => {
  return (
    <section className="min-h-screen grid place-items-center background-image-wrapper bg-gray-light">
      <div className="content-section container max-w-md">
        <div className="pb-8 pt-16">
          {title && documentToReactComponents(title.json, renderTitleOptions())}
        </div>
        <div className="pb-8">{description}</div>
        <ButtonLink url={buttonUrl} variant="accent">
          {buttonText}
        </ButtonLink>
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
