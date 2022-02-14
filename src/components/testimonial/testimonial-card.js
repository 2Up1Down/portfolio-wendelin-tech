import React from "react";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return <></>;

  const { author, position, citation, image } = testimonial;
  return (
    <figure className="snap-center bg-gray-light drop-shadow-md py-8 px-6 shrink-0 flex flex-col justify-between w-full sm:w-[32rem]">
      <div className="mb-8 leading-8">
        <span className="text-gray-dark">
          <MdFormatQuote />
        </span>
        <blockquote className="">{citation}</blockquote>
      </div>
      <figcaption className="flex">
        <div className="w-10 h-10 relative rounded-full overflow-hidden mr-3 shrink-0">
          <Image
            src={image.url}
            height={image.height}
            width={image.width}
            // layout="fill"
            alt={image.title}
            // objectFit="cover"
            objectPosition="center"
            className="max-w-full max-h-full"
          />
        </div>
        <div>
          <cite className="not-italic font-bold">{author}</cite>
          <p className="text-sm text-gray-dark">{position}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
