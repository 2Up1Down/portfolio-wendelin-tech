import React from "react";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="text-2xl font-bold my-4">
      <Link href="/">
        <a className="flex place-items-center gap-2">
          <span>wendelin.tech</span>
        </a>
      </Link>
    </div>
  );
};

export default Brand;
