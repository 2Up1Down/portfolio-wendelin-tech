import React from "react";
import Image from "next/image";

const ServiceOverview = ({ title, excerpt, image }) => {
  return (
    <article className="group mb-4 aspect-4/5 relative w-full ease-in-out duration-500 overflow-hidden">
      <Image
        src={image.url}
        alt={image.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="grayscale md:grayscale-0 group-hover:grayscale transition ease-in-out duration-500"
      />

      <div className="gradient-background text-white p-6 absolute bottom-0 md:translate-y-[calc(100%-5.5rem)] group-hover:translate-y-0 ease-in-out duration-500">
        <h3 className="text-2xl mb-4 mt-4">{title}</h3>
        <p className="">{excerpt}</p>
      </div>

      <style jsx>{`
        .gradient-background {
          background: rgb(39, 39, 39);
          background: linear-gradient(
            180deg,
            rgba(39, 39, 39, 0) 0%,
            rgba(39, 39, 39, 0.6615021008403361) 20%,
            rgba(39, 39, 39, 1) 100%
          );
        }
      `}</style>
    </article>
  );
};

export default ServiceOverview;
