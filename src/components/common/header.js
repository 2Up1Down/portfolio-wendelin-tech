import React, { useState } from "react";
import Navbar from "./navbar";
import Brand from "./brand";
import MobileNavButton from "./mobile-nav-button";

const Header = ({ header }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, linksCollection } = header;

  if (!logo || !linksCollection) return <p>loading...</p>;

  const links = linksCollection.items;

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-[100] w-full bg-white shadow-md">
      <div className="relative">
        <nav className="container  md:flex md:flex-row md:justify-between">
          <div className="flex items-center justify-between">
            <Brand logo={logo} />
            <MobileNavButton isOpen={isOpen} onClick={clickHandler} />
          </div>

          <Navbar
            isOpen={isOpen}
            onClick={() => setIsOpen(false)}
            links={links}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
