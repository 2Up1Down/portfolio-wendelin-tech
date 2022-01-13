import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="bg-gray-200">
      <div className="container flex justify-between">
        <div>Bergblick</div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
