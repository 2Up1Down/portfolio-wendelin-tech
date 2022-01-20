import React from "react";
import Image from "next/image";
import Link from "next/link";

const ApartmentCard = ({
  id,
  slug = "#",
  title = "",
  description = "",
  image,
}) => {
  return (
    <Link href={`/apartments/${slug}`}>
      <a>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={image.url || "/placeholder.png"}
            alt={image.fileName}
            width={640}
            height={360}
          />
          <div className="mx-4 mb-4">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p className=" font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ApartmentCard;
