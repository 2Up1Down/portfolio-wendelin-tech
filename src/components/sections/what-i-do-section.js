import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import Image from "next/image";

const WhatIDoSection = ({ title, description }) => {
  return (
    <section className="bg-primary">
      <div className="container relative grid h-screen place-items-center">
        <div className=" max-w-xl text-center text-gray-light">
          <div className="text-text-light mb-6">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div>
            {description &&
              documentToReactComponents(description.json, renderTitleOptions())}
          </div>
        </div>

        <div className="absolute translate-x-[35rem] translate-y-[10rem]">
          <Image
            src="/dart.svg"
            alt="Illustration from dart board"
            width={154}
            height={228}
          />
        </div>

        <div className="absolute -translate-x-[30rem] translate-y-[18rem]">
          <Image
            src="/graph.svg"
            alt="Illustration from dart board"
            width={104}
            height={103}
          />
        </div>

        <div className="absolute -translate-x-[40rem] -translate-y-[10rem]">
          <Image
            src="/idea.svg"
            alt="Illustration from dart board"
            width={150}
            height={153}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
