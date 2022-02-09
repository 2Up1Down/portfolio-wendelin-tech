import React from "react";
import Image from "next/image";

const SlideImage = ({
  project,

  active,
}) => {
  const { image } = project;

  return (
    <div
      className={`absolute transition-opacity -translate-x-16 duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
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
  );
};

export default SlideImage;
