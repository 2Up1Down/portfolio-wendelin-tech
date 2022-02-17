import React from "react";
import LocaleSwitcher from "./locale-switcher";
import NavItem from "./navitem";

const Navbar = ({ isOpen, links, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } absolute left-0 w-screen items-center bg-white shadow-md transition-all duration-1000 ease-in-out md:static md:flex md:translate-x-0 md:justify-end md:shadow-none`}
    >
      <ul className="mb-4 flex flex-col items-center gap-2 md:mb-0 md:flex-row md:gap-8">
        {links.map((link) => (
          <NavItem
            key={link.sys.id}
            onClick={onClick}
            item={{ id: link.sys.id, ...link }}
          />
        ))}

        <LocaleSwitcher />
      </ul>
    </div>
  );
};

export default Navbar;
