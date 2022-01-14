import React from "react";
import Link from "next/link";

const NavLogo = () => {
  return (
    <div className="text-2xl font-bold text-white">
      <Link href="/">
        <a className="">Bergblick</a>
      </Link>
    </div>
  );
};

export default NavLogo;
