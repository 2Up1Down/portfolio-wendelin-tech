import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, excerpt, image }) => {
  return (
    <article className="group relative mb-4 aspect-4/5 w-full overflow-hidden duration-500 ease-in-out">
      <Image
        src={image.url}
        alt={image.title}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="grayscale transition duration-500 ease-in-out group-hover:grayscale md:grayscale-0"
      />

      <div className="gradient-background absolute bottom-0 p-6 text-white duration-500 ease-in-out group-hover:translate-y-0 md:translate-y-[calc(100%-5.5rem)]">
        <h3 className="mb-4 mt-4 text-2xl">{title}</h3>
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

export default ServiceCard;
