import React from "react";
import LocaleSwitcher from "./locale-switcher";
import NavItem from "./navitem";

const Navbar = ({ isOpen, links }) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} items-center md:flex`}>
      <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-8">
        {links.map((link) => (
          <NavItem key={link.sys.id} item={{ id: link.sys.id, ...link }} />
        ))}

        <LocaleSwitcher />
      </ul>
    </div>
  );
};

export default Navbar;
