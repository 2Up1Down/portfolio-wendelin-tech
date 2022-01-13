import React from "react";
import Link from "next/link";

const menu = [
  {
    id: "1",
    label: "Home",
    slug: "/",
  },
  {
    id: "2",
    label: "Apartment",
    slug: "/apartment",
  },
  {
    id: "3",
    label: "Contact",
    slug: "/contact",
  },
];

const Navbar = () => {
  return (
    <ul className="flex gap-2">
      {menu.map((item) => (
        <li key={item.id}>
          <Link href={item.slug}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
