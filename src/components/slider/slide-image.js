import React from "react";
import Image from "next/image";

const SlideImage = ({
  project,

  active,
}) => {
  const { image } = project;

  return (
    <div
      className={`absolute transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="md:-translate-y-1/2 lg:translate-y-0 lg:-translate-x-16">
        {image && (
          <Image
            src={image.url}
            alt={image.title}
            height={1080}
            width={1920}
            objectFit="cover"
            className="absolute"
          />
        )}
      </div>
    </div>
  );
};

export default SlideImage;
