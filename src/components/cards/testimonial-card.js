import React from "react";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return <></>;

  const { author, position, citation, image } = testimonial;
  return (
    <figure className="flex w-10/12 shrink-0 snap-start flex-col justify-between bg-gray-light py-8 px-6 drop-shadow-md first:ml-4 sm:w-[32rem]">
      <div className="mb-8 leading-8">
        <span className="text-gray-dark">
          <MdFormatQuote />
        </span>
        <blockquote className="">{citation}</blockquote>
      </div>
      <figcaption className="flex">
        <div className="relative mr-3 h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={image.url}
            height={image.height}
            width={image.width}
            // layout="fill"
            alt={image.title}
            // objectFit="cover"
            objectPosition="center"
            className="max-h-full max-w-full"
          />
        </div>
        <div>
          <cite className="font-bold not-italic">{author}</cite>
          <p className="text-sm text-gray-dark">{position}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
