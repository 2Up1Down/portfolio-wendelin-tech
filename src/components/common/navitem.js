import React from "react";
import Link from "next/link";

const NavItem = ({ item }) => {
  return (
    <li key={item.id} className="">
      <Link href={item.url}>
        <a className="hover:text-gray-500">{item.text}</a>
      </Link>
    </li>
  );
};

export default NavItem;
