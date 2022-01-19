import React, { useState } from "react";
import Navbar from "./navbar";
import Brand from "./brand";
import MobileNavButton from "./mobile-nav-button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-xl">
      <nav className="container flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center justify-between">
          <Brand />
          <MobileNavButton isOpen={isOpen} onClick={clickHandler} />
        </div>

        <Navbar isOpen={isOpen} />
      </nav>
    </header>
  );
};

export default Header;
