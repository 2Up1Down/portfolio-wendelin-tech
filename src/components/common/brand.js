import React from "react";
import Link from "next/link";
import Image from "next/image";

const Brand = ({ logo }) => {
  return (
    <div className="my-2">
      <Link href="/">
        <a className="flex place-items-center gap-2">
          {logo ? (
            <div className="relative h-12 w-40">
              <Image
                src={logo.url}
                alt={logo.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ) : (
            <span className="text-2xl font-bold ">wendelin.tech</span>
          )}
        </a>
      </Link>
    </div>
  );
};

export default Brand;
