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
    label: "Apartments",
    slug: "/apartments",
  },
  {
    id: "3",
    label: "Contact",
    slug: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="container flex items-center py-4 text-slate-100">
      <ul className="hidden sm:flex flex-1 flex-row justify-end">
        {menu.map((item) => (
          <li key={item.id} className="px-2">
            <Link href={item.slug}>
              <a className="px-1 py-1">{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
