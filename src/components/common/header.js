import React from "react";
import Navbar from "./navbar";
import NavLogo from "./nav-logo";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="container flex justify-between items-center">
        <NavLogo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
