import React from "react";
import Image from "next/image";

const SlideProject = ({
  project,
  labelTechnologies,
  labelServices,
  active,
}) => {
  const { title, excerpt, technologies, image, customer } = project;

  return (
    <article
      className={`absolute transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        <div>
          <h3 className="mb-6 text-xl font-bold">
            {title} | {customer.customer}
          </h3>
          <p className="mb-8">{excerpt}</p>
          <h4 className="mb-6 font-bold">{labelTechnologies}</h4>
          <p className="mb-8">{technologies.toString()}</p>
          <h4 className="mb-6 font-bold">{labelServices}</h4>
        </div>
        <div className="w-120 h-80 absolute">
          {image && (
            <Image
              src={image.url}
              alt={image.title}
              height={1080}
              width={1920}
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default SlideProject;
