import React from "react";
import Image from "next/image";
import Link from "next/link";

const PartnerCard = ({ company, description, logo, url, id }) => {
  return (
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer" className="group">
        <div className="aspect-video max-w-[22rem] overflow-hidden transition-all duration-500 ease-in-out group-hover:shadow-[0_4px_54px_0px_rgba(0,0,0,0.1)]">
          <div className="relative m-auto aspect-video w-[22rem] text-center  transition-all duration-500 ease-in-out group-hover:w-[11rem]">
            <Image
              src={logo.url}
              layout="fill"
              objectFit="contain"
              alt={logo.title}
            />
          </div>
          <div className="px-6 pb-6 transition-all duration-500 ease-in-out">
            <h4 className="mb-3 text-lg">{company}</h4>
            <p className="text-sm leading-[1.4rem] text-gray-dark">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PartnerCard;

// translate-y-full

// group-hover:block group-hover:translate-y-0
