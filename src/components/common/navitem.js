import React from "react";
import Link from "next/link";

const NavItem = ({ item }) => {
  return (
    <li key={item.id} className="py-2 text-lg md:py-0 md:text-base">
      <Link href={item.url}>
        <a className="">
          <span className="hover:text-primary-light">{item.text}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
