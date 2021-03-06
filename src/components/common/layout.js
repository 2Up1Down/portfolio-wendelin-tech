import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, header, footer }) => {
  return (
    <>
      <Header header={header} />
      <main className="">{children}</main>
      <Footer footer={footer} />
    </>
  );
};

export default Layout;
