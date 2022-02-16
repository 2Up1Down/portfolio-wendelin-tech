import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, footer }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer footer={footer} />
    </>
  );
};

export default Layout;
