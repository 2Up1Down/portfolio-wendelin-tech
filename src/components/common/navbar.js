import React from "react";
import LocaleSwitcher from "./locale-switcher";
import NavItem from "./navitem";

const menu = [
  {
    id: "1",
    label: "Home",
    slug: "/",
  },
  {
    id: "2",
    label: "Expertise",
    slug: "/expertise",
  },
  {
    id: "5",
    label: "Portfolio",
    slug: "/portfolio",
  },
  {
    id: "6",
    label: "Blog",
    slug: "/blog",
  },
  {
    id: "3",
    label: "Contact",
    slug: "/contact",
  },
];

const Navbar = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} items-center md:flex`}>
      <ul className="flex flex-col gap-2 items-center md:flex-row md:gap-8">
        {menu.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}

        <LocaleSwitcher />
      </ul>
    </div>
  );
};

export default Navbar;
