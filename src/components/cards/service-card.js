import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, excerpt, image }) => {
  return (
    <article className="group mb-4 w-full overflow-hidden bg-primary font-light drop-shadow-2xl duration-500 ease-in-out hover:scale-105 lg:relative lg:aspect-10/11">
      <div className="relative mt-8 h-32 w-full flex-1 duration-500 ease-in-out group-hover:translate-y-0 lg:translate-y-1/3">
        <Image
          src={image.url}
          alt={image.title}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          // className="grayscale transition duration-500 ease-in-out group-hover:grayscale md:grayscale-0"
        />
      </div>

      <div className="p-6 text-white duration-500 ease-in-out group-hover:translate-y-0 lg:absolute lg:bottom-0 lg:translate-y-[calc(100%-5.5rem)]">
        <h3 className="mb-4 mt-4 text-2xl duration-500 ease-in-out  group-hover:translate-y-0 lg:-translate-y-5">
          {title}
        </h3>
        <p className="">{excerpt}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
